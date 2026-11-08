import { profile } from "@/data/portfolio";
export function Footer() {
  const contacts = [{ label: "E-mail", href: profile.email ? `mailto:${profile.email}` : null }, { label: "GitHub", href: profile.github }, { label: "LinkedIn", href: profile.linkedin }].filter(item => item.href);
  return <footer id="contato" className="footer"><p className="eyebrow">Tem uma ideia?</p><h2>VAMOS<br />CRIAR.</h2><p>{profile.location}</p>{contacts.length ? <div className="footer-links">{contacts.map(item => <a key={item.label} href={item.href!}>{item.label}</a>)}</div> : <p className="contact-pending">Canais de contato em preparação.</p>}<a className="back-top" href="#inicio">Voltar ao início</a><div className="footer-bottom"><span>FULLSTACK</span><span>Software, automação & criação visual</span></div></footer>;
}
