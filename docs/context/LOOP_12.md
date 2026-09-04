# JGC.LABS — LOOP 12
## Responsive (Auditoría)

**Estado:** ENTREGADO — auditoría completada, sin cambios de código necesarios
**Depende de:** LOOP 11 (entregado)

---

### 0. Naturaleza de este loop

A diferencia de los loops anteriores, este NO agregó código nuevo. Es
una **auditoría dedicada** de `MOCKUP_SPEC.md` sección 17 (Responsive
Rules) sobre todo lo construido en LOOPs 01–11, y cubre directamente el
ítem 3 pendiente del QA de LOOP 05 ("Responsive 320/375/390/430/768/
1024/1280/1440") en la medida en que el código lo permite verificar sin
navegador real.

**Limitación de entorno, igual que en el QA de LOOP 05:** esto es una
auditoría de código (clases Tailwind, cálculos de `clamp()`, breakpoints
declarados), no una confirmación visual real en dispositivo/navegador.
Donde no pude verificar con certeza, queda marcado explícitamente.

---

### 1. Mobile (320px mínimo) — MOCKUP_SPEC.md sección 17

| Regla del spec | Resultado | Evidencia |
|---|---|---|
| Sin overflow horizontal | Sin hallazgos de riesgo | Grep de anchos fijos (`w-[...]`, `min-w-[...]`) en todo el proyecto: solo `min-w-[44px]` del trigger de menú (seguro, valor pequeño). Ningún ancho fijo que exceda 320px. |
| Sin texto diminuto | PASS | Único uso de `text-xs` (12px, el piso que exige la sección 3 del spec) es en `Badge` (tags cortos) y links legales del Footer — contenido secundario, no lectura principal. |
| Sin navegación desktop visible | PASS | Nav de `Header.tsx` es `hidden md:flex`; CTA de escritorio es `hidden md:block`. Confirmado en código. |
| CTA alcanzable | PASS | Los CTAs del Hero están en el flujo normal del documento, sin `hidden` en mobile; el menú mobile expone su propio CTA (`MobileNav.tsx`). |
| Cards se apilan naturalmente | PASS | Ningún grid define columnas por debajo de su primer breakpoint (`sm`/`md`) — todos caen a 1 columna implícita en mobile puro. |
| Jerarquía visual idéntica | PASS (con una nota, ver sección 3) | El orden del DOM no cambia entre mobile/desktop en ninguna sección; solo cambia el layout (columnas), no el orden de lectura. |

### 2. Tablet — "Allow intermediate grid behavior"

| Sección | Comportamiento a partir de `sm` (640px) |
|---|---|
| Team | Se mantiene 1 columna hasta `md` (768px) — ver nota de diseño en sección 3, es intencional. |
| Method | 2 columnas a partir de `sm`, 3 desde `lg`. |
| Projects | 2 columnas a partir de `sm`, 3 desde `lg`. |
| Services | 2 columnas a partir de `sm`, 4 desde `lg`. |

### 3. Nota de diseño confirmada (no es un bug)

`Team.tsx` usa `md:grid-cols-3` (sin intermedio en `sm`), a diferencia de
Method/Projects/Services que sí usan `sm:grid-cols-2`. Esto es
**intencional**, revisado en este loop: con exactamente 3 miembros, un
layout de 2 columnas en tablet dejaría 2 cards arriba y 1 sola abajo —
lo que crearía una jerarquía visual involuntaria sobre esa tercera
persona, violando directamente la regla explícita de la sección 9
("communicates collaboration, not hierarchy of value"). Se documenta
para que quede claro que no hay que "unificar" este patrón con el resto.

### 4. Desktop — "must not simply stretch the mobile layout"

Confirmado en código que cada sección tiene tratamiento propio en
desktop, no un mobile estirado:
- Hero: 2 zonas (texto + visual) solo desde `md`.
- Team/Method/Projects/Services: multi-columna real, no una sola
  columna ensanchada.
- Method: nodos numerados + línea conectora (timeline) — exclusivo de
  `lg`, no existe en mobile de ninguna forma.
- `Section.tsx`: el padding vertical crece por breakpoint
  (`py-16 md:py-24 lg:py-36` = 64px → 96px → 144px), aumentando el
  espacio negativo en desktop tal como pide la sección 17.

### 5. Verificación numérica de tipografía fluida en los 8 breakpoints exactos

Cálculo exacto de los `clamp()` de LOOP 02 en los breakpoints pedidos
por Jorge en el QA de LOOP 05:

| Viewport | `text-hero` | Rango spec | `text-heading` | Rango spec |
|---|---|---|---|---|
| 320px | 36.0px | 36-44 mobile | 28.0px | 28-36 mobile |
| 375px | 36.0px | 36-44 mobile | 28.4px | 28-36 mobile |
| 390px | 36.4px | 36-44 mobile | 28.6px | 28-36 mobile |
| 430px | 37.9px | 36-44 mobile | 29.3px | 28-36 mobile |
| 768px | 50.0px | 38-48 tablet* | 35.4px | mobile→desktop transición |
| 1024px | 59.3px | 48-72 desktop | 40.0px | 32-48 desktop |
| 1280px | 68.5px | 48-72 desktop | 44.6px | 32-48 desktop |
| 1440px | 72.0px | 48-72 desktop | 47.5px | 32-48 desktop |

*En 768px el hero da 50.0px, levemente por encima del rango "tablet"
(38-48) del spec — cae ya dentro del rango "desktop" (48-72) porque el
`clamp()` de LOOP 02 no definió un tercer punto de quiebre intermedio
para tablet, solo mobile→desktop. **No es un error crítico** (el spec da
rangos de referencia, no valores exactos obligatorios, y 50px es
razonable a 768px), pero queda registrado como ajuste fino posible si
Jorge lo considera relevante.

### 6. Hallazgos

**Ninguno bloqueante.** Un ajuste fino opcional (LOW): el punto de
quiebre del `clamp()` de `text-hero` podría afinarse para no exceder
48px justo en 768px. No se tocó en este loop porque no es un error, es
un matiz — cambiarlo sin pedido explícito sería una mejora de diseño no
solicitada.

### 7. Sigue requiriendo QA manual de Jorge (no verificable desde este entorno)

- Confirmación visual real en dispositivo/navegador en los 8 breakpoints.
- Comportamiento real de scroll/overflow en dispositivos táctiles.
- Cualquier diferencia de renderizado entre navegadores (Safari iOS en particular, por sus peculiaridades con `dvh`/`svh` y `backdrop-blur`, aunque este proyecto no usa `dvh`/`svh`).

### 8. Criterios de aceptación

- [x] Reglas de mobile (320px) auditadas y conformes.
- [x] Comportamiento de tablet auditado, con nota de diseño documentada (Team).
- [x] Desktop confirmado como tratamiento propio, no mobile estirado.
- [x] Tipografía fluida verificada numéricamente en los 8 breakpoints exactos.
- [ ] Confirmación visual real por parte de Jorge.

### 9. Siguiente loop

LOOP 13 — Motion (confirmar la curva de easing provisional de LOOP 02, D-015).
