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
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-4">
          <div className="">
            <div className="text-center lg:text-start">
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#404d21' }}>
                QUIENES SOMOS
              </h2>
              <div className="">
                <Image
                  src="/images/sobre_nosotros_silvi.jpg"
                  alt="Grupo haciendo algo innovador"
                  className="w-full h-96 object-cover rounded-xl shadow-2xl mb-4"
                  width={800}
                  height={600}
                />
              </div>
              <div className="max-w-4xl mx-auto lg:mx-0">
                <p className="text-xl text-gray-600 leading-relaxed text-center lg:text-start">
                  Somos una agencia de turismo argentina, liderada por <strong style={{ color: '#404d21' }}>Silvia Pérez Mulki</strong>, odontóloga de vocación y <strong style={{ color: '#404d21' }}>guía de turismo de vocación</strong>, junto a un equipo que trabaja para vos.
                  <br />
                  <strong style={{ color: '#404d21' }}>Somos peregrinos</strong> que ya vivimos la magia del <strong style={{ color: '#404d21' }}>Camino de Santiago</strong> y queremos compartirla con vos…
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* Sección QUE HACEMOS */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-12 mb-4">
          {/* Texto - Izquierda en PC, arriba en mobile */}
          <div className="">
            <div className="text-center lg:text-start">
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#404d21' }}>
                QUE HACEMOS
              </h2>
              <div className="">
                <Image
                  src="/images/sobre_nosotros_silvi.jpg"
                  alt="Grupo en Santiago de Compostela"
                  className="w-full h-96 object-cover rounded-xl shadow-2xl mb-4"
                  width={800}
                  height={600}
                />
              </div>
              <div className="max-w-4xl mx-auto lg:mx-0">
                <p className="text-xl text-gray-600 leading-relaxed text-center lg:text-start">
                  Realizamos numerosos viajes y experiencias durante todo el año, pero el más especial de todos es el <strong style={{ color: '#404d21' }}>Camino de Santiago</strong>.
                  <br /><br />
                  Nos ocupamos de <strong style={{ color: '#404d21' }}>cada detalle:</strong> pasajes, alojamiento, media pensión, logística de maletas y entrenamiento previo; para que vos solo tengas que <strong style={{ color: '#404d21' }}>disfrutar de caminar y vivir la experiencia.</strong>
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Sección POR QUÉ CON NOSOTROS */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-12 mb-4">

          {/* Texto - Derecha en PC, abajo en mobile */}
          <div className="">
            <div className="text-center lg:text-start">
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#404d21' }}>
                POR QUÉ CON NOSOTROS
              </h2>
              <div className="">
                <Image
                  src="/images/sobre_nosotros_silvi.jpg"
                  alt="Grupo haciendo algo innovador"
                  className="w-full h-96 object-cover rounded-xl shadow-2xl mb-4"
                  width={800}
                  height={600}
                />
              </div>
              <div className="max-w-4xl mx-auto lg:mx-0">
                <p className="text-xl text-gray-600 leading-relaxed text-center lg:text-start">
                  Porque sabemos que para vivir este viaje plenamente necesitas estar tranquilo, <strong style={{ color: '#404d21' }}>nosotros nos ocupamos de todo</strong> para que solo tengas que disfrutarlo.
                  <br /><br />
                  Nuestros viajes no ven el caminar solo como una actividad física, sino como una <strong style={{ color: '#404d21' }}>experiencia integral que despierta todos tus sentidos</strong>, conecta cuerpo, mente y alma… y queremos que la vivas plenamente.
                  <br /><br />
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