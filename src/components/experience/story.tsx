"use client";
import Image from "next/image";
import { publicAsset } from "@/lib/public-asset";
import { useEffect, useRef } from "react";
import { clamp, useProgress } from "./use-progress";
import { technologies } from "@/data/technologies";

const text = "Vamos construir algo que conecte ideias, simplifique o trabalho e coloque a criatividade em movimento. De uma ferramenta útil a uma experiência digital: tudo começa com um problema que vale resolver.";
const marqueeTools = technologies.slice(0, 5);
const words = text.split(" ");

export function Story() {
  const ref = useRef<HTMLElement>(null);
  const marquee = useRef<HTMLDivElement>(null);
  const { progress, reduced } = useProgress(ref, true);
  useEffect(() => {
    const element = marquee.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      element.dataset.inView = String(entry.isIntersecting);
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <><section ref={ref} className="story-section" aria-label="Uma ideia para o próximo projeto"><p className="story-text">{words.map((word, index) => <span key={index} style={{ opacity: reduced ? 1 : .13 + clamp((progress * 1.7 - index / words.length) * 5) * .87 }}>{word}{" "}</span>)}</p></section><div ref={marquee} className="tools-marquee" aria-label="Ferramentas: Rust, TypeScript, Python, Photoshop e After Effects"><div className="marquee-track">{[0, 1, 2, 3].map(copy => <div className="marquee-group" key={copy} aria-hidden="true">{marqueeTools.map(tech => <span key={tech.id}><Image src={publicAsset(`/images/tech/${tech.id}.svg`)} alt="" width={36} height={36} />{tech.name}</span>)}</div>)}</div></div></>;
}
