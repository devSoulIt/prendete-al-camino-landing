'use client'
import { useRef, useState } from "react";
import { ArrowRight, CalendarDays, Star, Volume2, VolumeX } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_SANTIAGO_URL } from "@/lib/site";

export function HeroSection() {
  return (
    <section id="inicio" className="bg-pac-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-[72px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Texto */}
          <div className="flex flex-col gap-6 md:gap-7 lg:pr-6 order-2 lg:order-1">
            <p className="pac-eyebrow">
              Año Santo Compostelano · 7 al 23 de junio
            </p>

            <h1 className="pac-title text-[44px] md:text-[60px] lg:text-[76px] leading-[1.02] tracking-[-0.01em] [text-wrap:balance]">
              Santiago de Compostela{" "}
              <em className="italic font-semibold text-pac-olive">2027</em>
            </h1>

            <p className="font-serif italic text-[24px] md:text-[30px] leading-[1.2] text-pac-olive">
              Un Camino eterno, un año único.
            </p>

            <p className="text-[17px] md:text-[19px] leading-[1.6] text-pac-body max-w-[520px]">
              Lisboa, Fátima, el Camino desde Baiona en 6 etapas, Santiago en
              pleno Año Santo y el cierre en Madrid. Nosotros nos ocupamos de
              todo para que vos solo tengas que caminar.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5">
              <a
                href={WHATSAPP_SANTIAGO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="pac-btn-primary"
              >
                <FaWhatsapp className="w-5 h-5" aria-hidden="true" />
                Quiero sumarme
              </a>
              <a href="#santiago-2027" className="pac-btn-ghost">
                Ver el viaje
                <ArrowRight className="w-[18px] h-[18px]" strokeWidth={2.2} />
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

          {/* Reel de lanzamiento: vertical, se muestra entero en 9:16 */}
          <div className="relative order-1 lg:order-2 w-full max-w-[340px] lg:max-w-[360px] mx-auto">
            <div className="relative aspect-[9/16] rounded-[24px] md:rounded-[28px] overflow-hidden bg-pac-olive-dark shadow-[0_30px_60px_rgba(31,36,20,0.18)]">
              <VideoLanzamiento />
            </div>

            <div className="absolute left-4 bottom-4 md:left-6 md:bottom-6 flex items-center gap-2.5 pl-3 pr-4 py-2.5 rounded-full bg-pac-surface/95 backdrop-blur-sm shadow-[0_6px_18px_rgba(0,0,0,0.12)]">
              <CalendarDays className="w-[18px] h-[18px] text-pac-olive shrink-0" strokeWidth={2} />
              <span className="text-[12px] md:text-[13px] font-semibold text-pac-olive-dark">
                7 al 23 de junio · 16 noches
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Reel de lanzamiento de Santiago 2027. Arranca sin sonido (los navegadores lo exigen). */
function VideoLanzamiento() {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !muted;
      // Al activar el sonido arranca desde el principio, para escuchar el mensaje completo.
      if (muted) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    }
    setMuted(!muted);
  };

  return (
    <>
      <video
        ref={videoRef}
        src="/images/Santiago2027/lanzamiento.mp4"
        poster="/images/Santiago2027/lanzamiento-poster.webp"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label="Video de lanzamiento de Santiago de Compostela 2027"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? "Activar el sonido" : "Silenciar el video"}
        className="absolute top-4 right-4 flex h-11 items-center gap-2 rounded-full bg-black/55 px-3.5 text-[13px] font-semibold text-pac-surface transition-colors hover:bg-black/75"
      >
        {muted ? (
          <>
            <VolumeX className="w-[18px] h-[18px]" aria-hidden="true" />
            Activar sonido
          </>
        ) : (
          <Volume2 className="w-[18px] h-[18px]" aria-hidden="true" />
        )}
      </button>
    </>
  );
}
