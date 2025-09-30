'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onLoadingComplete();
          }, 500); // Pequeño delay para mostrar el 100%
          return 100;
        }
        return prev + Math.random() * 15; // Incremento aleatorio para simular carga real
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">

      {/* Contenido del loading */}
      <div className="relative z-10 text-center text-white">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#404d21' }}>
            Prendete al Camino
          </h2>
          <p className="text-lg md:text-xl opacity-90" style={{ color: '#404d21' }}>
            Preparando tu experiencia...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 max-w-full mx-auto">
          <div className="bg-white bg-opacity-20 rounded-full h-3 overflow-hidden" style={{ backgroundColor: '#404d21' }}>
            <div 
              className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-4 text-sm opacity-80" style={{ color: '#404d21' }}>
            {Math.round(progress)}%
          </div>
        </div>
      </div>
    </div>
  );
}
