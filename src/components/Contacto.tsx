'use client'
import { Instagram, MessageCircle } from "lucide-react";
import { useState } from "react";

// Misma URL de WhatsApp que usa el botón flotante (src/components/Whatsapp.tsx)
const WHATSAPP_URL =
    "https://api.whatsapp.com/send?phone=543815184516&text=Hola%F0%9F%91%8B%20los%20contacto%20desde%20la%20web.%0AQuiero%20info%20sobre...";
const INSTAGRAM_URL = "https://www.instagram.com/prendetealcamino";

// Estilos compartidos de los campos del formulario
const campoBase =
    "w-full rounded-[12px] border border-pac-olive/20 bg-white px-4 text-[14px] text-pac-ink placeholder:text-pac-muted/70 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-pac-olive/30 focus-visible:border-pac-olive/40";
const campoInput = `${campoBase} h-[52px]`;
const campoTextarea = `${campoBase} min-h-[120px] py-[14px] leading-[1.55] resize-y`;
const opcionRadio = "flex items-center gap-3 min-h-[44px] cursor-pointer text-[14px] text-pac-body";
const inputRadio = "h-[18px] w-[18px] shrink-0 accent-pac-olive";
const leyendaGrupo = "block text-[14px] font-bold text-pac-ink mb-1";

// Envío del formulario al endpoint /api/contact
async function handleFormSubmit(formData: FormData) {
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
    });
    if (!response.ok) {
        try {
            const data = await response.json();
            throw new Error(data?.message || 'Error al enviar el formulario');
        } catch {
            throw new Error('Error al enviar el formulario');
        }
    }
    return response.json();
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
        <section id="contacto" className="py-20 md:py-24 bg-pac-bg px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1440px] mx-auto rounded-[32px] bg-pac-olive p-8 md:p-[72px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Columna izquierda: mensaje y contacto directo */}
                    <div className="flex flex-col gap-6 text-pac-surface">
                        <div className="pac-eyebrow text-pac-yellow">Contacto</div>
                        <h2 className="font-serif font-medium text-[36px] md:text-[52px] leading-[1.05]">
                            El camino te espera, nosotros también
                        </h2>
                        <p className="text-[17px] leading-relaxed text-pac-surface/80 max-w-[460px]">
                            Confiá tu camino a manos expertas y preparate para la mejor experiencia de tu
                            vida. Contanos qué viaje te interesa y te respondemos a la brevedad.
                        </p>

                        <div className="flex flex-col gap-3.5 pt-2">
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 min-h-[44px] text-[16px] font-bold text-pac-surface transition-opacity hover:opacity-80"
                            >
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pac-surface/[0.12]">
                                    <MessageCircle className="h-5 w-5 text-pac-yellow" strokeWidth={2} aria-hidden="true" />
                                </span>
                                WhatsApp +54 381 518 4516
                            </a>
                            <a
                                href={INSTAGRAM_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 min-h-[44px] text-[16px] font-bold text-pac-surface transition-opacity hover:opacity-80"
                            >
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pac-surface/[0.12]">
                                    <Instagram className="h-5 w-5 text-pac-yellow" strokeWidth={2} aria-hidden="true" />
                                </span>
                                @prendetealcamino
                            </a>
                        </div>
                    </div>

                    {/* Columna derecha: formulario */}
                    <div className="bg-pac-surface rounded-[24px] p-8">
                        <h3 className="font-serif font-medium text-[26px] leading-[1.15] text-pac-ink">
                            Sumate a Santiago de Compostela 2026
                        </h3>
                        <p className="mt-2 text-[14px] leading-[1.6] text-pac-body">
                            Completá este breve formulario y te enviaremos toda la información detallada.
                        </p>

                        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3.5">
                            {/* Nombre y teléfono */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div>
                                    <label htmlFor="contacto-nombre" className="sr-only">
                                        Nombre y apellido
                                    </label>
                                    <input
                                        id="contacto-nombre"
                                        name="nombre"
                                        type="text"
                                        required
                                        autoComplete="name"
                                        className={campoInput}
                                        placeholder="Nombre y apellido"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contacto-telefono" className="sr-only">
                                        Teléfono o WhatsApp
                                    </label>
                                    <input
                                        id="contacto-telefono"
                                        name="telefono"
                                        type="tel"
                                        required
                                        autoComplete="tel"
                                        className={campoInput}
                                        placeholder="Teléfono / WhatsApp"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="contacto-email" className="sr-only">
                                    Email
                                </label>
                                <input
                                    id="contacto-email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className={campoInput}
                                    placeholder="Email"
                                />
                            </div>

                            {/* Edad */}
                            <div>
                                <label htmlFor="contacto-edad" className="sr-only">
                                    Edad
                                </label>
                                <input
                                    id="contacto-edad"
                                    name="edad"
                                    type="number"
                                    required
                                    min="18"
                                    max="100"
                                    className={campoInput}
                                    placeholder="Edad"
                                />
                            </div>

                            {/* Estado físico */}
                            <fieldset className="mt-2">
                                <legend className={leyendaGrupo}>
                                    ¿Cómo describirías tu estado físico actual para caminar?
                                </legend>
                                <label className={opcionRadio}>
                                    <input
                                        type="radio"
                                        name="estado_fisico"
                                        value="muy_bueno"
                                        required
                                        className={inputRadio}
                                    />
                                    <span>Muy bueno (camino seguido)</span>
                                </label>
                                <label className={opcionRadio}>
                                    <input
                                        type="radio"
                                        name="estado_fisico"
                                        value="bueno"
                                        required
                                        className={inputRadio}
                                    />
                                    <span>Bueno (camino de vez en cuando)</span>
                                </label>
                                <label className={opcionRadio}>
                                    <input
                                        type="radio"
                                        name="estado_fisico"
                                        value="necesito_prepararme"
                                        required
                                        className={inputRadio}
                                    />
                                    <span>Necesito prepararme un poco</span>
                                </label>
                            </fieldset>

                            {/* Disponibilidad en junio 2026 */}
                            <fieldset className="mt-2">
                                <legend className={leyendaGrupo}>
                                    Disponibilidad en todo junio 2026
                                </legend>
                                <label className={opcionRadio}>
                                    <input
                                        type="radio"
                                        name="disponibilidad"
                                        value="todo_junio"
                                        required
                                        className={inputRadio}
                                    />
                                    <span>Sí, todo junio</span>
                                </label>
                                <label className={opcionRadio}>
                                    <input
                                        type="radio"
                                        name="disponibilidad"
                                        value="aun_no_se"
                                        required
                                        className={inputRadio}
                                    />
                                    <span>Aún no lo sé, pero me interesa</span>
                                </label>
                            </fieldset>

                            {/* Disposición económica */}
                            <fieldset className="mt-2">
                                <legend className={leyendaGrupo}>
                                    Disposición económica (consultar financiación)
                                </legend>
                                <label className={opcionRadio}>
                                    <input
                                        type="radio"
                                        name="disposicion_economica"
                                        value="estoy_en_condiciones"
                                        required
                                        className={inputRadio}
                                    />
                                    <span>Estoy en condiciones de invertir en esta experiencia alucinante</span>
                                </label>
                                <label className={opcionRadio}>
                                    <input
                                        type="radio"
                                        name="disposicion_economica"
                                        value="podria_llegar"
                                        required
                                        className={inputRadio}
                                    />
                                    <span>Podría llegar, pero necesito más info</span>
                                </label>
                                <label className={opcionRadio}>
                                    <input
                                        type="radio"
                                        name="disposicion_economica"
                                        value="hoy_no_futuro"
                                        required
                                        className={inputRadio}
                                    />
                                    <span>Hoy no, pero me interesa para futuro</span>
                                </label>
                            </fieldset>

                            {/* Qué te atrae del camino */}
                            <div className="mt-2">
                                <label htmlFor="contacto-que-te-atrae" className={leyendaGrupo}>
                                    ¿Qué es lo que más te atrae de hacer el camino a Santiago?
                                </label>
                                <textarea
                                    id="contacto-que-te-atrae"
                                    name="que_te_atrae"
                                    required
                                    className={campoTextarea}
                                    placeholder="Contanos un poco sobre vos y tus dudas"
                                />
                            </div>

                            <p className="text-[13px] leading-[1.6] text-pac-muted">
                                Esto no implica ningún compromiso, es sólo para conocerte mejor y asegurarnos de
                                que el viaje sea la experiencia perfecta para vos.
                            </p>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="pac-btn-primary w-full disabled:opacity-70 disabled:hover:translate-y-0"
                            >
                                {isSubmitting ? 'Enviando...' : 'Quiero recibir más info del viaje'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
