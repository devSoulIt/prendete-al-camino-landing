'use client'
import { useState } from 'react';
import { HeroSection } from "@/components/HeroSection";
import { SantiagoSection } from "@/components/SantiagoSection";
import { ViajesCortosSection } from "@/components/ViajesCortosSection";
import { GaleriaSection } from "@/components/GaleriaSection";
import { PreguntasFrecuentes } from "@/components/PreguntasFrecuentes";
import { Footer } from "@/components/Footer";
import { Contacto } from "@/components/Contacto";
import { Whatsapp } from "@/components/Whatsapp";
import { TestimoniosSection } from "@/components/TestimoniosSection";
import { LoadingScreen } from "@/components/LoadingScreen";

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
        <p className="p-2 text-start text-gray-600 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
          Descubre la magia del Camino de Santiago: desde Sarria hasta la Catedral de Compostela.
          El viaje hacia la mejor versión de vos mismo, el que dejará una huella imborrable en tu corazón.
        </p>
      </div>
      <SantiagoSection />
      {/* <VideollamadaSection /> */}
      <GaleriaSection />
      <TestimoniosSection />
      <Contacto />
      <ViajesCortosSection />
      <PreguntasFrecuentes />
      <Footer />
    </div>
  );
}
