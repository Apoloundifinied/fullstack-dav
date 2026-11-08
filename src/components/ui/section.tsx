import type { ReactNode } from "react";
export function Section({ id, label, title, children }: { id: string; label: string; title: string; children: ReactNode }) {
  return <section id={id} aria-labelledby={`${id}-title`} className="section"><p className="eyebrow">{label}</p><h2 id={`${id}-title`}>{title}</h2>{children}</section>;
}
