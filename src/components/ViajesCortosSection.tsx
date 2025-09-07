import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ViajesCortosSection() {
  const destinations = [
    {
      title: "Catamarca",
      description: "Descubrí la magia de las montañas catamarqueñas con senderismo, historia colonial y sabores únicos de la región.",
      image: "/images/Portadas/Catamarca.webp",
      duration: "4 días",
      activities: ["Senderismo", "Historia", "Gastronomía"]
    },
    {
      title: "Jujuy",
      description: "Explorá los paisajes únicos de la Quebrada de Humahuaca, con trekking, cultura ancestral y platos tradicionales.",
      image: "/images/Portadas/Salta .webp", // Usando imagen de Salta como placeholder para Jujuy
      duration: "5 días",
      activities: ["Senderismo", "Historia", "Gastronomía"]
    },
    {
      title: "Córdoba",
      description: "Viví la experiencia de las sierras cordobesas con caminatas, patrimonio jesuítico y la mejor gastronomía regional.",
      image: "/images/Portadas/Córdoba .webp",
      duration: "3 días",
      activities: ["Senderismo", "Historia", "Gastronomía"]
    },
    {
      title: "Salta",
      description: "Sumergite en la cultura salteña con trekking por los cerros, historia colonial y los sabores del norte argentino.",
      image: "/images/Portadas/Salta .webp",
      duration: "4 días",
      activities: ["Senderismo", "Historia", "Gastronomía"]
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

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {destinations.map((destination, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  width={400}
                  height={300}
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
                
                {/* Actividades */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2" style={{ color: '#404d21' }}>
                    Actividades incluidas:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {destination.activities.map((activity, activityIndex) => (
                      <span
                        key={activityIndex}
                        className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex"/>
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
      </div>
    </section>
  );
}