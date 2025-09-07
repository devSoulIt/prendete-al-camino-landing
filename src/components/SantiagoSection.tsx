import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

export function SantiagoSection() {
  return (
    <section id="sobre-nosotros" className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#404d21' }}>
            Sobre nosotros
          </h2>
          <div className="max-w-4xl mx-auto space-y-2">
            <p className="text-xl text-gray-600 leading-relaxed text-justify">
              Soy <strong>Silvia Perez Mulki</strong>, creadora de Prendete al Camino: 57 años, guía de turismo y odontóloga
              acompañanda de un equipo que trabaja para vos.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed text-justify">
              <strong>Tu Camino, nuestro compromiso.</strong> La mejor vivencia de tu Camino a Santiago,
              diseñada por quienes lo han recorrido.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="lg:sticky lg:top-28 h-fit">
            <Image
              src="/images/sobre_nosotros.jpg"
              alt="Catedral de Santiago de Compostela"
              className="w-full h-96 object-cover rounded-xl shadow-2xl"
              width={800}
              height={600}
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contacto">
                <Button
                  size="lg"
                  className="w-full md:w-auto text-lg px-6 py-6 mt-4 font-bold rounded-lg hover:opacity-90 transition-opacity duration-200"
                  style={{ backgroundColor: '#ffd600', color: '#404d21' }}
                >
                  CONTACTARNOS
                </Button>
              </a>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#404d21' }}>
                Nuestra Experiencia
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                <strong>Confianza en cada paso.</strong> Te acompañamos en cada kilómetro, cuidando los detalles
                para que tú solo te ocupes de disfrutar, reflexionar y caminar.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#404d21' }}>
                Qué ofrecemos
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                <strong>Espiritualidad y diversión en un solo Camino.</strong> Hemos combinado la introspección
                con la alegría de compartir, garantizándote una experiencia completa, auténtica y transformadora.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                      style={{ backgroundColor: '#404d21' }}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold ml-3">Rutas guiadas</h3>
                  </div>
                  <p className="text-gray-600">
                    Recorridos organizados con guías expertos que conocen cada rincón del camino.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                      style={{ backgroundColor: '#404d21' }}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold ml-3">Grupo reducido</h3>
                  </div>
                  <p className="text-gray-600">
                    Viajamos en grupos pequeños para garantizar una experiencia personalizada.
                  </p>
                </CardContent>
              </Card>

              {/*  <Card className="p-6 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                      style={{ backgroundColor: '#404d21' }}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold ml-3">Alojamiento</h3>
                  </div>
                  <p className="text-gray-600">
                    Hoteles y albergues cómodos seleccionados especialmente para nuestros viajeros.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                      style={{ backgroundColor: '#404d21' }}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold ml-3">Experiencia única</h3>
                  </div>
                  <p className="text-gray-600">
                    Momentos inolvidables que marcarán tu vida para siempre.
                  </p>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}