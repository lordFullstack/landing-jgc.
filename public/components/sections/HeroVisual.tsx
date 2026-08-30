/**
 * Visual abstracto del Hero — LOOP 05.
 * Fuente: MOCKUP_SPEC.md sección 8 ("JGC.LABS visual identity / abstract
 * product-lab visual"). No representa un logo ni un asset de marca real
 * (esos siguen PENDIENTES) — es una composición decorativa con los colores
 * de acento ya aprobados (J/G/C, sección 2) sobre una superficie del
 * design system (sección 6). Decorativo → aria-hidden.
 */
export default function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative aspect-square w-full overflow-hidden rounded-xl border border-border bg-surface"
    >
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="hero-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="40" />
          </filter>
        </defs>
        <circle cx="140" cy="150" r="110" fill="#3B6CFF" opacity="0.55" filter="url(#hero-blur)" />
        <circle cx="270" cy="200" r="100" fill="#20D6C7" opacity="0.45" filter="url(#hero-blur)" />
        <circle cx="200" cy="290" r="110" fill="#8B5CF6" opacity="0.5" filter="url(#hero-blur)" />
      </svg>

      <div className="absolute inset-0 rounded-xl border border-border/60 bg-surface/20 backdrop-blur-[2px]" />
    </div>
  );
}
