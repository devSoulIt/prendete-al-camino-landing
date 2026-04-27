"use client";

import { useRef, useState } from "react";
import { Plane, Bus, Hotel, Coffee, Utensils, Clock, Ticket, Smile, MapPin, Users, Play, Pause, Volume2, VolumeX } from "lucide-react";

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
    <section
      id="peru"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1a2410 0%, #2d3d18 40%, #404d21 100%)" }}
    >
      {/* Textura decorativa superior */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, #ffd600, #ff8c00, #ffd600)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

        {/* ─── ENCABEZADO ─── */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-green-900 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <MapPin className="w-3 h-3" /> Salida grupal · Cupos limitados
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight">
            PRENDETE
          </h2>
          <h2
            className="text-5xl md:text-7xl font-black leading-none tracking-tight"
            style={{ color: "#ffd600" }}
          >
            PERÚ
          </h2>
          <p className="text-green-300 text-lg md:text-xl mt-3 font-light tracking-wide">
            Viví tu sueño · <span className="font-semibold text-white">Machu Picchu 2026</span>
          </p>
        </div>

        {/* ─── GRID PRINCIPAL ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* COLUMNA IZQUIERDA – Video */}
          <div className="flex flex-col gap-4 items-center">

            {/* Video en formato reel 9:16 */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black w-full max-w-[340px] mx-auto" style={{ aspectRatio: "9/16" }}>
              <video
                ref={videoRef}
                src="/images/Machupichu/video1.mp4"
                autoPlay
                loop
                muted={muted}
                playsInline
                className="w-full h-full object-cover"
              />
              {/* Controles */}
              <div className="absolute bottom-3 right-3 flex gap-2">
                <button
                  onClick={togglePlay}
                  className="bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-all"
                >
                  {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-all"
                >
                  {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* ─── DESTINOS ─── */}
            <div className="grid grid-cols-2 gap-3">
              {destinos.map((d) => (
                <div
                  key={d.ciudad}
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm"
                >
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-yellow-400 font-black text-lg">{d.dias}</span>
                    <span className="text-white font-bold text-sm">en {d.ciudad}</span>
                  </div>
                  <ul className="space-y-1">
                    {d.lugares.map((l) => (
                      <li key={l} className="text-green-300 text-xs flex items-start gap-1">
                        <span className="text-yellow-400 mt-0.5">·</span> {l}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* COLUMNA DERECHA – Info */}
          <div className="flex flex-col gap-6">

            {/* Fechas + precio */}
            <div className="bg-white/5 border border-yellow-400/30 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-green-300 text-xs uppercase tracking-widest font-semibold mb-1">Fecha de salida</p>
                  <p className="text-white text-2xl font-black">03 AL 11</p>
                  <p className="text-yellow-400 text-xl font-bold">DE OCTUBRE 2026</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Users className="w-4 h-4 text-green-400" />
                    <span className="text-green-300 text-sm">Salida grupal desde Buenos Aires</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-green-300 text-xs uppercase tracking-widest font-semibold mb-1">Desde</p>
                  <p className="text-white text-4xl font-black">2250</p>
                  <p className="text-yellow-400 text-xl font-bold">USD</p>
                  <p className="text-green-300 text-xs mt-1">en base doble</p>
                </div>
              </div>

              {/* Barra divisoria */}
              <div className="border-t border-white/10 my-4" />

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-300 text-xs uppercase tracking-widest font-semibold">Reserva con seña</p>
                  <p className="text-white text-2xl font-black">300 <span className="text-yellow-400">USD</span></p>
                </div>
                <div className="flex gap-2 flex-wrap justify-end">
                  <span className="bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-xs px-3 py-1 rounded-full font-semibold">9 días · 8 noches</span>
                  <span className="bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-xs px-3 py-1 rounded-full font-semibold">Cuotas disponibles</span>
                </div>
              </div>
            </div>

            {/* Qué incluye */}
            <div>
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="w-8 h-px bg-yellow-400 inline-block" /> QUÉ INCLUYE
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {includes.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 bg-white/5 hover:bg-white/10 transition-colors rounded-xl px-3 py-2.5 border border-white/5"
                  >
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-yellow-400/15 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-yellow-400" />
                    </div>
                    <span className="text-green-200 text-xs leading-tight">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/5491150500471?text=Hola!%20Me%20interesa%20el%20viaje%20a%20Per%C3%BA%20-%20Machu%20Picchu%202026"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-black text-base uppercase tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-yellow-500/30"
                style={{ background: "linear-gradient(135deg, #ffd600, #ff8c00)", color: "#1a2410" }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.122 1.533 5.855L.057 23.885l6.195-1.624A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.012-1.379l-.359-.213-3.722.976.996-3.638-.234-.374A9.787 9.787 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
                ¡Me anoto!
              </a>
              <a
                href="#contacto"
                className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-black text-sm uppercase tracking-wide border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300"
              >
                Consultar precio
              </a>
            </div>

            <p className="text-green-400/60 text-xs text-center">
              Reserva tu lugar con seña · Cupos limitados · Precios en USD
            </p>
          </div>
        </div>
      </div>

      {/* Textura decorativa inferior */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, #ffd600, #ff8c00, #ffd600)" }}
      />
    </section>
  );
}
