import Image from "next/image";

const redes = [
  { nombre: "Instagram", url: "https://www.instagram.com/prendetealcamino" },
  { nombre: "Facebook", url: "https://www.facebook.com/prendetealcamino" },
  { nombre: "TikTok", url: "https://www.tiktok.com/@prendetealcamino" },
];

export function Footer() {
  return (
    <footer className="bg-pac-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-pac-olive/[0.12] py-8 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-center md:text-left">

          {/* Logo + copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Logo de Prendete al Camino"
              width={36}
              height={36}
              className="w-[36px] h-[36px] rounded-full object-cover"
            />
            <p className="text-[13px] text-pac-muted">
              © 2026 Prendete al Camino. Todos los derechos reservados.
            </p>
          </div>

          {/* Lema */}
          <p className="font-serif italic text-[18px] text-pac-olive">
            Viajes para el alma, experiencias para la vida.
          </p>

          {/* Redes */}
          <nav className="flex items-center justify-center gap-5">
            {redes.map(({ nombre, url }) => (
              <a
                key={nombre}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-semibold text-pac-olive transition-colors duration-200 hover:text-pac-olive-dark"
              >
                {nombre}
              </a>
            ))}
          </nav>

        </div>
      </div>
    </footer>
  );
}
