'use client'
import { useState } from 'react';
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
  color: string;
  mes: number;
  dias: number[];
}

const viajes: Viaje[] = [
  {
    id: '1',
    titulo: 'Los Tesoros de Jujuy',
    fecha: '14-16 Noviembre 2025',
    duracion: '3 días',
    ubicacion: 'Jujuy, Argentina',
    participantes: 'Grupo reducido',
    descripcion: 'Descubrí los paisajes más impresionantes del norte argentino',
    destacado: true,
    color: 'bg-gradient-to-r from-amber-500 to-orange-600',
    mes: 10, // Noviembre (0-indexed)
    dias: [14, 15, 16]
  },
  {
    id: '2',
    titulo: 'Santiago de Compostela',
    fecha: '1-10 Junio 2026',
    duracion: '10 días',
    ubicacion: 'España',
    participantes: 'Grupo reducido',
    descripcion: 'El camino espiritual más famoso del mundo',
    destacado: false,
    color: 'bg-gradient-to-r from-green-600 to-emerald-600',
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
    mes: 5, // Junio (0-indexed)
    dias: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  }
];

export function CalendarioSection() {
  const [viajeSeleccionado, setViajeSeleccionado] = useState<string | null>(null);
  const [mesActual, setMesActual] = useState(10); // Noviembre (0-indexed)
  const [añoActual, setAñoActual] = useState(new Date().getFullYear());

  const meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const cambiarMes = (direccion: 'anterior' | 'siguiente') => {
    if (direccion === 'anterior') {
      // No permitir ir a meses anteriores a noviembre
      if (mesActual === 10) { // Noviembre
        return; // No hacer nada si ya estamos en noviembre
      }
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
    const hoy = new Date();
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
      const viajeEnEsteDia = viajes.find(viaje =>
        viaje.mes === mesActual && viaje.dias.includes(dia)
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
    <section className="py-16" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#404d21' }}>
            Próximos Viajes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubrí nuestras próximas aventuras y reservá tu lugar en experiencias únicas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calendario */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => cambiarMes('anterior')}
                disabled={mesActual === 10} // Deshabilitar en noviembre
                className={`p-2 rounded-lg transition-colors ${
                  mesActual === 10 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:bg-gray-100'
                }`}
              >
                <ChevronLeft className={`w-5 h-5 ${mesActual === 10 ? 'text-gray-400' : 'text-gray-600'}`} />
              </button>
              <h3 className="text-2xl font-bold flex items-center gap-2" style={{ color: '#404d21' }}>
                <Calendar className="w-6 h-6" style={{ color: '#404d21' }} />
                {meses[mesActual]} {añoActual}
              </h3>
              <button
                onClick={() => cambiarMes('siguiente')}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Días de la semana */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(dia => (
                <div key={dia} className="text-center text-sm font-semibold text-gray-500 py-2">
                  {dia}
                </div>
              ))}
            </div>

            {/* Días del calendario */}
            <div className="grid grid-cols-7 gap-2">
              {getDiasDelMes().map((dia, index) => (
                <div
                  key={index}
                  className={`
                    aspect-square flex items-center justify-center text-sm font-medium rounded-lg transition-all duration-200
                    ${dia.esOtroMes ? 'text-gray-300' : ''}
                    ${dia.esHoy ? 'text-white shadow-lg' : ''}
                    ${dia.tieneViaje && !dia.esHoy ? 'text-white border-2' : ''}
                    ${!dia.esOtroMes && !dia.esHoy && !dia.tieneViaje ? 'hover:bg-gray-100 text-gray-700' : ''}
                  `}
                  style={{
                    backgroundColor: dia.esHoy ? '#404d21' :
                      dia.tieneViaje ? (
                        dia.viaje?.color.includes('amber') ? '#f59e0b' :
                        dia.viaje?.color.includes('blue') ? '#2563eb' :
                        '#059669'
                      ) :
                        'transparent',
                    borderColor: dia.tieneViaje ? (
                      dia.viaje?.color.includes('amber') ? '#d97706' :
                      dia.viaje?.color.includes('blue') ? '#1d4ed8' :
                      '#047857'
                    ) : 'transparent'
                  }}
                >
                  {dia.numero}
                </div>
              ))}
            </div>

            {/* Leyenda */}
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: '#404d21' }}></div>
                <span>Hoy</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded border-2" style={{ backgroundColor: '#f59e0b', borderColor: '#d97706' }}></div>
                <span>Viaje programado</span>
              </div>
            </div>
          </div>

          {/* Lista de viajes */}
          <div className="space-y-6">
            {viajes.map((viaje) => (
              <div
                key={viaje.id}
                className={`
                  bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl
                  ${viajeSeleccionado === viaje.id ? 'ring-2 ring-blue-500' : ''}
                  ${viaje.destacado ? 'border-l-4 border-orange-500' : ''}
                `}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-xl font-bold text-gray-900">{viaje.titulo}</h4>
                      {viaje.destacado && (
                        <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full">
                          Destacado
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-3">{viaje.descripcion}</p>
                  </div>
                  <div className={`w-4 h-4 rounded-full ${viaje.color}`}></div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{viaje.fecha}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{viaje.duracion}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{viaje.ubicacion}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{viaje.participantes}</span>
                  </div>
                </div>

                <button
                  className="hidden w-full text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2"
                  style={{
                    background: 'linear-gradient(135deg, #404d21 0%, #2d3a1a 100%)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #2d3a1a 0%, #1a2310 100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #404d21 0%, #2d3a1a 100%)';
                  }}
                >
                  Más información
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="hidden text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            ¿No encontrás lo que buscás? Contactanos para más opciones
          </p>
          <button
            className="text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            style={{
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #d97706 0%, #b45309 100%)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)';
            }}
          >
            Consultar disponibilidad
          </button>
        </div>
      </div>
    </section>
  );
}
