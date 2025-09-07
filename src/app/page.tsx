import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SantiagoSection } from "@/components/SantiagoSection";
import { ViajesCortosSection } from "@/components/ViajesCortosSection";
import { GaleriaSection } from "@/components/GaleriaSection";
import { PreguntasFrecuentes } from "@/components/PreguntasFrecuentes";
import { Footer } from "@/components/Footer";
import { Contacto } from "@/components/Contacto";
import { Whatsapp } from "@/components/Whatsapp";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Whatsapp />
      <HeroSection />
      <div className="text-sm md:text-base w-full mx-auto px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f8f9fa' }}>
      <p className="p-2 text-justify text-gray-600 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
          Descubre la magia del Camino de Santiago: desde Sarria hasta la Catedral de Compostela.
          El viaje hacia la mejor versión de vos mismo, el que dejará una huella imborrable en tu corazón.
        </p>
      </div>
      <SantiagoSection />
      {/* <VideollamadaSection /> */}
      <GaleriaSection />
      <Contacto />
      <ViajesCortosSection />
      <PreguntasFrecuentes />
      <Footer />
    </div>
  );
}
