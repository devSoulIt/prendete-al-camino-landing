/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // optimizeCss: true, // Comentado temporalmente para evitar errores con critters
  },
  images: {
    // El optimizador guarda una copia por cada combinacion imagen x ancho x
    // formato, y eso es lo que infla el storage del proyecto. Las tres
    // opciones de abajo acotan esa matriz.

    // webp ya iba primero, asi que avif casi nunca se elegia (Next sirve el
    // primer formato que soporte el browser): solo sumaba variantes posibles.
    formats: ['image/webp'],

    // Ninguna fuente supera los 2048px, asi que 3840 solo generaba upscales
    // mas pesados que el original. Se sacan ademas los escalones redundantes
    // (750 cae entre 640 y 828; 1200 entre 1080 y 1920).
    deviceSizes: [640, 828, 1080, 1920, 2048],

    // Solo aplican a <Image sizes="..."> con anchos fijos en px; en el
    // proyecto todos los sizes son relativos al viewport (vw).
    imageSizes: [128, 256, 384],

    // Estaba en 60 segundos: cada minuto vencia la entrada y el optimizador
    // volvia a generarla y a guardarla. 31 dias es el valor razonable para
    // imagenes que no cambian.
    minimumCacheTTL: 2678400,

    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack: (config, { dev, isServer }) => {
    // Optimizaciones para producción
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }
    
    return config;
  },
}

module.exports = nextConfig
