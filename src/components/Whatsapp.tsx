import { FaWhatsapp } from "react-icons/fa";


export function Whatsapp() {
    return (
        <div className="fixed bottom-4 right-4 z-50 rounded-full p-2" style={{ backgroundColor: '#ffd600' }}>
            <a href="https://api.whatsapp.com/send?phone=543815184516&text=Hola%F0%9F%91%8B%20los%20contacto%20desde%20la%20web.%0AQuiero%20info%20sobre..." target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="w-12 h-12 text-black" />
            </a>
        </div>
    );
}