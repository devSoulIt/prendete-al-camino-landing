"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

interface Testimonio {
  id: number;
  nombre: string;
  avatar: string | null;
  texto: string;
  estrellas: number;
}

const testimonios: Testimonio[] = [
  {
    id: 1,
    nombre: "Fabiana Vasvari",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjUF3CBl1WhgBZkFGZj9QqchtRP5jRwNO2_7kIBTDrI6S5AfyZZTsA=w36-h36-p-rp-mo-br100",
    texto:
      "El acompañamiento de Silvia y Marina fue increíble, atentas a todos los detalles y necesidades de cada persona del grupo. Los hoteles y la logística para organizar cada etapa del camino, excelentes! recomiendo prenderte al camino para poder disfrutar la experiencia del camino al 100%",
    estrellas: 5,
  },
  {
    id: 2,
    nombre: "Adri Mena",
    avatar: null,
    texto:
      "Excelente toda la organización,pero sobre todo la calidez que demostraron,tanto Silvia como Marina, al grupo,unas Genias! Inolvidable!!! Gracias por está experiencia!",
    estrellas: 5,
  },
  {
    id: 3,
    nombre: "Angélica Nigro",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjVa4n1jrHy91TEMTqXIq3rIxKgNhkasrIT2xtksyxWWE_-DSIAHUA=w36-h36-p-rp-mo-br100",
    texto:
      "Gracias Silvia y Marina por el acompañamiento en esta experiencia que fué MARAVILLOSA e INOLVIDABLE!! No duden en realizar ésta aventura con Prendete al camino!",
    estrellas: 5,
  },
  {
    id: 4,
    nombre: "Silvina Manganelli",
    avatar: null,
    texto:
      "Fin de semana en Valles Catamarqueños San José y Hualfin, descubrímos bellos lugares con un grupo muy divertido, todo organizado excelente!!!",
    estrellas: 5,
  },
  {
    id: 5,
    nombre: "Elida Rosana Suarez",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjXnQR_8-mNUEeiF5p4ByOtiMo7bbU9kgr2hdAS4_2K1w1KBPka0=w36-h36-p-rp-mo-br100",
    texto:
      "Excelente finde! Muy buena organización, atentos a todos los detalles, un grupo humano maravilloso, recomiendo!",
    estrellas: 5,
  },
  {
    id: 6,
    nombre: "Judith Affaticati",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjXOGi1BTsH2Yvvlb0gS1yEetcljGG9LjZHVB-0xW4lcCys7l4XE=w36-h36-p-rp-mo-br100",
    texto:
      "Excelente logística, excelente servicio, excelente calidad humana. Muy recomendable. Éxitos.Ya quiero ir otra vez.",
    estrellas: 5,
  },
  {
    id: 7,
    nombre: "Maria Silvia Rivero",
    avatar: null,
    texto:
      "Excelente organización, excelente logística, y sobre todo alta calidad humana!!! Altamente recomendable!!",
    estrellas: 5,
  },
  {
    id: 8,
    nombre: "Alejandra Brusco",
    avatar: null,
    texto:
      "Mi experiencia fue maravillosa. Desde el momento que decidi hacer el viaje hasta mi regreso. Silvia y Marina se ocuparon de los mas mínimos detalles . Los hoteles fueron excelentes, la organización 10  puntos . No me falto absolutamente nada . Lo recomiendo y volvería a hacerlo",
    estrellas: 5,
  },
  {
    id: 9,
    nombre: "Nilda Aguilar",
    avatar: null,
    texto: `Espectacular,  Maravillosa experiencia de la mano de PRENDETE AL CAMINO, con la Excelente guía de Silvita PEREZ MULKI. Está en todos los detalles: se cumple totalmente lo planificado.  En esta oportunidad,  San José de Catamarca- Valles Calchaquíes este finde INOLVIDABLE. La Seriedad,  la Calidez, la Responsabilidad puestas de manifiesto en cada etapa.  Los distintos lugares y paisajes haciendo lo que amamos: TREKKING en HUALFIN y VALLE DE LA LUNA; ALOJAMIENTO en Portal de la Luna: IMPECABLE, MUY BUEN
SERVICIO Y SOBRETODO LA ESMERADA ATENCIÓN. Sin duda, elijo DISFRUTAR con PRENDETE AL CAMINO.`,
    estrellas: 5,
  },
  {
    id: 10,
    nombre: "Marta Ortiz",
    avatar: null,
    texto: `Experiencia única todo impecable en cada detalle del viaje no faltó nada
Silvia y marina unas genias totales me sentí muy cuidada en cada momento
Gracias préndete al camino por este viaje mágico ❤️`,
    estrellas: 5,
  },
  {
    id: 11,
    nombre: "Hebe Carrizo",
    avatar: null,
    texto:
      "El viaje a Jujuy para conocer la Garganta del Diablo, Uquía con su Quebrada y Cuevas y también Inca Cueva...todo muy bien planificado, cumpliendo con todo lo pactado. La guía de Silvia Perez Mulki y Co.impecable. PRENDETE AL CAMINO...seguro la pasarás de 10!!",
    estrellas: 5,
  },
  {
    id: 12,
    nombre: "Romina Prieto",
    avatar: null,
    texto:
      "Me prendí al camino y jamás pensé que me iba a llenar el alma, sentí que estaba en familia, el grupo muy humano y ni que hablar de SIL, SERGIO, MARINA Y NACHO,los mejores coordinadores que podes tener, no solo por la dedicación que le ponen a cada cosa, también te hacen sentir familia, los elijo para seguir en este hermoso camino.. Muchas gracias",
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

  const renderEstrellas = (cantidad: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${
          i < cantidad ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section
      id="testimonios"
      className="py-16"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-12 flex items-center justify-center gap-4 mb-4">
          <h3 className="text-4xl font-bold" style={{ color: "#404d21" }}>
            ELLOS YA SE PRENDIERON AL CAMINO
          </h3>
          <a
            href="https://www.google.com.ar/maps/place/Prendete+al+Camino/@-26.8029624,-65.2515868,17z/data=!4m8!3m7!1s0x94225d0005e4e36b:0x12eed56b3e3f59d7!8m2!3d-26.8029672!4d-65.2490119!9m1!1b1!16s%2Fg%2F11m786kw6l?hl=es&entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <MapPin className="w-6 h-6 text-gray-600" />
          </a>
        </div>

        {/* Carrusel */}
        <div className="relative">
          {/* Testimonios visibles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {testimoniosVisibles.map((testimonio, index) => (
              <div
                key={testimonio.id}
                className="bg-white rounded-2xl shadow-lg p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  {testimonio.avatar ? (
                    <Avatar>
                      <AvatarImage src={testimonio.avatar} />
                    </Avatar>
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-xl font-bold">
                      {testimonio.nombre.charAt(0)}
                    </div>
                  )}
                </div>

                <h4
                  className="text-lg font-semibold mb-2"
                  style={{ color: "#404d21" }}
                >
                  {testimonio.nombre}
                </h4>

                <div className="flex justify-center mb-4">
                  {renderEstrellas(testimonio.estrellas)}
                </div>

                <blockquote className="text-sm text-gray-700 italic leading-relaxed max-h-48 h-48 overflow-y-auto">
                  "{testimonio.texto}"
                </blockquote>
              </div>
            ))}
          </div>

          {/* Indicadores */}
          <div className="flex justify-center items-center mt-8 space-x-2">
            {/* Controles de navegación */}
            <button
              onClick={anteriorTestimonio}
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => irA(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === testimonioActual
                    ? "bg-green-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}

            {/* Controles de navegación */}
            <button
              onClick={siguienteTestimonio}
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
