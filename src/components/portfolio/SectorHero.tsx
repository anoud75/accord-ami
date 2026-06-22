import { ReactNode } from "react";
import { Eyebrow, Reveal } from "./atoms";
import LivingPath from "./LivingPath";

interface Props {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  accent?: string;
}

const SectorHero = ({ eyebrow, title, intro, accent = "hsl(var(--teal))" }: Props) => (
  <section className="relative overflow-hidden pt-16 md:pt-24 pb-16">
    <LivingPath variant="hero" className="opacity-70" color={accent} />
    <div className="container-edit relative">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="display-1 mt-4 mb-8 max-w-4xl">{title}</h1>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="lede max-w-3xl">{intro}</div>
      </Reveal>
    </div>
  </section>
);

export default SectorHero;
