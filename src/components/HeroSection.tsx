'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {

  return (
    <section id="inicio" className="relative min-h-screen flex items-center ">
      <div className="absolute inset-0 z-0">
          <div
            className={`absolute inset-0 transition-opacity duration-1000 `}
          >
            <Image
              src={'/images/portada.jpg'}
              alt={`Portada Prendete al Camino`}
              className="w-full h-full object-cover"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
      </div>

      {/* Content */}
      <div className="-mt-36 md:mt-0 relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-3xl md:text-4xl md:text-6xl font-bold mb-6 leading-tight">
          El primer paso de un viaje <br />
          <span style={{ color: '#ffd600' }}>que te cambiará la vida</span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#sobre-nosotros">
            <Button
              size="lg"
              className="text-lg px-6 py-6 md:px-8 md:py-8 md:text-lg font-bold rounded-3xl hover:opacity-90 transition-opacity duration-200"
              style={{ backgroundColor: '#ffd600', color: '#404d21' }}
            >
              COMENZAR MI CAMINO
            </Button>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}