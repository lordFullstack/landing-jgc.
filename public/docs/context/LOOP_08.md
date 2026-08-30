# JGC.LABS — LOOP 08
## Proyectos

**Estado:** ENTREGADO — pendiente de QA/build de Jorge
**Depende de:** LOOP 07 (entregado; build sigue acumulado sin validar, D-021)

---

### 1. Objetivo

Dar tratamiento visual final a la sección Proyectos: título exacto, 5
proyectos, cards con todos los campos opcionales del spec resueltos
condicionalmente, sin inventar ninguna métrica de negocio. Fuente:
`MOCKUP_SPEC.md` sección 11.

### 2. Alcance implementado

- **Título exacto:** "Proyectos que generan impacto" (sin cambios).
- **5 proyectos exactos:** Domicilios Riohacha, ClubJugos, Barber SaaS,
  CrediApp, Gastro POS — sin cambios.
- **Card con todos los campos disponibles del spec**, cada uno condicional:
  - `name` — siempre presente.
  - `category` — se muestra si existe (sigue PENDIENTE en los 5).
  - `description` — se muestra si existe (sigue PENDIENTE en los 5).
  - `technologies` — se muestra como badges si hay al menos una (sigue vacío en los 5).
  - **`visual/preview`** (nuevo en este loop): bloque decorativo
    `aspect-video` con superficie del design system (`bg-surface`,
    `border-border`), reservando el espacio para una captura real del
    proyecto — no es un logo ni un ícono inventado, es un placeholder neutro.
  - **`demo link`** (nuevo en este loop): se renderiza solo si
    `project.demoUrl` existe (`target="_blank" rel="noopener noreferrer"`),
    ninguno lo tiene todavía.
- **Sin invención de métricas:** confirmado que no aparece revenue, users,
  growth, clientes, conversion, performance ni awards en ningún dato ni componente
  (regla explícita y crítica de la sección 11).
- **Motion:** se reutilizó `.reveal-on-scroll` (creada en LOOP 07) en cada
  `ProjectCard` — mismo lenguaje de motion en toda la landing, sin
  duplicar lógica.
- **Mobile:** single-column, ya resuelto desde LOOP 01 (sin clases de
  columna en el breakpoint base).

### 3. Decisión de diseño documentada (no bloqueante)

El spec permite un layout bento "where it improves storytelling" (tamaños
de card variables). Con los 5 proyectos sin descripción/categoría todavía,
no hay base de contenido para decidir qué proyecto merece una card más
grande sin inventar una jerarquía de importancia no definida por Jorge.
Se mantiene un grid uniforme; la composición bento real queda para
revisar cuando exista copy de proyectos.

### 4. Explícitamente NO implementado

- Categoría, descripción, tecnologías y demo link reales de cada proyecto — siguen PENDIENTE.
- Capturas/imágenes reales de cada proyecto — el bloque visual sigue siendo un placeholder vacío.
- Composición bento con tamaños variables — diferida (ver sección 3).

### 5. Validación realizada (sin acceso de red en este entorno)

- Sintaxis TS/TSX de todos los archivos.
- Resolución de imports `@/*`.
- Grep explícito confirmando que ninguna métrica prohibida (revenue/users/growth/clientes/conversion/performance/awards) aparece en el código o los datos, salvo en el comentario que documenta la prohibición.

**Acción requerida de Jorge:**
- `npm install && npm run build` (acumulado, D-021).
- Cuando tengas categoría/descripción/tecnologías/demo real de algún proyecto, decime cuál y lo cargo en `lib/constants/projects.ts` (sin tocar el resto).

### 6. Criterios de aceptación

- [x] Título y 5 proyectos exactos, sin invención.
- [x] Todos los campos opcionales del spec soportados condicionalmente.
- [x] Sin métricas de negocio inventadas.
- [x] Motion consistente con LOOP 07.
- [ ] Build validado por Jorge.

### 7. Siguiente loop

LOOP 09 — Servicios / Diferenciadores.
