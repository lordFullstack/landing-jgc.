# JGC.LABS — LOOP 07
## Método

**Estado:** ENTREGADO — pendiente de QA/build de Jorge
**Depende de:** LOOP 06 (entregado; build sigue acumulado sin validar, D-021)

---

### 1. Objetivo

Dar tratamiento visual final a la sección Método: título exacto, 6 etapas,
composición "bento/grid/timeline hybrid" en desktop, secuencia vertical en
mobile, y reveal progresivo al hacer scroll sin comprometer disponibilidad
del contenido. Fuente: `MOCKUP_SPEC.md` sección 10.

### 2. Alcance implementado

- **Título exacto:** "JGC Product Method™" (sin cambios).
- **6 etapas exactas:** Descubrir, Arquitectura, Especificar, Construir,
  Validar, Lanzar & Escalar — números y títulos sin cambios.
- **Bento/grid/timeline hybrid (desktop):** cada `MethodStep` es una card
  ("bento") con un nodo numerado circular conectado por una línea
  horizontal a la siguiente card de la misma fila ("timeline"). La línea
  se oculta en la última columna de cada fila de 3 (`isLastInRow`,
  calculado desde el índice) y en todo el rango mobile/tablet (`lg:block`
  únicamente).
- **Mobile:** secuencia vertical simple (grid sin columnas explícitas por
  debajo de `sm`), sin conector — como pide el spec para mobile.
- **Reveal progresivo al hacer scroll** (`.reveal-on-scroll` en
  `app/globals.css`):
  - Base universal: mismo `fade-up` de LOOP 02/05 disparado al montar —
    nunca deja el contenido en `opacity:0` fuera de un contexto de
    animación soportado, así que sin CSS animations el contenido es
    visible por defecto.
  - Progressive enhancement con `@supports (animation-timeline: view())`:
    en navegadores compatibles, el mismo keyframe se religa al scroll
    real de cada card en vez de al montaje. Sin soporte, el bloque
    `@supports` no aplica y se mantiene el fallback de montaje.
  - **Sin JavaScript adicional** — enfoque 100% CSS, consistente con el
    resto del proyecto (Header/MobileNav son la única lógica cliente
    existente, y es por necesidad de interactividad real, no de motion).
  - Cumple explícitamente la regla del spec: *"content must remain
    available without animation"*.

### 3. Explícitamente NO implementado

- Descripción de cada etapa — sigue vacía y marcada PENDIENTE (sin inventar).
- IntersectionObserver / JS para el reveal — se prefirió la solución CSS pura por robustez y menor superficie de fallo.

### 4. Validación realizada (sin acceso de red en este entorno)

- Sintaxis TS/TSX de todos los archivos.
- Resolución de imports `@/*`.
- Confirmado que `isLastInRow` marca correctamente los índices 2 y 5 (posiciones 03 y 06) como fin de fila para un grid de 3 columnas.

**Acción requerida de Jorge:**
- `npm install && npm run build` (acumulado, D-021).
- Verificar visualmente el timeline en desktop (línea entre nodos) y el fallback en mobile (sin línea).
- Si el navegador lo soporta, confirmar que el reveal ocurre al hacer scroll (Chrome/Edge recientes); en caso contrario, confirmar que el contenido de todas formas es visible (fallback de montaje).

### 5. Criterios de aceptación

- [x] Título y 6 etapas exactos, sin invención.
- [x] Composición bento/timeline en desktop, secuencia vertical en mobile.
- [x] Reveal progresivo implementado sin ocultar contenido en ausencia de animación.
- [ ] Build validado por Jorge.

### 6. Siguiente loop

LOOP 08 — Proyectos.
