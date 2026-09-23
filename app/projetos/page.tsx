import type { Metadata } from "next";
import ProjectsCatalog from "@/components/projects-catalog";
import { ContactCta, SiteFooter, SiteHeader } from "@/components/site-shell";
export const metadata: Metadata = { title: "Projetos", description: "Sistemas empresariais, aplicações mobile, processamento de documentos e automações desenvolvidos por Murilo Lima Pagung." };
export default function ProjectsPage() { return <><SiteHeader /><main><section className="page-intro shell"><p className="eyebrow">Projetos selecionados</p><h1>Soluções construídas a partir de problemas reais.</h1><p>Explore sistemas, aplicações e automações organizados pela área em que geram valor.</p></section><ProjectsCatalog /><ContactCta /></main><SiteFooter /></>; }
