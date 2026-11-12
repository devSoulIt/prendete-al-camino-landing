'use client'
import Image from 'next/image';
import { useMemo, useRef, useState } from 'react';
import { Calendar, MapPin, Clock, Users, ChevronLeft, ChevronRight, Gift, Mountain } from 'lucide-react';

interface Viaje {
  id: string;
  titulo: string;
  fecha: string;
  duracion: string;
  ubicacion: string;
  participantes: string;
  descripcion: string;
  destacado: boolean;
  /** Foto de la tarjeta y del carrusel "Ya viajamos a…" */
  imagen?: string;
  /** Ancla de su galería, para el carrusel "Ya viajamos a…" */
  galeria?: string;
  /**
   * Override manual. Normalmente el estado se deduce de la fecha del viaje
   * (ver esFinalizado); solo hace falta para casos especiales.
   */
  finalizado?: boolean;
  /** Anio de la salida */
  anio: number;
  mes: number;
  dias: number[];
}

const rango = (desde: number, hasta: number) =>
  Array.from({ length: hasta - desde + 1 }, (_, i) => desde + i);

/**
 * Todas las salidas. Cuando un viaje termina deja de aparecer en "Próximos
 * viajes" y pasa solo al carrusel "Ya viajamos a…" de su año; el 1 de enero
 * ese carrusel arranca de cero (y se oculta hasta que termine la primera
 * salida del año nuevo). Para que aparezca con foto, completar `imagen`.
 */
const viajes = (lanzamiento: boolean): Viaje[] => [
  {
    id: 'santiago-2027',
    titulo: 'Santiago de Compostela',
    // Las fechas se publican con el lanzamiento del 15/11 (ver lib/campania).
    fecha: lanzamiento ? '7-23 Junio 2027' : 'Junio 2027 · fecha a confirmar',
    duracion: lanzamiento ? '16 noches' : 'Próximamente',
    ubicacion: 'Portugal & España',
    participantes: 'Grupo reducido',
    descripcion: 'Camino Portugués de la Costa hasta la Catedral de Compostela',
    destacado: true,
    imagen: '/images/Portadas/Santiago de Compostela .webp',
    anio: 2027,
    mes: 5, // Junio (0-indexed)
    dias: lanzamiento ? rango(7, 23) : [],
  },
  {
    id: 'termas-2026',
    titulo: 'Termas de Rosario de la Frontera',
    fecha: '14-15 Noviembre 2026',
    duracion: '2 días',
    ubicacion: 'Rosario de la Frontera, Salta',
    participantes: 'Grupo reducido',
    descripcion: 'Trekking y relax',
    destacado: false,
    imagen: '/images/Termas%20de%20Rosario%20de%20la%20frontera/3.webp',
    galeria: '#galeria-nacional',
    anio: 2026,
    mes: 10, // Noviembre (0-indexed)
    dias: [14, 15]
  },
  {
    id: 'tafi-2026',
    titulo: 'Tafí del Valle',
    fecha: 'Sábado 17 Octubre 2026',
    duracion: 'Salida de un día',
    ubicacion: 'Tafí del Valle, Tucumán',
    participantes: 'Grupo reducido',
    descripcion: 'Una jornada entre cerros y el valle tucumano',
    destacado: false,
    imagen: '/images/Tafi/tafi-1.webp',
    anio: 2026,
    mes: 9, // Octubre (0-indexed)
    dias: [17]
  },
  {
    id: 'peru-2026',
    titulo: 'Perú · Machu Picchu',
    fecha: '3-11 Octubre 2026',
    duracion: '9 días / 8 noches',
    ubicacion: 'Lima & Cusco, Perú',
    participantes: 'Salida grupal',
    descripcion: 'Lima · Miraflores · Centro Histórico · Machu Picchu · Valle Sagrado',
    destacado: true,
    imagen: '/images/Peru/machu-picchu-2.webp',
    galeria: '#peru',
    anio: 2026,
    mes: 9, // Octubre (0-indexed)
    dias: rango(3, 11)
  },
  {
    id: 'italia-2026',
    titulo: 'Italia',
    fecha: '10-20 Junio 2026',
    duracion: '11 días',
    ubicacion: 'Italia',
    participantes: 'Grupo reducido',
    descripcion: 'Descubrí la belleza y cultura de Italia',
    destacado: false,
    imagen: '/images/Roma/3.jpg',
    galeria: '#galeria',
    anio: 2026,
    mes: 5, // Junio (0-indexed)
    dias: rango(10, 20)
  },
  {
    id: 'santiago-2026',
    titulo: 'Santiago de Compostela',
    fecha: '1-10 Junio 2026',
    duracion: '10 días',
    ubicacion: 'España',
    participantes: 'Grupo reducido',
    descripcion: 'El camino espiritual más famoso del mundo',
    destacado: true,
    imagen: '/images/Santiago/2026/WhatsApp Image 2026-09-30 at 11.20.22.webp',
    galeria: '#galeria',
    anio: 2026,
    mes: 5, // Junio (0-indexed)
    dias: rango(1, 10)
  },
  {
    id: 'san-carlos-2026',
    titulo: 'San Carlos Mágico',
    fecha: '21-23 Marzo 2026',
    duracion: '3 días',
    ubicacion: 'San Carlos, Argentina',
    participantes: 'Grupo reducido',
    descripcion: 'Fin de semana largo en los hermosos paisajes de San Carlos',
    destacado: false,
    imagen: '/images/San%20Carlos%20M%C3%A1gico/21.jpeg',
    galeria: '#galeria-nacional',
    anio: 2026,
    mes: 2, // Marzo (0-indexed)
    dias: [21, 22, 23]
  },
  {
    id: 'balcozna-2026',
    titulo: 'Balcozna',
    fecha: '10-11 Enero 2026',
    duracion: '2 días',
    ubicacion: 'Balcozna, Catamarca',
    participantes: 'Grupo reducido',
    descripcion: 'Explorá los paisajes únicos y la cultura de Catamarca',
    destacado: false,
    imagen: '/images/Balcozna/1.jpeg',
    galeria: '#galeria-nacional',
    anio: 2026,
    mes: 0, // Enero (0-indexed)
    dias: [10, 11]
  },
];

const meses = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

/** Medianoche de hoy, para comparar contra las fechas de los viajes */
const inicioDeHoy = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
};

/** Ultimo dia del viaje; sin dias cargados cuenta el ultimo dia del mes */
const finDelViaje = (viaje: Viaje) =>
  viaje.dias.length
    ? new Date(viaje.anio, viaje.mes, Math.max(...viaje.dias))
    : new Date(viaje.anio, viaje.mes + 1, 0);

/** Un viaje esta finalizado cuando su ultimo dia ya paso */
const esFinalizado = (viaje: Viaje, hoy: Date) => {
  if (typeof viaje.finalizado === 'boolean') return viaje.finalizado;
  return finDelViaje(viaje) < hoy;
};

/** Primer dia del viaje, para ordenar la lista */
const inicioDelViaje = (viaje: Viaje) =>
  new Date(viaje.anio, viaje.mes, viaje.dias.length ? Math.min(...viaje.dias) : 1).getTime();

interface CalendarioSectionProps {
  lanzamiento: boolean;
}

export function CalendarioSection({ lanzamiento }: CalendarioSectionProps) {
  // Este componente se renderiza solo en el cliente (durante el SSR la pagina
  // muestra LoadingScreen), asi que podemos leer la fecha real sin riesgo de
  // desajuste de hidratacion.
  const [hoy] = useState(inicioDeHoy);

  const { proximos, realizados } = useMemo(() => {
    const todos = viajes(lanzamiento);
    return {
      // Solo los viajes que todavia no terminaron, ordenados por fecha.
      proximos: todos
        .filter((v) => !esFinalizado(v, hoy))
        .sort((a, b) => inicioDelViaje(a) - inicioDelViaje(b)),
      // Los que ya terminaron este año, del más reciente al más antiguo.
      realizados: todos
        .filter((v) => esFinalizado(v, hoy) && v.anio === hoy.getFullYear())
        .sort((a, b) => inicioDelViaje(b) - inicioDelViaje(a)),
    };
  }, [hoy, lanzamiento]);

  // El calendario abre en el mes del proximo viaje; si no hay, en el mes actual.
  const proximoViaje = proximos[0];
  const [mesActual, setMesActual] = useState(
    proximoViaje ? proximoViaje.mes : hoy.getMonth()
  );
  const [añoActual, setAñoActual] = useState(
    proximoViaje ? proximoViaje.anio : hoy.getFullYear()
  );

  // No dejamos navegar hacia meses que ya pasaron.
  const enMesMinimo =
    añoActual === hoy.getFullYear() && mesActual === hoy.getMonth();

  const cambiarMes = (direccion: 'anterior' | 'siguiente') => {
    if (direccion === 'anterior') {
      if (enMesMinimo) return;
      if (mesActual === 0) {
        setMesActual(11);
        setAñoActual(añoActual - 1);
      } else {
        setMesActual(mesActual - 1);
      }
    } else {
      if (mesActual === 11) {
        setMesActual(0);
        setAñoActual(añoActual + 1);
      } else {
        setMesActual(mesActual + 1);
      }
    }
  };

  const getDiasDelMes = () => {
    const diasEnMes = new Date(añoActual, mesActual + 1, 0).getDate();
    const primerDia = new Date(añoActual, mesActual, 1).getDay();

    const dias = [];

    // Días del mes anterior
    for (let i = primerDia - 1; i >= 0; i--) {
      dias.push({ numero: '', esOtroMes: true });
    }

    // Días del mes actual
    for (let dia = 1; dia <= diasEnMes; dia++) {
      const esHoy = dia === hoy.getDate() && mesActual === hoy.getMonth() && añoActual === hoy.getFullYear();

      // Verificar si hay viajes en este día
      const viajeEnEsteDia = proximos.find((viaje) =>
        viaje.anio === añoActual &&
        viaje.mes === mesActual &&
        viaje.dias.includes(dia)
      );

      dias.push({
        numero: dia,
        esHoy,
        tieneViaje: !!viajeEnEsteDia,
        viaje: viajeEnEsteDia,
        esOtroMes: false
      });
    }

    return dias;
  };

  return (
    <section id="calendario" className="py-20 md:py-24 bg-pac-bg border-t border-pac-olive/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="flex flex-col gap-4 mb-12">
          <div className="pac-eyebrow">Calendario</div>
          <h2 className="pac-title text-[32px] md:text-[48px]">
            Próximos viajes
          </h2>
          <p className="text-[16px] leading-[1.6] text-pac-body max-w-[560px]">
            Descubrí nuestras próximas aventuras y reservá tu lugar en experiencias únicas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Calendario */}
          <div className="pac-card rounded-[24px] p-6 md:p-8 shadow-[0_2px_12px_rgba(31,36,20,0.05)]">
            <div className="flex items-center justify-between gap-3 mb-6">
              <button
                type="button"
                onClick={() => cambiarMes('anterior')}
                disabled={enMesMinimo}
                aria-label="Mes anterior"
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-pac-olive/15 transition-colors ${enMesMinimo
                  ? 'opacity-40 cursor-not-allowed'
                  : 'hover:bg-pac-olive/[0.06]'
                  }`}
              >
                <ChevronLeft className={`w-5 h-5 ${enMesMinimo ? 'text-pac-muted' : 'text-pac-olive'}`} aria-hidden="true" />
              </button>
              <h3 className="font-serif font-medium text-[22px] md:text-[24px] text-pac-ink flex items-center gap-2.5">
                <Calendar className="w-5 h-5 text-pac-olive" aria-hidden="true" />
                {meses[mesActual]} {añoActual}
              </h3>
              <button
                type="button"
                onClick={() => cambiarMes('siguiente')}
                aria-label="Mes siguiente"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-pac-olive/15 transition-colors hover:bg-pac-olive/[0.06]"
              >
                <ChevronRight className="w-5 h-5 text-pac-olive" aria-hidden="true" />
              </button>
            </div>

            {/* Días de la semana */}
            <div className="grid grid-cols-7 gap-1.5 md:gap-2 mb-2">
              {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(dia => (
                <div key={dia} className="text-center text-[12px] font-bold uppercase tracking-[0.06em] text-pac-muted py-2">
                  {dia}
                </div>
              ))}
            </div>

            {/* Días del calendario */}
            <div className="grid grid-cols-7 gap-1.5 md:gap-2">
              {getDiasDelMes().map((dia, index) => (
                <div
                  key={index}
                  className={`
                    aspect-square flex items-center justify-center text-[13px] md:text-[14px] font-medium rounded-[10px] transition-colors duration-200
                    ${dia.esOtroMes ? 'text-pac-olive/25' : ''}
                    ${dia.esHoy ? 'bg-pac-olive text-pac-surface font-bold' : ''}
                    ${dia.tieneViaje && !dia.esHoy ? 'bg-pac-yellow text-pac-olive-dark font-bold ring-1 ring-inset ring-pac-olive/25' : ''}
                    ${!dia.esOtroMes && !dia.esHoy && !dia.tieneViaje ? 'text-pac-body hover:bg-pac-olive/[0.06]' : ''}
                  `}
                >
                  {dia.numero}
                </div>
              ))}
            </div>

            {/* Leyenda */}
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-pac-body">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-pac-olive" aria-hidden="true"></span>
                <span>Hoy</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-pac-yellow ring-1 ring-inset ring-pac-olive/25" aria-hidden="true"></span>
                <span>Viaje programado</span>
              </div>
            </div>
          </div>

          {/* Lista de viajes */}
          <div className="flex flex-col gap-5">
            {proximos.map((viaje) => (
              <TarjetaViaje key={viaje.id} viaje={viaje} />
            ))}

            {/* Viaje sorpresa: sin fecha ni precio a propósito */}
            {lanzamiento && (
              <div className="rounded-[24px] border-2 border-dashed border-pac-olive/25 px-6 py-5 flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pac-yellow/25">
                  <Gift className="w-[22px] h-[22px] text-pac-olive" strokeWidth={1.9} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-serif font-medium text-[20px] leading-[1.2] text-pac-ink">
                    Viaje sorpresa 2027 · <span className="italic text-pac-olive">Próximamente</span>
                  </p>
                  <p className="text-[14px] text-pac-body mt-0.5">Se viene algo GRANDE.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {realizados.length > 0 && (
          <YaViajamos viajes={realizados} anio={hoy.getFullYear()} />
        )}

        {/* Call to action */}
        <div className="hidden text-center mt-12">
          <p className="text-[16px] text-pac-body mb-6">
            ¿No encontrás lo que buscás? Contactanos para más opciones
          </p>
          <a href="#contacto" className="pac-btn-primary">
            Consultar disponibilidad
          </a>
        </div>
      </div>
    </section>
  );
}

function TarjetaViaje({ viaje }: { viaje: Viaje }) {
  return (
    <div
      className={`
        pac-card rounded-[24px] p-4 sm:p-5 shadow-[0_2px_12px_rgba(31,36,20,0.05)] flex flex-col sm:flex-row gap-4 sm:gap-5
        ${viaje.destacado ? 'border-l-[3px] border-l-pac-olive' : ''}
      `}
    >
      {viaje.imagen && (
        <div className="relative w-full h-44 sm:h-auto sm:w-36 shrink-0 sm:self-stretch sm:min-h-[120px] overflow-hidden rounded-[16px] bg-pac-olive/10">
          <Image
            src={viaje.imagen}
            alt={viaje.titulo}
            fill
            sizes="(max-width: 640px) 100vw, 144px"
            className="object-cover"
            quality={70}
          />
        </div>
      )}

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
          <h4 className="font-serif font-medium text-[21px] leading-[1.15] text-pac-ink">{viaje.titulo}</h4>
          {viaje.destacado && (
            <span className="bg-pac-yellow text-pac-olive-dark text-[11px] font-bold uppercase tracking-[0.08em] px-2.5 py-1 rounded-full">
              Destacado
            </span>
          )}
        </div>
        <p className="text-[14px] leading-[1.5] mb-3 text-pac-body">{viaje.descripcion}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
          <div className="flex items-center gap-2 text-pac-body">
            <Calendar className="w-4 h-4 shrink-0 text-pac-olive/70" aria-hidden="true" />
            <span className="text-[13px]">{viaje.fecha}</span>
          </div>
          <div className="flex items-center gap-2 text-pac-body">
            <Clock className="w-4 h-4 shrink-0 text-pac-olive/70" aria-hidden="true" />
            <span className="text-[13px]">{viaje.duracion}</span>
          </div>
          <div className="flex items-center gap-2 text-pac-body">
            <MapPin className="w-4 h-4 shrink-0 text-pac-olive/70" aria-hidden="true" />
            <span className="text-[13px]">{viaje.ubicacion}</span>
          </div>
          <div className="flex items-center gap-2 text-pac-body">
            <Users className="w-4 h-4 shrink-0 text-pac-olive/70" aria-hidden="true" />
            <span className="text-[13px]">{viaje.participantes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Carrusel chico con una foto por viaje ya realizado en el año en curso */
function YaViajamos({ viajes, anio }: { viajes: Viaje[]; anio: number }) {
  const pistaRef = useRef<HTMLUListElement>(null);

  const mover = (direccion: 1 | -1) => {
    const pista = pistaRef.current;
    if (pista) pista.scrollBy({ left: direccion * pista.clientWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <div className="mt-14 pt-10 border-t border-pac-olive/10 grid lg:grid-cols-[220px_1fr] gap-6 lg:gap-8 items-center">
      <div className="flex flex-col gap-2">
        <h3 className="font-serif font-medium text-[28px] md:text-[32px] leading-[1.1] text-pac-ink">
          Ya viajamos a…
        </h3>
        <p className="text-[14px] leading-[1.5] text-pac-body">
          Recuerdos de los <strong className="font-bold text-pac-ink">viajes realizados en {anio}</strong>.
          Experiencias que ya compartimos y que siguen inspirando nuevas aventuras.
        </p>
        {viajes.length > 3 && (
          <div className="hidden md:flex gap-2 mt-2">
            <button
              type="button"
              onClick={() => mover(-1)}
              aria-label="Viajes anteriores"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-pac-bg border border-pac-olive/15 text-pac-olive shadow-sm hover:bg-pac-surface"
            >
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => mover(1)}
              aria-label="Más viajes"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-pac-bg border border-pac-olive/15 text-pac-olive shadow-sm hover:bg-pac-surface"
            >
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>

      <div className="relative min-w-0">
        <ul
          ref={pistaRef}
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {viajes.map((viaje) => (
            <li key={viaje.id} className="snap-start shrink-0 w-[150px] md:w-[170px]">
              <a href={viaje.galeria ?? '#galeria'} className="group block pac-card overflow-hidden rounded-[16px]">
                <div className="relative h-[104px] overflow-hidden bg-pac-olive/10">
                  {viaje.imagen ? (
                    <Image
                      src={viaje.imagen}
                      alt={viaje.titulo}
                      fill
                      sizes="170px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      quality={65}
                    />
                  ) : (
                    <span className="absolute inset-0 flex items-center justify-center bg-pac-olive/[0.12]">
                      <Mountain className="w-8 h-8 text-pac-olive/50" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                  )}
                </div>
                <div className="px-3 py-2.5">
                  <p className="text-[13px] font-bold leading-[1.25] text-pac-ink truncate">{viaje.titulo}</p>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-pac-muted mt-0.5">
                    {meses[viaje.mes]} {viaje.anio}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}
