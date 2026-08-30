# JGC.LABS — LOOP 02
## Design System

**Estado:** ENTREGADO — pendiente de QA/build de Jorge
**Depende de:** LOOP 01 (DONE, build validado)

---

### 1. Objetivo

Expandir los tokens fundacionales de LOOP 01 con tipografía fluida,
tokens de motion y el sistema completo de estados de botón, dejando
todo documentado en `docs/reference/DESIGN_SYSTEM.md`.

### 2. Alcance

- Tokens de tipografía fluida (`text-hero`, `text-heading`) vía `clamp()`, según rangos de `MOCKUP_SPEC.md` sección 3.
- Tokens de motion (`duration-fast`, `duration-content`, `ease-smooth`) en Tailwind + CSS vars.
- Sistema completo de estados en `Button.tsx`: default, hover, active, focus (visible), disabled — sección 15 del spec.
- Aplicación de los nuevos tokens tipográficos en Hero y headings de sección (Team, Method, Projects, CTA), reemplazando los tamaños ad-hoc de LOOP 01.
- `docs/reference/DESIGN_SYSTEM.md` documentando cada token con su fuente.

### 3. Fuera de alcance (explícito)

- Variantes de tamaño de componente (sm/md/lg) — no solicitadas, no inventadas.
- Animaciones de scroll-reveal reales (LOOP 13 — Motion).
- Estados adicionales para Badge/GlassCard — spec no los pide.

### 4. Decisión provisional (no bloqueante)

La curva de easing (`cubic-bezier(0.16, 1, 0.3, 1)`) no está fijada en el
spec ("smooth, natural" es la única guía). Se eligió un ease-out estándar
como valor de trabajo. Confirmar antes de LOOP 13.

### 5. Validación realizada

- Sin acceso de red en este entorno (mismo bloqueo reportado en LOOP 01) → no se corrió `next build` aquí.
- Validado: sintaxis TS/TSX de todos los archivos tocados (parse-only con `typescript` local).
- Validado: `tailwind.config.ts` parsea correctamente y expone los nuevos tokens (`fontSize.hero`, `fontSize.heading`, `transitionDuration.fast/content`).
- Validado: no quedan referencias a los tamaños de texto ad-hoc de LOOP 01 en los componentes de sección.

**Acción requerida de Jorge:** correr `npm run dev` / `npm run build` localmente y confirmar que la tipografía fluida se ve correctamente en 320/375/390/430/768/1024/1280/1440px (sección 22 del spec).

### 6. Criterios de aceptación

- [x] Tokens de tipografía fluida implementados y aplicados.
- [x] Tokens de motion implementados.
- [x] Button con los 5 estados requeridos.
- [x] Documentación del design system creada.
- [ ] Validación visual en breakpoints (pendiente, requiere build local).

### 7. Siguiente loop

LOOP 03 — Base frontend.
