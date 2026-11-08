"use client";

import Image from "next/image";
import { publicAsset } from "@/lib/public-asset";
import { useRef } from "react";
import type { CSSProperties } from "react";
import { technologies } from "@/data/technologies";

export function Hero() {
  const fan = useRef<HTMLDivElement>(null);
  return <section id="inicio" className="hero" aria-labelledby="hero-title">
    <div className="hero-copy"><p className="hero-kicker">FULL STACK · RUST · IA & MCP · MOTION</p>
    <h1 id="hero-title">FULLSTACK</h1>
    <figure className="hero-quote"><blockquote>“O próprio conhecimento é poder.”</blockquote><figcaption>Francis Bacon · Meditationes Sacrae, 1597</figcaption></figure>
    <p className="hero-description">Construo software, ferramentas e automações que conectam sistemas, reduzem trabalho manual e transformam ideias em produtos funcionais.</p>
    <div className="hero-actions"><a className="button hero-cta" href="#projetos">Ver projetos ↓</a><a className="button hero-secondary" href="https://github.com/Apoloundifinied" target="_blank" rel="noreferrer">Falar no GitHub ↗</a></div></div>
    <div className="tech-fan" ref={fan} aria-label="Tecnologias e ferramentas criativas">
      {([technologies.find(t => t.id === "rust")!, technologies.find(t => t.id === "typescript")!, technologies.find(t => t.id === "fastapi")!, technologies.find(t => t.id === "aftereffects")!]).map((tool, index) => <a href="#stack" className={`tech-card tech-${tool.id}`} key={tool.id} style={{ "--angle": `${[-8, 5, -4, 8][index]}deg`, "--lift": `${[22, -6, 34, 4][index]}px`, "--i": index } as CSSProperties}><Image src={publicAsset(`/images/tech/${tool.id}.svg`)} alt="" width={48} height={48} /><span>{tool.name}</span><small>{["Sistemas", "Core", "Backend · IA", "Motion"][index]}</small></a>)}
    </div>
    <a className="scroll-cue" href="#projetos"><span aria-hidden="true">↓</span> Role para explorar</a>
  </section>;
}
