'use client'
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon, Instagram, Facebook, MessageCircle } from "lucide-react";

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
    <section id="preguntas-frecuentes" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#404d21' }}>
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Resolvé todas tus dudas antes de embarcarte en esta aventura inolvidable.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 rounded-lg"
              >
                <h3 className="text-lg font-semibold pr-4" style={{ color: '#404d21' }}>
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUpIcon className="h-5 w-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-100 pt-4">
                    {typeof faq.answer === 'string' ? (
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    ) : (
                      <div className="text-gray-600 leading-relaxed">
                        {faq.answer.text && (
                          <p className="mb-3">{faq.answer.text}</p>
                        )}
                        {faq.answer.items && (
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            {faq.answer.items.map((item, itemIndex) => {
                              // Detectar si es la pregunta de redes sociales para mostrar iconos
                              if (faq.question === "¿Dónde puedo ver los próximos viajes disponibles?") {
                                const getIcon = (item: string) => {
                                  if (item.includes("Instagram")) return <Instagram className="w-4 h-4 inline mr-2 text-pink-500" />;
                                  if (item.includes("Facebook")) return <Facebook className="w-4 h-4 inline mr-2 text-blue-600" />;
                                  if (item.includes("TikTok")) return <MessageCircle className="w-4 h-4 inline mr-2 text-black" />;
                                  return null;
                                };
                                
                                return (
                                  <li key={itemIndex} className="flex items-center">
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
                </div>
              )}
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
