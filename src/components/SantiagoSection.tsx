'use client'
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

export function SantiagoSection() {

  return (
    <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
      {/* Mobile Layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Sección QUIENES SOMOS */}
        <div className="grid grid-cols-1 gap-12 items-center mb-4">
          <div className="">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 lg:text-center" style={{ color: '#404d21' }}>
                QUIENES SOMOS
              </h2>
              <div className="block lg:hidden max-w-3xl mx-auto">
                <Image
                  src="/images/sobre_nosotros_silvi.jpg"
                  alt="Grupo haciendo algo innovador"
                  className="w-full h-96 object-cover rounded-xl shadow-2xl mb-4"
                  width={800}
                  height={600}
                />
              </div>
              <div className="hidden lg:block max-w-3xl mx-auto">
                <div className="flex justify-center mb-6">
                  <div
                    className="relative group overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 max-w-4xl w-full"
                  >
                    <Image
                      src="/images/sobre_nosotros_silvi.jpg"
                      alt="Santiago de Compostela - Portada"
                      className="w-full h-96 md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                      width={800}
                      height={500}
                      quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-start">Silvia Pérez Mulki, guia de turismo con +10 años de experiencia</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-gray-600 leading-relaxed text-center lg:text-start">
                  Somos una Organizacion Argentina de experiencias guiadas de senderismo y viajes, liderada por <strong style={{ color: '#404d21' }}>Silvia Pérez Mulki</strong>, odontóloga de vocación y <strong style={{ color: '#404d21' }}>guía de turismo por pasión.</strong>, junto a un equipo que trabaja para vos.
                  <br />
                  <strong style={{ color: '#404d21' }}>Somos peregrinos</strong> que ya vivimos la magia del <strong style={{ color: '#404d21' }}>Camino de Santiago</strong> y queremos compartirla con vos!
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* Sección QUE HACEMOS */}
        <div className="grid grid-cols-1 gap-12 items-center mt-12 mb-4">
          {/* Texto - Izquierda en PC, arriba en mobile */}
          <div className="">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#404d21' }}>
                QUE HACEMOS
              </h2>
              <div className="block lg:hidden max-w-3xl mx-auto">
                <Image
                  src="/images/sobre_nosotros.jpg"
                  alt="Grupo en Santiago de Compostela"
                  className="w-full h-96 object-cover rounded-xl shadow-2xl mb-4"
                  width={800}
                  height={600}
                />
              </div>
              <div className="hidden lg:block max-w-3xl mx-auto">
                <div className="flex justify-center mb-6">
                  <div
                    className="relative group overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 max-w-4xl w-full"
                  >
                    <Image
                      src="/images/sobre_nosotros.jpg"
                      alt="Santiago de Compostela - Portada"
                      className="w-full h-96 md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                      width={800}
                      height={500}
                      quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-start">Realizamos viajes y experiencias durante todo el año, pero el más especial de todos es el "Camino de Santiago"</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-gray-600 leading-relaxed text-center lg:text-start">
                  Realizamos numerosos viajes y experiencias durante todo el año, pero el más especial de todos es el <strong style={{ color: '#404d21' }}>"Camino de Santiago"</strong>.
                  <br /><br />
                  Nos ocupamos de <strong style={{ color: '#404d21' }}>cada detalle:</strong> pasajes, alojamiento, media pensión, logística de maletas y entrenamiento previo; para que vos sólo tengas que <strong style={{ color: '#404d21' }}>disfrutar de caminar y vivir la experiencia con toda intensidad.</strong>
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Sección POR QUÉ CON NOSOTROS */}
        <div className="grid grid-cols-1 gap-12 items-center mt-12 mb-4">

          {/* Texto - Derecha en PC, abajo en mobile */}
          <div className="">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#404d21' }}>
                POR QUE CON NOSOTROS
              </h2>
              <div className="block lg:hidden max-w-3xl mx-auto">
                <Image
                  src="/images/foto-innovadora.jpg"
                  alt="Grupo haciendo algo innovador"
                  className="w-full h-96 object-cover rounded-xl shadow-2xl mb-4"
                  width={800}
                  height={600}
                />
              </div>
              <div className="hidden lg:block max-w-3xl mx-auto">
                <div className="flex justify-center mb-6">
                  <div
                    className="relative group overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 max-w-4xl w-full"
                  >
                    <Image
                      src="/images/foto-innovadora.jpg"
                      alt="Santiago de Compostela - Portada"
                      className="w-full h-96 md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                      width={800}
                      height={500}
                      quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-start">Porque te acompañamos en cada paso del viaje...</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-gray-600 leading-relaxed text-center lg:text-start">
                  Porque sabemos que para vivir este viaje plenamente necesitas estar tranquilo, <strong style={{ color: '#404d21' }}>nosotros nos ocupamos de todo</strong> para que solo tengas que disfrutarlo.
                  <br /><br />
                  Nuestros viajes no conciben "el caminar" sólo como una actividad física, sino como una <strong style={{ color: '#404d21' }}>experiencia integral que despierta todos tus sentidos</strong>, conecta cuerpo, mente y alma… y queremos que la vivas plenamente.
                  <br />
                  <strong style={{ color: '#404d21' }}>¡Caminamos a tu lado!</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Botón de contacto centrado */}
        <div className="flex justify-center">
          <a href="#contacto">
            <Button
              size="lg"
              className="text-lg px-8 py-6 font-bold rounded-lg hover:opacity-90 transition-opacity duration-200"
              style={{ backgroundColor: '#ffd600', color: '#404d21' }}
            >
              CONTACTANOS!
            </Button>
          </a>
        </div>
      </div>

    </section>
  );
}