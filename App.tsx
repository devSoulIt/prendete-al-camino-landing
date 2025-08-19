import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { SantiagoSection } from "./components/SantiagoSection";
import { ViajesCortosSection } from "./components/ViajesCortosSection";
import { VideollamadaSection } from "./components/VideollamadaSection";
import { GaleriaSection } from "./components/GaleriaSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <SantiagoSection />
      <ViajesCortosSection />
      <VideollamadaSection />
      <GaleriaSection />
      <Footer />
    </div>
  );
}