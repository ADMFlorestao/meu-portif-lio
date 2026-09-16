import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactCta, SiteFooter, SiteHeader } from "@/components/site-shell";
import { projects } from "@/lib/projects";
export const metadata: Metadata = { title: "Projetos", description: "Sistemas empresariais, aplicações mobile, processamento de documentos e automações desenvolvidos por Murilo Lima Pagung." };
export default function ProjectsPage() { return <><SiteHeader /><main><section className="page-intro shell"><p className="eyebrow">Projetos selecionados</p><h1>Soluções construídas a partir de problemas reais.</h1><p>Produtos digitais que organizam operações, simplificam rotinas e transformam dados em decisões mais claras.</p></section><section className="projects-list shell">{projects.map((project, index) => <Link className="project-row" href={`/projetos/${project.slug}`} key={project.slug}><div className="project-row-media"><Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 800px) 100vw, 50vw" /></div><div className="project-row-copy"><span>0{index + 1} — {project.category}</span><h2>{project.name}</h2><h3>{project.fullName}</h3><p>{project.shortDescription}</p><strong>Ver projeto <ArrowRight size={17} /></strong></div></Link>)}</section><ContactCta /></main><SiteFooter /></>; }
