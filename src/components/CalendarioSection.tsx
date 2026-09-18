'use client'
import { useMemo, useState } from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface Viaje {
  id: string;
  titulo: string;
  fecha: string;
  duracion: string;
  ubicacion: string;
  participantes: string;
  descripcion: string;
  destacado: boolean;
  /**
   * Override manual. Normalmente el estado se deduce de la fecha del viaje
   * (ver esFinalizado); solo hace falta para casos especiales.
   */
  finalizado?: boolean;
  color: string;
  /** Anio de la salida */
  anio: number;
  mes: number;
  dias: number[];
}

const viajes: Viaje[] = [
  {
    id: '7',
    titulo: 'Prendete Perú · Machu Picchu',
    fecha: '3-11 Octubre 2026',
    duracion: '9 días / 8 noches',
    ubicacion: 'Lima & Cusco, Perú',
    participantes: 'Salida grupal',
    descripcion: 'Lima · Miraflores · Centro Histórico · Machu Picchu · Valle Sagrado',
    destacado: true,
    color: 'bg-gradient-to-r from-amber-500 to-orange-500',
    anio: 2026,
    mes: 9, // Octubre (0-indexed)
    dias: [3, 4, 5, 6, 7, 8, 9, 10, 11]
  },
  {
    id: '2',
    titulo: 'Santiago de Compostela',
    fecha: '1-10 Junio 2026',
    duracion: '10 días',
    ubicacion: 'España',
    participantes: 'Grupo reducido',
    descripcion: 'El camino espiritual más famoso del mundo',
    destacado: true,
    color: 'bg-gradient-to-r from-green-600 to-emerald-600',
    anio: 2026,
    mes: 5, // Junio (0-indexed)
    dias: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  {
    id: '3',
    titulo: 'Italia',
    fecha: '10-20 Junio 2026',
    duracion: '11 días',
    ubicacion: 'Italia',
    participantes: 'Grupo reducido',
    descripcion: 'Descubrí la belleza y cultura de Italia',
    destacado: false,
    color: 'bg-gradient-to-r from-blue-600 to-indigo-600',
    anio: 2026,
    mes: 5, // Junio (0-indexed)
    dias: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  },
  {
    id: '6',
    titulo: 'San Carlos Mágico',
    fecha: '21-23 Marzo 2026',
    duracion: '3 días',
    ubicacion: 'San Carlos, Argentina',
    participantes: 'Grupo reducido',
    descripcion: 'Fin de semana largo en los hermosos paisajes de San Carlos',
    destacado: false,
    color: 'bg-gradient-to-r from-rose-600 to-pink-600',
    anio: 2026,
    mes: 2, // Marzo (0-indexed)
    dias: [21, 22, 23]
  },
  // {
  //   id: '5',
  //   titulo: 'Balcozna-Catamarca (Finalizado)',
  //   fecha: '10-11 Enero 2026',
  //   duracion: '2 días',
  //   ubicacion: 'Balcozna, Catamarca',
  //   participantes: 'Grupo reducido',
  //   descripcion: 'Explorá los paisajes únicos y la cultura de Catamarca',
  //   destacado: false,
  //   color: 'bg-gradient-to-r from-teal-600 to-cyan-600',
  //   mes: 0, // Enero (0-indexed)
  //   dias: [10, 11]
  // },
  // {
  //   id: '4',
  //   titulo: 'Alpachiri Portal de los Alisos (Finalizado)',
  //   fecha: '13-14 Diciembre 2025',
  //   duracion: '2 días',
  //   ubicacion: 'Alpachiri Portal de los Alisos',
  //   participantes: 'Grupo reducido',
  //   descripcion: 'Una experiencia única en contacto con la naturaleza',
  //   destacado: false,
  //   color: 'bg-gradient-to-r from-purple-600 to-pink-600',
  //   mes: 11, // Diciembre (0-indexed)
  //   dias: [13, 14]
  // },
  // {
  //   id: '1',
  //   titulo: 'Los Tesoros de Jujuy (Finalizado)',
  //   fecha: '14-16 Noviembre 2025',
  //   duracion: '3 días',
  //   ubicacion: 'Jujuy, Argentina',
  //   participantes: 'Grupo reducido',
  //   descripcion: 'Descubrí los paisajes más impresionantes del norte argentino',
  //   destacado: false,
  //   color: 'bg-gradient-to-r from-amber-500 to-orange-600',
  //   mes: 10,
  //   dias: [14, 15, 16]
  // },
];

/** Medianoche de hoy, para comparar contra las fechas de los viajes */
const inicioDeHoy = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
};

/** Un viaje esta finalizado cuando su ultimo dia ya paso */
const esFinalizado = (viaje: Viaje, hoy: Date) => {
  if (typeof viaje.finalizado === 'boolean') return viaje.finalizado;
  return new Date(viaje.anio, viaje.mes, Math.max(...viaje.dias)) < hoy;
};

/** Primer dia del viaje, para ordenar la lista */
const inicioDelViaje = (viaje: Viaje) =>
  new Date(viaje.anio, viaje.mes, Math.min(...viaje.dias)).getTime();

/** Color plano de la paleta para el punto identificatorio de cada viaje */
const puntoViaje = (viaje: Viaje, finalizado: boolean) => {
  if (finalizado) return 'bg-pac-olive/25';
  return viaje.destacado ? 'bg-pac-olive' : 'bg-pac-olive/70';
};

export function CalendarioSection() {
  const [viajeSeleccionado, setViajeSeleccionado] = useState<string | null>(null);

  // Este componente se renderiza solo en el cliente (durante el SSR la pagina
  // muestra LoadingScreen), asi que podemos leer la fecha real sin riesgo de
  // desajuste de hidratacion.
  const [hoy] = useState(inicioDeHoy);

  // Cada viaje con su estado calculado: primero los proximos, por fecha.
  const viajesOrdenados = useMemo(
    () =>
      viajes
        .map((viaje) => ({ viaje, finalizado: esFinalizado(viaje, hoy) }))
        .sort((a, b) => {
          if (a.finalizado !== b.finalizado) return a.finalizado ? 1 : -1;
          return inicioDelViaje(a.viaje) - inicioDelViaje(b.viaje);
        }),
    [hoy]
  );

  // El calendario abre en el mes del proximo viaje; si no hay, en el mes actual.
  const proximoViaje = viajesOrdenados.find((v) => !v.finalizado)?.viaje;
  const [mesActual, setMesActual] = useState(
    proximoViaje ? proximoViaje.mes : hoy.getMonth()
  );
  const [añoActual, setAñoActual] = useState(
    proximoViaje ? proximoViaje.anio : hoy.getFullYear()
  );

  const meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

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
      const viajeEnEsteDia = viajesOrdenados.find(({ viaje, finalizado }) =>
        !finalizado &&
        viaje.anio === añoActual &&
        viaje.mes === mesActual &&
        viaje.dias.includes(dia)
      )?.viaje;

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
            {viajesOrdenados.map(({ viaje, finalizado }) => (
              <div
                key={viaje.id}
                className={`
                  pac-card rounded-[24px] p-6 shadow-[0_2px_12px_rgba(31,36,20,0.05)] transition-colors duration-300
                  ${viajeSeleccionado === viaje.id ? 'ring-2 ring-pac-olive/30' : ''}
                  ${viaje.destacado && !finalizado ? 'border-l-[3px] border-l-pac-olive' : ''}
                `}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h4 className={`font-serif font-medium text-[22px] leading-[1.15] ${finalizado ? 'text-pac-muted' : 'text-pac-ink'}`}>{viaje.titulo}</h4>
                      {viaje.destacado && !finalizado && (
                        <span className="bg-pac-yellow text-pac-olive-dark text-[11px] font-bold uppercase tracking-[0.08em] px-2.5 py-1 rounded-full">
                          Destacado
                        </span>
                      )}
                      {finalizado && (
                        <span className="bg-pac-olive/25 text-pac-muted text-[11px] font-bold uppercase tracking-[0.08em] px-2.5 py-1 rounded-full">
                          Finalizado
                        </span>
                      )}
                    </div>
                    <p className={`text-[15px] leading-[1.6] mb-3 ${finalizado ? 'text-pac-muted' : 'text-pac-body'}`}>{viaje.descripcion}</p>
                  </div>
                  <div className={`w-4 h-4 shrink-0 mt-1.5 rounded-full ${puntoViaje(viaje, finalizado)}`} aria-hidden="true"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                  <div className="flex items-center gap-2 text-pac-body">
                    <Calendar className="w-4 h-4 shrink-0 text-pac-olive/70" aria-hidden="true" />
                    <span className="text-[14px]">{viaje.fecha}</span>
                  </div>
                  <div className="flex items-center gap-2 text-pac-body">
                    <Clock className="w-4 h-4 shrink-0 text-pac-olive/70" aria-hidden="true" />
                    <span className="text-[14px]">{viaje.duracion}</span>
                  </div>
                  <div className="flex items-center gap-2 text-pac-body">
                    <MapPin className="w-4 h-4 shrink-0 text-pac-olive/70" aria-hidden="true" />
                    <span className="text-[14px]">{viaje.ubicacion}</span>
                  </div>
                  <div className="flex items-center gap-2 text-pac-body">
                    <Users className="w-4 h-4 shrink-0 text-pac-olive/70" aria-hidden="true" />
                    <span className="text-[14px]">{viaje.participantes}</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="hidden w-full mt-4 items-center justify-center gap-2 h-12 px-6 rounded-full bg-pac-olive text-pac-surface font-bold text-[15px] transition-colors duration-200 hover:bg-pac-olive-dark"
                >
                  Más información
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            ))}
          </div>
        </div>

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
