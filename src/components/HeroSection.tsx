'use client'
import Image from "next/image";
import { ArrowRight, MapPin, Star } from "lucide-react";

interface HeroSectionProps {
  onImageLoad?: () => void;
}

export function HeroSection({ onImageLoad }: HeroSectionProps) {
  return (
    <section id="inicio" className="bg-pac-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-[72px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Texto */}
          <div className="flex flex-col gap-6 md:gap-7 lg:pr-6 order-2 lg:order-1">
            <p className="pac-eyebrow">
              Camino de Santiago · Europa · Escapadas por Argentina
            </p>

            <h1 className="pac-title text-[44px] md:text-[60px] lg:text-[76px] leading-[1.02] tracking-[-0.01em] [text-wrap:balance]">
              El primer paso de un viaje{" "}
              <em className="italic font-semibold text-pac-olive">
                que te cambiará la vida
              </em>
            </h1>

            <p className="text-[17px] md:text-[19px] leading-[1.6] text-pac-body max-w-[520px]">
              Descubrí la magia del Camino de Santiago, desde Sarria hasta la
              Catedral de Compostela. Nosotros nos ocupamos de todo para que vos
              solo tengas que caminar.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5">
              <a href="#contacto" className="pac-btn-primary">
                Comenzar mi camino
                <ArrowRight className="w-[18px] h-[18px]" strokeWidth={2.4} />
              </a>
              <a href="#viajes" className="pac-btn-ghost">
                Ver próximos viajes
              </a>
            </div>

            {/* Prueba social */}
            <div className="flex flex-wrap items-center gap-x-7 gap-y-3 pt-2">
              <div className="flex items-center gap-2.5">
                <span className="flex gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-pac-yellow text-pac-yellow"
                    />
                  ))}
                </span>
                <span className="text-[14px] text-pac-body">
                  <strong className="text-pac-ink font-bold">5.0</strong> en
                  reseñas de Google
                </span>
              </div>
              <span
                className="hidden sm:block w-px h-5 bg-pac-olive/20"
                aria-hidden="true"
              />
              <span className="text-[14px] text-pac-body">
                <strong className="text-pac-ink font-bold">+10 años</strong>{" "}
                guiando grupos
              </span>
            </div>
          </div>

          {/* Foto */}
          <div className="relative order-1 lg:order-2">
            <div className="relative h-[420px] sm:h-[520px] lg:h-[640px] rounded-[24px] md:rounded-[28px] overflow-hidden shadow-[0_30px_60px_rgba(31,36,20,0.18)]">
              <Image
                src="/images/portada.jpg"
                alt="Peregrinos de Prendete al Camino en la Plaza del Obradoiro, Santiago de Compostela"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[center_40%]"
                onLoad={onImageLoad}
                priority
                quality={90}
              />
            </div>

            <div className="absolute left-4 bottom-4 md:left-6 md:bottom-6 flex items-center gap-2.5 pl-3 pr-4 py-2.5 rounded-full bg-pac-surface/95 backdrop-blur-sm shadow-[0_6px_18px_rgba(0,0,0,0.12)]">
              <MapPin
                className="w-[18px] h-[18px] text-pac-olive shrink-0"
                strokeWidth={2}
              />
              <span className="text-[12px] md:text-[13px] font-semibold text-pac-olive-dark">
                Plaza del Obradoiro, Santiago de Compostela
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
