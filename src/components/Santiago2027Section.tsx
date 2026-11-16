"use client";

import { useEffect, useRef, useState } from "react";
import {
  Plane, Hotel, Utensils, Luggage, Footprints, Heart, MapPin, Moon, Users,
  Play, Pause, Volume2, VolumeX, Sparkles, Check, X,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_SANTIAGO_URL } from "@/lib/site";

/**
 * Datos comerciales confirmados por Silvia (16/11/2026).
 * Si alguno se pone en null, el bloque muestra "Consultanos" en su lugar.
 */
const PRECIO_USD: string | null = "5.430";
const SENA_USD: string | null = "1.900";
/** Qué beneficio concreto reciben los primeros 5 inscriptos */
const EARLY_BIRD_DETALLE: string | null =
  "Las primeras 5 personas en inscribirse reciben de obsequio la excursión al Santuario de Fátima.";

const WHATSAPP_RESERVA =
  "https://api.whatsapp.com/send?phone=543815184516&text=Hola%F0%9F%91%8B%20quiero%20reservar%20mi%20lugar%20en%20Santiago%20de%20Compostela%202027";

/** Lo que coordinamos nosotros: se cuenta como servicio, no como lista suelta */
const incluye = [
  { icon: Plane, titulo: "Vuelos y traslados", texto: "Coordinados y confirmados antes de salir, de punta a punta." },
  { icon: Hotel, titulo: "Alojamiento elegido", texto: "Hoteles seleccionados uno por uno para descansar en cada etapa." },
  { icon: Utensils, titulo: "Media pensión", texto: "Desayuno y cena resueltos todos los días del Camino." },
  { icon: Luggage, titulo: "Traslado de maletas", texto: "Tu equipaje viaja de hotel a hotel; vos caminás liviano." },
  { icon: Footprints, titulo: "Entrenamiento previo", texto: "Caminatas progresivas para llegar preparado/a y seguro/a." },
  { icon: Heart, titulo: "Acompañamiento 24/7", texto: "Silvia y Marina con el grupo antes, durante y después." },
];

// TODO(creadoras): confirmar la lista de servicios no incluidos.
const noIncluye = [
  "Seguro de viaje (cada viajero contrata el suyo)",
  "Almuerzos",
  "Gastos personales y todo lo no detallado",
];

const recorrido = [
  {
    lugar: "Lisboa",
    nota: "4 noches",
    detalle: "Recorremos la ciudad, con visita opcional a Fátima, uno de los santuarios marianos más importantes del mundo.",
  },
  {
    lugar: "Camino a Santiago desde Baiona",
    nota: "6 etapas",
    detalle: "Arrancamos en una de las playas más hermosas de España y caminamos por la costa hasta Santiago.",
  },
  {
    lugar: "Santiago de Compostela",
    nota: "2 noches",
    detalle: "Ciudad Patrimonio de la Humanidad. Cruzamos la Puerta Santa, con todas las bendiciones que trae para el peregrino.",
  },
  {
    lugar: "Madrid",
    nota: "Cierre del viaje",
    detalle: "Terminamos la experiencia en esta ciudad mágica.",
  },
];

export function Santiago2027Section() {
  return (
    <section id="santiago-2027" className="bg-pac-bg py-16 md:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] bg-pac-olive-dark px-5 py-12 md:p-16 text-pac-surface">

          {/* Encabezado */}
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-pac-yellow px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.08em] text-pac-olive-dark">
              <MapPin className="w-3.5 h-3.5" strokeWidth={2.4} aria-hidden="true" />
              Salida grupal · Cupos limitados
            </span>
            <h2 className="font-serif font-medium text-[44px] md:text-[68px] leading-[1.02]">
              Prendete Santiago 2027
            </h2>
            <p className="text-[17px] md:text-[19px] text-pac-surface/80 max-w-[560px]">
              Un Camino eterno, un año único: el{" "}
              <strong className="font-bold text-pac-yellow">Camino Portugués de la Costa</strong>{" "}
              hasta la Catedral de Compostela, con todo resuelto.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">

            {/* Columna izquierda: reel y recorrido */}
            <div className="flex flex-col gap-5 items-center">
              <Reel />

              <div className="w-full rounded-[18px] border border-pac-surface/15 bg-pac-surface/[0.06] p-5">
                <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-pac-surface/60 mb-4">
                  El recorrido
                </p>
                <ol className="relative flex flex-col gap-4">
                  <span aria-hidden="true" className="absolute left-[5px] top-2 bottom-2 w-px bg-pac-yellow/30" />
                  {recorrido.map((r) => (
                    <li key={r.lugar} className="relative pl-6">
                      <span aria-hidden="true" className="absolute left-0 top-[6px] h-[11px] w-[11px] rounded-full bg-pac-yellow" />
                      <p className="flex flex-wrap items-baseline gap-x-2 text-[15px] font-bold">
                        {r.lugar}
                        <span className="text-[12px] font-semibold text-pac-yellow">{r.nota}</span>
                      </p>
                      <p className="text-[13px] leading-[1.4] text-pac-surface/75">{r.detalle}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Columna derecha: fechas, precio, early bird, incluye */}
            <div className="flex flex-col gap-7">
              <div className="rounded-[20px] border border-pac-yellow/30 bg-pac-surface/[0.06] p-6">
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-pac-surface/60 mb-1.5">
                      Fechas previstas
                    </p>
                    <p className="font-serif font-medium text-[34px] leading-none">7 al 23</p>
                    <p className="text-[18px] font-extrabold text-pac-yellow mt-1">
                      de junio 2027
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <Users className="w-4 h-4 text-pac-yellow shrink-0" strokeWidth={2} aria-hidden="true" />
                      <span className="text-[14px] text-pac-surface/80">
                        Salida grupal desde Argentina
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-pac-surface/60 mb-1.5">
                      {PRECIO_USD ? "Desde" : "Precio"}
                    </p>
                    {PRECIO_USD ? (
                      <>
                        <p className="font-serif font-medium text-[42px] leading-none">{PRECIO_USD}</p>
                        <p className="text-[18px] font-extrabold text-pac-yellow mt-1">USD</p>
                      </>
                    ) : (
                      <p className="font-serif font-medium text-[26px] leading-tight">
                        Consultanos
                      </p>
                    )}
                  </div>
                </div>

                <div className="border-t border-pac-surface/15 my-5" />

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-pac-surface/60">
                      Reserva con seña
                    </p>
                    <p className="font-serif font-medium text-[24px] leading-tight">
                      {SENA_USD ? (
                        <>{SENA_USD} <span className="text-pac-yellow">USD</span></>
                      ) : (
                        "Asegurá tu lugar"
                      )}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-end">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-pac-yellow/30 bg-pac-yellow/10 px-3 py-1.5 text-[12px] font-semibold text-pac-yellow">
                      <Moon className="w-3.5 h-3.5" aria-hidden="true" />
                      16 noches
                    </span>
                    <span className="rounded-full border border-pac-yellow/30 bg-pac-yellow/10 px-3 py-1.5 text-[12px] font-semibold text-pac-yellow">
                      Saldo en cuotas
                    </span>
                  </div>
                </div>
              </div>

              {/* Early Bird */}
              <div className="rounded-[20px] bg-pac-yellow text-pac-olive-dark p-6 flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pac-olive-dark/10">
                  <Sparkles className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[12px] font-extrabold uppercase tracking-[0.14em]">
                    Early Bird · primeros 5 cupos
                  </p>
                  <p className="mt-1 text-[15px] leading-[1.5]">
                    {EARLY_BIRD_DETALLE ??
                      "Las primeras 5 personas en inscribirse acceden a un beneficio exclusivo. Escribinos y te contamos de qué se trata."}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.14em] mb-2">
                  <span className="inline-block w-8 h-px bg-pac-yellow" aria-hidden="true" />
                  Nos ocupamos de todo
                </h3>
                <p className="text-[14px] leading-[1.55] text-pac-surface/75 mb-4">
                  Organizamos el viaje de forma integral y te acompañamos en cada paso,
                  para que vos solo tengas que caminar.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {incluye.map(({ icon: Icon, titulo, texto }) => (
                    <div
                      key={titulo}
                      className="flex items-start gap-3 rounded-[14px] border border-pac-surface/10 bg-pac-surface/[0.06] px-3.5 py-3"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-pac-yellow/15">
                        <Icon className="w-[18px] h-[18px] text-pac-yellow" strokeWidth={1.9} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-[14px] font-bold">{titulo}</span>
                        <span className="block text-[13px] leading-[1.4] text-pac-surface/75">{texto}</span>
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-[14px] border border-dashed border-pac-surface/20 px-4 py-3">
                  <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-pac-surface/60 mb-2">
                    No incluye
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {noIncluye.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[13px] leading-[1.4] text-pac-surface/75">
                        <X className="w-3.5 h-3.5 mt-[2px] shrink-0 text-pac-surface/50" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={WHATSAPP_RESERVA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pac-btn-primary flex-1"
                >
                  <FaWhatsapp className="w-5 h-5" aria-hidden="true" />
                  Reservar mi lugar
                </a>
                <a
                  href={WHATSAPP_SANTIAGO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center h-14 px-6 rounded-full border-[1.5px] border-pac-surface/35 text-pac-surface font-bold text-[15px] transition-colors duration-200 hover:bg-pac-surface/10"
                >
                  Hacer una consulta
                </a>
              </div>

              <p className="flex items-center justify-center gap-2 text-[13px] text-center text-pac-surface/60">
                <Check className="w-4 h-4 text-pac-yellow" aria-hidden="true" />
                Reservá con seña · Saldo en cuotas · Cupos limitados
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Reel vertical: se carga y reproduce recién cuando entra en pantalla */
function Reel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().then(() => setPlaying(true)).catch(() => {});
        } else {
          video.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) {
      video.pause();
      setPlaying(false);
    } else {
      video.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (videoRef.current) videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <div
      className="relative w-full max-w-[340px] mx-auto rounded-[24px] overflow-hidden bg-black shadow-[0_24px_50px_rgba(0,0,0,0.35)]"
      style={{ aspectRatio: "9/16" }}
    >
      <video
        ref={videoRef}
        src="/images/Santiago2027/reel.mp4"
        poster="/images/Santiago2027/reel-poster.webp"
        loop
        muted
        playsInline
        preload="none"
        aria-label="Reel del Camino de Santiago con Prendete al Camino"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-3 right-3 flex gap-2">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? "Pausar el video" : "Reproducir el video"}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-pac-surface transition-colors hover:bg-black/80"
        >
          {playing
            ? <Pause className="w-[18px] h-[18px]" aria-hidden="true" />
            : <Play className="w-[18px] h-[18px]" aria-hidden="true" />}
        </button>
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Activar el sonido" : "Silenciar el video"}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-pac-surface transition-colors hover:bg-black/80"
        >
          {muted
            ? <VolumeX className="w-[18px] h-[18px]" aria-hidden="true" />
            : <Volume2 className="w-[18px] h-[18px]" aria-hidden="true" />}
        </button>
      </div>
    </div>
  );
}
