"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";

interface Testimonio {
  id: number;
  nombre: string;
  avatar: string | null;
  texto: string;
  estrellas: number;
}

const testimonios: Testimonio[] = [
  {
    id: 19,
    nombre: "Yannina Salomon",
    avatar: null,
    texto:
      "Hice el Camino a Santiago de Compostela 2026 con Préndete al Camino…y realmente fue la experiencia más enriquecedora que tuve hasta hoy. Silvia y Marina están en cada detalle y cumplieron con todo. Los hoteles, la logística y lo lugares…el grupo hermoso!! todo está pensado para transmitir un mensaje súper enriquecedor tanto espiritual como de aventura. Lo recomiendo 1000x1000!!! Gracias chicas.",
    estrellas: 5,
  },
  {
    id: 20,
    nombre: "Patricia Contreras",
    avatar: null,
    texto:
      "Hice el Camino de Santiago de Compostela.. e Italia, en junio 2026 ..Muy bien organizado, cumplieron con todo! Nos mimaron y cuidaron…estuvieron en cada detalle , con hermosas sorpresas ✨Gracias por todo Sil y Marina ❣️",
    estrellas: 5,
  },
  {
    id: 1,
    nombre: "Sandra Garcia",
    avatar: null,
    texto:
      "Hice el Camino de Santiago con Prendete al Camino... hermosa experiencia... acompañándote en todo el trayecto... atenta a cada detalle... nos reservo hoteles preciosos para descansar... nos estímulo y cuido en todo momento... es para hacerla la experiencia con ella...",
    estrellas: 5,
  },
  {
    id: 2,
    nombre: "Marta Ortiz",
    avatar: null,
    texto: `Experiencia única todo impecable en cada detalle del viaje no faltó nada
Silvia y marina unas genias totales me sentí muy cuidada en cada momento
Gracias préndete al camino por este viaje mágico ❤️`,
    estrellas: 5,
  },
  {
    id: 3,
    nombre: "Patricia Collado",
    avatar: null,
    texto:
      "Fue una experiencia que tenia pendiente de hacer hace tiempo!! Excelente en todos los sentidos ,excelente la organización y disposición de silvia y todo su equipo de trabajo ,la amabilidad, acompañamiento y cuidados permanente para hacermos sentir muy bien en todo momento!! Los lugares y caminatas maravillosos con paisajes increibles para llevarse en el alma , la hoteleria y recepción y servicios excelentes !!el grupo de caminantes excelentes compañeros todos y muchas gracias por permitirme compartir esta travesia !! Felicitaciones !!",
    estrellas: 5,
  },
  {
    id: 4,
    nombre: "Alejandra Brusco",
    avatar: null,
    texto:
      "Mi experiencia fue maravillosa. Desde el momento que decidi hacer el viaje hasta mi regreso. Silvia y Marina se ocuparon de los mas mínimos detalles . Los hoteles fueron excelentes, la organización 10  puntos . No me falto absolutamente nada . Lo recomiendo y volvería a hacerlo",
    estrellas: 5,
  },
  {
    id: 5,
    nombre: "Nilda Aguiilar",
    avatar: null,
    texto: `Espectacular,  Maravillosa experiencia de la mano de PRENDETE AL CAMINO, con la Excelente guía de Silvita PEREZ MULKI. Está en todos los detalles: se cumple totalmente lo planificado.  En esta oportunidad,  San José de Catamarca- Valles Calchaquíes este finde INOLVIDABLE. La Seriedad,  la Calidez, la Responsabilidad puestas de manifiesto en cada etapa.  Los distintos lugares y paisajes haciendo lo que amamos: TREKKING en HUALFIN y VALLE DE LA LUNA; ALOJAMIENTO en Portal de la Luna: IMPECABLE, MUY BUEN
SERVICIO Y SOBRETODO LA ESMERADA ATENCIÓN. Sin duda, elijo DISFRUTAR con PRENDETE AL CAMINO.`,
    estrellas: 5,
  },
  {
    id: 6,
    nombre: "Romina Prieto",
    avatar: null,
    texto:
      "Me prendí al camino y jamás pensé que me iba a llenar el alma, sentí que estaba en familia, el grupo muy humano y ni que hablar de SIL, SERGIO, MARINA Y NACHO,los mejores coordinadores que podes tener, no solo por la dedicación que le ponen a cada cosa, también te hacen sentir familia, los elijo para seguir en este hermoso camino.. Muchas gracias",
    estrellas: 5,
  },
  {
    id: 7,
    nombre: "Hebe Carrizo",
    avatar: null,
    texto:
      "El viaje a Jujuy para conocer la Garganta del Diablo, Uquía con su Quebrada y Cuevas y también Inca Cueva...todo muy bien planificado, cumpliendo con todo lo pactado. La guía de Silvia Perez Mulki y Co.impecable. PRENDETE AL CAMINO...seguro la pasarás de 10!!",
    estrellas: 5,
  },
  {
    id: 8,
    nombre: "jose pablo argañaraz",
    avatar: null,
    texto:
      "Excelente la organización de Silvia que está a cargo de prenderte en el camino, los hoteles elegidos por ella son paradisíacos.",
    estrellas: 5,
  },
  {
    id: 9,
    nombre: "Rosa Lina Cuozzo",
    avatar: null,
    texto:
      "Hermoso viaje! Lugares maravillosos, excelente compañía y la mejor organización! La pasamos estupendo!!! préndete al camino!",
    estrellas: 5,
  },
  {
    id: 10,
    nombre: "silvia noemi Miglio",
    avatar: null,
    texto:
      "Hermoso grupo.genial la conducción de silvia muy cuidadosa en todos los detalles la.pase hermoso",
    estrellas: 5,
  },
  {
    id: 11,
    nombre: "Nancy Beatriz Rodriguez",
    avatar: null,
    texto:
      "Maravillosa experiencia. Bellos paisajes de la quebrada hermosas personas. La pasé genial. Que se repitaaaaa",
    estrellas: 5,
  },
  {
    id: 12,
    nombre: "Fabiana Vasvari",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjUF3CBl1WhgBZkFGZj9QqchtRP5jRwNO2_7kIBTDrI6S5AfyZZTsA=w36-h36-p-rp-mo-br100",
    texto:
      "El acompañamiento de Silvia y Marina fue increíble, atentas a todos los detalles y necesidades de cada persona del grupo. Los hoteles y la logística para organizar cada etapa del camino, excelentes! recomiendo prenderte al camino para poder disfrutar la experiencia del camino al 100%",
    estrellas: 5,
  },
  {
    id: 13,
    nombre: "Adri Mena",
    avatar: null,
    texto:
      "Excelente toda la organización,pero sobre todo la calidez que demostraron,tanto Silvia como Marina, al grupo,unas Genias! Inolvidable!!! Gracias por está experiencia!",
    estrellas: 5,
  },
  {
    id: 14,
    nombre: "Angélica Nigro",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjVa4n1jrHy91TEMTqXIq3rIxKgNhkasrIT2xtksyxWWE_-DSIAHUA=w36-h36-p-rp-mo-br100",
    texto:
      "Gracias Silvia y Marina por el acompañamiento en esta experiencia que fué MARAVILLOSA e INOLVIDABLE!! No duden en realizar ésta aventura con Prendete al camino!",
    estrellas: 5,
  },
  {
    id: 15,
    nombre: "Silvina Manganelli",
    avatar: null,
    texto:
      "Fin de semana en Valles Catamarqueños San José y Hualfin, descubrímos bellos lugares con un grupo muy divertido, todo organizado excelente!!!",
    estrellas: 5,
  },
  {
    id: 16,
    nombre: "Elida Rosana Suarez",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjXnQR_8-mNUEeiF5p4ByOtiMo7bbU9kgr2hdAS4_2K1w1KBPka0=w36-h36-p-rp-mo-br100",
    texto:
      "Excelente finde! Muy buena organización, atentos a todos los detalles, un grupo humano maravilloso, recomiendo!",
    estrellas: 5,
  },
  {
    id: 17,
    nombre: "Judith Affaticati",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjXOGi1BTsH2Yvvlb0gS1yEetcljGG9LjZHVB-0xW4lcCys7l4XE=w36-h36-p-rp-mo-br100",
    texto:
      "Excelente logística, excelente servicio, excelente calidad humana. Muy recomendable. Éxitos.Ya quiero ir otra vez.",
    estrellas: 5,
  },
  {
    id: 18,
    nombre: "Maria Silvia Rivero",
    avatar: null,
    texto:
      "Excelente organización, excelente logística, y sobre todo alta calidad humana!!! Altamente recomendable!!",
    estrellas: 5,
  },
];

export function TestimoniosSection() {
  const [testimonioActual, setTestimonioActual] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Calcular cuántos testimonios mostrar
  const testimoniosPorVista = isMobile ? 2 : 3;
  const maxIndex = Math.max(0, testimonios.length - testimoniosPorVista);

  // Auto-play del carrusel con transición más lenta y exponencial
  useEffect(() => {
    if (!isAutoPlaying) return;

    let timeoutId: NodeJS.Timeout;
    let currentDelay = 3000; // Empezar con 3 segundos

    const scheduleNext = () => {
      timeoutId = setTimeout(() => {
        setTestimonioActual((prev) => {
          const nextIndex = prev + 1;
          return nextIndex > maxIndex ? 0 : nextIndex;
        });

        // Aumentar el delay exponencialmente (máximo 8 segundos)
        currentDelay = Math.min(currentDelay * 1.2, 8000);
        scheduleNext();
      }, currentDelay);
    };

    scheduleNext();

    return () => clearTimeout(timeoutId);
  }, [isAutoPlaying, maxIndex]);

  const siguienteTestimonio = () => {
    setTestimonioActual((prev) => {
      const nextIndex = prev + 1;
      return nextIndex > maxIndex ? 0 : nextIndex;
    });
    setIsAutoPlaying(false);
  };

  const anteriorTestimonio = () => {
    setTestimonioActual((prev) => {
      const prevIndex = prev - 1;
      return prevIndex < 0 ? maxIndex : prevIndex;
    });
    setIsAutoPlaying(false);
  };

  const irA = (index: number) => {
    setTestimonioActual(index);
    setIsAutoPlaying(false);
  };

  // Obtener testimonios visibles
  const testimoniosVisibles = testimonios.slice(
    testimonioActual,
    testimonioActual + testimoniosPorVista
  );

  // Cinco estrellas amarillas para la pastilla de reseñas de Google
  const estrellasGoogle = Array.from({ length: 5 }, (_, i) => (
    <svg
      key={i}
      viewBox="0 0 20 20"
      className="h-[16px] w-[16px] fill-pac-yellow"
      aria-hidden="true"
    >
      <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L10 14.9l-5.3 2.8 1.1-5.9L1.5 7.7l5.9-.8z" />
    </svg>
  ));

  return (
    <section
      id="testimonios"
      className="bg-pac-surface border-y border-pac-olive/10 py-20 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10">
          <div className="flex flex-col gap-3">
            <p className="pac-eyebrow">Testimonios</p>
            <h2 className="pac-title text-[32px] md:text-[48px]">
              Ellos ya se prendieron al camino
            </h2>
          </div>

          <a
            href="https://www.google.com.ar/maps/place/Prendete+al+Camino/@-26.8029624,-65.2515868,17z/data=!4m8!3m7!1s0x94225d0005e4e36b:0x12eed56b3e3f59d7!8m2!3d-26.8029672!4d-65.2490119!9m1!1b1!16s%2Fg%2F11m786kw6l?hl=es&entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 self-start rounded-full border border-pac-olive/20 bg-pac-bg px-[18px] py-3 text-[14px] font-bold text-pac-olive transition-colors duration-200 hover:bg-pac-olive/[0.06] md:self-auto md:whitespace-nowrap"
          >
            <span className="flex shrink-0 gap-0.5">{estrellasGoogle}</span>
            Leer todas las reseñas en Google
          </a>
        </div>

        {/* Carrusel */}
        <div className="relative">
          {/* Testimonios visibles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] items-stretch">
            {testimoniosVisibles.map((testimonio) => (
              <div
                key={testimonio.id}
                className="pac-card bg-pac-bg h-full flex flex-col gap-[18px] p-8"
              >
                <span
                  aria-hidden="true"
                  className="block h-[30px] overflow-hidden font-serif text-[56px] leading-none text-pac-yellow"
                >
                  &ldquo;
                </span>

                <blockquote className="flex-1 text-[16px] leading-[1.65] text-pac-olive-dark line-clamp-[10]">
                  {testimonio.texto}
                </blockquote>

                <div className="flex items-center gap-3 border-t border-pac-olive/[0.12] pt-4">
                  {testimonio.avatar ? (
                    <Avatar className="size-[40px] shrink-0">
                      <AvatarImage
                        src={testimonio.avatar}
                        alt={`Foto de ${testimonio.nombre}`}
                      />
                    </Avatar>
                  ) : (
                    <div className="flex size-[40px] shrink-0 items-center justify-center rounded-full bg-pac-olive text-[15px] font-extrabold text-pac-surface">
                      {testimonio.nombre.charAt(0).toUpperCase()}
                    </div>
                  )}

                  <p className="text-[14px] font-extrabold text-pac-ink">
                    {testimonio.nombre}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Controles e indicadores */}
          <div className="mt-10 flex items-center justify-center gap-2">
            <button
              onClick={anteriorTestimonio}
              className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-pac-surface border border-pac-olive/15 text-pac-olive transition-colors duration-200 hover:bg-pac-olive/[0.06]"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="h-[20px] w-[20px]" />
            </button>

            <div className="flex flex-wrap items-center justify-center gap-1.5 px-2">
              {Array.from({ length: maxIndex + 1 }, (_, index) => (
                <button
                  key={index}
                  onClick={() => irA(index)}
                  className={`h-[6px] rounded-full transition-all duration-300 ${
                    index === testimonioActual
                      ? "w-[20px] bg-pac-olive"
                      : "w-[6px] bg-pac-olive/25 hover:bg-pac-olive/40"
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={siguienteTestimonio}
              className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-pac-surface border border-pac-olive/15 text-pac-olive transition-colors duration-200 hover:bg-pac-olive/[0.06]"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="h-[20px] w-[20px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
