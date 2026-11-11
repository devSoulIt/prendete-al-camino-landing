'use client'
import { useState } from 'react';
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { IntroSection } from "@/components/IntroSection";
import { Santiago2027Section } from "@/components/Santiago2027Section";
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
import { esLanzamiento } from "@/lib/campania";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  // Antes del 15/11 se ve el anuncio Early Bird; desde el 15/11, el lanzamiento.
  const [lanzamiento] = useState(() => esLanzamiento());

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
      <HeroSection lanzamiento={lanzamiento} onImageLoad={handleImageLoad} />
      <IntroSection conCarrusel={lanzamiento} />
      {lanzamiento && <Santiago2027Section />}
      <ViajesSection />
      <CalendarioSection lanzamiento={lanzamiento} />
      <GaleriaSection parte="internacional" />
      <SantiagoSection />
      <GaleriaSection parte="nacional" />
      <TestimoniosSection />
      <PreguntasFrecuentes lanzamiento={lanzamiento} />
      <Contacto />
      <Footer />
    </div>
  );
}
