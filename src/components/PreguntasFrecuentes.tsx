'use client'
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

export function PreguntasFrecuentes() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Qué incluyen los viajes?",
      answer: "Nuestros viajes incluyen alojamiento, desayuno, transporte terrestre, guía especializado, actividades programadas y seguro de viaje. Las comidas adicionales y gastos personales no están incluidos."
    },
    {
      question: "¿Cuál es la política de cancelación?",
      answer: "Puedes cancelar tu viaje hasta 15 días antes de la fecha de salida con un reembolso del 80%. Entre 15 y 7 días antes, el reembolso es del 50%. Menos de 7 días, no hay reembolso."
    },
    {
      question: "¿Necesito experiencia previa para el senderismo?",
      answer: "No es necesario tener experiencia previa. Nuestros guías adaptan las rutas al nivel del grupo y siempre priorizamos la seguridad. Sin embargo, recomendamos tener una condición física básica."
    },
    {
      question: "¿Qué debo llevar en mi equipaje?",
      answer: "Te enviaremos una lista detallada según el destino, pero básicamente necesitarás ropa cómoda, calzado para caminar, protector solar, gorra, y una mochila pequeña para las excursiones diarias."
    },
    {
      question: "¿Los viajes son aptos para todas las edades?",
      answer: "La mayoría de nuestros viajes son aptos para personas de 12 años en adelante. Para viajeros mayores de 65 años, recomendamos consultar previamente sobre el nivel de dificultad de las actividades."
    },
    {
      question: "¿Cómo puedo reservar mi lugar?",
      answer: "Puedes reservar contactándonos por WhatsApp, completando el formulario de contacto en nuestra web, o llamándonos directamente. Te pediremos una seña del 30% para confirmar tu lugar."
    },
    {
      question: "¿Qué pasa si llueve durante el viaje?",
      answer: "Tenemos planes alternativos para días de lluvia. Siempre llevamos equipamiento de lluvia y adaptamos las actividades para que puedas disfrutar igual del viaje."
    },
    {
      question: "¿Incluyen seguro de viaje?",
      answer: "Sí, todos nuestros viajes incluyen seguro de viaje básico. Si necesitas una cobertura más amplia, podemos ayudarte a contratar un seguro adicional."
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
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
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
