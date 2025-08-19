import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export function Footer() {
  return (
    <footer id="contacto" className="py-20" style={{ backgroundColor: '#404d21' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Conversemos sobre tu próximo viaje
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#ffd600' }}
                >
                  <svg className="w-6 h-6" style={{ color: '#404d21' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Teléfono</h3>
                  <p className="text-gray-300">+54 11 4567-8900</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#ffd600' }}
                >
                  <svg className="w-6 h-6" style={{ color: '#404d21' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-300">info@prendentealcamino.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#ffd600' }}
                >
                  <svg className="w-6 h-6" style={{ color: '#404d21' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Oficina</h3>
                  <p className="text-gray-300">Av. Corrientes 1234, CABA</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#ffd600' }}
                >
                  <svg className="w-6 h-6" style={{ color: '#404d21' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Horario</h3>
                  <p className="text-gray-300">Lun a Sáb: 9:00 - 18:00</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <button 
                className="w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
                style={{ backgroundColor: '#ffd600' }}
              >
                <svg className="w-6 h-6" style={{ color: '#404d21' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </button>
              
              <button 
                className="w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
                style={{ backgroundColor: '#ffd600' }}
              >
                <svg className="w-6 h-6" style={{ color: '#404d21' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </button>
              
              <button 
                className="w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
                style={{ backgroundColor: '#ffd600' }}
              >
                <svg className="w-6 h-6" style={{ color: '#404d21' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.776-1.378l-.718 2.71c-.26.992-.36 2.227-.53 2.956.398.123.813.190 1.241.190 6.624 0 11.99-5.367 11.99-11.99C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white border-0 shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#404d21' }}>
                Solicitar información
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 font-medium" style={{ color: '#404d21' }}>
                      Nombre
                    </label>
                    <Input 
                      type="text"
                      placeholder="Tu nombre"
                      className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium" style={{ color: '#404d21' }}>
                      Apellido
                    </label>
                    <Input 
                      type="text"
                      placeholder="Tu apellido"
                      className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block mb-2 font-medium" style={{ color: '#404d21' }}>
                    Email
                  </label>
                  <Input 
                    type="email"
                    placeholder="tu@email.com"
                    className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                  />
                </div>
                
                <div>
                  <label className="block mb-2 font-medium" style={{ color: '#404d21' }}>
                    Teléfono
                  </label>
                  <Input 
                    type="tel"
                    placeholder="Tu número de teléfono"
                    className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                  />
                </div>
                
                <div>
                  <label className="block mb-2 font-medium" style={{ color: '#404d21' }}>
                    Mensaje
                  </label>
                  <Textarea 
                    placeholder="Contanos sobre tus intereses de viaje, fechas preferidas, destinos que te gustaría conocer..."
                    rows={4}
                    className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full text-lg py-4 font-medium rounded-lg hover:opacity-90 transition-opacity duration-200"
                  style={{ backgroundColor: '#ffd600', color: '#404d21' }}
                >
                  Enviar consulta
                </Button>
              </form>
              
              <p className="text-sm text-gray-500 mt-4 text-center">
                Te responderemos en menos de 24 horas
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-600 mt-16 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Prendete al Camino. Todos los derechos reservados. | 
            Viajes para el alma, experiencias para la vida.
          </p>
        </div>
      </div>
    </footer>
  );
}