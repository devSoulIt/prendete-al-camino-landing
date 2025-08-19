import { ImageWithFallback } from "./figma/ImageWithFallback";

export function GaleriaSection() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2070&auto=format&fit=crop",
      alt: "Grupo disfrutando paisaje montañoso",
      title: "Aventuras en la montaña"
    },
    {
      src: "https://images.unsplash.com/photo-1543832923-44667a44c804?q=80&w=2044&auto=format&fit=crop",
      alt: "Viajeros en el Camino de Santiago",
      title: "Camino de Santiago"
    },
    {
      src: "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?q=80&w=2065&auto=format&fit=crop",
      alt: "Grupo brindando en viñedo",
      title: "Tour de bodegas"
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
      alt: "Paisaje de viñedos en Mendoza",
      title: "Mendoza mágica"
    },
    {
      src: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=2069&auto=format&fit=crop",
      alt: "Lagos de Bariloche",
      title: "Bariloche encantador"
    },
    {
      src: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=2070&auto=format&fit=crop",
      alt: "Grupo de amigos viajando",
      title: "Nuevas amistades"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#404d21' }}>
            Momentos inolvidables
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mirá las sonrisas y experiencias de quienes ya viajaron con nosotros. 
            Estos momentos podrían ser tuyos en el próximo viaje.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <svg 
              className="w-12 h-12 mx-auto mb-6 opacity-30"
              style={{ color: '#404d21' }}
              fill="currentColor" 
              viewBox="0 0 32 32"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
            </svg>
            
            <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed italic">
              "Nunca pensé que a los 58 años iba a vivir tantas aventuras increíbles. 
              Gracias a Prendete al Camino conocí lugares maravillosos y personas extraordinarias 
              que hoy son grandes amigos."
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                  alt="María Elena, viajera satisfecha"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-semibold" style={{ color: '#404d21' }}>María Elena</p>
                <p className="text-gray-500">Viajera desde 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}