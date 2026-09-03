"use client";

import { useRef, useState } from "react";
import { Plane, Bus, Hotel, Coffee, Utensils, Clock, Ticket, Smile, MapPin, Users, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const includes = [
  { icon: Plane,    label: "Vuelos ARG → LIMA → CUSCO → ARG" },
  { icon: Bus,      label: "Todos los traslados" },
  { icon: Hotel,    label: "Hoteles en habitación base doble" },
  { icon: Coffee,   label: "Desayunos buffet" },
  { icon: Utensils, label: "Cena de bienvenida" },
  { icon: Clock,    label: "Acompañamiento 24/7" },
  { icon: Ticket,   label: "Entradas incluidas" },
  { icon: Smile,    label: "Tours guiados" },
];

const destinos = [
  {
    ciudad: "LIMA",
    dias: "3 días",
    lugares: ["Miraflores", "Centro Histórico", "Barranco"],
  },
  {
    ciudad: "CUSCO",
    dias: "6 días",
    lugares: [
      "Centro Histórico",
      "Machu Picchu",
      "Valle Sagrado",
      "Maras · Moray · Chinchero",
      "Sacsayhuamán · Qenqo",
      "Puka Pukara · Tambomachay",
    ],
  },
];

const WHATSAPP_PERU =
  "https://wa.me/5491150500471?text=Hola!%20Me%20interesa%20el%20viaje%20a%20Per%C3%BA%20-%20Machu%20Picchu%202026";

export function MachuPicchuSection() {
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    setMuted((m) => {
      if (videoRef.current) videoRef.current.muted = !m;
      return !m;
    });
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying((p) => !p);
  };

  return (
    <section id="peru" className="bg-pac-bg py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] bg-pac-olive-dark px-5 py-12 md:p-16 text-pac-surface">

          {/* Encabezado */}
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-pac-yellow px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.08em] text-pac-olive-dark">
              <MapPin className="w-3.5 h-3.5" strokeWidth={2.4} aria-hidden="true" />
              Salida grupal · Cupos limitados
            </span>
            <h2 className="font-serif font-medium text-[44px] md:text-[68px] leading-[1.02]">
              Prendete Perú
            </h2>
            <p className="text-[17px] md:text-[19px] text-pac-surface/80 max-w-[520px]">
              Viví tu sueño: <strong className="font-bold text-pac-yellow">Machu Picchu</strong>,
              del Valle Sagrado a Lima, con todo resuelto.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">

            {/* Columna izquierda: video y destinos */}
            <div className="flex flex-col gap-5 items-center">
              <div
                className="relative w-full max-w-[340px] mx-auto rounded-[24px] overflow-hidden bg-black shadow-[0_24px_50px_rgba(0,0,0,0.35)]"
                style={{ aspectRatio: "9/16" }}
              >
                <video
                  ref={videoRef}
                  src="/images/Machupichu/video1.mp4"
                  autoPlay
                  loop
                  muted={muted}
                  playsInline
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {destinos.map((d) => (
                  <div
                    key={d.ciudad}
                    className="rounded-[18px] border border-pac-surface/15 bg-pac-surface/[0.06] p-5"
                  >
                    <div className="flex items-baseline gap-2 mb-2.5">
                      <span className="text-[18px] font-extrabold text-pac-yellow">{d.dias}</span>
                      <span className="text-[14px] font-bold">en {d.ciudad}</span>
                    </div>
                    <ul className="flex flex-col gap-1.5">
                      {d.lugares.map((l) => (
                        <li key={l} className="flex items-start gap-2 text-[13px] leading-[1.4] text-pac-surface/75">
                          <span className="text-pac-yellow mt-[2px]" aria-hidden="true">·</span>
                          {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna derecha: fechas, precio y qué incluye */}
            <div className="flex flex-col gap-7">
              <div className="rounded-[20px] border border-pac-yellow/30 bg-pac-surface/[0.06] p-6">
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-pac-surface/60 mb-1.5">
                      Fecha de salida
                    </p>
                    <p className="font-serif font-medium text-[34px] leading-none">3 al 11</p>
                    <p className="text-[18px] font-extrabold text-pac-yellow mt-1">
                      de octubre 2026
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <Users className="w-4 h-4 text-pac-yellow shrink-0" strokeWidth={2} aria-hidden="true" />
                      <span className="text-[14px] text-pac-surface/80">
                        Salida grupal desde Buenos Aires
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-pac-surface/60 mb-1.5">
                      Desde
                    </p>
                    <p className="font-serif font-medium text-[42px] leading-none">2250</p>
                    <p className="text-[18px] font-extrabold text-pac-yellow mt-1">USD</p>
                    <p className="text-[13px] text-pac-surface/70 mt-1">en base doble</p>
                  </div>
                </div>

                <div className="border-t border-pac-surface/15 my-5" />

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-pac-surface/60">
                      Reserva con seña
                    </p>
                    <p className="font-serif font-medium text-[28px] leading-tight">
                      300 <span className="text-pac-yellow">USD</span>
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-end">
                    <span className="rounded-full border border-pac-yellow/30 bg-pac-yellow/10 px-3 py-1.5 text-[12px] font-semibold text-pac-yellow">
                      9 días · 8 noches
                    </span>
                    <span className="rounded-full border border-pac-yellow/30 bg-pac-yellow/10 px-3 py-1.5 text-[12px] font-semibold text-pac-yellow">
                      Cuotas disponibles
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.14em] mb-4">
                  <span className="inline-block w-8 h-px bg-pac-yellow" aria-hidden="true" />
                  Qué incluye
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {includes.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 rounded-[14px] border border-pac-surface/10 bg-pac-surface/[0.06] px-3.5 py-3 transition-colors hover:bg-pac-surface/[0.12]"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-pac-yellow/15">
                        <Icon className="w-[18px] h-[18px] text-pac-yellow" strokeWidth={1.9} aria-hidden="true" />
                      </span>
                      <span className="text-[13px] leading-[1.35] text-pac-surface/85">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={WHATSAPP_PERU}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pac-btn-primary flex-1"
                >
                  <FaWhatsapp className="w-5 h-5" aria-hidden="true" />
                  Me anoto
                </a>
                <a
                  href="#contacto"
                  className="flex-1 inline-flex items-center justify-center h-14 px-6 rounded-full border-[1.5px] border-pac-surface/35 text-pac-surface font-bold text-[15px] transition-colors duration-200 hover:bg-pac-surface/10"
                >
                  Consultar precio
                </a>
              </div>

              <p className="text-[13px] text-center text-pac-surface/60">
                Reservá tu lugar con seña · Cupos limitados · Precios en USD
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
