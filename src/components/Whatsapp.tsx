import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "@/lib/site";

export function Whatsapp() {
    return (
        <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escribinos por WhatsApp"
            className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-pac-yellow text-pac-olive-dark flex items-center justify-center shadow-[0_8px_24px_rgba(31,36,20,0.24)] hover:scale-105 transition-transform duration-200"
        >
            <FaWhatsapp className="w-8 h-8" />
        </a>
    );
}
