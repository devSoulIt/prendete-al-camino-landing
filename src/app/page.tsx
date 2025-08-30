import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SantiagoSection } from "@/components/SantiagoSection";
import { ViajesCortosSection } from "@/components/ViajesCortosSection";
import { GaleriaSection } from "@/components/GaleriaSection";
import { Footer } from "@/components/Footer";
import { Contacto } from "@/components/Contacto";
import { Whatsapp } from "@/components/Whatsapp";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Whatsapp />
      <HeroSection />
      <SantiagoSection />
      {/* <VideollamadaSection /> */}
      <GaleriaSection />
      <Contacto />
      <ViajesCortosSection />
      <Footer />
    </div>
  );
}
