import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
import { Stack } from "@/components/sections/stack";
import { Work } from "@/components/experience/work";
import { Creative } from "@/components/experience/creative";
import { Story } from "@/components/experience/story";
import { Trajectory } from "@/components/experience/trajectory";
import { Footer } from "@/components/experience/footer";
export default function Home() {
  return <><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Header /><main id="conteudo"><Hero /><Stack /><Work /><Creative /><Footer /></main></>;
}
