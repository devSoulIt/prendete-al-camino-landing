import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram, FaFacebook } from "react-icons/fa6";


export function Contacto() {
    return (
        <section id="contacto" className="py-20" style={{ backgroundColor: '#404d21' }}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="text-white h-full flex flex-col justify-start">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">
                            El Camino te espera. Nosotros también.
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Deja tu primer Camino en manos expertas y prepárate para la mejor experiencia de tu vida.
                        </p>

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
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            <a
                                href='https://www.tiktok.com/@prendetealcamino'
                                target="_blank"
                                className="w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
                                style={{ backgroundColor: '#ffd600' }}
                            >
                                <FaTiktok className="text-[#404d21] w-5 h-5" />
                            </a>
                            <a
                                href='https://www.instagram.com/prendetealcamino/'
                                target="_blank"
                                className="w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
                                style={{ backgroundColor: '#ffd600' }}
                            >
                                <FaInstagram className="text-[#404d21] w-5 h-5" />
                            </a>
                            <a
                                href='https://www.facebook.com/p/Prendete-al-Camino-100054666990434'
                                target="_blank"
                                className="w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
                                style={{ backgroundColor: '#ffd600' }}
                            >
                                <FaFacebook className="text-[#404d21] w-5 h-5" />
                            </a>
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
            </div>
        </section>
    );
}