# Prendete al Camino - Landing Page

Landing page para "Prendete al Camino", una empresa especializada en viajes al Camino de Santiago de Compostela.

## Tecnologías

- **Next.js 15** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS
- **shadcn/ui** - Componentes de UI
- **Lucide React** - Iconos

## Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globales
├── components/
│   ├── Header.tsx         # Componente de navegación
│   ├── HeroSection.tsx    # Sección hero
│   ├── SantiagoSection.tsx # Sección Santiago
│   ├── ViajesCortosSection.tsx # Sección viajes cortos
│   ├── VideollamadaSection.tsx # Sección videollamada
│   ├── GaleriaSection.tsx # Sección galería
│   ├── Footer.tsx         # Componente footer
│   ├── figma/
│   │   └── ImageWithFallback.tsx # Componente de imagen
│   └── ui/                # Componentes de shadcn/ui
```

## Comandos Disponibles

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en modo producción
npm start

# Ejecutar linter
npm run lint
```

## Características

- ✅ Diseño responsive
- ✅ Componentes reutilizables
- ✅ Optimización de imágenes
- ✅ SEO optimizado
- ✅ Accesibilidad
- ✅ Modo oscuro/claro (preparado)

## Secciones

1. **Header** - Navegación principal con logo y menú
2. **Hero** - Sección principal con call-to-action
3. **Santiago** - Información sobre Santiago de Compostela
4. **Viajes Cortos** - Ofertas de viajes organizados
5. **Videollamada** - Sección de contacto por videollamada
6. **Galería** - Galería de imágenes del Camino
7. **Footer** - Información de contacto y formulario

## Desarrollo

El proyecto está configurado con:
- TypeScript para tipado estático
- ESLint para linting
- Tailwind CSS para estilos
- shadcn/ui para componentes de UI
- Next.js App Router para enrutamiento

## Despliegue

El proyecto está listo para ser desplegado en:
- Vercel (recomendado)
- Netlify
- Cualquier plataforma que soporte Next.js
