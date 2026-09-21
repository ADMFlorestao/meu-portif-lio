import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Braces, Database, FileStack, Smartphone } from "lucide-react";
import { ContactCta, SiteFooter, SiteHeader } from "@/components/site-shell";
import OrbitShowcase from "@/components/orbit-showcase";
import { projects } from "@/lib/projects";

const services = [
  { number: "01", title: "Sistemas web empresariais", description: "Plataformas completas para gestão, controle e análise operacional.", icon: Database, href: "/projetos/mira", image: "/images/services/sistemas-web.png", alt: "Painel demonstrativo do M.I.R.A." },
  { number: "02", title: "Sistemas mobile personalizados", description: "Aplicações mobile sob medida para rotinas específicas da sua empresa.", icon: Smartphone, href: "/projetos/recebe", image: "/images/services/sistemas-mobile.png", alt: "Aplicação mobile demonstrativa do R.E.C.E.B.E." },
  { number: "03", title: "Automação e processamento de documentos", description: "Soluções para leitura, conferência e organização inteligente de documentos.", icon: FileStack, href: "/projetos/prisma", image: "/images/services/processamento-documentos.png", alt: "Interface do P.R.I.S.M.A. para processamento de documentos" },
  { number: "04", title: "Automação de processos (RPA)", description: "Rotinas automatizadas para coleta de dados, integração e geração de relatórios.", icon: Braces, href: "/projetos/isa", image: "/images/services/automacao-rpa.png", alt: "Painel de análise e automação de relatórios" },
];

export default function Home() {
  const featured = projects[0];
  return <><SiteHeader /><main>
    <section className="hero shell" id="inicio"><div className="hero-copy"><p className="eyebrow">Soluções digitais para empresas reais</p><h1>Processos mais inteligentes.<br /><span>Resultados reais.</span></h1><p className="hero-lead">Sistemas, automações e ferramentas desenvolvidas para simplificar processos, organizar informações e impulsionar sua operação.</p><div className="actions"><Link className="button primary" href="/projetos">Ver projetos <ArrowRight size={18} /></Link><a className="text-link" href="#servicos">Conheça as soluções</a></div></div>
      <OrbitShowcase /></section>
    <section className="section shell" id="servicos"><div className="section-heading split-heading"><div><p className="eyebrow">Serviços</p><h2>Soluções para diferentes necessidades.</h2></div><p>Do desenvolvimento de sistemas à automação de processos, cada solução é criada com foco na realidade da sua operação.</p></div><div className="service-grid">{services.map(({ number, title, description, icon: Icon, href, image, alt }) => <Link className="service-card" href={href} key={number}><div className="service-media"><Image src={image} alt={alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 25vw" /><span className="service-badge"><Icon size={22} strokeWidth={1.6} /></span><span className="service-number">{number}</span></div><div className="service-card-copy"><h3>{title}</h3><p>{description}</p><strong>Saiba mais <ArrowRight size={17} /></strong></div></Link>)}</div></section>
    <section className="section shell"><div className="section-heading"><p className="eyebrow">Trabalho aplicado</p><h2>Sistemas pensados para rotinas reais.</h2></div><div className="project-preview-grid">{projects.slice(1, 4).map((project) => <Link className="project-preview" href={`/projetos/${project.slug}`} key={project.slug}><div className="preview-media"><Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 800px) 100vw, 33vw" /></div><p>{project.category}</p><h3>{project.name}</h3><span>{project.shortDescription}</span></Link>)}</div><Link className="project-index-link" href="/projetos">Conhecer todos os projetos <ArrowRight size={18} /></Link></section>
    <ContactCta /></main><SiteFooter /></>;
}
