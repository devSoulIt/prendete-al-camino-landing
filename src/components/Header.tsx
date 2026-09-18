"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#peru", label: "Perú" },
  { href: "#sobre-nosotros", label: "Quiénes somos" },
  { href: "#viajes", label: "Viajes" },
  { href: "#galeria", label: "Galería" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#preguntas", label: "Preguntas" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquea el scroll del fondo mientras el menú móvil está abierto.
  useEffect(() => {
    if (!isMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-pac-bg/95 backdrop-blur-sm transition-shadow duration-300 ${
        isScrolled
          ? "shadow-[0_2px_16px_rgba(31,36,20,0.08)] border-b border-pac-olive/10"
          : "border-b border-pac-olive/[0.08]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[84px] gap-4">
          {/* Marca */}
          <a href="#inicio" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo.png"
              alt="Prendete al Camino"
              width={48}
              height={48}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full"
            />
            <span className="flex flex-col">
              <span className="text-[13px] md:text-[15px] font-extrabold tracking-[0.06em] text-pac-olive-dark leading-tight">
                PRENDETE AL CAMINO
              </span>
              <span className="hidden md:block text-[11px] tracking-[0.04em] text-pac-muted">
                Viajes y senderismo guiado
              </span>
            </span>
          </a>

          {/* Navegación de escritorio */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] font-semibold text-pac-olive-dark hover:text-pac-olive transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 h-11 px-5 rounded-full bg-pac-olive text-pac-surface text-[14px] font-bold hover:bg-pac-olive-dark transition-colors duration-200"
            >
              <MessageCircle className="w-[18px] h-[18px]" strokeWidth={2} />
              Escribinos
            </a>

            {/* Botón de menú móvil */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Abrir menú"
              aria-expanded={isMenuOpen}
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full text-pac-olive-dark hover:bg-pac-olive/[0.08] transition-colors duration-200"
            >
              <Menu className="w-6 h-6" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-pac-bg flex flex-col">
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-16">
              <Image
                src="/images/logo.png"
                alt="Prendete al Camino"
                width={48}
                height={48}
                className="w-10 h-10 rounded-full"
              />
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Cerrar menú"
                className="w-11 h-11 flex items-center justify-center rounded-full text-pac-olive-dark hover:bg-pac-olive/[0.08] transition-colors duration-200"
              >
                <X className="w-6 h-6" strokeWidth={2} />
              </button>
            </div>
          </div>

          <nav className="flex-1 flex flex-col justify-center gap-2 px-6 pb-16">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-serif text-[34px] font-medium text-pac-ink hover:text-pac-olive transition-colors duration-200 py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="pac-btn-primary mt-6 w-full"
            >
              <MessageCircle className="w-[18px] h-[18px]" strokeWidth={2.2} />
              Escribinos por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
