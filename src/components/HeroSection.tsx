'use client'

import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const portadaImages = [
    "/images/Portadas/portada principal vertical.webp",
    "/images/Portadas/Catamarca.webp",
    "/images/Portadas/Córdoba .webp",
    "/images/Portadas/Salta .webp",
    "/images/Portadas/Santiago de Compostela .webp",
    "/images/Portadas/IMG_5309.webp"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === portadaImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Cambia imagen cada 5 segundos

    return () => clearInterval(interval);
  }, [portadaImages.length]);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center ">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {portadaImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <ImageWithFallback
              src={image}
              alt={`Portada ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        ))}

        {/* Carousel Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {portadaImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                  ? 'bg-yellow-400 scale-125'
                  : 'bg-white/50 hover:bg-white/75'
                }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          El primer paso de un viaje <br />
          <span style={{ color: '#ffd600' }}>que te cambiará la vida</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
          Descubre la magia del Camino de Santiago: desde Sarria hasta la Catedral de Compostela.
          El viaje hacia la mejor versión de vos mismo, el que dejará una huella imborrable en tu corazón.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#sobre-nosotros">
            <Button
              size="lg"
              className="text-lg px-8 py-8 font-bold rounded-3xl hover:opacity-90 transition-opacity duration-200"
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