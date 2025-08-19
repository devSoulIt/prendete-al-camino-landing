import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ViajesCortosSection() {
  const destinations = [
    {
      title: "Fin de semana en Bariloche",
      description: "Paisajes únicos, lagos cristalinos y la calidez de la montaña patagónica.",
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=2069&auto=format&fit=crop",
      duration: "3 días",
      price: "Desde $180.000"
    },
    {
      title: "Escapada a Mendoza",
      description: "Viñedos, bodegas y la majestuosidad de los Andes en un viaje inolvidable.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
      duration: "4 días",
      price: "Desde $220.000"
    },
    {
      title: "Buenos Aires cultural",
      description: "Tango, museos, gastronomía y la esencia porteña en todo su esplendor.",
      image: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?q=80&w=2070&auto=format&fit=crop",
      duration: "2 días",
      price: "Desde $150.000"
    }
  ];

  return (
    <section id="viajes-cortos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#404d21' }}>
            Viajes Cortos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Perfectos para desconectar sin alejarte demasiado. Escapadas diseñadas para 
            disfrutar al máximo en pocos días.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {destinations.map((destination, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-lg">
                  <span className="font-semibold" style={{ color: '#404d21' }}>
                    {destination.duration}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#404d21' }}>
                  {destination.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {destination.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold" style={{ color: '#ffd600' }}>
                    {destination.price}
                  </span>
                  <Button 
                    variant="outline"
                    className="border-2 hover:bg-opacity-10 transition-colors duration-200"
                    style={{ 
                      borderColor: '#404d21', 
                      color: '#404d21'
                    }}
                  >
                    Ver detalles
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="text-lg px-8 py-4 font-medium rounded-lg hover:opacity-90 transition-opacity duration-200"
            style={{ backgroundColor: '#ffd600', color: '#404d21' }}
          >
            Ver todos los viajes cortos
          </Button>
        </div>
      </div>
    </section>
  );
}