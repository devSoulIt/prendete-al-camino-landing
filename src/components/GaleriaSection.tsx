'use client'
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { useState } from "react";
import Link from "next/link";

export function GaleriaSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("santiago");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imageCategories = {
    santiago: {
      name: "Santiago de Compostela",
      images: [
        { src: "/images/Santiago/IMG_6995.webp", alt: "Santiago - Paisaje", category: "Santiago" },
        { src: "/images/Santiago/IMG_6581.webp", alt: "Santiago - Vista panorámica", category: "Santiago" },
        { src: "/images/Santiago/IMG_6435.webp", alt: "Santiago - Naturaleza", category: "Santiago" },
        { src: "/images/Santiago/IMG_6359.webp", alt: "Santiago - Paisaje rural", category: "Santiago" },
        { src: "/images/Santiago/IMG_6350.webp", alt: "Santiago - Vista aérea", category: "Santiago" },
      ]
    },
    catamarca: {
      name: "Catamarca",
      images: [
        { src: "/images/Catamarca/IMG_9015.webp", alt: "Catamarca - Paisaje", category: "Catamarca" },
        { src: "/images/Catamarca/IMG_8965.webp", alt: "Catamarca - Vista panorámica", category: "Catamarca" },
        { src: "/images/Catamarca/IMG_8961.webp", alt: "Catamarca - Montañas", category: "Catamarca" },
        { src: "/images/Catamarca/IMG_8907.webp", alt: "Catamarca - Naturaleza", category: "Catamarca" },
        { src: "/images/Catamarca/IMG_8901.webp", alt: "Catamarca - Paisaje rural", category: "Catamarca" },
      ]
    },
    cordoba: {
      name: "Córdoba",
      images: [
        { src: "/images/Córdoba/IMG_3928.webp", alt: "Córdoba - Paisaje", category: "Córdoba" },
        { src: "/images/Córdoba/IMG_3724.webp", alt: "Córdoba - Vista panorámica", category: "Córdoba" },
        { src: "/images/Córdoba/F31C81B0-4665-4D11-AA2C-EB05CDEF08D8.webp", alt: "Córdoba - Naturaleza", category: "Córdoba" },
        { src: "/images/Córdoba/D6A28E29-B014-4A68-B1A0-97FC52CA8407.webp", alt: "Córdoba - Paisaje rural", category: "Córdoba" },
        { src: "/images/Córdoba/D2BAF8D2-A5B2-42AA-A961-89B78A40A2C1.webp", alt: "Córdoba - Vista aérea", category: "Córdoba" },
      ]
    },
    salta: {
      name: "Salta",
      images: [
        { src: "/images/Salta/IMG_4164.webp", alt: "Salta - Paisaje", category: "Salta" },
        { src: "/images/Salta/IMG_4073.webp", alt: "Salta - Vista panorámica", category: "Salta" },
        { src: "/images/Salta/IMG_0908.webp", alt: "Salta - Naturaleza", category: "Salta" },
        { src: "/images/Salta/IMG_0878.webp", alt: "Salta - Paisaje rural", category: "Salta" },
        { src: "/images/Salta/IMG_0826.webp", alt: "Salta - Vista aérea", category: "Salta" },
      ]
    }
  };

  const currentImages = imageCategories[selectedCategory as keyof typeof imageCategories]?.images || [];

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#404d21' }}>
            Galería de momentos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Una muestra de las experiencias increíbles que vivimos en cada destino.
            Descubrí la magia de viajar con nosotros a través de estas imágenes.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(imageCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === key
                    ? 'bg-yellow-400 text-gray-900 shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid - Solo 5 imágenes */}
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-4 mb-12">
          {currentImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 left-2 text-white text-sm">
                  <p className="font-medium">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ver más botón */}
        <div className="text-center mb-12">
          <Link href="/galeria-completa">
            <button className="px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Ver galería completa
            </button>
          </Link>
        </div>

        {/* Modal for Full Image View */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10"
              >
                ×
              </button>
              <ImageWithFallback
                src={selectedImage}
                alt="Vista ampliada"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        )}

        {/* Testimonial */}
        <div className="rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6" style={{ color: '#404d21' }}>
              Testimonios
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              <strong>Ellos ya lo vivieron. ¿Y tú?</strong> Tu aventura espiritual y divertida,
              con la seguridad y la guía de quienes son la mejor opción.
            </p>
          </div>
        </div>

<div className="elfsight-app-337b500b-7431-4ca9-b96d-ea0941f53bf5" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
}