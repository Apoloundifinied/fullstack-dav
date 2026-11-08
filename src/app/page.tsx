import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
import { Stack } from "@/components/sections/stack";
import { About } from "@/components/sections/about";
import { Work } from "@/components/experience/work";
import { Marquee } from "@/components/sections/marquee";
import { Footer } from "@/components/experience/footer";
import { profile } from "@/data/portfolio";
import { siteUrl } from "@/lib/seo";
export default function Home() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "ProfilePage", url: siteUrl, mainEntity: { "@type": "Person", "@id": `${siteUrl}#robson`, name: profile.name, url: siteUrl, description: profile.description, sameAs: [profile.github] } }).replace(/</g, "\\u003c") }} /><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Header /><main id="conteudo"><Hero /><Marquee /><Work /><About /><Stack /><Footer /></main></>;
}
