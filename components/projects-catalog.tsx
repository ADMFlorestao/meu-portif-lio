"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { projects, type ProjectCategory } from "@/lib/projects";
const categories: Array<"Todos" | ProjectCategory> = ["Todos", "Sistemas web", "Mobile", "Documentos", "Automação e dados"];
export default function ProjectsCatalog() {
 const [active,setActive]=useState<(typeof categories)[number]>("Todos");
 const visible=active==="Todos"?projects:projects.filter(p=>p.projectCategory===active);
 return <section className="projects-catalog shell"><div className="projects-toolbar"><div><p className="eyebrow">Explore por área</p><p>Encontre soluções próximas ao desafio da sua operação.</p></div><div className="project-filters" aria-label="Filtrar projetos por área">{categories.map(c=><button type="button" key={c} className={active===c?"is-active":""} aria-pressed={active===c} onClick={()=>setActive(c)}>{c}<span>{c==="Todos"?projects.length:projects.filter(p=>p.projectCategory===c).length}</span></button>)}</div></div><p className="projects-result-count" aria-live="polite">{visible.length} {visible.length===1?"projeto encontrado":"projetos encontrados"}</p><div className="projects-list">{visible.map(project=><article className="project-row" key={project.slug}><Link className="project-row-media" href={`/projetos/${project.slug}`}><Image src={project.catalogImage ?? project.image} alt={project.catalogImageAlt ?? project.imageAlt} fill sizes="(max-width: 800px) 100vw, 50vw"/><span>{project.projectCategory}</span></Link><div className="project-row-copy"><span>{project.category}</span><h2><Link href={`/projetos/${project.slug}`}>{project.name}</Link></h2><h3>{project.fullName}</h3><p>{project.overview}</p><div className="project-use"><strong>Útil para</strong><p>{project.usefulFor}</p></div><ul className="project-benefits">{project.benefits.map(b=><li key={b}><Check size={15}/>{b}</li>)}</ul><Link className="project-link" href={`/projetos/${project.slug}`}>Conhecer o projeto <ArrowRight size={17}/></Link></div></article>)}</div></section>;
}