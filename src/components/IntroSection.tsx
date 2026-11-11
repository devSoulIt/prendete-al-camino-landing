'use client'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

/** Miniaturas del carrusel: Santiago, el Camino, la costa y el grupo */
const fotos = [
  { src: "/images/Santiago/IMG_6435.webp", alt: "Fachada de la Catedral de Santiago de Compostela", caption: "Santiago de Compostela" },
  { src: "/images/Santiago/IMG_5658.webp", alt: "Dos peregrinas caminando por una playa de Galicia", caption: "Paisajes costeros" },
  { src: "/images/Santiago/IMG_5428.webp", alt: "Grupo de Prendete al Camino frente a la Catedral", caption: "Nuestro grupo en el Obradoiro" },
  { src: "/images/Santiago/IMG_5854.webp", alt: "Sendero del Camino entre árboles altos", caption: "Senderos entre bosques" },
  { src: "/images/Santiago/IMG_6036.webp", alt: "Puente de piedra sobre un arroyo en el Camino", caption: "Puentes y aldeas" },
  { src: "/images/Santiago/IMG_6995.webp", alt: "Grupo festejando en la playa", caption: "Pausas que inspiran" },
  { src: "/images/Santiago/IMG_4419.webp", alt: "Grupo compartiendo una comida durante el viaje", caption: "Encuentros en la mesa" },
  { src: "/images/Santiago/IMG_5754.webp", alt: "Peregrina junto al cartel del Camino de Santiago", caption: "Siguiendo la flecha amarilla" },
];

interface IntroSectionProps {
  /** El carrusel se suma recién con el lanzamiento (STAGE 1) */
  conCarrusel: boolean;
}

export function IntroSection({ conCarrusel }: IntroSectionProps) {
  return (
    <section className="bg-pac-surface border-y border-pac-olive/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 text-center">
        <p className="font-serif text-[26px] md:text-[34px] leading-[1.25] font-medium text-pac-ink [text-wrap:pretty]">
          Descubrí la magia del Camino de Santiago: por el Camino Portugués
          de la Costa hasta la majestuosa Catedral de Compostela. Un viaje
          hacia{" "}
          <em className="italic text-pac-olive">la mejor versión de vos mismo</em>.
        </p>
        <p className="mt-5 text-[16px] md:text-[17px] leading-[1.6] text-pac-body">
          Una experiencia que dejará una huella imborrable en tu corazón.
        </p>
      </div>

      {conCarrusel && <Carrusel />}
    </section>
  );
}

function Carrusel() {
  const pistaRef = useRef<HTMLUListElement>(null);
  const [pagina, setPagina] = useState(0);
  const [paginas, setPaginas] = useState(1);

  // Las páginas dependen de cuántas miniaturas entran en el ancho visible.
  useEffect(() => {
    const pista = pistaRef.current;
    if (!pista) return;
    const medir = () => {
      setPaginas(Math.max(1, Math.ceil(pista.scrollWidth / pista.clientWidth - 0.05)));
      setPagina(Math.round(pista.scrollLeft / pista.clientWidth));
    };
    medir();
    pista.addEventListener("scroll", medir, { passive: true });
    window.addEventListener("resize", medir);
    return () => {
      pista.removeEventListener("scroll", medir);
      window.removeEventListener("resize", medir);
    };
  }, []);

  const mover = (direccion: 1 | -1) => {
    const pista = pistaRef.current;
    if (pista) pista.scrollBy({ left: direccion * pista.clientWidth, behavior: "smooth" });
  };

  const irA = (i: number) => {
    const pista = pistaRef.current;
    if (pista) pista.scrollTo({ left: i * pista.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 md:pb-20 -mt-4 md:-mt-6">
      <div className="flex items-center justify-center gap-4 mb-8" aria-hidden="true">
        <span className="h-px w-16 md:w-24 bg-pac-olive/20" />
        <span className="h-2 w-2 rounded-full bg-pac-yellow" />
        <span className="h-px w-16 md:w-24 bg-pac-olive/20" />
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() => mover(-1)}
          disabled={pagina === 0}
          aria-label="Fotos anteriores"
          className="hidden md:flex absolute -left-5 top-[42%] -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-pac-bg border border-pac-olive/15 text-pac-olive shadow-sm transition-opacity disabled:opacity-0"
        >
          <ChevronLeft className="w-5 h-5" aria-hidden="true" />
        </button>

        <ul
          ref={pistaRef}
          className="flex gap-3 md:gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {fotos.map((foto) => (
            <li
              key={foto.src}
              className="snap-start shrink-0 w-[62%] sm:w-[38%] md:w-[calc((100%-48px)/4)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[16px] bg-pac-olive/10">
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  sizes="(max-width: 640px) 62vw, (max-width: 768px) 38vw, 280px"
                  className="object-cover"
                  quality={70}
                />
              </div>
              <p className="mt-2.5 flex items-center justify-center gap-1.5 font-serif italic text-[15px] text-pac-ink">
                <MapPin className="w-3.5 h-3.5 shrink-0 text-pac-olive" aria-hidden="true" />
                {foto.caption}
              </p>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => mover(1)}
          disabled={pagina >= paginas - 1}
          aria-label="Fotos siguientes"
          className="hidden md:flex absolute -right-5 top-[42%] -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-pac-bg border border-pac-olive/15 text-pac-olive shadow-sm transition-opacity disabled:opacity-0"
        >
          <ChevronRight className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>

      {paginas > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: paginas }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => irA(i)}
              aria-label={`Ir al grupo de fotos ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === pagina ? "w-5 bg-pac-olive" : "w-2 bg-pac-olive/25"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
