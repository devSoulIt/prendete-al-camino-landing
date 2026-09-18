'use client'
import { useState } from "react";
import { Plus, Minus, Instagram, Facebook, MessageCircle } from "lucide-react";

export function PreguntasFrecuentes() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Puedo viajar solo/a?",
      answer: "Si, podes viajar solo/a. Podes optar por habitación individual o compartida."
    },
    {
      question: "¿Puedo financiar mi viaje?",
      answer: "Si, tenemos posibilidad de financiar los viajes."
    },
    {
      question: "¿Qué tipo de viajes organizan?",
      answer: "Todos nuestros viajes giran en torno a la caminata, gastronomía e historia: desde recorridos cortos hasta travesías de varios días, tanto en Argentina como en el exterior. Cada experiencia busca que conectes contigo mismo, con la naturaleza y con un grupo de personas que comparten la misma energía."
    },
    {
      question: "¿Qué incluye cualquier viaje de Prendete al Camino?",
      answer: {
        text: "En todos nuestros viajes vas a contar con:",
        items: [
          "Guías acompañantes en todo momento.",
          "Organización integral del itinerario.",
          "Hospedaje en alojamientos seleccionados.",
          "Desayunos diarios.",
          "Actividades de reflexión, entretenimiento y socialización.",
          "Seguro de viaje en destinos nacionales."
        ]
      }
    },
    {
      question: "¿Cómo tramitar la reserva?",
      answer: {
        text: "El proceso es sencillo:",
        items: [
          "1. Completás la inscripción por whatsapp.",
          "2. Abonás una seña para asegurar tu lugar.",
          "3. Cancelás el saldo en la fecha indicada.",
          "4. Recibís la confirmación final con todos los detalles del viaje."
        ]
      }
    },
    {
      question: "¿Con cuánta anticipación debería inscribirme?",
      answer: "Lo ideal es reservar lo antes posible para garantizar tu lugar. Aceptamos inscripciones hasta 2 semanas antes en viajes nacionales y hasta 2 meses antes en viajes internacionales."
    },
    {
      question: "¿Quiénes son las guías y qué rol cumplen?",
      answer: {
        text: "",
        items: [
          "Silvia Emilce Pérez Mulki (57 años) – Creadora de Prendete al Camino. Odontóloga y caminante desde hace más de 10 años, encontró en la naturaleza paz y fortaleza. Guía certificada, organiza y acompaña cada paso del viaje.",
          "Marina Molina Pérez (26 años) – Guía de apoyo. Apasionada de los viajes y la planificación, se encarga de los itinerarios para que disfrutes sin preocuparte. También es Diseñadora Gráfica y Community Manager.",
          "Sergio Jung (59 años) – Guía de apoyo. Arquitecto, aporta su mirada profesional sobre la arquitectura y la historia de los lugares que visitamos."
        ]
      }
    },
    {
      question: "¿Necesito experiencia previa en caminatas?",
      answer: "No siempre. Muchos de nuestros viajes son aptos para principiantes. En los que requieren un poco más de entrenamiento, te brindamos un plan de caminatas progresivas para que llegues preparado/a y seguro/a."
    },
    {
      question: "¿Dónde puedo ver los próximos viajes disponibles?",
      answer: {
        text: "Publicamos cada viaje en nuestras redes sociales:",
        items: [
          "Instagram: @prendetealcamino",
          "Facebook: Prendete al Camino",
          "TikTok: Prendete al Camino"
        ]
      }
    },
    {
      question: "¿Ofrecen viajes privados o a medida?",
      answer: "Sí. Podemos diseñar experiencias personalizadas para grupos de amigos, familias o empresas que quieran un viaje adaptado a sus intereses y tiempos."
    },
    {
      question: "¿Los viajes son aptos para todas las edades?",
      answer: "No, están pensados a partir de los 18 años y adultos de cualquier edad, siempre que tengan buen estado de salud."
    },
    {
      question: "¿Incluyen seguro de viaje?",
      answer: {
        text: "",
        items: [
          "En viajes nacionales: el seguro está incluido en el precio.",
          "En viajes internacionales: cada viajero debe contratarlo en su aseguradora de confianza (recomendamos Assist Card)."
        ]
      }
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="preguntas" className="py-20 md:py-24 bg-pac-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Encabezado editorial a la izquierda */}
          <div className="lg:col-span-4 flex flex-col gap-4 lg:sticky lg:top-28 lg:self-start">
            <div className="pac-eyebrow">Preguntas frecuentes</div>
            <h2 className="pac-title text-[32px] md:text-[44px]">
              Lo que nos preguntan antes de dar el primer paso
            </h2>
            <p className="text-[16px] leading-[1.6] text-pac-body">
              ¿Tenés otra duda? Escribinos por WhatsApp y te respondemos a la brevedad.
            </p>
          </div>

          {/* Listado de preguntas */}
          <div className="lg:col-start-6 lg:col-span-7 flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const abierta = openIndex === index;

              return (
                <div
                  key={index}
                  className={`pac-card overflow-hidden transition-colors duration-200 ${
                    abierta ? 'border-pac-olive/25' : 'border-pac-olive/10'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={abierta}
                    aria-controls={`faq-panel-${index}`}
                    className="w-full px-[26px] py-[22px] flex items-center justify-between gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pac-olive/30 rounded-[20px]"
                  >
                    <h3 className="text-[17px] font-bold text-pac-ink">
                      {faq.question}
                    </h3>
                    {abierta ? (
                      <Minus
                        className="h-[20px] w-[20px] shrink-0 text-pac-olive"
                        strokeWidth={2.2}
                        aria-hidden="true"
                      />
                    ) : (
                      <Plus
                        className="h-[20px] w-[20px] shrink-0 text-pac-olive"
                        strokeWidth={2.2}
                        aria-hidden="true"
                      />
                    )}
                  </button>

                  {abierta && (
                    <div id={`faq-panel-${index}`} className="px-[26px] pb-[22px]">
                      {typeof faq.answer === 'string' ? (
                        <p className="text-[15px] leading-[1.6] text-pac-body">
                          {faq.answer}
                        </p>
                      ) : (
                        <div className="text-[15px] leading-[1.6] text-pac-body">
                          {faq.answer.text && (
                            <p className="mb-3">{faq.answer.text}</p>
                          )}
                          {faq.answer.items && (
                            <ul className="list-disc space-y-1.5 pl-5">
                              {faq.answer.items.map((item, itemIndex) => {
                                // Detectar si es la pregunta de redes sociales para mostrar iconos
                                if (faq.question === "¿Dónde puedo ver los próximos viajes disponibles?") {
                                  const getIcon = (item: string) => {
                                    if (item.includes("Instagram")) return <Instagram className="w-4 h-4 shrink-0 text-pac-olive" />;
                                    if (item.includes("Facebook")) return <Facebook className="w-4 h-4 shrink-0 text-pac-olive" />;
                                    if (item.includes("TikTok")) return <MessageCircle className="w-4 h-4 shrink-0 text-pac-olive" />;
                                    return null;
                                  };

                                  return (
                                    <li key={itemIndex} className="list-none flex items-center gap-2">
                                      {getIcon(item)}
                                      <span>{item}</span>
                                    </li>
                                  );
                                }
                                return <li key={itemIndex}>{item}</li>;
                              })}
                            </ul>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
