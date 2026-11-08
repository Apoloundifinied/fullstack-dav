import { profile } from "@/data/portfolio";
import { Section } from "@/components/ui/section";
export function Contact() {
  const links = [{ label: "E-mail", href: profile.email ? `mailto:${profile.email}` : null }, { label: "GitHub", href: profile.github }, { label: "LinkedIn", href: profile.linkedin }].filter(link => link.href);
  return <Section id="contato" label="05 / Contato" title="Vamos construir algo útil.">{links.length > 0 ? <div className="contact-links">{links.map(link => <a className="button" key={link.label} href={link.href!}>{link.label} ↗</a>)}</div> : <p className="section-intro">Canais de contato serão adicionados após confirmação.</p>}</Section>;
}
