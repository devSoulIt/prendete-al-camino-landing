import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

export function VideollamadaSection() {
  return (
    <section id="videollamada" className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#404d21' }}>
                Consultá desde casa
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Hablemos por videollamada para conocer tus intereses, dudas y expectativas. 
                Te ayudamos a elegir el viaje perfecto para vos.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0"
                  style={{ backgroundColor: '#404d21' }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Asesoramiento personalizado</h3>
                  <p className="text-gray-600">
                    Te contamos en detalle sobre cada destino y respondemos todas tus preguntas.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0"
                  style={{ backgroundColor: '#404d21' }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Horarios flexibles</h3>
                  <p className="text-gray-600">
                    Coordinamos la llamada en el horario que más te convenga, de lunes a sábados.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0"
                  style={{ backgroundColor: '#404d21' }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Sin compromiso</h3>
                  <p className="text-gray-600">
                    La consulta es gratuita y sin obligación de compra. Solo queremos ayudarte.
                  </p>
                </div>
              </div>
            </div>

            <Button 
              size="lg"
              className="text-lg px-8 py-4 font-medium rounded-lg hover:opacity-90 transition-opacity duration-200"
              style={{ backgroundColor: '#ffd600', color: '#404d21' }}
            >
              Agendar videollamada gratuita
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <ImageWithFallback
              src="/images/persona-mayor-videollamada.webp"
              alt="Persona mayor en videollamada sonriendo"
              className="w-full h-96 object-cover rounded-xl shadow-2xl"
            />
            
            {/* Decorative elements */}
            <div 
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20"
              style={{ backgroundColor: '#ffd600' }}
            ></div>
            <div 
              className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-20"
              style={{ backgroundColor: '#404d21' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}