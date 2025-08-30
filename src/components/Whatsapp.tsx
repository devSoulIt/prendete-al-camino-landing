import { FaWhatsapp } from "react-icons/fa";


export function Whatsapp() {
    return (
        <div className="fixed bottom-4 right-4 z-50 rounded-full p-2" style={{ backgroundColor: '#ffd600' }}>
            <a href="https://wa.me/541145678900" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="w-12 h-12 text-black" />
            </a>
        </div>
    );
}