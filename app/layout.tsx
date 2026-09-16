import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: { default: "Murilo Lima Pagung | Automação & Sistemas Empresariais", template: "%s | Murilo Lima Pagung" }, description: "Sistemas web e mobile, processamento de documentos e automação de processos para empresas.", icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
