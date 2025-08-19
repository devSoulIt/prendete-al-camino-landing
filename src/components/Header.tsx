"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Cambiar el background cuando el scroll pase el tamaño de la pantalla
      if (scrollPosition > windowHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full min-h-[90px] transition-colors duration-700 ${
      isScrolled 
        ? 'bg-black/70 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-1">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/images/logo.png" alt="Logo" width={80} height={80} />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#inicio"
              className="transition-colors duration-200 text-white hover:text-primary font-bold uppercase"
            >
              Inicio
            </a>
            <a
              href="#santiago"
              className="transition-colors duration-200 text-white hover:text-primary font-bold uppercase"
            >
              Santiago de Compostela
            </a>
            <a
              href="#viajes-cortos"
              className="transition-colors duration-200 text-white hover:text-primary font-bold uppercase"
            >
              Viajes Cortos
            </a>
            <a
              href="#videollamada"
              className="transition-colors duration-200 text-white hover:text-primary font-bold uppercase"
            >
              Videollamada
            </a>
            <a
              href="#galeria"
              className="transition-colors duration-200 text-white hover:text-primary font-bold uppercase"
            >
              Galería
            </a>
            <a
              href="#contacto"
              className="transition-colors duration-200 text-white hover:text-primary font-bold uppercase"
            >
              Contacto
            </a>
          </nav>

          {/* CTA Button */}
          <Button
            className="hidden md:inline-flex text-white font-medium px-6 py-2 rounded-lg hover:opacity-90 transition-opacity duration-200"
            style={{ backgroundColor: '#ffd600', color: '#404d21' }}
          >
            Solicitar información
          </Button>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-md text-white hover:text-gray-300 hover:bg-white/10 transition-colors duration-200">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}