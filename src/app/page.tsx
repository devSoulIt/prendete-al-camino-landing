'use client'
import { useState } from 'react';
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ViajesSection } from "@/components/ViajesSection";
import { SantiagoSection } from "@/components/SantiagoSection";
import { GaleriaSection } from "@/components/GaleriaSection";
import { PreguntasFrecuentes } from "@/components/PreguntasFrecuentes";
import { CalendarioSection } from "@/components/CalendarioSection";
import { Footer } from "@/components/Footer";
import { Contacto } from "@/components/Contacto";
import { Whatsapp } from "@/components/Whatsapp";
import { TestimoniosSection } from "@/components/TestimoniosSection";
import { LoadingScreen } from "@/components/LoadingScreen";
// Promo del viaje a Perú (Machu Picchu, octubre 2026). Ya realizado: se conserva para reutilizar en una próxima edición.
// import { MachuPicchuSection } from "@/components/MachuPicchuSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleImageLoad} />;
  }

  return (
    <div className="min-h-screen bg-pac-bg">
      <Whatsapp />
      <Header />
      <HeroSection onImageLoad={handleImageLoad} />

      {/* Promesa de marca */}
      <section
        id="sobre-nosotros"
        className="bg-pac-surface border-y border-pac-olive/10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 text-center">
          <p className="font-serif text-[26px] md:text-[34px] leading-[1.25] font-medium text-pac-ink [text-wrap:pretty]">
            Descubrí la magia del Camino de Santiago: desde Sarria hasta la
            majestuosa Catedral de Compostela. Un viaje hacia{" "}
            <em className="italic text-pac-olive">la mejor versión de vos mismo</em>.
          </p>
          <p className="mt-5 text-[16px] md:text-[17px] leading-[1.6] text-pac-body">
            Una experiencia que dejará una huella imborrable en tu corazón.
          </p>
        </div>
      </section>

      {/* <MachuPicchuSection /> */}
      <ViajesSection />
      <CalendarioSection />
      <SantiagoSection />
      <GaleriaSection />
      <TestimoniosSection />
      <PreguntasFrecuentes />
      <Contacto />
      <Footer />
    </div>
  );
}
