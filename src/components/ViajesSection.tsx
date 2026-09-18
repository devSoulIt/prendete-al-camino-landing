import Image from "next/image";
import { ArrowRight } from "lucide-react";

/**
 * "Nuestros viajes": Santiago de Compostela como destino principal, más los
 * viajes por Europa y las escapadas nacionales. Las fechas viven en
 * CalendarioSection, que es la única fuente de verdad: acá solo enlazamos.
 */
export function ViajesSection() {
  return (
    <section id="viajes" className="bg-pac-bg py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 md:gap-9">
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
          <div className="flex flex-col gap-3">
            <p className="pac-eyebrow">Nuestros viajes</p>
            <h2 className="pac-title text-[32px] md:text-[48px] max-w-[640px]">
              Un destino principal y muchos caminos para llegar
            </h2>
          </div>
          <a
            href="#calendario"
            className="inline-flex items-center gap-2 text-[15px] font-bold text-pac-olive hover:text-pac-olive-dark transition-colors duration-200 whitespace-nowrap"
          >
            Ver calendario completo
            <ArrowRight className="w-[18px] h-[18px]" strokeWidth={2.2} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Santiago: destino principal */}
          <a
            href="#galeria"
            className="lg:col-span-2 group relative h-[420px] lg:h-[544px] rounded-[24px] overflow-hidden bg-pac-olive-dark"
          >
            <Image
              src="/images/Portadas/Santiago de Compostela .webp"
              alt="Grupo de Prendete al Camino en el Camino de Santiago"
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-500"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pac-ink/90 via-pac-ink/10 to-transparent" />

            <span className="absolute top-6 left-6 inline-flex items-center px-3.5 py-2 rounded-full bg-pac-yellow text-pac-olive-dark text-[12px] font-extrabold uppercase tracking-[0.08em]">
              Destino principal
            </span>

            <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 text-pac-surface">
              <div className="flex flex-col gap-2.5 max-w-[520px]">
                <h3 className="font-serif font-medium text-[32px] md:text-[44px] leading-[1.05]">
                  Camino de Santiago de Compostela
                </h3>
                <p className="text-[15px] md:text-[16px] leading-[1.5] text-pac-surface/85">
                  De Sarria a la Catedral: pasajes, alojamiento, media pensión,
                  traslado de maletas y entrenamiento previo incluidos.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 self-start lg:self-auto px-4 py-3 rounded-xl bg-pac-surface/15 border border-pac-surface/40 text-[14px] font-bold whitespace-nowrap">
                Ver galería completa
                <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
              </span>
            </div>
          </a>

          {/* Europa y escapadas */}
          <div className="flex flex-col gap-6">
            <a
              href="#galeria"
              className="pac-card group flex-1 flex flex-col overflow-hidden hover:shadow-[0_12px_28px_rgba(31,36,20,0.10)] transition-shadow duration-300"
            >
              <div className="relative h-32 overflow-hidden">
                <Image
                  src="/images/Roma/3.jpg"
                  alt="Grupo de Prendete al Camino en la Fontana di Trevi, Roma"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-[center_60%] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col gap-1.5">
                <p className="pac-eyebrow text-[11px]">
                  Europa · Un destino nuevo cada año
                </p>
                <h3 className="text-[20px] font-extrabold text-pac-ink">
                  Italia
                </h3>
                <p className="text-[14px] leading-[1.5] text-pac-body">
                  En 2026 recorrimos Roma, Nápoles, Sorrento y Pompeya como
                  extensión del Camino.
                </p>
              </div>
            </a>

            <a
              href="#galeria"
              className="pac-card group flex-1 flex flex-col overflow-hidden hover:shadow-[0_12px_28px_rgba(31,36,20,0.10)] transition-shadow duration-300"
            >
              <div className="relative h-32 overflow-hidden">
                <Image
                  src="/images/Portadas/Catamarca.webp"
                  alt="Paisaje de los valles de Catamarca"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col gap-1.5">
                <p className="pac-eyebrow text-[11px]">
                  Argentina · Fines de semana
                </p>
                <h3 className="text-[20px] font-extrabold text-pac-ink">
                  Escapadas nacionales
                </h3>
                <p className="text-[14px] leading-[1.5] text-pac-body">
                  Jujuy, Salta, Catamarca, Córdoba, Ancajuli, San Carlos Mágico
                  y Balcozna.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
