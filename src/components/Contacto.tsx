'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

// Action para manejar el envío del formulario (placeholder por ahora)
async function handleFormSubmit(formData: FormData) {
    // Por ahora no hace nada, en el futuro se implementará el envío de email
    console.log('Formulario enviado:', Object.fromEntries(formData));
    return { success: true };
}

export function Contacto() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        
        const formData = new FormData(event.currentTarget);
        
        try {
            await handleFormSubmit(formData);
            alert('¡Formulario enviado correctamente! Te contactaremos pronto.');
            (event.target as HTMLFormElement).reset();
        } catch (error) {
            alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contacto" className="py-20" style={{ backgroundColor: '#404d21' }}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div className="text-white h-full flex flex-col justify-start">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                            El camino te espera, nosotros también
                        </h2>
                        <p className="text-xl text-gray-300 mb-6 leading-relaxed text-center">
                            Deja tu primer camino en manos expertas y preparate para la mejor experiencia de tu vida.
                        </p>
                    </div>

                    {/* Contact Form */}
                    <div className="flex flex-col gap-4">
                        <Card className="bg-white border-0 shadow-2xl">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold mb-4" style={{ color: '#404d21' }}>
                                    Sumate a Santiago de Compostela 2026
                                </h3>

                                <p className="text-gray-500 mb-6">
                                    Completá este breve formulario y te enviaremos toda la información detallada.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* 1. Nombre y apellido */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            1. Nombre y apellido *
                                        </label>
                                        <Input
                                            name="nombre"
                                            type="text"
                                            required
                                            className="w-full bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-green-500"
                                            placeholder="Tu nombre completo"
                                        />
                                    </div>

                                    {/* 2. Edad */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            2. Edad *
                                        </label>
                                        <Input
                                            name="edad"
                                            type="number"
                                            required
                                            min="18"
                                            max="100"
                                            className="w-full bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-green-500"
                                            placeholder="Tu edad"
                                        />
                                    </div>

                                    {/* 3. Email y teléfono */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            3. Email y teléfono/WhatsApp de contacto *
                                        </label>
                                        <div className="space-y-3">
                                            <Input
                                                name="email"
                                                type="email"
                                                required
                                                className="w-full bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-green-500"
                                                placeholder="tu@email.com"
                                            />
                                            <Input
                                                name="telefono"
                                                type="tel"
                                                required
                                                className="w-full bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-green-500"
                                                placeholder="+54 9 11 1234-5678"
                                            />
                                        </div>
                                    </div>

                                    {/* 4. Estado físico */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-3">
                                            4. ¿Cómo describirías tu estado físico actual para caminar? *
                                        </label>
                                        <div className="space-y-2">
                                            <label className="flex items-center space-x-3 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="estado_fisico"
                                                    value="muy_bueno"
                                                    required
                                                    className="text-green-500 focus:ring-green-500"
                                                />
                                                <span className="text-gray-700">Muy bueno (camino seguido)</span>
                                            </label>
                                            <label className="flex items-center space-x-3 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="estado_fisico"
                                                    value="bueno"
                                                    required
                                                    className="text-green-500 focus:ring-green-500"
                                                />
                                                <span className="text-gray-700">Bueno (camino de vez en cuando)</span>
                                            </label>
                                            <label className="flex items-center space-x-3 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="estado_fisico"
                                                    value="necesito_prepararme"
                                                    required
                                                    className="text-green-500 focus:ring-green-500"
                                                />
                                                <span className="text-gray-700">Necesito prepararme un poco</span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* 5. Disponibilidad en junio 2026 */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-3">
                                            5. Disponibilidad en junio 2026 *
                                        </label>
                                        <div className="space-y-2">
                                            <label className="flex items-center space-x-3 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="disponibilidad"
                                                    value="todo_junio"
                                                    required
                                                    className="text-green-500 focus:ring-green-500"
                                                />
                                                <span className="text-gray-700">Sí, todo junio</span>
                                            </label>
                                            <label className="flex items-center space-x-3 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="disponibilidad"
                                                    value="aun_no_se"
                                                    required
                                                    className="text-green-500 focus:ring-green-500"
                                                />
                                                <span className="text-gray-700">Aún no lo sé, pero me interesa</span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* 6. Disposición económica */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-3">
                                            6. Disposición económica (consultar financiación) *
                                        </label>
                                        <div className="space-y-2">
                                            <label className="flex items-center space-x-3 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="disposicion_economica"
                                                    value="estoy_en_condiciones"
                                                    required
                                                    className="text-green-500 focus:ring-green-500"
                                                />
                                                <span className="text-gray-700">Estoy en condiciones de invertir en esta experiencia alucinante</span>
                                            </label>
                                            <label className="flex items-center space-x-3 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="disposicion_economica"
                                                    value="podria_llegar"
                                                    required
                                                    className="text-green-500 focus:ring-green-500"
                                                />
                                                <span className="text-gray-700">Podría llegar, pero necesito más info</span>
                                            </label>
                                            <label className="flex items-center space-x-3 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="disposicion_economica"
                                                    value="hoy_no_futuro"
                                                    required
                                                    className="text-green-500 focus:ring-green-500"
                                                />
                                                <span className="text-gray-700">Hoy no, pero me interesa para futuro</span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* 7. Qué te atrae del camino */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            7. ¿Qué es lo que más te atrae de hacer el camino a Santiago? *
                                        </label>
                                        <Textarea
                                            name="que_te_atrae"
                                            required
                                            rows={3}
                                            className="w-full bg-gray-50 border-gray-200 focus:border-green-500 focus:ring-green-500"
                                            placeholder="Contanos qué es lo que más te motiva a hacer el camino..."
                                        />
                                    </div>

                                    {/* Texto aclaratorio */}
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <p className="text-sm text-gray-600 text-center">
                                            Esto no implica ningún compromiso. Es solo para conocerte mejor y asegurarnos de 
                                            que el viaje sea la experiencia perfecta para vos.
                                        </p>
                                    </div>

                                    {/* Botón de envío */}
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                                    >
                                        {isSubmitting ? 'Enviando...' : 'Quiero recibir más info del viaje'}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                        
                        <div className="text-center">
                            <p className="text-white mb-4">¿Tenés alguna otra pregunta? No dudes en contactarnos.</p>
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
        </section>
    );
}