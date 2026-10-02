import { Instagram, MessageCircle } from "lucide-react";

// Misma URL de WhatsApp que usa el botón flotante (src/components/Whatsapp.tsx)
const WHATSAPP_URL =
    "https://api.whatsapp.com/send?phone=543815184516&text=Hola%F0%9F%91%8B%20los%20contacto%20desde%20la%20web.%0AQuiero%20info%20sobre...";
const INSTAGRAM_URL = "https://www.instagram.com/prendetealcamino";

// El formulario de contacto se retiró por ahora: el contacto es directo por WhatsApp e Instagram.
export function Contacto() {
    return (
        <section id="contacto" className="py-20 md:py-24 bg-pac-bg px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1440px] mx-auto rounded-[32px] bg-pac-olive p-8 md:p-[72px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Columna izquierda: mensaje */}
                    <div className="flex flex-col gap-6 text-pac-surface">
                        <div className="pac-eyebrow text-pac-yellow">Contacto</div>
                        <h2 className="font-serif font-medium text-[36px] md:text-[52px] leading-[1.05]">
                            El camino te espera, nosotros también
                        </h2>
                        <p className="text-[17px] leading-relaxed text-pac-surface/80 max-w-[460px]">
                            Confiá tu camino a manos expertas y preparate para la mejor experiencia de tu
                            vida. Contanos qué viaje te interesa y te respondemos a la brevedad.
                        </p>
                    </div>

                    {/* Columna derecha: contacto directo */}
                    <div className="bg-pac-surface rounded-[24px] p-6 md:p-8">
                        <h3 className="font-serif font-medium text-[26px] leading-[1.15] text-pac-ink">
                            Sumate al Camino de Santiago
                        </h3>
                        <p className="mt-2 text-[14px] leading-[1.6] text-pac-body">
                            Escribinos y te enviamos toda la información detallada. Sin ningún compromiso.
                        </p>

                        <div className="mt-6 flex flex-col gap-3">
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pac-btn-primary w-full px-4 sm:px-7"
                            >
                                <MessageCircle className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                                Escribinos por WhatsApp
                            </a>
                            <a
                                href={INSTAGRAM_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pac-btn-ghost w-full px-4 sm:px-6"
                            >
                                <Instagram className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                                @prendetealcamino
                            </a>
                        </div>
                        <p className="mt-4 text-center text-[13px] text-pac-muted">WhatsApp +54 381 518 4516</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
