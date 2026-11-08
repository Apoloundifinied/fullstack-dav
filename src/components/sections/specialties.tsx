import { specialties } from "@/data/portfolio";
import { Section } from "@/components/ui/section";
export function Specialties() {
  return <Section id="especialidades" label="02 / Ferramentas & práticas" title="Como construo"><div className="grid">{specialties.map(item => <article className="panel" key={item.title}><h3>{item.title}</h3><ul className="skill-list">{item.items.map(skill => <li key={skill}>{skill}</li>)}</ul></article>)}</div></Section>;
}
