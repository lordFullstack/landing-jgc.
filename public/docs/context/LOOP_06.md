# JGC.LABS — LOOP 06
## Equipo

**Estado:** ENTREGADO — pendiente de QA/build de Jorge
**Depende de:** LOOP 05 (aprobado conceptualmente; build de LOOPs 02–05 sigue
pendiente — D-021: Jorge autorizó continuar sin esa validación)

---

### 1. Objetivo

Dar tratamiento visual final a la sección Equipo: 3 entidades con
distinción visual sutil, sin jerarquía de valor entre ellas, según
`MOCKUP_SPEC.md` sección 9.

### 2. Alcance implementado

- **Heading exacto:** "Nuestro equipo, tu ventaja" (sin cambios).
- **3 entidades:** Jorge (Product/Vision), GPT (Architecture/Strategy),
  Claude (Engineering/Execution) — roles exactos del spec.
- **Layout:** grid de 3 columnas en desktop (`md:grid-cols-3`), stack
  simple en mobile (sin scroll horizontal — el spec permite scroll
  horizontal solo "if usability remains excellent"; stack es la opción
  segura por defecto y no se complica sin necesidad).
- **Distinción visual sutil sin jerarquía:** se agregó el campo
  `accent: "j" | "g" | "c"` a `TeamMember`, mapeando cada entidad a los
  tokens de color ya aprobados `accent-j/g/c` (coincidencia intencional
  con las iniciales J/G/C de JGC.LABS, D-001). Se aplica como borde
  superior sutil (`border-t-2`) por card — mismo tamaño, misma
  tipografía, mismo peso visual en las tres; solo cambia el acento de
  identidad.
- **Sin duplicar copy:** `role` y `responsibility` son el mismo texto en
  los datos (el spec no da una descripción de responsabilidad distinta
  del rol) — `TeamCard` ahora solo renderiza `responsibility` si es
  distinto de `role`, evitando repetir la misma línea dos veces.
- **Motion:** reutiliza `animate-fade-up` (mismo token de LOOP 02/05),
  sin inventar timing nuevo.

### 3. Explícitamente NO implementado

- Fotos/avatares reales de cada entidad — no son parte del spec ni hay assets provistos.
- Copy de responsabilidad distinta del rol — sigue sin existir en el spec, no se inventa.

### 4. Validación realizada (sin acceso de red en este entorno)

- Sintaxis TS/TSX de todos los archivos.
- Resolución de imports `@/*`.
- Confirmado que `tailwind.config.ts` expone `accent-j/g/c` (usados en las nuevas clases `border-t-accent-*`).

**Acción requerida de Jorge:**
- `npm install && npm run build` (LOOPs 02–06 acumulados, sigue pendiente D-021).
- Confirmar visualmente que la distinción de color por card se percibe como "identidad", no como "orden de importancia".

### 5. Criterios de aceptación

- [x] Heading y roles exactos, sin invención.
- [x] 3 columnas desktop, stack mobile.
- [x] Distinción visual sutil por entidad, sin jerarquía.
- [x] Sin copy duplicada.
- [ ] Build validado por Jorge.

### 6. Siguiente loop

LOOP 07 — Método.
