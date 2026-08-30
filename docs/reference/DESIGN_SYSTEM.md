# JGC.LABS — DESIGN_SYSTEM.md
## LOOP 02 — Expansión de tokens sobre MOCKUP_SPEC.md

Este documento expande `MOCKUP_SPEC.md` (contrato visual base) con la
implementación concreta de tokens en código. No reemplaza al spec —
donde haya conflicto, `MOCKUP_SPEC.md` gana (ver su sección 24, Conflict
Resolution).

---

## 1. Color

Sin cambios respecto a LOOP 01. Definido en `tailwind.config.ts` y
`app/globals.css`. Fuente: `MOCKUP_SPEC.md` sección 2.

## 2. Tipografía fluida

Fuente: `MOCKUP_SPEC.md` sección 3.

| Token          | Rango spec                                    | Implementación                                  |
|----------------|------------------------------------------------|--------------------------------------------------|
| `text-hero`    | 36–44 mobile / 38–48 tablet / 48–72 desktop     | `clamp(2.25rem, 1.4rem + 3.6vw, 4.5rem)`          |
| `text-heading` | 28–36 mobile / 32–48 desktop                    | `clamp(1.75rem, 1.35rem + 1.8vw, 3rem)`           |
| body           | 16–18px, line-height 1.5–1.7                    | usar `text-base`/`text-lg` de Tailwind (sin token custom, ya cumplen el rango) |
| small/meta     | 12–14px                                         | usar `text-xs`/`text-sm` de Tailwind             |

El peso (600–700) se aplica por componente con `font-semibold` / `font-bold`,
no está incluido en el token de tamaño.

## 3. Spacing / ritmo de sección

Fuente: `MOCKUP_SPEC.md` sección 4 (96–144px desktop, 64–88px mobile).

Ya resuelto en LOOP 01 vía `components/layout/Section.tsx`:
`py-16 md:py-24 lg:py-36` → 64px / 96px / 144px. Sin cambios en LOOP 02.

## 4. Motion

Fuente: `MOCKUP_SPEC.md` sección 16.

| Token                  | Valor                         | Uso                        |
|------------------------|--------------------------------|-----------------------------|
| `duration-fast`        | 200ms                          | interacciones de UI (hover, focus) |
| `duration-content`     | 450ms                          | revelado de contenido       |
| `ease-smooth`          | `cubic-bezier(0.16, 1, 0.3, 1)` | curva general                |

**PROVISIONAL:** el spec pide timing "smooth, natural" sin fijar una curva
exacta. Se eligió `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out estándar) como
valor de trabajo. Confirmar o ajustar con Jorge/GPT antes de LOOP 13 (Motion).

`prefers-reduced-motion` ya está respetado globalmente desde LOOP 01
(`app/globals.css`).

## 5. Sistema de botones — estados

Fuente: `MOCKUP_SPEC.md` sección 15.

`components/ui/Button.tsx` implementa los 5 estados requeridos:

- **default** — color base por variante (primary/secondary)
- **hover** — `hover:opacity-90` (primary) / `hover:bg-surface` (secondary)
- **active** — `active:opacity-80` (primary) / `active:bg-surface-elevated` (secondary)
- **focus** — `focus-visible:ring-2 ring-accent-g` (visible, no solo color)
- **disabled** — `disabled:opacity-40 disabled:pointer-events-none`

Touch target: `min-h-[44px]` (cumple mínimo de 44×44px de la sección 15).

## 6. Fuera de alcance de LOOP 02

- Variantes de tamaño de componente (sm/md/lg) — no solicitadas en el spec, no se inventan.
- Tokens de Badge/GlassCard más allá de lo ya definido en LOOP 01 (el spec no pide estados adicionales para estos).
- Implementación real de animaciones de scroll-reveal — corresponde a LOOP 13 (Motion).

## 7. Siguiente loop

LOOP 03 — Base frontend.
