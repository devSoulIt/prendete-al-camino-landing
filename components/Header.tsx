import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold" style={{ color: '#404d21' }}>
              Prendete al Camino
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#inicio" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Inicio
            </a>
            <a 
              href="#santiago" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Santiago de Compostela
            </a>
            <a 
              href="#viajes-cortos" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Viajes Cortos
            </a>
            <a 
              href="#videollamada" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Videollamada
            </a>
            <a 
              href="#galeria" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Galería
            </a>
            <a 
              href="#contacto" 
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Contacto
            </a>
          </nav>

          {/* CTA Button */}
          <Button 
            className="hidden md:inline-flex text-white font-medium px-6 py-2 rounded-lg hover:opacity-90 transition-opacity duration-200"
            style={{ backgroundColor: '#ffd600', color: '#404d21' }}
          >
            Solicitar información
          </Button>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}