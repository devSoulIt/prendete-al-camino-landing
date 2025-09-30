'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram, FaFacebook } from "react-icons/fa6";
import { SantiagoFormModal } from "./SantiagoFormModal";
import { useState } from "react";


export function Contacto() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="contacto" className="py-20" style={{ backgroundColor: '#404d21' }}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="text-white h-full flex flex-col justify-start">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            El Camino te espera. Nosotros también.
                        </h2>
                        <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                            Deja tu primer Camino en manos expertas y prepárate para la mejor experiencia de tu vida.
                        </p>

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
                    <div className="flex flex-col gap-4">
                    <Card className="bg-white border-0 shadow-2xl">
                        <CardContent className="p-8">
                            <h3 className="text-2xl font-bold mb-4" style={{ color: '#404d21' }}>
                                ¿Querés sumarte a Santiago de Compostela 2026?
                            </h3>

                            <p className="text-gray-600 mb-4">
                                Completá este breve formulario y te enviaremos toda la información detallada.
                            </p>

                            <div className="space-y-3 mb-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: '#404d21' }}>
                                        1
                                    </div>
                                    <p className="text-gray-700">Nombre y apellido</p>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: '#404d21' }}>
                                        2
                                    </div>
                                    <p className="text-gray-700">Edad</p>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: '#404d21' }}>
                                        3
                                    </div>
                                    <p className="text-gray-700">Mail y teléfono/WhatsApp de contacto</p>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: '#404d21' }}>
                                        4
                                    </div>
                                    <p className="text-gray-700">¿Cómo describirías tu estado físico actual para caminar?</p>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: '#404d21' }}>
                                        5
                                    </div>
                                    <p className="text-gray-700">Disponibilidad en junio 2026</p>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: '#404d21' }}>
                                        6
                                    </div>
                                    <p className="text-gray-700">Disposición económica (consultar financiación)</p>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: '#404d21' }}>
                                        7
                                    </div>
                                    <p className="text-gray-700">¿Qué es lo que más te atrae de hacer el camino a Santiago?</p>
                                </div>
                            </div>

                            <Button
                                onClick={() => setIsModalOpen(true)}
                                size="lg"
                                className="w-full text-lg py-4 font-medium rounded-lg hover:opacity-90 transition-opacity duration-200"
                                style={{ backgroundColor: '#ffd600', color: '#404d21' }}
                            >
                                Quiero recibir más info del viaje
                            </Button>

                            <p className="text-sm text-gray-500 mt-4 text-center">
                                <strong>Esto no implica ningún compromiso.</strong> Es solo para conocerte mejor y asegurarnos de
                                que el viaje sea la experiencia perfecta para vos.
                            </p>
                        </CardContent>
                    </Card>
                    <div className="text-center">
                        <a
                            href="https://wa.me/5491123456789"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                            </svg>
                            Contactar por WhatsApp
                        </a>
                    </div>
                    </div>
                    
                </div>
            </div>

            {/* Modal del formulario */}
            <SantiagoFormModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
}