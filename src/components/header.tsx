import { profile } from "@/data/portfolio";
export function Header() {
  return <header className="header"><a className="wordmark" href="#inicio">FULLSTACK<span>· {profile.location}</span></a><nav className="header-right" aria-label="Navegação principal"><a href="#projetos">Projetos</a><a href="#stack">Stack</a><a href="#motion">Motion</a><a href="#contato">Contato</a></nav></header>;
}
