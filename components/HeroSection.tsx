import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070&auto=format&fit=crop"
          alt="Grupo de personas viajando juntas disfrutando del paisaje"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Viví la experiencia de <br />
          <span style={{ color: '#ffd600' }}>viajar con nosotros</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Descubrí destinos únicos en compañía de personas que comparten tu pasión por viajar. 
          Experiencias diseñadas especialmente para viajeros maduros que buscan aventuras auténticas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="text-lg px-8 py-4 font-medium rounded-lg hover:opacity-90 transition-opacity duration-200"
            style={{ backgroundColor: '#ffd600', color: '#404d21' }}
          >
            Explorar destinos
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="text-lg px-8 py-4 font-medium rounded-lg border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-colors duration-200"
          >
            Ver galería
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}