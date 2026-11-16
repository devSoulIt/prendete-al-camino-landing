/**
 * Etapas de la campaña Santiago 2027.
 *
 * El lanzamiento (STAGE 1) salió el domingo 15/11/2026: desde esa fecha se
 * muestran el bloque verde de Santiago 2027, el carrusel de la intro, las
 * fechas reales en el calendario y las preguntas de Santiago 2027. El hero
 * ya quedó fijo con el reel de lanzamiento.
 *
 * `?etapa=anuncio` fuerza la vista previa al lanzamiento (solo para revisar).
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
