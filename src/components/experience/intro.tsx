"use client";
import Image from "next/image";
import { publicAsset } from "@/lib/public-asset";
import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { clamp, useProgress } from "./use-progress";

import { technologies } from "@/data/technologies";

const visibleRadius = 2;
const halfTrack = Math.floor(technologies.length / 2);

function wrap(index: number) {
  return (index + technologies.length) % technologies.length;
}

export function Intro() {
  const root = useRef<HTMLElement>(null);
  const { progress, reduced } = useProgress(root);
  const [selected, setSelected] = useState(2);
  const orbit = useRef<HTMLDivElement>(null);
  const [dragShift, setDragShift] = useState(0);
  const start = useRef<{ id: number; x: number; cardWidth: number } | null>(null);
  const swiped = useRef(false);
  const gather = clamp(progress / .44);
  const spread = clamp((progress - .58) / .42);
  const about = clamp((progress - .22) / .2);
  const heroOpacity = 1 - clamp(progress / .25);
  const move = (direction: number) => {
    setSelected(index => wrap(index + direction));
  };
  useEffect(() => {
    const element = orbit.current;
    let lastStep = -Infinity;

    function onWheel(event: WheelEvent) {
      const delta = event.shiftKey && !event.deltaX ? event.deltaY : event.deltaX;
      if (!delta || (!event.shiftKey && Math.abs(delta) < Math.abs(event.deltaY))) return;
      event.preventDefault();
      if (event.timeStamp - lastStep < 300) return;
      lastStep = event.timeStamp;
      setSelected(index => wrap(index + Math.sign(delta)));
    }

    element?.addEventListener("wheel", onWheel, { passive: false });
    return () => element?.removeEventListener("wheel", onWheel);
  }, []);

  function startDrag(event: PointerEvent<HTMLDivElement>) {
    if (!event.isPrimary || event.button !== 0) return;
    const card = (event.target as HTMLElement).closest<HTMLButtonElement>(".orbit-card");
    if (!card) return;
    swiped.current = false;
    start.current = { id: event.pointerId, x: event.clientX, cardWidth: card.offsetWidth };
  }

  function drag(event: PointerEvent<HTMLDivElement>) {
    const pointer = start.current;
    if (!pointer || pointer.id !== event.pointerId) return;
    const delta = event.clientX - pointer.x;
    if (!swiped.current && Math.abs(delta) < 8) return;
    swiped.current = true;
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    if (!reduced) setDragShift(clamp(delta / pointer.cardWidth, -1, 1));
  }

  function endDrag(event: PointerEvent<HTMLDivElement>) {
    const pointer = start.current;
    if (!pointer || pointer.id !== event.pointerId) return;
    const delta = event.clientX - pointer.x;
    if (event.type === "pointerup" && Math.abs(delta) > 35) {
      swiped.current = true;
      move(delta < 0 ? 1 : -1);
    }
    start.current = null;
    setDragShift(0);
  }

  return <section ref={root} id="inicio" className="intro-journey" aria-label="Apresentação e especialidades">
    <div id="sobre" className="about-anchor" />
    <div className="intro-stage" style={{ "--gather": gather, "--spread": spread, "--about": about } as CSSProperties}>
      <div className="intro-heading" style={reduced ? undefined : { opacity: heroOpacity, transform: `translateY(${-progress * 250}px)`, visibility: heroOpacity === 0 ? "hidden" : "visible" }}>
        <h1>FULLSTACK</h1>
        <figure className="intro-quote"><blockquote>“O próprio conhecimento é poder.”</blockquote><figcaption>Francis Bacon · <a href="https://en.wikisource.org/wiki/Meditationes_sacrae" target="_blank" rel="noreferrer">Meditationes Sacrae, 1597</a><small>Tradução livre</small></figcaption></figure>
      </div>
      <div className="about-copy" style={reduced ? undefined : { opacity: about, transform: `translateY(${(1 - about) * 60}px)`, visibility: about === 0 ? "hidden" : "visible" }}>
        <p className="eyebrow">Sobre / Fullstack</p>
        <h2>Ideias que viram <em>software, automação</em> e <em>movimento.</em></h2>
        <div className="about-body"><p>Sou desenvolvedor do Rio Grande do Sul. Estudo programação há mais de quatro anos e já realizei trabalhos freelance.</p><p>Construo aplicações, APIs e ferramentas para conectar sistemas e reduzir trabalho manual. Meu foco passa por Full Stack, Rust, automação e integrações com IA. MCP e agentes fazem parte do que estou explorando.</p><p>Também crio com Photoshop, CapCut e After Effects: edição de foto e vídeo, edição dinâmica e motion design.</p></div>
      </div>
      <div ref={orbit} className="tech-orbit" data-dragging={dragShift !== 0} role="region" aria-roledescription="carrossel" aria-label="Tecnologias e habilidades" tabIndex={0}
        onKeyDown={event => {
          if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
          event.preventDefault();
          event.currentTarget.focus({ preventScroll: true });
          move(event.key === "ArrowRight" ? 1 : -1);
        }}
        onPointerDown={startDrag} onPointerMove={drag} onPointerUp={endDrag} onPointerCancel={endDrag} onLostPointerCapture={endDrag}>
        {technologies.map((tech, index) => {
          const distance = wrap(index - selected + halfTrack) - halfTrack;
          // Keep an extra card on each side ready to slide in.
          if (Math.abs(distance) > visibleRadius + 1) return null;
          const slot = distance + dragShift;
          const visible = Math.abs(distance) <= visibleRadius;
          const x = slot * (1 - gather + spread * .43);
          const y = Math.abs(slot) * 30 * (1 - gather) + (slot + 2) * spread * 26;
          const angle = slot * 9 * (1 - gather);
          return (
            <button
              type="button"
              key={tech.id}
              aria-pressed={selected === index}
              aria-label={tech.name}
              aria-hidden={!visible}
              tabIndex={visible ? 0 : -1}
              className={`orbit-card orbit-${tech.id}`}
              onClick={event => { if (event.detail === 0 || !swiped.current) setSelected(index); }}
              style={{
                "--slot-x": x,
                "--card-y": `${y}px`,
                "--card-angle": `${angle}deg`,
                "--card-color": tech.color,
                "--card-scale": 1 - Math.min(Math.abs(slot), 3) * .035,
                opacity: clamp(3 - Math.abs(distance + dragShift)),
                pointerEvents: visible ? "auto" : "none",
                zIndex: distance === 0 ? 8 : 5 - Math.abs(distance),
              } as CSSProperties}
            >
              {tech.badge ? (
                <span className="orbit-badge" aria-hidden="true">{tech.badge}</span>
              ) : (
                <Image src={publicAsset(`/images/tech/${tech.id}.svg`)} alt="" width={100} height={100} draggable={false} loading={visible ? "eager" : "lazy"} />
              )}
              <span>{tech.name}</span>
            </button>
          );
        })}
      </div>
      <div className="tech-controls" style={reduced ? undefined : { opacity: 1 - clamp((progress - .1) / .15), visibility: progress > .25 ? "hidden" : "visible" }}>
        <button onClick={() => move(-1)} aria-label="Cartão anterior">Anterior</button>
        <span aria-live="polite" className="tech-count">
          {technologies[selected].name} · {selected + 1} de {technologies.length}
        </span>
        <button onClick={() => move(1)} aria-label="Próximo cartão">Próxima</button>
      </div>
      <a className="intro-scroll" href="#projetos" style={reduced ? undefined : { opacity: heroOpacity, visibility: heroOpacity === 0 ? "hidden" : "visible" }}>Role para explorar</a>
    </div>
  </section>;
}
