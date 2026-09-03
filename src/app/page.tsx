'use client'
import { useState } from 'react';
import { HeroSection } from "@/components/HeroSection";
import { SantiagoSection } from "@/components/SantiagoSection";
import { ViajesCortosSection } from "@/components/ViajesCortosSection";
import { GaleriaSection } from "@/components/GaleriaSection";
import { PreguntasFrecuentes } from "@/components/PreguntasFrecuentes";
import { CalendarioSection } from "@/components/CalendarioSection";
import { Footer } from "@/components/Footer";
import { Contacto } from "@/components/Contacto";
import { Whatsapp } from "@/components/Whatsapp";
import { TestimoniosSection } from "@/components/TestimoniosSection";
import { LoadingScreen } from "@/components/LoadingScreen";
import { MachuPicchuSection } from "@/components/MachuPicchuSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleImageLoad} />;
  }

  return (
    <div className="min-h-screen">
      <Whatsapp />
      <HeroSection onImageLoad={handleImageLoad} />
      <div className="text-sm md:text-base w-full mx-auto px-4 sm:px-6 lg:px-8 mt-4" style={{ backgroundColor: '#f8f9fa' }} id="sobre-nosotros">
        <p className="p-2 text-center text-gray-600 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
          <strong>Descubrí la magia del Camino de Santiago:</strong> desde Sarria hasta la majestuosa Catedral de Compostela.
          Un viaje hacia <strong>la mejor versión de vos mismo.</strong>
          Una experiencia que <strong>dejará una huella imborrable en tu corazón.</strong>
        </p>
      </div>
      <MachuPicchuSection />
      <SantiagoSection />
      {/* <VideollamadaSection /> */}
      <GaleriaSection />
      <TestimoniosSection />
      <Contacto />
      {/* <ViajesCortosSection /> */}
      <CalendarioSection />
      <PreguntasFrecuentes />
      <Footer />
    </div>
  );
}
