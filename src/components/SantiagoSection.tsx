'use client'
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { SantiagoFormModal } from "./SantiagoFormModal";
import { useState } from "react";

export function SantiagoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20" style={{ backgroundColor: '#f8f9fa' }}>
      {/* Mobile Layout */}
      <div className="lg:hidden max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#404d21' }}>
            QUIENES SOMOS
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Texto - Izquierda en PC, arriba en mobile */}
          <div className="order-2 lg:order-1">
            <div className="max-w-4xl mx-auto lg:mx-0">
              <p className="text-xl text-gray-600 leading-relaxed text-center lg:text-start">
                <strong style={{ color: '#404d21' }}>Silvia Perez Mulki</strong> guía de turismo y odontóloga, con un equipo que trabaja para vos. Somos peregrinos que ya vivimos la magia del "Camino"
              </p>
            </div>
          </div>

          {/* Imagen - Derecha en PC, abajo en mobile */}
          <div className="order-1 lg:order-2">
            <Image
              src="/images/sobre_nosotros_silvi.jpg"
              alt="Silvia Perez Mulki - Guía de turismo"
              className="w-full h-96 object-cover rounded-xl shadow-2xl"
              width={800}
              height={600}
            />
          </div>
        </div>

        {/* Sección QUE HACEMOS */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#404d21' }}>
            QUE HACEMOS
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed text-center">
              Te organizamos todo: pasajes, logística de maletas, alojamiento, media pensión y entrenamiento previo, para que vos <br /> <strong style={{ color: '#404d21' }}>solo disfrutes de caminar.</strong>
            </p>
          </div>
        </div>

        {/* Sección POR QUÉ CON NOSOTROS */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#404d21' }}>
            POR QUÉ CON NOSOTROS
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed text-center">
              Porque sabemos que este viaje transforma y queremos que lo vivas seguro, cuidado y feliz; siempre acompañándote. <br /> <strong style={{ color: '#404d21' }}>¡Caminamos a tu lado!</strong>
            </p>
          </div>
        </div>

        {/* Botón de contacto centrado */}
        <div className="flex justify-center">
          <Button
            onClick={() => setIsModalOpen(true)}
            size="lg"
            className="text-lg px-8 py-6 font-bold rounded-lg hover:opacity-90 transition-opacity duration-200"
            style={{ backgroundColor: '#ffd600', color: '#404d21' }}
          >
            CONTACTANOS!
          </Button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-1500px">
        <div className="flex flex-col w-full gap-8">
          <div className="text-start">
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#404d21' }}>
              QUIENES SOMOS
            </h2>
            <div className="max-w-4xl mx-auto mt-2">
              <p className="text-xl text-gray-600 leading-relaxed text-start">
                <strong style={{ color: '#404d21' }}>Silvia Perez Mulki</strong> guía de turismo y odontóloga, con un equipo que trabaja para vos. Somos peregrinos que ya vivimos la magia del "Camino"
              </p>
            </div>
          </div>


          {/* Sección QUE HACEMOS */}
          <div className="text-start">
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#404d21' }}>
              QUE HACEMOS
            </h2>
            <div className="max-w-4xl mx-auto mt-2">
              <p className="text-xl text-gray-600 leading-relaxed text-start">
                Te organizamos todo: pasajes, logística de maletas, alojamiento, media pensión y entrenamiento previo, para que vos <br /> <strong style={{ color: '#404d21' }}>solo disfrutes de caminar.</strong>
              </p>
            </div>
          </div>

          {/* Sección POR QUÉ CON NOSOTROS */}
          <div className="text-start">
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#404d21' }}>
              POR QUÉ CON NOSOTROS
            </h2>
            <div className="max-w-4xl mx-auto mt-2">
              <p className="text-xl text-gray-600 leading-relaxed text-start">
                Porque sabemos que este viaje transforma y queremos que lo vivas seguro, cuidado y feliz; siempre acompañándote. <br /> <strong style={{ color: '#404d21' }}>¡Caminamos a tu lado!</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="flex relative w-full max-w-4xl mx-auto h-full">
          <div className="flex flex-col gap-4 w-full sticky top-0">
            <Image
              src="/images/sobre_nosotros_silvi.jpg"
              alt="Silvia Perez Mulki - Guía de turismo"
              className="w-full h-96 object-cover rounded-xl shadow-2xl"
              width={800}
              height={600}
            />
            <div className="flex justify-center w-full">
              <Button
                onClick={() => setIsModalOpen(true)}
                size="lg"
                className="text-lg px-8 py-6 font-bold rounded-lg hover:opacity-90 transition-opacity duration-200"
                style={{ backgroundColor: '#ffd600', color: '#404d21' }}
              >
                CONTACTANOS!
              </Button>
            </div>
          </div>
        </div>
      </div>


      {/* Modal del formulario */}
      <SantiagoFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}