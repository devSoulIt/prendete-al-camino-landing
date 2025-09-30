'use client'
import { useState } from 'react'
import { Modal } from '@/components/ui/modal'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'

interface SantiagoFormModalProps {
    isOpen: boolean
    onClose: () => void
}

export function SantiagoFormModal({ isOpen, onClose }: SantiagoFormModalProps) {
    const [formData, setFormData] = useState({
        nombreApellido: '',
        edad: '',
        contacto: '',
        estadoFisico: '',
        disponibilidad: '',
        disposicionEconomica: '',
        atraccion: '',
        mensajeAdicional: ''
    })

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Aquí iría la lógica para enviar el formulario
        console.log('Formulario enviado:', formData)
        onClose()
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Santiago de Compostela 2026">
            <Card className="border-0 shadow-none">
                <CardContent className="p-0">
                    <div className="mb-6">
                        <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ color: '#404d21' }}>
                            ¿Querés sumarte a Santiago de Compostela 2026?
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600">
                            Completá este breve formulario y te enviaremos toda la información detallada.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* 1. Nombre y apellido */}
                        <div>
                            <label className="block mb-2 font-medium" style={{ color: '#404d21' }}>
                                1. Nombre y apellido *
                            </label>
                            <Input
                                type="text"
                                value={formData.nombreApellido}
                                onChange={(e) => handleInputChange('nombreApellido', e.target.value)}
                                placeholder="Tu nombre completo"
                                className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                                required
                            />
                        </div>

                        {/* 2. Edad */}
                        <div>
                            <label className="block mb-2 font-medium" style={{ color: '#404d21' }}>
                                2. Edad *
                            </label>
                            <Input
                                type="number"
                                value={formData.edad}
                                onChange={(e) => handleInputChange('edad', e.target.value)}
                                placeholder="Tu edad"
                                className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                                required
                            />
                        </div>

                        {/* 3. Mail y teléfono/WhatsApp */}
                        <div>
                            <label className="block mb-2 font-medium" style={{ color: '#404d21' }}>
                                3. Mail y teléfono/WhatsApp de contacto *
                            </label>
                            <Input
                                type="text"
                                value={formData.contacto}
                                onChange={(e) => handleInputChange('contacto', e.target.value)}
                                placeholder="Email y teléfono"
                                className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                                required
                            />
                            <p className="text-sm text-gray-500 mt-1">
                                (respuesta obligatoria para poder seguir)
                            </p>
                        </div>

                        {/* 4. Estado físico */}
                        <div>
                            <label className="block mb-2 font-medium text-sm sm:text-base" style={{ color: '#404d21' }}>
                                4. ¿Cómo describirías tu estado físico actual para caminar? *
                            </label>
                            <div className="space-y-2">
                                {[
                                    'Muy bueno (camino seguido)',
                                    'Bueno (camino de vez en cuando)',
                                    'Necesito prepararme un poco'
                                ].map((option) => (
                                    <label key={option} className="flex items-start space-x-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="estadoFisico"
                                            value={option}
                                            checked={formData.estadoFisico === option}
                                            onChange={(e) => handleInputChange('estadoFisico', e.target.value)}
                                            className="text-yellow-500 focus:ring-yellow-500 mt-1"
                                            required
                                        />
                                        <span className="text-sm sm:text-base text-gray-700">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* 5. Disponibilidad */}
                        <div>
                            <label className="block mb-2 font-medium text-sm sm:text-base" style={{ color: '#404d21' }}>
                                5. Disponibilidad en junio 2026 *
                            </label>
                            <div className="space-y-2">
                                {[
                                    'Sí, todo junio',
                                    'Aún no lo sé, pero me interesa'
                                ].map((option) => (
                                    <label key={option} className="flex items-start space-x-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="disponibilidad"
                                            value={option}
                                            checked={formData.disponibilidad === option}
                                            onChange={(e) => handleInputChange('disponibilidad', e.target.value)}
                                            className="text-yellow-500 focus:ring-yellow-500 mt-1"
                                            required
                                        />
                                        <span className="text-sm sm:text-base text-gray-700">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* 6. Disposición económica */}
                        <div>
                            <label className="block mb-2 font-medium text-sm sm:text-base" style={{ color: '#404d21' }}>
                                6. Disposición económica (consultar financiación) *
                            </label>
                            <div className="space-y-2">
                                {[
                                    'Estoy en condiciones de invertir en esta experiencia alucinante',
                                    'Podría llegar, pero necesito más info',
                                    'Hoy no, pero me interesa para futuro'
                                ].map((option) => (
                                    <label key={option} className="flex items-start space-x-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="disposicionEconomica"
                                            value={option}
                                            checked={formData.disposicionEconomica === option}
                                            onChange={(e) => handleInputChange('disposicionEconomica', e.target.value)}
                                            className="text-yellow-500 focus:ring-yellow-500 mt-1"
                                            required
                                        />
                                        <span className="text-sm sm:text-base text-gray-700">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* 7. Atracción */}
                        <div>
                            <label className="block mb-2 font-medium text-sm sm:text-base" style={{ color: '#404d21' }}>
                                7. ¿Qué es lo que más te atrae de hacer el camino a Santiago? *
                            </label>
                            <div className="space-y-2">
                                {[
                                    'Espiritualidad',
                                    'Turismo',
                                    'Naturaleza'
                                ].map((option) => (
                                    <label key={option} className="flex items-start space-x-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="atraccion"
                                            value={option}
                                            checked={formData.atraccion === option}
                                            onChange={(e) => handleInputChange('atraccion', e.target.value)}
                                            className="text-yellow-500 focus:ring-yellow-500 mt-1"
                                            required
                                        />
                                        <span className="text-sm sm:text-base text-gray-700">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Mensaje adicional */}
                        <div>
                            <label className="block mb-2 font-medium" style={{ color: '#404d21' }}>
                                Mensaje adicional (opcional)
                            </label>
                            <Textarea
                                value={formData.mensajeAdicional}
                                onChange={(e) => handleInputChange('mensajeAdicional', e.target.value)}
                                placeholder="Contanos algo más sobre vos o tus expectativas..."
                                rows={3}
                                className="border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                            />
                        </div>

                        {/* Texto aclaratorio */}
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-600 text-center">
                                <strong>Esto no implica ningún compromiso.</strong> Es solo para conocerte mejor y asegurarnos de
                                que el viaje sea la experiencia perfecta para vos.
                            </p>
                        </div>

                        {/* Botón de envío */}
                        <Button
                            type="submit"
                            size="lg"
                            className="w-full text-lg py-4 font-medium rounded-lg hover:opacity-90 transition-opacity duration-200"
                            style={{ backgroundColor: '#ffd600', color: '#404d21' }}
                        >
                            Quiero recibir más info del viaje
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Modal>
    )
}
