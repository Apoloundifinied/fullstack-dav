import { profile } from "@/data/portfolio";
import { ThemeToggle } from "@/components/theme-toggle";
export function Header() {
  return <header className="header"><a className="wordmark" href="#inicio">{profile.name}<span>· {profile.location}</span></a><nav className="header-right" aria-label="Navegação principal"><a href="#sobre">Sobre</a><a href="#projetos">Projetos</a><a href="#stack">Mais</a><ThemeToggle /></nav></header>;
}
