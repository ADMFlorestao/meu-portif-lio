import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Braces, Database, FileStack, Smartphone } from "lucide-react";
import { ContactCta, SiteFooter, SiteHeader } from "@/components/site-shell";
import { projects } from "@/lib/projects";

const services = [
  { number: "01", title: "Sistemas web empresariais", description: "Plataformas completas para gestão, controle e análise operacional.", icon: Database, href: "/projetos/mira" },
  { number: "02", title: "Sistemas mobile personalizados", description: "Aplicações sob medida para rotinas específicas, dentro e fora do escritório.", icon: Smartphone, href: "/projetos/recebe" },
  { number: "03", title: "Automação e processamento de documentos", description: "Leitura, conferência, processamento e organização inteligente de documentos.", icon: FileStack, href: "/projetos/prisma" },
  { number: "04", title: "Automação de processos (RPA)", description: "Coleta de dados, integrações e relatórios executados com consistência.", icon: Braces, href: "/projetos/isa" },
];

export default function Home() {
  const featured = projects[0];
  return <><SiteHeader /><main>
    <section className="hero shell" id="inicio"><div className="hero-copy"><p className="eyebrow">Soluções digitais para empresas reais</p><h1>Processos mais inteligentes.<br /><span>Resultados reais.</span></h1><p className="hero-lead">Sistemas, automações e ferramentas desenvolvidas para simplificar processos, organizar informações e impulsionar sua operação.</p><div className="actions"><Link className="button primary" href="/projetos">Ver projetos <ArrowRight size={18} /></Link><a className="text-link" href="#servicos">Conheça as soluções</a></div></div>
      <Link className="product-stage" href={`/projetos/${featured.slug}`} aria-label="Conhecer o projeto M.I.R.A."><div className="stage-top"><span>Case em destaque</span><strong>{featured.name}</strong></div><Image src="/images/projects/mira-reservatorios-demo.png" alt="Painel demonstrativo do sistema M.I.R.A." width={1871} height={840} priority /><div className="stage-caption"><span>Sistema web empresarial</span><span>Ver case <ArrowRight size={15} /></span></div></Link></section>
    <section className="section shell" id="servicos"><div className="section-heading split-heading"><div><p className="eyebrow">Serviços</p><h2>Soluções para diferentes necessidades.</h2></div><p>Da estruturação de sistemas à automação de rotinas, cada solução parte do processo real da operação.</p></div><div className="service-list">{services.map(({ number, title, description, icon: Icon, href }) => <Link className="service-row" href={href} key={number}><span className="service-number">{number}</span><span className="service-icon"><Icon size={24} strokeWidth={1.5} /></span><span className="service-copy"><strong>{title}</strong><small>{description}</small></span><ArrowRight className="service-arrow" size={22} /></Link>)}</div></section>
    <section className="section shell"><div className="section-heading"><p className="eyebrow">Trabalho aplicado</p><h2>Sistemas pensados para rotinas reais.</h2></div><div className="project-preview-grid">{projects.slice(1, 4).map((project) => <Link className="project-preview" href={`/projetos/${project.slug}`} key={project.slug}><div className="preview-media"><Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 800px) 100vw, 33vw" /></div><p>{project.category}</p><h3>{project.name}</h3><span>{project.shortDescription}</span></Link>)}</div><Link className="project-index-link" href="/projetos">Conhecer todos os projetos <ArrowRight size={18} /></Link></section>
    <ContactCta /></main><SiteFooter /></>;
}
