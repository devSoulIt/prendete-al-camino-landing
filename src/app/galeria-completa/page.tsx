'use client'

import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import dynamic from "next/dynamic";

// Lazy load del Header para reducir el bundle inicial
const Header = dynamic(() => import("@/components/Header").then(mod => ({ default: mod.Header })), {
  ssr: false,
  loading: () => <div className="h-[90px]" />
});

// Hook personalizado para intersection observer
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return [elementRef, isIntersecting] as const;
};

// Componente de imagen optimizado con lazy loading
const OptimizedImage = ({ image, onClick }: { image: any; onClick: () => void }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [elementRef, isInView] = useIntersectionObserver();

  return (
    <div
      ref={elementRef}
      className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-100"
      onClick={onClick}
    >
      {isInView && (
        <ImageWithFallback
          src={image.src}
          alt={image.alt}
          className={`w-full h-48 object-cover transition-all duration-300 ${
            isLoaded ? 'group-hover:scale-110' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
      )}
      {!isLoaded && isInView && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-2 left-2 text-white text-sm">
          <p className="font-medium">{image.category}</p>
        </div>
      </div>
    </div>
  );
};

export default function GaleriaCompleta() {
  const [selectedCategory, setSelectedCategory] = useState<string>("todas");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 10;

  const allImages = [
    // Catamarca
    { src: "/images/Catamarca/IMG_9015.webp", alt: "Catamarca - Paisaje", category: "Catamarca" },
    { src: "/images/Catamarca/IMG_8965.webp", alt: "Catamarca - Vista panorámica", category: "Catamarca" },
    { src: "/images/Catamarca/IMG_8961.webp", alt: "Catamarca - Montañas", category: "Catamarca" },
    { src: "/images/Catamarca/IMG_8907.webp", alt: "Catamarca - Naturaleza", category: "Catamarca" },
    { src: "/images/Catamarca/IMG_8901.webp", alt: "Catamarca - Paisaje rural", category: "Catamarca" },
    { src: "/images/Catamarca/IMG_8877.webp", alt: "Catamarca - Vista aérea", category: "Catamarca" },
    { src: "/images/Catamarca/IMG_8847.webp", alt: "Catamarca - Camino", category: "Catamarca" },
    { src: "/images/Catamarca/IMG_8818.webp", alt: "Catamarca - Paisaje natural", category: "Catamarca" },
    { src: "/images/Catamarca/IMG_8795.webp", alt: "Catamarca - Vista montañosa", category: "Catamarca" },
    { src: "/images/Catamarca/IMG_8792.webp", alt: "Catamarca - Naturaleza salvaje", category: "Catamarca" },
    { src: "/images/Catamarca/IMG_8701.webp", alt: "Catamarca - Paisaje desértico", category: "Catamarca" },
    { src: "/images/Catamarca/IMG_8658.webp", alt: "Catamarca - Vista panorámica", category: "Catamarca" },
    { src: "/images/Catamarca/IMG_3511.webp", alt: "Catamarca - Montañas", category: "Catamarca" },
    { src: "/images/Catamarca/IMG_3112.webp", alt: "Catamarca - Paisaje natural", category: "Catamarca" },
    { src: "/images/Catamarca/c54eabe7-3334-4a45-8233-7f5148d68129.webp", alt: "Catamarca - Vista", category: "Catamarca" },
    { src: "/images/Catamarca/207afc24-cdb6-4f73-8c95-55ad2664480e.webp", alt: "Catamarca - Paisaje", category: "Catamarca" },

    // Córdoba
    { src: "/images/Córdoba/IMG_3928.webp", alt: "Córdoba - Paisaje", category: "Córdoba" },
    { src: "/images/Córdoba/IMG_3724.webp", alt: "Córdoba - Vista panorámica", category: "Córdoba" },
    { src: "/images/Córdoba/F31C81B0-4665-4D11-AA2C-EB05CDEF08D8.webp", alt: "Córdoba - Naturaleza", category: "Córdoba" },
    { src: "/images/Córdoba/D6A28E29-B014-4A68-B1A0-97FC52CA8407.webp", alt: "Córdoba - Paisaje rural", category: "Córdoba" },
    { src: "/images/Córdoba/D2BAF8D2-A5B2-42AA-A961-89B78A40A2C1.webp", alt: "Córdoba - Vista aérea", category: "Córdoba" },
    { src: "/images/Córdoba/CBEAEFB5-CDD0-4B58-9CA6-DC1CBA124E8C.webp", alt: "Córdoba - Camino", category: "Córdoba" },
    { src: "/images/Córdoba/C0A67155-274B-4B36-B82A-3D5ED051C1E2.webp", alt: "Córdoba - Paisaje natural", category: "Córdoba" },
    { src: "/images/Córdoba/C0453752-EFDB-441D-8FF5-3C2F557D6DB7.webp", alt: "Córdoba - Vista montañosa", category: "Córdoba" },
    { src: "/images/Córdoba/B4E4D736-21FC-493C-8D44-76BE78BD390E.webp", alt: "Córdoba - Naturaleza salvaje", category: "Córdoba" },
    { src: "/images/Córdoba/98CB852E-D77E-4F6A-94E1-4B491F428748.webp", alt: "Córdoba - Paisaje", category: "Córdoba" },
    { src: "/images/Córdoba/9172643C-746F-44BB-AD5B-1B4F37A25099.webp", alt: "Córdoba - Vista panorámica", category: "Córdoba" },
    { src: "/images/Córdoba/90BF532A-0B4D-462F-83F7-B996788F4F6E.webp", alt: "Córdoba - Naturaleza", category: "Córdoba" },
    { src: "/images/Córdoba/5181FAAD-86F1-48CF-9408-9B030F1BBAA3.webp", alt: "Córdoba - Paisaje rural", category: "Córdoba" },
    { src: "/images/Córdoba/5110DA24-A2FC-449B-A401-4433614DE1A4.webp", alt: "Córdoba - Vista aérea", category: "Córdoba" },
    { src: "/images/Córdoba/393FBCA0-5D05-43BA-958E-049C14E84F2B.webp", alt: "Córdoba - Camino", category: "Córdoba" },

    // Salta
    { src: "/images/Salta/IMG_4164.webp", alt: "Salta - Paisaje", category: "Salta" },
    { src: "/images/Salta/IMG_4073.webp", alt: "Salta - Vista panorámica", category: "Salta" },
    { src: "/images/Salta/IMG_0908.webp", alt: "Salta - Naturaleza", category: "Salta" },
    { src: "/images/Salta/IMG_0878.webp", alt: "Salta - Paisaje rural", category: "Salta" },
    { src: "/images/Salta/IMG_0826.webp", alt: "Salta - Vista aérea", category: "Salta" },
    { src: "/images/Salta/IMG_0819.webp", alt: "Salta - Camino", category: "Salta" },
    { src: "/images/Salta/IMG_0687.webp", alt: "Salta - Paisaje natural", category: "Salta" },
    { src: "/images/Salta/IMG_0582.webp", alt: "Salta - Vista montañosa", category: "Salta" },
    { src: "/images/Salta/IMG_0536.webp", alt: "Salta - Naturaleza salvaje", category: "Salta" },
    { src: "/images/Salta/IMG_0469.webp", alt: "Salta - Paisaje", category: "Salta" },
    { src: "/images/Salta/IMG_0359.webp", alt: "Salta - Vista panorámica", category: "Salta" },
    { src: "/images/Salta/IMG_0342.webp", alt: "Salta - Naturaleza", category: "Salta" },
    { src: "/images/Salta/IMG_0273.webp", alt: "Salta - Paisaje rural", category: "Salta" },
    { src: "/images/Salta/F49C55BD-D2DD-4C63-8BDE-379ADF28EFD7.webp", alt: "Salta - Vista aérea", category: "Salta" },
    { src: "/images/Salta/7FBB4437-7B3E-4DD5-B17A-CAF4C45C115C.webp", alt: "Salta - Camino", category: "Salta" },
    { src: "/images/Salta/0B556362-96BF-41CE-A151-3F609741154A.webp", alt: "Salta - Paisaje natural", category: "Salta" },

    // Santiago
    { src: "/images/Santiago/IMG_6995.webp", alt: "Santiago - Paisaje", category: "Santiago" },
    { src: "/images/Santiago/IMG_6581.webp", alt: "Santiago - Vista panorámica", category: "Santiago" },
    { src: "/images/Santiago/IMG_6435.webp", alt: "Santiago - Naturaleza", category: "Santiago" },
    { src: "/images/Santiago/IMG_6359.webp", alt: "Santiago - Paisaje rural", category: "Santiago" },
    { src: "/images/Santiago/IMG_6350.webp", alt: "Santiago - Vista aérea", category: "Santiago" },
    { src: "/images/Santiago/IMG_6334.webp", alt: "Santiago - Camino", category: "Santiago" },
    { src: "/images/Santiago/IMG_6321.webp", alt: "Santiago - Paisaje natural", category: "Santiago" },
    { src: "/images/Santiago/IMG_6309.webp", alt: "Santiago - Vista montañosa", category: "Santiago" },
    { src: "/images/Santiago/IMG_6306.webp", alt: "Santiago - Naturaleza salvaje", category: "Santiago" },
    { src: "/images/Santiago/IMG_6304.webp", alt: "Santiago - Paisaje", category: "Santiago" },
    { src: "/images/Santiago/IMG_6280.webp", alt: "Santiago - Vista panorámica", category: "Santiago" },
    { src: "/images/Santiago/IMG_6271.webp", alt: "Santiago - Naturaleza", category: "Santiago" },
    { src: "/images/Santiago/IMG_6167.webp", alt: "Santiago - Paisaje rural", category: "Santiago" },
    { src: "/images/Santiago/IMG_6105.webp", alt: "Santiago - Vista aérea", category: "Santiago" },
    { src: "/images/Santiago/IMG_6092.webp", alt: "Santiago - Camino", category: "Santiago" },
    { src: "/images/Santiago/IMG_6036.webp", alt: "Santiago - Paisaje natural", category: "Santiago" },
    { src: "/images/Santiago/IMG_5996.webp", alt: "Santiago - Vista montañosa", category: "Santiago" },
    { src: "/images/Santiago/IMG_5965.webp", alt: "Santiago - Naturaleza salvaje", category: "Santiago" },
    { src: "/images/Santiago/IMG_5908.webp", alt: "Santiago - Paisaje", category: "Santiago" },
    { src: "/images/Santiago/IMG_5854.webp", alt: "Santiago - Vista panorámica", category: "Santiago" },
    { src: "/images/Santiago/IMG_5849.webp", alt: "Santiago - Naturaleza", category: "Santiago" },
    { src: "/images/Santiago/IMG_5845.webp", alt: "Santiago - Paisaje rural", category: "Santiago" },
    { src: "/images/Santiago/IMG_5840.webp", alt: "Santiago - Vista aérea", category: "Santiago" },
    { src: "/images/Santiago/IMG_5803.webp", alt: "Santiago - Camino", category: "Santiago" },
    { src: "/images/Santiago/IMG_5754.webp", alt: "Santiago - Paisaje natural", category: "Santiago" },
    { src: "/images/Santiago/IMG_5710.webp", alt: "Santiago - Vista montañosa", category: "Santiago" },
    { src: "/images/Santiago/IMG_5690.webp", alt: "Santiago - Naturaleza salvaje", category: "Santiago" },
    { src: "/images/Santiago/IMG_5664.webp", alt: "Santiago - Paisaje", category: "Santiago" },
    { src: "/images/Santiago/IMG_5658.webp", alt: "Santiago - Vista panorámica", category: "Santiago" },
    { src: "/images/Santiago/IMG_5650.webp", alt: "Santiago - Naturaleza", category: "Santiago" },
    { src: "/images/Santiago/IMG_5604.webp", alt: "Santiago - Paisaje rural", category: "Santiago" },
    { src: "/images/Santiago/IMG_5554.webp", alt: "Santiago - Vista aérea", category: "Santiago" },
    { src: "/images/Santiago/IMG_5543.webp", alt: "Santiago - Camino", category: "Santiago" },
    { src: "/images/Santiago/IMG_5519.webp", alt: "Santiago - Paisaje natural", category: "Santiago" },
    { src: "/images/Santiago/IMG_5502.webp", alt: "Santiago - Vista montañosa", category: "Santiago" },
    { src: "/images/Santiago/IMG_5476.webp", alt: "Santiago - Naturaleza salvaje", category: "Santiago" },
    { src: "/images/Santiago/IMG_5428.webp", alt: "Santiago - Paisaje", category: "Santiago" },
    { src: "/images/Santiago/IMG_5400.webp", alt: "Santiago - Vista panorámica", category: "Santiago" },
    { src: "/images/Santiago/IMG_5395.webp", alt: "Santiago - Naturaleza", category: "Santiago" },
    { src: "/images/Santiago/IMG_5392.webp", alt: "Santiago - Paisaje rural", category: "Santiago" },
    { src: "/images/Santiago/IMG_5308.webp", alt: "Santiago - Vista aérea", category: "Santiago" },
    { src: "/images/Santiago/IMG_5260.webp", alt: "Santiago - Camino", category: "Santiago" },
    { src: "/images/Santiago/IMG_5022.webp", alt: "Santiago - Paisaje natural", category: "Santiago" },
    { src: "/images/Santiago/IMG_4765.webp", alt: "Santiago - Vista montañosa", category: "Santiago" },
    { src: "/images/Santiago/IMG_4715.webp", alt: "Santiago - Naturaleza salvaje", category: "Santiago" },
    { src: "/images/Santiago/IMG_4521.webp", alt: "Santiago - Paisaje", category: "Santiago" },
    { src: "/images/Santiago/IMG_4419.webp", alt: "Santiago - Vista panorámica", category: "Santiago" },
    { src: "/images/Santiago/IMG_4058.webp", alt: "Santiago - Naturaleza", category: "Santiago" },
    { src: "/images/Santiago/d2018c62-241e-4d0a-9322-d987678cd4d6.webp", alt: "Santiago - Paisaje rural", category: "Santiago" },
    { src: "/images/Santiago/aef2ef1a-98fe-4cd9-b316-8ea7a37e97f6.webp", alt: "Santiago - Vista aérea", category: "Santiago" },
    { src: "/images/Santiago/667bfe79-55cc-4f23-92f2-09929c853cb7.webp", alt: "Santiago - Camino", category: "Santiago" },
  ];

  const categories = {
    todas: "Todas las imágenes",
    catamarca: "Catamarca",
    cordoba: "Córdoba",
    salta: "Salta",
    santiago: "Santiago de Compostela"
  };

  // Filtrar imágenes por categoría
  const filteredImages = selectedCategory === "todas"
    ? allImages
    : allImages.filter(img => img.category.toLowerCase() === selectedCategory);

  // Calcular paginación
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = filteredImages.slice(startIndex, endIndex);

  // Resetear página cuando cambia la categoría
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-2">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="flex relative justify-center items-center">
                <div className="absolute left-0 flex items-center justify-center mb-6">
                  <Link href="/" className="text-gray-600 hover:text-gray-900 mr-4">
                    ← Volver al inicio
                  </Link>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#404d21' }}>
                  Galería completa
                </h1>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Explorá todas las imágenes de nuestros viajes organizadas por destino.
                Cada foto cuenta una historia única de aventura y descubrimiento.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.entries(categories).map(([key, name]) => (
                <button
                  key={key}
                  onClick={() => handleCategoryChange(key)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === key
                    ? 'bg-yellow-400 text-gray-900 shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {name}
                </button>
              ))}
            </div>

            {/* Image Counter */}
            <div className="text-center text-gray-600 mb-8">
              <p className="text-lg">
                Mostrando {currentImages.length} de {filteredImages.length} imágenes de {categories[selectedCategory as keyof typeof categories]}
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 mb-12">
              {currentImages.map((image, index) => (
                <OptimizedImage
                  key={index}
                  image={image}
                  onClick={() => setSelectedImage(image.src)}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2 mb-12">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  Anterior
                </button>

                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let page;
                  if (totalPages <= 5) {
                    page = i + 1;
                  } else if (currentPage <= 3) {
                    page = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    page = totalPages - 4 + i;
                  } else {
                    page = currentPage - 2 + i;
                  }
                  
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                        currentPage === page
                          ? 'bg-yellow-400 text-gray-900 shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}

                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  Siguiente
                </button>
              </div>
            )}

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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
