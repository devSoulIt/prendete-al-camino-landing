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

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            ¿Tenés alguna otra pregunta? No dudes en contactarnos
          </p>
          <a
            href="https://wa.me/5491123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
