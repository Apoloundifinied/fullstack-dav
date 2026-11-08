"use client";
import { useEffect } from "react";

export function Reveal() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(".section");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06 });
    targets.forEach(target => { target.classList.add("reveal-ready"); observer.observe(target); });
    return () => { observer.disconnect(); targets.forEach(target => target.classList.remove("reveal-ready")); };
  }, []);
  return null;
}
