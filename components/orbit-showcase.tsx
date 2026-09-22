"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

type Slide = { src: string; label: string };
type Demo = { name: string; summary: string; href: string; slides: Slide[] };

const demos: Demo[] = [
  { name: "M.I.R.A.", summary: "Sistema web para monitoramento e análise de reservatórios.", href: "/projetos/mira", slides: [
    { src: "/images/demos/mira-entrada.jpeg", label: "Apresentação do M.I.R.A." },
    { src: "/images/demos/mira-reservatorios.jpeg", label: "Monitoramento dos reservatórios" },
  ] },
  { name: "R.E.C.E.B.E.", summary: "Sistema web e mobile para registrar e acompanhar recebimentos em campo.", href: "/projetos/recebe", slides: [
    { src: "/images/demos/recebe-gestao.jpeg", label: "Painel de gestão do R.E.C.E.B.E." },
    { src: "/images/demos/recebe-em-campo.png", label: "Ilustração do uso mobile em campo" },
  ] },
  { name: "P.R.I.S.M.A.", summary: "Automação para conferir e organizar documentos de funcionários.", href: "/projetos/prisma", slides: [
    { src: "/images/demos/prisma-inicio.jpeg", label: "Seleção da rotina" },
    { src: "/images/demos/prisma-recibos.jpeg", label: "Envio e conferência dos documentos" },
  ] },
  { name: "Analisador de Vendas", summary: "Sistema web para transformar relatórios de vendas em análises claras.", href: "/projetos/analise-relatorios", slides: [
    { src: "/images/demos/vendas-visao-geral.jpeg", label: "Visão geral das vendas" },
    { src: "/images/demos/vendas-detalhamento.jpeg", label: "Grupos e produtos mais vendidos" },
  ] },
  { name: "PRUMO", summary: "Sistema web para analisar custos, preços e viabilidade da produção.", href: "/projetos", slides: [
    { src: "/images/demos/prumo-analise.jpeg", label: "Análise da produção" },
    { src: "/images/demos/prumo-detalhe.jpeg", label: "Custos e formatos de venda" },
  ] },
];
const order = [0, 1, 2, -2, -1];

export default function OrbitShowcase() {
  const [active, setActive] = useState(0);
  const [slide, setSlide] = useState(0);
  const [reduced, setReduced] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const onVisibility = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useEffect(() => {
    if (reduced || !visible) return;
    const timer = window.setTimeout(() => {
      if (slide + 1 < demos[active].slides.length) {
        setSlide(slide + 1);
      } else {
        setSlide(0);
        setActive((active + 1) % demos.length);
      }
    }, slide + 1 === demos[active].slides.length ? 3800 : 3300);
    return () => window.clearTimeout(timer);
  }, [active, slide, reduced, visible]);

  const select = (index: number) => { setActive((index + demos.length) % demos.length); setSlide(0); };
  const demo = demos[active];

  return (
    <section className="orbit-showcase" aria-label="Demonstrações dos sistemas">
      <div className="orbit-viewport">
        {demos.map((item, index) => {
          const relative = (index - active + demos.length) % demos.length;
          const position = order[relative];
          const currentSlide = index === active ? slide : 0;
          return <button key={item.name} type="button" className={`orbit-screen orbit-position-${position === -2 ? "back-left" : position === -1 ? "left" : position === 0 ? "front" : position === 1 ? "right" : "back-right"}`} onClick={() => select(index)} aria-label={index === active ? `${item.name}: ${item.slides[currentSlide].label}` : `Mostrar ${item.name}`} aria-current={index === active ? "true" : undefined} tabIndex={0}>
            <span className="orbit-screen-media">
              {item.slides.map((frame, frameIndex) => <span key={frame.src} className={`orbit-frame ${frameIndex === currentSlide ? "is-visible" : ""}`}><Image src={frame.src} alt={frame.label} fill sizes="(max-width: 900px) 100vw, 640px" priority={index === 0 && frameIndex === 0} /></span>)}
            </span>
          </button>;
        })}
      </div>
      <div className="orbit-details" aria-live="polite">
        <div><strong>{demo.name}</strong><p>{demo.summary}</p></div>
        <Link href={demo.href}>Ver projeto <ArrowRight size={16} /></Link>
      </div>
    </section>
  );
}
