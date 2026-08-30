# JGC.LABS — LOOP 09
## Servicios / Diferenciadores

**Estado:** ENTREGADO — pendiente de QA/build de Jorge
**Depende de:** LOOP 08 (entregado; build sigue acumulado sin validar, D-021)

---

### 1. Objetivo

Dar tratamiento visual final a la sección Servicios: 4 mensajes core
como bloques visuales compactos, sin descripciones largas, vendiendo
capacidad/outcomes en vez de un catálogo genérico de agencia. Fuente:
`MOCKUP_SPEC.md` sección 12.

### 2. Alcance implementado

- **4 mensajes core exactos:** Enfoque en negocio, Productos escalables,
  Desarrollo con IA, Transparencia total — sin cambios.
- **Bloques compactos:** `ServiceCard` con padding reducido (`p-5` vs
  `p-6` de otras secciones) y texto centrado, reforzando que son
  mensajes cortos, no fichas descriptivas largas.
- **Acento único (no por-identidad):** borde superior con `accent-g` en
  las 4 cards por igual — a diferencia de Team (LOOP 06), donde cada
  card tiene su propio color porque representa una entidad distinta;
  acá los 4 mensajes representan a JGC.LABS como conjunto.
- **Heading estructural, no de marketing:** el spec no da un título
  visible para esta sección (a diferencia de Team/Method/Projects). Se
  agregó un `<h2 className="sr-only">` puramente estructural (landmark
  de accesibilidad para lectores de pantalla) — NO es copy aprobada ni
  un título que se vaya a mostrar visualmente.
- **Motion:** reutilizado `.reveal-on-scroll` (LOOP 07), consistente con Team/Method/Proyectos.

### 3. Explícitamente NO implementado

- Descripciones de cada mensaje — siguen PENDIENTE (deben ser breves cuando existan, por regla del spec).
- Título de marketing visible para la sección — no fue suministrado, no se inventa.
- Íconos ilustrativos por mensaje — se evitó para no introducir una librería de íconos nueva (cambio de dependencias no autorizado, D-007) ni inventar iconografía sin criterio de diseño aprobado.

### 4. Validación realizada (sin acceso de red en este entorno)

- Sintaxis TS/TSX de todos los archivos.
- Resolución de imports `@/*`.
- Confirmados los 4 mensajes core sin alteración.

**Acción requerida de Jorge:**
- `npm install && npm run build` (acumulado, D-021).
- Decidir si querés un título visible para esta sección, y si es así, proveer el texto (no se infiere).
- Proveer descripciones breves para cada uno de los 4 mensajes cuando estén listas.

### 5. Criterios de aceptación

- [x] 4 mensajes core exactos, sin invención.
- [x] Bloques compactos, sin catálogo largo.
- [x] Heading estructural sin inventar copy de marketing.
- [x] Motion consistente con loops anteriores.
- [ ] Build validado por Jorge.

### 6. Siguiente loop

LOOP 10 — Contacto.
