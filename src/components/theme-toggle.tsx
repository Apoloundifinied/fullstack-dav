"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const saved = localStorage.getItem("theme");
    const apply = () => {
      const useDark = saved ? saved === "dark" : media.matches;
      document.documentElement.dataset.theme = saved ? useDark ? "dark" : "light" : "system";
      setDark(useDark);
    };
    apply();
    const change = () => { if (!localStorage.getItem("theme")) apply(); };
    media.addEventListener("change", change);
    return () => media.removeEventListener("change", change);
  }, []);
  return <button className="theme-toggle" onClick={() => { const next = !dark; localStorage.setItem("theme", next ? "dark" : "light"); document.documentElement.dataset.theme = next ? "dark" : "light"; setDark(next); }} aria-label={`Alternar para tema ${dark ? "claro" : "escuro"}`}><span aria-hidden="true">{dark ? "◐" : "◑"}</span> {dark ? "LIGHT" : "DARK"}</button>;
}
