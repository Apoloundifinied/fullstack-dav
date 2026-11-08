import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
import { Stack } from "@/components/sections/stack";
import { About } from "@/components/sections/about";
import { Work } from "@/components/experience/work";
import { Marquee } from "@/components/sections/marquee";
import { Footer } from "@/components/experience/footer";
export default function Home() {
  return <><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Header /><main id="conteudo"><Hero /><Marquee /><Work /><About /><Stack /><Footer /></main></>;
}
