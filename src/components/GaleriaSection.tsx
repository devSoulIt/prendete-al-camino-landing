'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export function GaleriaSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("santiago");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const imageCategories = {
    santiago: {
      name: "Santiago de Compostela",
      coverImage: "/images/Portadas/Santiago de Compostela .webp",
      media: [
        { src: "/images/Santiago/video-santiago-1.mp4", alt: "Santiago - Video", category: "Santiago", type: "video" },//video
        { src: "/images/Santiago/IMG_6995.webp", alt: "Santiago - Paisaje", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_6581.webp", alt: "Santiago - Vista panorámica", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_6435.webp", alt: "Santiago - Naturaleza", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_6359.webp", alt: "Santiago - Paisaje rural", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_6350.webp", alt: "Santiago - Vista aérea", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_6334.webp", alt: "Santiago - Paisaje", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_6321.webp", alt: "Santiago - Vista panorámica", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_6309.webp", alt: "Santiago - Naturaleza", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_6306.webp", alt: "Santiago - Paisaje rural", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_6304.webp", alt: "Santiago - Vista aérea", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_6280.webp", alt: "Santiago - Paisaje", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_6271.webp", alt: "Santiago - Vista panorámica", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_6167.webp", alt: "Santiago - Naturaleza", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_6105.webp", alt: "Santiago - Paisaje rural", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_6092.webp", alt: "Santiago - Vista aérea", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_6036.webp", alt: "Santiago - Paisaje", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5996.webp", alt: "Santiago - Vista panorámica", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5965.webp", alt: "Santiago - Naturaleza", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5908.webp", alt: "Santiago - Paisaje rural", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5854.webp", alt: "Santiago - Vista aérea", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5849.webp", alt: "Santiago - Paisaje", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5845.webp", alt: "Santiago - Vista panorámica", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5840.webp", alt: "Santiago - Naturaleza", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5803.webp", alt: "Santiago - Paisaje rural", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5754.webp", alt: "Santiago - Vista aérea", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5710.webp", alt: "Santiago - Paisaje", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5690.webp", alt: "Santiago - Vista panorámica", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5664.webp", alt: "Santiago - Naturaleza", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5658.webp", alt: "Santiago - Paisaje rural", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5650.webp", alt: "Santiago - Vista aérea", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5604.webp", alt: "Santiago - Paisaje", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5554.webp", alt: "Santiago - Vista panorámica", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5543.webp", alt: "Santiago - Naturaleza", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5519.webp", alt: "Santiago - Paisaje rural", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5502.webp", alt: "Santiago - Vista aérea", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5476.webp", alt: "Santiago - Paisaje", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5428.webp", alt: "Santiago - Vista panorámica", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5400.webp", alt: "Santiago - Naturaleza", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5395.webp", alt: "Santiago - Paisaje rural", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5392.webp", alt: "Santiago - Vista aérea", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5308.webp", alt: "Santiago - Paisaje", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5260.webp", alt: "Santiago - Vista panorámica", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5022.webp", alt: "Santiago - Naturaleza", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_4765.webp", alt: "Santiago - Paisaje rural", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_4715.webp", alt: "Santiago - Vista aérea", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_4521.webp", alt: "Santiago - Paisaje", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_4419.webp", alt: "Santiago - Vista panorámica", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_4058.webp", alt: "Santiago - Naturaleza", category: "Santiago", type: "image" },
        { src: "/images/Santiago/d2018c62-241e-4d0a-9322-d987678cd4d6.webp", alt: "Santiago - Paisaje rural", category: "Santiago", type: "image" },
        { src: "/images/Santiago/aef2ef1a-98fe-4cd9-b316-8ea7a37e97f6.webp", alt: "Santiago - Vista aérea", category: "Santiago", type: "image" },
        { src: "/images/Santiago/667bfe79-55cc-4f23-92f2-09929c853cb7.webp", alt: "Santiago - Paisaje", category: "Santiago", type: "image" },
      ]
    },
    catamarca: {
      name: "Catamarca",
      coverImage: "/images/Portadas/Catamarca.webp",
      media: [
        { src: "/images/Catamarca/video-catamarca-1.mp4", alt: "Catamarca - Video 1", category: "Catamarca", type: "video" }, //video
        { src: "/images/Catamarca/IMG_9015.webp", alt: "Catamarca - Paisaje", category: "Catamarca", type: "image" },
        { src: "/images/Catamarca/IMG_8965.webp", alt: "Catamarca - Vista panorámica", category: "Catamarca", type: "image" },
        { src: "/images/Catamarca/IMG_8961.webp", alt: "Catamarca - Montañas", category: "Catamarca", type: "image" },
        { src: "/images/Catamarca/IMG_8907.webp", alt: "Catamarca - Naturaleza", category: "Catamarca", type: "image" },
        { src: "/images/Catamarca/video-catamarca-2.mp4", alt: "Catamarca - Video 2", category: "Catamarca", type: "video" }, //video
        { src: "/images/Catamarca/IMG_8901.webp", alt: "Catamarca - Paisaje rural", category: "Catamarca", type: "image" },
        { src: "/images/Catamarca/IMG_8877.webp", alt: "Catamarca - Paisaje", category: "Catamarca", type: "image" },
        { src: "/images/Catamarca/IMG_8847.webp", alt: "Catamarca - Vista panorámica", category: "Catamarca", type: "image" },
        { src: "/images/Catamarca/IMG_8818.webp", alt: "Catamarca - Naturaleza", category: "Catamarca", type: "image" },
        { src: "/images/Catamarca/IMG_8795.webp", alt: "Catamarca - Paisaje rural", category: "Catamarca", type: "image" },
        { src: "/images/Catamarca/IMG_8792.webp", alt: "Catamarca - Vista aérea", category: "Catamarca", type: "image" },
        { src: "/images/Catamarca/IMG_8701.webp", alt: "Catamarca - Paisaje", category: "Catamarca", type: "image" },
        { src: "/images/Catamarca/IMG_8658.webp", alt: "Catamarca - Vista panorámica", category: "Catamarca", type: "image" },
        { src: "/images/Catamarca/IMG_3511.webp", alt: "Catamarca - Naturaleza", category: "Catamarca", type: "image" },
        { src: "/images/Catamarca/IMG_3112.webp", alt: "Catamarca - Paisaje rural", category: "Catamarca", type: "image" },
        { src: "/images/Catamarca/c54eabe7-3334-4a45-8233-7f5148d68129.webp", alt: "Catamarca - Vista aérea", category: "Catamarca", type: "image" },
        { src: "/images/Catamarca/207afc24-cdb6-4f73-8c95-55ad2664480e.webp", alt: "Catamarca - Paisaje", category: "Catamarca", type: "image" },
      ]
    },
    cordoba: {
      name: "Córdoba",
      coverImage: "/images/Portadas/Córdoba .webp",
      media: [
        { src: "/images/Córdoba/video-cordoba-1.mp4", alt: "Córdoba - Video", category: "Córdoba", type: "video" }, //video
        { src: "/images/Córdoba/IMG_3928.webp", alt: "Córdoba - Paisaje", category: "Córdoba", type: "image" },
        { src: "/images/Córdoba/IMG_3724.webp", alt: "Córdoba - Vista panorámica", category: "Córdoba", type: "image" },
        { src: "/images/Córdoba/F31C81B0-4665-4D11-AA2C-EB05CDEF08D8.webp", alt: "Córdoba - Naturaleza", category: "Córdoba", type: "image" },
        { src: "/images/Córdoba/D6A28E29-B014-4A68-B1A0-97FC52CA8407.webp", alt: "Córdoba - Paisaje rural", category: "Córdoba", type: "image" },
        { src: "/images/Córdoba/D2BAF8D2-A5B2-42AA-A961-89B78A40A2C1.webp", alt: "Córdoba - Vista aérea", category: "Córdoba", type: "image" },
        { src: "/images/Córdoba/D6A28E29-B014-4A68-B1A0-97FC52CA8407(1).webp", alt: "Córdoba - Paisaje", category: "Córdoba", type: "image" },
        { src: "/images/Córdoba/CBEAEFB5-CDD0-4B58-9CA6-DC1CBA124E8C.webp", alt: "Córdoba - Vista panorámica", category: "Córdoba", type: "image" },
        { src: "/images/Córdoba/C0A67155-274B-4B36-B82A-3D5ED051C1E2.webp", alt: "Córdoba - Naturaleza", category: "Córdoba", type: "image" },
        { src: "/images/Córdoba/C0453752-EFDB-441D-8FF5-3C2F557D6DB7.webp", alt: "Córdoba - Paisaje rural", category: "Córdoba", type: "image" },
        { src: "/images/Córdoba/B4E4D736-21FC-493C-8D44-76BE78BD390E.webp", alt: "Córdoba - Vista aérea", category: "Córdoba", type: "image" },
        { src: "/images/Córdoba/98CB852E-D77E-4F6A-94E1-4B491F428748.webp", alt: "Córdoba - Paisaje", category: "Córdoba", type: "image" },
        { src: "/images/Córdoba/9172643C-746F-44BB-AD5B-1B4F37A25099.webp", alt: "Córdoba - Vista panorámica", category: "Córdoba", type: "image" },
        { src: "/images/Córdoba/90BF532A-0B4D-462F-83F7-B996788F4F6E.webp", alt: "Córdoba - Naturaleza", category: "Córdoba", type: "image" },
        { src: "/images/Córdoba/5181FAAD-86F1-48CF-9408-9B030F1BBAA3.webp", alt: "Córdoba - Paisaje rural", category: "Córdoba", type: "image" },
        { src: "/images/Córdoba/5110DA24-A2FC-449B-A401-4433614DE1A4.webp", alt: "Córdoba - Vista aérea", category: "Córdoba", type: "image" },
        { src: "/images/Córdoba/393FBCA0-5D05-43BA-958E-049C14E84F2B.webp", alt: "Córdoba - Paisaje", category: "Córdoba", type: "image" },
      ]
    },
    salta: {
      name: "Salta",
      coverImage: "/images/Portadas/Salta .webp",
      media: [
        { src: "/images/Salta/video-salta-1.mp4", alt: "Salta - Video", category: "Salta", type: "video" },
        { src: "/images/Salta/IMG_4164.webp", alt: "Salta - Paisaje", category: "Salta", type: "image" },
        { src: "/images/Salta/IMG_4073.webp", alt: "Salta - Vista panorámica", category: "Salta", type: "image" },
        { src: "/images/Salta/IMG_0908.webp", alt: "Salta - Naturaleza", category: "Salta", type: "image" },
        { src: "/images/Salta/IMG_0878.webp", alt: "Salta - Paisaje rural", category: "Salta", type: "image" },
        { src: "/images/Salta/IMG_0826.webp", alt: "Salta - Vista aérea", category: "Salta", type: "image" },
        { src: "/images/Salta/IMG_0819.webp", alt: "Salta - Paisaje", category: "Salta", type: "image" },
        { src: "/images/Salta/IMG_0687.webp", alt: "Salta - Vista panorámica", category: "Salta", type: "image" },
        { src: "/images/Salta/IMG_0582.webp", alt: "Salta - Naturaleza", category: "Salta", type: "image" },
        { src: "/images/Salta/IMG_0536.webp", alt: "Salta - Paisaje rural", category: "Salta", type: "image" },
        { src: "/images/Salta/IMG_0469.webp", alt: "Salta - Vista aérea", category: "Salta", type: "image" },
        { src: "/images/Salta/IMG_0359.webp", alt: "Salta - Paisaje", category: "Salta", type: "image" },
        { src: "/images/Salta/IMG_0342.webp", alt: "Salta - Vista panorámica", category: "Salta", type: "image" },
        { src: "/images/Salta/IMG_0273.webp", alt: "Salta - Naturaleza", category: "Salta", type: "image" },
        { src: "/images/Salta/IMG_4311.webp", alt: "Salta - Paisaje rural", category: "Salta", type: "image" },
        { src: "/images/Salta/IMG_4235.webp", alt: "Salta - Vista aérea", category: "Salta", type: "image" },
        { src: "/images/Salta/IMG_4145.webp", alt: "Salta - Paisaje", category: "Salta", type: "image" },
        { src: "/images/Salta/F49C55BD-D2DD-4C63-8BDE-379ADF28EFD7.webp", alt: "Salta - Vista panorámica", category: "Salta", type: "image" },
        { src: "/images/Salta/7FBB4437-7B3E-4DD5-B17A-CAF4C45C115C.webp", alt: "Salta - Naturaleza", category: "Salta", type: "image" },
        { src: "/images/Salta/0B556362-96BF-41CE-A151-3F609741154A.webp", alt: "Salta - Paisaje rural", category: "Salta", type: "image" },
      ]
    }
  };

  const currentMedia = imageCategories[selectedCategory as keyof typeof imageCategories]?.media || [];

  const openModal = (category: string) => {
    setSelectedCategory(category);
    setCurrentIndex(0);
    //setIsLoading(true);
    setSelectedImage(imageCategories[category as keyof typeof imageCategories]?.media[0]?.src || null);
  };

  const nextMedia = () => {
    if (currentIndex < currentMedia.length - 1) {
      //setIsLoading(true);
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(currentMedia[currentIndex + 1]?.src || null);
    }
  };

  const prevMedia = () => {
    if (currentIndex > 0) {
      //setIsLoading(true);
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(currentMedia[currentIndex - 1]?.src || null);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(0);
    setIsLoading(false);
  };

  // Navegación con teclado
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!selectedImage) return;

      switch (event.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowLeft':
          if (currentIndex > 0) {
            prevMedia();
          }
          break;
        case 'ArrowRight':
          if (currentIndex < currentMedia.length - 1) {
            nextMedia();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex, currentMedia.length]);

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
        </div>

        {/* Nueva estructura de galería */}
        <div className="space-y-8">
          {/* Santiago - Portada principal */}
          <div className="flex justify-center">
            <div
              className="relative group overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer max-w-4xl w-full"
              onClick={() => openModal('santiago')}
            >
              <Image
                src={imageCategories.santiago.coverImage}
                alt="Santiago de Compostela - Portada"
                className="w-full h-96 md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                width={800}
                height={500}
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl md:text-3xl md:text-4xl font-bold mb-2">Santiago de Compostela</h3>
                  <p className="text-sm md:text-lg opacity-90">Haz clic para ver todas las fotos y videos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Catamarca y Córdoba - Lado a lado */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Catamarca - Lado izquierdo */}
            <div
              className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => openModal('catamarca')}
            >
              <Image
                src={imageCategories.catamarca.coverImage}
                alt="Catamarca - Portada"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                width={600}
                height={400}
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-1">Catamarca</h3>
                  <p className="text-sm md:text-lg opacity-90">Ver galería completa</p>
                </div>
              </div>
            </div>

            {/* Córdoba - Lado derecho */}
            <div
              className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => openModal('cordoba')}
            >
              <Image
                src={imageCategories.cordoba.coverImage}
                alt="Córdoba - Portada"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                width={600}
                height={400}
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-1">Córdoba</h3>
                  <p className="text-sm md:text-lg opacity-90">Ver galería completa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Salta - Centrado */}
          <div className="flex justify-center">
            <div
              className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer max-w-2xl w-full"
              onClick={() => openModal('salta')}
            >
              <Image
                src={imageCategories.salta.coverImage}
                alt="Salta - Portada"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                width={600}
                height={400}
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-1">Salta</h3>
                  <p className="text-sm md:text-lg opacity-90">Ver galería completa</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal mejorado con navegación */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            {/* Botón cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
            >
              ×
            </button>
            <div className="relative max-w-6xl max-h-full w-full">

              {/* Navegación izquierda */}
              {currentIndex > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevMedia();
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-10 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
                >
                  ‹
                </button>
              )}

              {/* Navegación derecha */}
              {currentIndex < currentMedia.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextMedia();
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-10 bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
                >
                  ›
                </button>
              )}

              {/* Contenido del modal */}
              <div className="flex flex-col items-center">
                {/* Indicador de carga */}
                {isLoading && (
                  <div className="flex flex-col items-center justify-center min-h-[60vh]">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mb-4"></div>
                    <p className="text-white text-lg">Cargando...</p>
                  </div>
                )}

                {/* Contenido multimedia */}
                <div className={`${isLoading ? 'hidden' : 'block'}`}>
                  {currentMedia[currentIndex]?.type === 'video' ? (
                    <video
                      src={selectedImage}
                      controls
                      className="max-w-full max-h-[80vh] object-contain"
                      autoPlay
                      loop
                      onLoadedData={() => setIsLoading(false)}
                      onError={() => setIsLoading(false)}
                    />
                  ) : (
                    <Image
                      src={selectedImage}
                      alt={currentMedia[currentIndex]?.alt || "Vista ampliada"}
                      className="max-w-full max-h-[80vh] object-contain"
                      width={1200}
                      height={800}
                      quality={50}
                      onLoad={() => setIsLoading(false)}
                      onError={() => setIsLoading(false)}
                      priority
                    />
                  )}
                </div>

                {/* Información del contenido */}
                {!isLoading && (
                  <div className="fixed bottom-16  text-center text-white">
                    <h3 className="text-xl font-bold mb-2">
                      {imageCategories[selectedCategory as keyof typeof imageCategories]?.name}
                    </h3>
                    <p className="text-sm opacity-80">
                      {currentIndex + 1} de {currentMedia.length}
                    </p>
                  </div>
                )}
              </div>
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