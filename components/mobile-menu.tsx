"use client";

import Link from "next/link";
import { useRef } from "react";

export default function MobileMenu() {
  const menu = useRef<HTMLDetailsElement>(null);
  const close = () => { if (menu.current) menu.current.open = false; };

  return <details className="mobile-menu" ref={menu}
    onKeyDown={(event) => {
      if (event.key === "Escape") {
        close();
        menu.current?.querySelector("summary")?.focus();
      }
    }}>
    <summary>Menu</summary>
    <nav aria-label="Navegação mobile" onClick={(event) => {
      if ((event.target as HTMLElement).closest("a")) close();
    }}>
      <Link href="/">Início</Link>
      <Link href="/projetos">Projetos</Link>
      <Link href="/#servicos">Serviços</Link>
      <Link href="/#sobre">Sobre</Link>
      <Link href="/#contato">Contato</Link>
    </nav>
  </details>;
}
