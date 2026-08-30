# JGC.LABS — LOOP 03
## Base Frontend (Arquitectura)

**Estado:** ENTREGADO — pendiente de QA/build de Jorge
**Depende de:** LOOP 02 (DONE)

---

### 0. Conflicto detectado y resuelto antes de implementar

El ZIP `JGC_LABS_LOOP_03_PROMPT.zip` traía dos prompts de LOOP 03
contradictorios entre sí (`LOOP_03_PROMPT.md`: Header+Hero visual ahora;
`PROMPT_LOOP_03.md`: solo arquitectura, difiere Header/Hero) y ninguno
coincidía exactamente con el roadmap aprobado en `LOOP_00.md`
(03 Base frontend → 04 Header → 05 Hero, loops separados).

**Decisión de Jorge (este chat):** mantener el roadmap original.
LOOP 03 = Base frontend únicamente. Header y Hero permanecen como los
placeholders estructurales ya entregados en LOOP 01/02, sin implementación
visual todavía. La documentación se mantiene en `docs/context/` (D-009),
no en `/docs/` como sugería uno de los prompts en conflicto.

### 1. Objetivo

Completar la arquitectura frontend de base: consistencia de boundaries de
componentes, accesibilidad base (skip link, landmarks), y SEO base
(metadata, viewport, robots, sitemap) — sin tocar el alcance visual de
Header (LOOP 04) ni Hero (LOOP 05).

### 2. Alcance implementado

- **Consistencia de componentes:** creado `components/sections/ServiceCard.tsx`
  para alinear el boundary de `Services` con el patrón ya usado en
  Team/Method/Projects (cada sección con su `*Card`/`*Step` dedicado).
  `Services.tsx` refactorizado para usarlo en vez de `GlassCard` inline.
- **Accesibilidad base:** skip link ("Saltar al contenido") en
  `app/layout.tsx`, visualmente oculto hasta recibir foco por teclado;
  `<main id="main-content">` en `app/page.tsx` como destino.
- **SEO base:** `viewport` export (con `themeColor`), `openGraph`
  (title/description con la copy ya aprobada) en `app/layout.tsx`;
  `app/robots.ts` y `app/sitemap.ts` nuevos.
- **Datos:** `lib/constants/*` ya eran data-driven desde LOOP 01 — sin
  cambios necesarios, cumple el requisito de separación contenido/presentación.

### 3. Explícitamente NO implementado en este loop

- `metadataBase` y `og:image` — requieren dominio y asset de marca reales
  que Jorge no ha suministrado; definirlos ahora sería inventar información
  de negocio. Documentado como TODO.
- Header visual/navegación mobile funcional — LOOP 04.
- Hero visual/composición final — LOOP 05.
- Copy definitivo de método/proyectos/servicios/soporte del Hero — sigue
  pendiente (sin cambios respecto a LOOPs anteriores).
- Nuevas dependencias, cambio de stack, refactorización masiva.

### 4. Validación realizada (sin acceso de red en este entorno)

- Sintaxis TS/TSX de todos los archivos del proyecto (parse-only).
- Resolución de todos los imports `@/*` contra archivos existentes.
- Confirmado que `Services.tsx` ya no referencia `GlassCard` directamente.
- Confirmado que `id="main-content"` existe y coincide con el `href` del skip link.

**Acción requerida de Jorge:** `npm install && npm run build` localmente.
Adicionalmente, verificar con teclado (Tab) que el skip link aparece y
funciona, y que `/robots.txt` y `/sitemap.xml` se generan correctamente
en `npm run dev`.

### 5. Criterios de aceptación

- [x] Boundaries de componentes consistentes en todas las secciones.
- [x] Accesibilidad base (skip link + landmark de contenido).
- [x] SEO base (viewport, Open Graph, robots, sitemap) sin inventar dominio/assets.
- [x] Sin cambios de stack, dependencias ni alcance visual de Header/Hero.
- [x] Documentación actualizada en docs/context/.
- [ ] Build validado localmente por Jorge.

### 6. Siguiente loop

LOOP 04 — Header (implementación visual + navegación mobile funcional).
