'use client'
import Image from "next/image";
import {
  Plane,
  Hotel,
  ClipboardCheck,
  Footprints,
  Users,
  Heart,
  type LucideIcon,
} from "lucide-react";

type Detalle = {
  icon: LucideIcon;
  titulo: string;
  texto: string;
  destacada?: boolean;
};

// Tarjetas de "Por qué con nosotros" (bloque "Nos ocupamos de cada detalle" de la maqueta).
const detalles: Detalle[] = [
  {
    icon: Plane,
    titulo: "Traslados y equipaje",
    texto: "Vuelos, traslados y el paso de tu maleta de hotel a hotel, coordinados y confirmados antes de salir. Vos caminás liviano.",
  },
  {
    icon: Hotel,
    titulo: "Alojamiento y media pensión",
    texto: "Elegimos cada hotel para que descanses bien, y el desayuno y la cena ya están resueltos al final de cada etapa.",
  },
  {
    icon: Footprints,
    titulo: "Preparación previa",
    texto: "Un plan de caminatas progresivas y encuentros antes del viaje para que llegues preparado/a y seguro/a, sin experiencia previa.",
  },
  {
    icon: ClipboardCheck,
    titulo: "Organización integral",
    texto: "Un solo equipo coordina reservas, horarios y cambios. Si algo se mueve en el camino, lo resolvemos nosotros.",
  },
  {
    icon: Users,
    titulo: "Grupos reducidos",
    texto: "Viajás con personas que comparten la misma energía. Podés venir solo o sola: el grupo te recibe.",
  },
  {
    icon: Heart,
    titulo: "Acompañamiento en cada paso",
    texto: "Silvia y Marina están con vos antes, durante y después del viaje. Nunca caminás solo/a.",
    destacada: true,
  },
];

export function SantiagoSection() {
  return (
    <section className="bg-pac-bg py-20 md:py-24">
      <div className="flex flex-col gap-16 md:gap-24">

        {/* Quiénes somos */}
        <div id="sobre-nosotros" className="bg-pac-surface border-y border-pac-olive/10 py-14 md:py-20 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

              {/* Foto de Silvia + tarjeta flotante */}
              <div className="relative lg:col-span-5">
                <div className="overflow-hidden rounded-[24px] h-[300px] lg:h-[560px] shadow-[0_24px_50px_rgba(31,36,20,0.14)]">
                  <Image
                    src="/images/sobre_nosotros_silvi.jpg"
                    alt="Silvia Pérez Mulki, guía de turismo de Prendete al Camino"
                    width={800}
                    height={1120}
                    quality={90}
                    className="w-full h-full object-cover object-[center_top]"
                  />
                </div>
                <div className="mt-5 lg:mt-0 lg:absolute lg:-right-[24px] lg:bottom-[40px] lg:w-[240px] rounded-[18px] bg-pac-olive px-[22px] py-[20px] flex flex-col gap-[6px] lg:shadow-[0_16px_30px_rgba(31,36,20,0.25)]">
                  <p className="text-[16px] font-extrabold text-pac-surface">Silvia Pérez Mulki</p>
                  <p className="text-[13px] leading-[1.45] text-pac-surface/80">
                    Odontóloga de vocación, guía de turismo por pasión. Más de 10 años acompañando grupos.
                  </p>
                </div>
              </div>

              {/* Texto */}
              <div className="lg:col-start-7 lg:col-span-6 flex flex-col gap-5 md:gap-6">
                <p className="pac-eyebrow">Quiénes somos</p>
                <h2 className="pac-title text-[30px] md:text-[40px] lg:text-[48px]">
                  Somos peregrinos que ya vivimos la magia del Camino de Santiago y hoy te acompañamos a vivirla
                </h2>
                <p className="text-[15px] md:text-[17px] leading-[1.65] text-pac-body">
                  Somos una organización argentina de viajes y senderismo guiado, liderada por{" "}
                  <strong className="font-bold text-pac-olive">Silvia Pérez Mulki</strong>, odontóloga de vocación y{" "}
                  <strong className="font-bold text-pac-olive">guía de turismo por pasión</strong>, junto a un equipo que te acompaña desde la primera consulta hasta el regreso a casa.
                </p>
                <p className="text-[15px] md:text-[17px] leading-[1.65] text-pac-body">
                  Para nosotros caminar no es solo una actividad física: es una{" "}
                  <strong className="font-bold text-pac-olive">experiencia integral que conecta cuerpo, mente y alma</strong>. Por eso cuidamos cada detalle, para que la vivas plenamente y con la tranquilidad de saber que alguien está pendiente de vos.
                </p>
                <p className="font-serif italic text-pac-olive text-[22px] md:text-[26px] border-l-[3px] border-pac-yellow pl-5">
                  ¡Caminamos a tu lado!
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Qué hacemos */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Foto: primero en móvil, a la derecha en escritorio */}
            <div className="order-first lg:order-last lg:col-start-8 lg:col-span-5">
              <div className="overflow-hidden rounded-[24px] h-[300px] lg:h-[560px] shadow-[0_24px_50px_rgba(31,36,20,0.14)]">
                <Image
                  src="/images/sobre_nosotros.jpg"
                  alt="Grupo de Prendete al Camino caminando hacia Santiago de Compostela"
                  width={800}
                  height={1120}
                  quality={90}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Texto */}
            <div className="lg:col-start-1 lg:col-span-6 flex flex-col gap-5 md:gap-6">
              <p className="pac-eyebrow">Qué hacemos</p>
              <h2 className="pac-title text-[30px] md:text-[40px] lg:text-[48px]">
                Organizamos viajes y experiencias durante todo el año, pero el más especial de todos es el &ldquo;Camino de Santiago&rdquo;
              </h2>
              <p className="text-[15px] md:text-[17px] leading-[1.65] text-pac-body">
                Diseñamos cada viaje <strong className="font-bold text-pac-olive">de punta a punta</strong>: coordinamos vuelos, traslados, alojamiento, comidas y la preparación previa para que todo encaje y vos no tengas que resolver nada.
              </p>
              <p className="text-[15px] md:text-[17px] leading-[1.65] text-pac-body">
                Así, tu única tarea es{" "}
                <strong className="font-bold text-pac-olive">disfrutar de caminar y vivir la experiencia con toda intensidad.</strong>
              </p>
            </div>

          </div>
        </div>

        {/* Por qué con nosotros */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col gap-8 md:gap-10">

            <div className="flex flex-col gap-3 max-w-[720px]">
              <p className="pac-eyebrow">Por qué con nosotros</p>
              <h2 className="pac-title text-[30px] md:text-[40px] lg:text-[48px]">
                Nos ocupamos de cada detalle para que vos solo disfrutes de caminar
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {detalles.map(({ icon: Icono, titulo, texto, destacada }) => (
                <div
                  key={titulo}
                  className={`pac-card p-[28px] flex flex-col gap-[14px] ${destacada ? "bg-pac-olive border-pac-olive" : ""}`}
                >
                  <div
                    className={`w-[48px] h-[48px] rounded-[14px] flex items-center justify-center shrink-0 ${destacada ? "bg-pac-yellow/[0.18]" : "bg-pac-olive/[0.08]"}`}
                  >
                    <Icono
                      size={24}
                      strokeWidth={1.8}
                      className={destacada ? "text-pac-yellow" : "text-pac-olive"}
                      aria-hidden="true"
                    />
                  </div>
                  <p className={`text-[18px] font-extrabold ${destacada ? "text-pac-surface" : "text-pac-ink"}`}>
                    {titulo}
                  </p>
                  <p className={`text-[15px] leading-[1.55] ${destacada ? "text-pac-surface/80" : "text-pac-body"}`}>
                    {texto}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-[15px] md:text-[17px] leading-[1.65] text-pac-body max-w-[720px]">
              Viajar tranquilo es saber que alguien ya pensó en todo. Por eso{" "}
              <strong className="font-bold text-pac-olive">nosotros nos ocupamos de la organización</strong> y te acompañamos en cada paso, para que vos solo tengas que disfrutarlo.
            </p>

            <div className="flex justify-center">
              <a href="#contacto" className="pac-btn-primary">
                Contactanos
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
