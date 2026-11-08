"use client";
import { useEffect, useState, type RefObject } from "react";
export const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

export function useProgress(ref: RefObject<HTMLElement | null>, enterViewport = false) {
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let visible = false;
    let start = 0;
    let travel = 1;
    const update = () => {
      frame = 0;
      if (media.matches) return;
      setProgress(clamp((window.scrollY - start) / travel));
    };
    const queue = () => { if (!frame) frame = requestAnimationFrame(update); };
    const measure = () => {
      const box = section.getBoundingClientRect();
      const viewport = document.documentElement.clientHeight;
      const stageHeight = section.firstElementChild?.clientHeight ?? viewport;
      start = window.scrollY + box.top - (enterViewport ? viewport : 0);
      travel = enterViewport ? box.height + viewport : Math.max(1, box.height - stageHeight);
      queue();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !media.matches) window.addEventListener("scroll", queue, { passive: true });
      else window.removeEventListener("scroll", queue);
      measure();
    });
    const resize = new ResizeObserver(measure);
    resize.observe(section);
    resize.observe(document.body);
    if (!enterViewport && section.firstElementChild) resize.observe(section.firstElementChild);
    const preference = () => { setReduced(media.matches); measure(); };
    observer.observe(section);
    preference();
    window.addEventListener("resize", measure);
    const changePreference = () => {
      preference();
      if (visible && !media.matches) window.addEventListener("scroll", queue, { passive: true });
      else window.removeEventListener("scroll", queue);
    };
    media.addEventListener("change", changePreference);
    return () => {
      observer.disconnect();
      resize.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", queue);
      window.removeEventListener("resize", measure);
      media.removeEventListener("change", changePreference);
    };
  }, [ref, enterViewport]);
  return { progress, reduced };
}
