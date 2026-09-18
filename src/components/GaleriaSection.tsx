'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

/** Carpeta pública con espacios y tilde — usar segmento codificado en URLs */
const SAN_CARLOS_MAGICO = "/images/San%20Carlos%20M%C3%A1gico";

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
        { src: "/images/Santiago/IMG_5308.webp", alt: "Santiago - Paisaje", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_4058.webp", alt: "Santiago - Naturaleza", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_6995.webp", alt: "Santiago - Paisaje", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_6581.webp", alt: "Santiago - Vista panorámica", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_6435.webp", alt: "Santiago - Naturaleza", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_6359.webp", alt: "Santiago - Paisaje rural", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_6350.webp", alt: "Santiago - Vista aérea", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_6334.webp", alt: "Santiago - Paisaje", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_6321.webp", alt: "Santiago - Vista panorámica", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_6309.webp", alt: "Santiago - Naturaleza", category: "Santiago", type: "image" },
        //{ src: "/images/Santiago/IMG_6306.webp", alt: "Santiago - Paisaje rural", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_6304.webp", alt: "Santiago - Vista aérea", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_6280.webp", alt: "Santiago - Paisaje", category: "Santiago", type: "image" },
        // { src: "/images/Santiago/IMG_6271.webp", alt: "Santiago - Vista panorámica", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_6167.webp", alt: "Santiago - Naturaleza", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_6105.webp", alt: "Santiago - Paisaje rural", category: "Santiago", type: "image" },
        // { src: "/images/Santiago/IMG_6092.webp", alt: "Santiago - Vista aérea", category: "Santiago", type: "image" },
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
        // { src: "/images/Santiago/IMG_5650.webp", alt: "Santiago - Vista aérea", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5604.webp", alt: "Santiago - Paisaje", category: "Santiago", type: "image" },
        // { src: "/images/Santiago/IMG_5554.webp", alt: "Santiago - Vista panorámica", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5543.webp", alt: "Santiago - Naturaleza", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5519.webp", alt: "Santiago - Paisaje rural", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5502.webp", alt: "Santiago - Vista aérea", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5476.webp", alt: "Santiago - Paisaje", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5428.webp", alt: "Santiago - Vista panorámica", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5400.webp", alt: "Santiago - Naturaleza", category: "Santiago", type: "image" },
        // { src: "/images/Santiago/IMG_5395.webp", alt: "Santiago - Paisaje rural", category: "Santiago", type: "image" },
        // { src: "/images/Santiago/IMG_5392.webp", alt: "Santiago - Vista aérea", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5260.webp", alt: "Santiago - Vista panorámica", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_5022.webp", alt: "Santiago - Naturaleza", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_4765.webp", alt: "Santiago - Paisaje rural", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_4715.webp", alt: "Santiago - Vista aérea", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_4521.webp", alt: "Santiago - Paisaje", category: "Santiago", type: "image" },
        { src: "/images/Santiago/IMG_4419.webp", alt: "Santiago - Vista panorámica", category: "Santiago", type: "image" },
        { src: "/images/Santiago/d2018c62-241e-4d0a-9322-d987678cd4d6.webp", alt: "Santiago - Paisaje rural", category: "Santiago", type: "image" },
        { src: "/images/Santiago/aef2ef1a-98fe-4cd9-b316-8ea7a37e97f6.webp", alt: "Santiago - Vista aérea", category: "Santiago", type: "image" },
        { src: "/images/Santiago/667bfe79-55cc-4f23-92f2-09929c853cb7.webp", alt: "Santiago - Paisaje", category: "Santiago", type: "image" },
      ]
    },
    italia: {
      name: "Italia",
      coverImage: "/images/Roma/3.jpg",
      media: [
        { src: "/images/Roma/3.jpg", alt: "Roma - Fontana di Trevi", category: "Italia", type: "image" },
        { src: "/images/Roma/5.jpg", alt: "Roma - Plaza San Pedro", category: "Italia", type: "image" },
        { src: "/images/Roma/1.jpg", alt: "Roma - Foto 1", category: "Italia", type: "image" },
        { src: "/images/Roma/2.jpg", alt: "Roma - Foto 2", category: "Italia", type: "image" },
        { src: "/images/Roma/4.jpg", alt: "Roma - Foto 4", category: "Italia", type: "image" },
        { src: "/images/Roma/6.jpg", alt: "Roma - Foto 6", category: "Italia", type: "image" },
        { src: "/images/Roma/7.jpg", alt: "Roma - Foto 7", category: "Italia", type: "image" },
        { src: "/images/Roma/8.jpg", alt: "Roma - Foto 8", category: "Italia", type: "image" },
        { src: "/images/Roma/9.jpg", alt: "Roma - Foto 9", category: "Italia", type: "image" },
        { src: "/images/Roma/10.jpg", alt: "Roma - Foto 10", category: "Italia", type: "image" },
        { src: "/images/Napoles/2.jpg", alt: "Nápoles - Plaza del Plebiscito", category: "Italia", type: "image" },
        { src: "/images/Sorrento/1.jpg", alt: "Sorrento - Grupo Prendete al Camino", category: "Italia", type: "image" },
        { src: "/images/Sorrento/2.jpg", alt: "Sorrento - Foto 2", category: "Italia", type: "image" },
        { src: "/images/Pompeya/1.jpg", alt: "Pompeya - Ruinas", category: "Italia", type: "image" },
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
    },
    jujuy: {
      name: "Jujuy",
      coverImage: "/images/JUJUY/portada.jpeg",
      media: [
        { src: "/images/JUJUY/video1.mp4", alt: "Jujuy - Video", category: "Jujuy", type: "video" },
        { src: "/images/JUJUY/portada.jpeg", alt: "Jujuy - Portada", category: "Jujuy", type: "image" },
      ]
    },
    alpachiri: {
      name: "Alpachiri-Portal de los Alisos",
      coverImage: "/images/Alpachiri/Alpachiri-6.webp",
      media: [
        { src: "/images/Alpachiri/Alpachiri-1.mp4", alt: "Alpachiri - Video", category: "Alpachiri", type: "video" },
        { src: "/images/Alpachiri/Alpachiri-1.webp", alt: "Alpachiri - Paisaje", category: "Alpachiri", type: "image" },
        { src: "/images/Alpachiri/Alpachiri-2.webp", alt: "Alpachiri - Naturaleza", category: "Alpachiri", type: "image" },
        { src: "/images/Alpachiri/Alpachiri-3.webp", alt: "Alpachiri - Vista panorámica", category: "Alpachiri", type: "image" },
        { src: "/images/Alpachiri/Alpachiri-4.webp", alt: "Alpachiri - Paisaje", category: "Alpachiri", type: "image" },
        { src: "/images/Alpachiri/Alpachiri-5.webp", alt: "Alpachiri - Naturaleza", category: "Alpachiri", type: "image" },
        { src: "/images/Alpachiri/Alpachiri-6.webp", alt: "Alpachiri - Vista panorámica", category: "Alpachiri", type: "image" },
        { src: "/images/Alpachiri/Alpachiri-7.webp", alt: "Alpachiri - Paisaje", category: "Alpachiri", type: "image" },
        { src: "/images/Alpachiri/Alpachiri-8.webp", alt: "Alpachiri - Naturaleza", category: "Alpachiri", type: "image" },
      ]
    },
    balcozna: {
      name: "Balcozna",
      coverImage: "/images/Balcozna/1.jpeg",
      media: [
        { src: "/images/Balcozna/1.jpeg", alt: "Balcozna - Paisaje", category: "Balcozna", type: "image" },
        { src: "/images/Balcozna/2.jpeg", alt: "Balcozna - Vista panorámica", category: "Balcozna", type: "image" },
        { src: "/images/Balcozna/3.jpeg", alt: "Balcozna - Naturaleza", category: "Balcozna", type: "image" },
        { src: "/images/Balcozna/4.jpeg", alt: "Balcozna - Paisaje", category: "Balcozna", type: "image" },
        { src: "/images/Balcozna/5.jpeg", alt: "Balcozna - Vista panorámica", category: "Balcozna", type: "image" },
        { src: "/images/Balcozna/6.jpeg", alt: "Balcozna - Naturaleza", category: "Balcozna", type: "image" },
        { src: "/images/Balcozna/7.jpeg", alt: "Balcozna - Paisaje", category: "Balcozna", type: "image" },
        { src: "/images/Balcozna/8.jpeg", alt: "Balcozna - Vista panorámica", category: "Balcozna", type: "image" },
        { src: "/images/Balcozna/9.jpeg", alt: "Balcozna - Naturaleza", category: "Balcozna", type: "image" },
        { src: "/images/Balcozna/10.jpeg", alt: "Balcozna - Paisaje", category: "Balcozna", type: "image" },
      ]
    },
    sanCarlosMagico: {
      name: "San Carlos Mágico",
      coverImage: `${SAN_CARLOS_MAGICO}/21.jpeg`,
      media: [
        { src: `${SAN_CARLOS_MAGICO}/1.mp4`, alt: "San Carlos Mágico - Video", category: "San Carlos Mágico", type: "video" },
        { src: `${SAN_CARLOS_MAGICO}/1.jpeg`, alt: "San Carlos Mágico - Foto 1", category: "San Carlos Mágico", type: "image" },
        { src: `${SAN_CARLOS_MAGICO}/2.jpeg`, alt: "San Carlos Mágico - Foto 2", category: "San Carlos Mágico", type: "image" },
        { src: `${SAN_CARLOS_MAGICO}/3.jpeg`, alt: "San Carlos Mágico - Foto 3", category: "San Carlos Mágico", type: "image" },
        { src: `${SAN_CARLOS_MAGICO}/4.jpeg`, alt: "San Carlos Mágico - Foto 4", category: "San Carlos Mágico", type: "image" },
        { src: `${SAN_CARLOS_MAGICO}/5.jpeg`, alt: "San Carlos Mágico - Foto 5", category: "San Carlos Mágico", type: "image" },
        { src: `${SAN_CARLOS_MAGICO}/6.jpeg`, alt: "San Carlos Mágico - Foto 6", category: "San Carlos Mágico", type: "image" },
        { src: `${SAN_CARLOS_MAGICO}/7.jpeg`, alt: "San Carlos Mágico - Foto 7", category: "San Carlos Mágico", type: "image" },
        { src: `${SAN_CARLOS_MAGICO}/8.jpeg`, alt: "San Carlos Mágico - Foto 8", category: "San Carlos Mágico", type: "image" },
        { src: `${SAN_CARLOS_MAGICO}/9.jpeg`, alt: "San Carlos Mágico - Foto 9", category: "San Carlos Mágico", type: "image" },
        { src: `${SAN_CARLOS_MAGICO}/10.jpeg`, alt: "San Carlos Mágico - Foto 10", category: "San Carlos Mágico", type: "image" },
        { src: `${SAN_CARLOS_MAGICO}/11.jpeg`, alt: "San Carlos Mágico - Foto 11", category: "San Carlos Mágico", type: "image" },
        { src: `${SAN_CARLOS_MAGICO}/12.jpeg`, alt: "San Carlos Mágico - Foto 12", category: "San Carlos Mágico", type: "image" },
        { src: `${SAN_CARLOS_MAGICO}/13.jpeg`, alt: "San Carlos Mágico - Foto 13", category: "San Carlos Mágico", type: "image" },
        { src: `${SAN_CARLOS_MAGICO}/14.jpeg`, alt: "San Carlos Mágico - Foto 14", category: "San Carlos Mágico", type: "image" },
        { src: `${SAN_CARLOS_MAGICO}/15.jpeg`, alt: "San Carlos Mágico - Foto 15", category: "San Carlos Mágico", type: "image" },
        { src: `${SAN_CARLOS_MAGICO}/16.jpeg`, alt: "San Carlos Mágico - Foto 16", category: "San Carlos Mágico", type: "image" },
        { src: `${SAN_CARLOS_MAGICO}/17.jpeg`, alt: "San Carlos Mágico - Foto 17", category: "San Carlos Mágico", type: "image" },
        { src: `${SAN_CARLOS_MAGICO}/18.jpeg`, alt: "San Carlos Mágico - Foto 18", category: "San Carlos Mágico", type: "image" },
        { src: `${SAN_CARLOS_MAGICO}/19.jpeg`, alt: "San Carlos Mágico - Foto 19", category: "San Carlos Mágico", type: "image" },
        { src: `${SAN_CARLOS_MAGICO}/20.jpeg`, alt: "San Carlos Mágico - Foto 20", category: "San Carlos Mágico", type: "image" },
        { src: `${SAN_CARLOS_MAGICO}/21.jpeg`, alt: "San Carlos Mágico - Foto 21", category: "San Carlos Mágico", type: "image" },
        { src: `${SAN_CARLOS_MAGICO}/22.jpeg`, alt: "San Carlos Mágico - Foto 22", category: "San Carlos Mágico", type: "image" },
      ]
    },
    ancajuli: {
      name: "Ancajuli",
      coverImage: "/images/Ancajuli/1.jpg",
      media: [
        { src: "/images/Ancajuli/1.jpg", alt: "Ancajuli - Grupo Prendete al Camino", category: "Ancajuli", type: "image" },
        { src: "/images/Ancajuli/2.jpg", alt: "Ancajuli - Grupo Prendete al Camino", category: "Ancajuli", type: "image" },
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
    <section id="galeria" className="bg-pac-bg py-[56px] md:py-[96px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sección Viajes Internacionales */}
        <div className="mb-14 md:mb-20">
          <div className="flex flex-col gap-3 mb-8">
            <p className="pac-eyebrow">Galería</p>
            <h2 className="pac-title text-[32px] md:text-[48px]">
              Viajes internacionales
            </h2>
            <p className="text-[17px] text-pac-body leading-relaxed max-w-3xl">
              Santiago de Compostela <strong className="font-bold text-pac-ink">es nuestro destino principal</strong>, pero cada año sumamos nuevas ciudades europeas.
              En 2025 exploramos: Madrid, Barajas, Lugo, Playa de las Catedrales, Segovia, Toledo y Oporto.
              Este 2026 recorrimos Italia: Roma, Nápoles, Sorrento y Pompeya.
            </p>
          </div>

          {/* Santiago - Portada principal */}
          <div className="flex justify-center mb-[24px]">
            <div
              className="relative group overflow-hidden rounded-[24px] shadow-[0_12px_32px_rgba(31,36,20,0.12)] hover:shadow-[0_22px_52px_rgba(31,36,20,0.20)] transition-all duration-500 cursor-pointer max-w-4xl w-full"
              onClick={() => openModal('santiago')}
            >
              <Image
                src={imageCategories.santiago.coverImage}
                alt="Grupo de peregrinos en Santiago de Compostela"
                className="w-full h-96 md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                width={800}
                height={500}
                quality={90}
              />
              <div className="absolute top-5 left-5 z-10 inline-flex items-center rounded-full bg-pac-yellow px-[14px] py-2 text-[12px] font-extrabold uppercase tracking-[0.08em] text-pac-olive-dark">
                Destino principal
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-pac-ink/85 via-transparent to-transparent">
                <div className="absolute bottom-6 left-6 right-6 text-pac-surface">
                  <h3 className="font-serif font-medium leading-[1.05] text-[28px] md:text-[36px]">
                    Santiago de Compostela
                  </h3>
                  <p className="mt-1 text-[14px] opacity-85">Ver galería completa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Italia — Roma, Nápoles, Sorrento y Pompeya */}
          <div className="flex justify-center">
            <div
              className="relative group overflow-hidden rounded-[24px] shadow-[0_10px_30px_rgba(31,36,20,0.10)] hover:shadow-[0_18px_44px_rgba(31,36,20,0.18)] transition-all duration-500 cursor-pointer w-full max-w-4xl"
              onClick={() => openModal('italia')}
            >
              <Image
                src={imageCategories.italia.coverImage}
                alt="Calles de Roma durante el viaje a Italia"
                className="w-full h-80 md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
                width={800}
                height={420}
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pac-ink/85 via-transparent to-transparent">
                <div className="absolute bottom-6 left-6 right-6 text-pac-surface">
                  <h3 className="font-serif font-medium leading-[1.05] text-[28px] md:text-[36px]">
                    Italia
                  </h3>
                  <p className="mt-1 text-[14px] opacity-85">Roma · Nápoles · Sorrento · Pompeya</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección Viajes Nacionales */}
        <div>
          <div className="flex flex-col gap-3 mb-8">
            <p className="pac-eyebrow">Galería</p>
            <h2 className="pac-title text-[32px] md:text-[48px]">
              Viajes nacionales
            </h2>
            <p className="text-[17px] text-pac-body leading-relaxed max-w-3xl">
              A lo largo de nuestro querido país descubrimos impresionantes escenarios en: Jujuy, Salta, Tucumán, Córdoba, Catamarca, Alpachiri-Portal de los Alisos, Balcozna, San Carlos Mágico y Ancajuli.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] mb-[24px]">
            {/* Catamarca - Lado izquierdo */}
            <div
              className="relative group overflow-hidden rounded-[24px] shadow-[0_10px_30px_rgba(31,36,20,0.10)] hover:shadow-[0_18px_44px_rgba(31,36,20,0.18)] transition-all duration-500 cursor-pointer"
              onClick={() => openModal('catamarca')}
            >
              <Image
                src={imageCategories.catamarca.coverImage}
                alt="Paisaje de los valles de Catamarca"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                width={600}
                height={400}
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pac-ink/85 via-transparent to-transparent">
                <div className="absolute bottom-6 left-6 right-6 text-pac-surface">
                  <h3 className="font-serif font-medium leading-[1.05] text-[28px] md:text-[36px]">
                    Catamarca
                  </h3>
                  <p className="mt-1 text-[14px] opacity-85">Ver galería completa</p>
                </div>
              </div>
            </div>

            {/* Córdoba - Lado derecho */}
            <div
              className="relative group overflow-hidden rounded-[24px] shadow-[0_10px_30px_rgba(31,36,20,0.10)] hover:shadow-[0_18px_44px_rgba(31,36,20,0.18)] transition-all duration-500 cursor-pointer"
              onClick={() => openModal('cordoba')}
            >
              <Image
                src={imageCategories.cordoba.coverImage}
                alt="Sierras de Córdoba durante una escapada"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                width={600}
                height={400}
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pac-ink/85 via-transparent to-transparent">
                <div className="absolute bottom-6 left-6 right-6 text-pac-surface">
                  <h3 className="font-serif font-medium leading-[1.05] text-[28px] md:text-[36px]">
                    Córdoba
                  </h3>
                  <p className="mt-1 text-[14px] opacity-85">Ver galería completa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Jujuy y Salta - Grid de 2 columnas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] mb-[24px]">
            {/* Jujuy - Lado izquierdo */}
            <div
              className="relative group overflow-hidden rounded-[24px] shadow-[0_10px_30px_rgba(31,36,20,0.10)] hover:shadow-[0_18px_44px_rgba(31,36,20,0.18)] transition-all duration-500 cursor-pointer"
              onClick={() => openModal('jujuy')}
            >
              <Image
                src={imageCategories.jujuy.coverImage}
                alt="Cerros de la Quebrada en Jujuy"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                width={600}
                height={400}
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pac-ink/85 via-transparent to-transparent">
                <div className="absolute bottom-6 left-6 right-6 text-pac-surface">
                  <h3 className="font-serif font-medium leading-[1.05] text-[28px] md:text-[36px]">
                    Jujuy
                  </h3>
                  <p className="mt-1 text-[14px] opacity-85">Ver galería completa</p>
                </div>
              </div>
            </div>

            {/* Salta - Lado derecho */}
            <div
              className="relative group overflow-hidden rounded-[24px] shadow-[0_10px_30px_rgba(31,36,20,0.10)] hover:shadow-[0_18px_44px_rgba(31,36,20,0.18)] transition-all duration-500 cursor-pointer"
              onClick={() => openModal('salta')}
            >
              <Image
                src={imageCategories.salta.coverImage}
                alt="Paisaje de cerros en Salta"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                width={600}
                height={400}
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pac-ink/85 via-transparent to-transparent">
                <div className="absolute bottom-6 left-6 right-6 text-pac-surface">
                  <h3 className="font-serif font-medium leading-[1.05] text-[28px] md:text-[36px]">
                    Salta
                  </h3>
                  <p className="mt-1 text-[14px] opacity-85">Ver galería completa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Alpachiri-Portal de los Alisos y Balcozna - Grid de 2 columnas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] mb-[24px]">
            {/* Alpachiri-Portal de los Alisos - Lado izquierdo */}
            <div
              className="relative group overflow-hidden rounded-[24px] shadow-[0_10px_30px_rgba(31,36,20,0.10)] hover:shadow-[0_18px_44px_rgba(31,36,20,0.18)] transition-all duration-500 cursor-pointer"
              onClick={() => openModal('alpachiri')}
            >
              <Image
                src={imageCategories.alpachiri.coverImage}
                alt="Senderos de Alpachiri, Portal de los Alisos"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                width={600}
                height={400}
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pac-ink/85 via-transparent to-transparent">
                <div className="absolute bottom-6 left-6 right-6 text-pac-surface">
                  <h3 className="font-serif font-medium leading-[1.05] text-[28px] md:text-[36px]">
                    Alpachiri-Portal de los Alisos
                  </h3>
                  <p className="mt-1 text-[14px] opacity-85">Ver galería completa</p>
                </div>
              </div>
            </div>

            {/* Balcozna - Lado derecho */}
            <div
              className="relative group overflow-hidden rounded-[24px] shadow-[0_10px_30px_rgba(31,36,20,0.10)] hover:shadow-[0_18px_44px_rgba(31,36,20,0.18)] transition-all duration-500 cursor-pointer"
              onClick={() => openModal('balcozna')}
            >
              <Image
                src={imageCategories.balcozna.coverImage}
                alt="Río y monte en Balcozna"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                width={600}
                height={400}
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pac-ink/85 via-transparent to-transparent">
                <div className="absolute bottom-6 left-6 right-6 text-pac-surface">
                  <h3 className="font-serif font-medium leading-[1.05] text-[28px] md:text-[36px]">
                    Balcozna
                  </h3>
                  <p className="mt-1 text-[14px] opacity-85">Ver galería completa</p>
                </div>
              </div>
            </div>
          </div>

          {/* San Carlos Mágico y Ancajuli - Grid de 2 columnas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
            {/* San Carlos Mágico - Lado izquierdo */}
            <div
              className="relative group overflow-hidden rounded-[24px] shadow-[0_10px_30px_rgba(31,36,20,0.10)] hover:shadow-[0_18px_44px_rgba(31,36,20,0.18)] transition-all duration-500 cursor-pointer"
              onClick={() => openModal('sanCarlosMagico')}
            >
              <Image
                src={imageCategories.sanCarlosMagico.coverImage}
                alt="Paisaje de San Carlos Mágico"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                width={600}
                height={400}
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pac-ink/85 via-transparent to-transparent">
                <div className="absolute bottom-6 left-6 right-6 text-pac-surface">
                  <h3 className="font-serif font-medium leading-[1.05] text-[28px] md:text-[36px]">
                    San Carlos Mágico
                  </h3>
                  <p className="mt-1 text-[14px] opacity-85">Ver galería completa</p>
                </div>
              </div>
            </div>

            {/* Ancajuli - Lado derecho */}
            <div
              className="relative group overflow-hidden rounded-[24px] shadow-[0_10px_30px_rgba(31,36,20,0.10)] hover:shadow-[0_18px_44px_rgba(31,36,20,0.18)] transition-all duration-500 cursor-pointer"
              onClick={() => openModal('ancajuli')}
            >
              <Image
                src={imageCategories.ancajuli.coverImage}
                alt="Cerros y agua en Ancajuli"
                className="w-full h-80 object-cover object-[center_70%] group-hover:scale-105 transition-transform duration-500"
                width={600}
                height={400}
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pac-ink/85 via-transparent to-transparent">
                <div className="absolute bottom-6 left-6 right-6 text-pac-surface">
                  <h3 className="font-serif font-medium leading-[1.05] text-[28px] md:text-[36px]">
                    Ancajuli
                  </h3>
                  <p className="mt-1 text-[14px] opacity-85">Ver galería completa</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal mejorado con navegación */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-pac-ink/95 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            {/* Botón cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-pac-surface/15 hover:bg-pac-surface/25 text-pac-surface text-[28px] leading-none transition-colors duration-200"
              aria-label="Cerrar galería"
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
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-pac-surface/15 hover:bg-pac-surface/25 text-pac-surface text-[32px] leading-none transition-colors duration-200"
                  aria-label="Contenido anterior"
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
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-pac-surface/15 hover:bg-pac-surface/25 text-pac-surface text-[32px] leading-none transition-colors duration-200"
                  aria-label="Contenido siguiente"
                >
                  ›
                </button>
              )}

              {/* Contenido del modal */}
              <div className="flex flex-col items-center">
                {/* Indicador de carga */}
                {isLoading && (
                  <div className="flex flex-col items-center justify-center min-h-[60vh]">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-pac-surface mb-4"></div>
                    <p className="text-[16px] text-pac-surface">Cargando...</p>
                  </div>
                )}

                {/* Contenido multimedia */}
                <div className={`${isLoading ? 'hidden' : 'block'}`}>
                  {currentMedia[currentIndex]?.type === 'video' ? (
                    <video
                      src={selectedImage}
                      controls
                      className="max-w-full max-h-[80vh] object-contain rounded-[16px]"
                      autoPlay
                      loop
                      onLoadedData={() => setIsLoading(false)}
                      onError={() => setIsLoading(false)}
                    />
                  ) : (
                    <Image
                      src={selectedImage}
                      alt={currentMedia[currentIndex]?.alt || "Vista ampliada"}
                      className="max-w-full max-h-[80vh] object-contain rounded-[16px]"
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
                  <div className="fixed bottom-16 text-center text-pac-surface">
                    <h3 className="font-serif font-medium text-[24px] leading-tight mb-1">
                      {imageCategories[selectedCategory as keyof typeof imageCategories]?.name}
                    </h3>
                    <p className="text-[13px] opacity-80">
                      {currentIndex + 1} de {currentMedia.length}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
