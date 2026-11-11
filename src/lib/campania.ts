/**
 * Etapas de la campaña Santiago 2027.
 *
 * Hasta el sábado 14/11/2026 la portada muestra el anuncio Early Bird
 * (STAGE 0). Desde el domingo 15/11/2026 se publica sola la web de
 * lanzamiento (STAGE 1): hero nuevo, bloque verde de Santiago 2027,
 * carrusel de la intro y fechas reales en el calendario.
 *
 * Para revisar la web de lanzamiento antes de esa fecha, abrir la página con
 * `?etapa=lanzamiento` (o `?etapa=anuncio` para forzar el Early Bird).
 */
export const FECHA_LANZAMIENTO = new Date(2026, 10, 15); // 15/11/2026, hora local

export function esLanzamiento(hoy: Date = new Date()): boolean {
  if (typeof window !== "undefined") {
    const etapa = new URLSearchParams(window.location.search).get("etapa");
    if (etapa === "lanzamiento") return true;
    if (etapa === "anuncio") return false;
  }
  return hoy >= FECHA_LANZAMIENTO;
}
