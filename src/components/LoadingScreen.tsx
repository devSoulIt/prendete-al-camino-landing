'use client'
import { useState, useEffect } from 'react';

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
    <div className="fixed inset-0 z-50 bg-pac-bg flex items-center justify-center px-6">
      <div className="text-center">
        <h2 className="pac-title text-[36px] md:text-[48px] mb-3">
          Prendete al Camino
        </h2>
        <p className="text-[16px] md:text-[17px] text-pac-body mb-8">
          Preparando tu experiencia...
        </p>

        {/* Barra de progreso */}
        <div className="w-80 max-w-full mx-auto">
          <div
            className="h-2.5 rounded-full overflow-hidden bg-pac-olive/15"
            role="progressbar"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Progreso de carga"
          >
            <div
              className="h-full rounded-full bg-pac-yellow transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <div className="mt-4 text-[13px] font-semibold text-pac-muted">
            {Math.round(Math.min(progress, 100))}%
          </div>
        </div>
      </div>
    </div>
  );
}
