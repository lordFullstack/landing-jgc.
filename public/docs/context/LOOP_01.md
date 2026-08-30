# JGC.LABS — LOOP 01
## Arquitectura de Landing

**Estado:** ENTREGADO — pendiente de QA de Jorge
**Depende de:** LOOP 00 (APROBADO)
**Stack confirmado:** Next.js 14 (App Router) + TypeScript + Tailwind CSS

---

### 1. Objetivo

Montar la arquitectura base del proyecto (estructura de carpetas, configuración,
rutas, boundaries de componentes y tokens fundacionales) para que los loops
02–11 (Design System, Base frontend, Header, Hero, Equipo, Método, Proyectos,
Servicios, Contacto, Footer) implementen sobre una base ya definida.

### 2. Alcance

- Scaffold completo de Next.js (App Router) + TS + Tailwind.
- Tokens fundacionales de color y radio (background, surface, accents J/G/C,
  radios) extraídos de `docs/reference/MOCKUP_SPEC.md`.
- Definición de boundaries de componentes: `layout/` (Header, Footer,
  Container, Section), `ui/` (Button, Badge, GlassCard), `sections/` (Hero,
  Team, TeamCard, Method, MethodStep, Projects, ProjectCard, Services, CTA).
- Ensamblado de `app/page.tsx` con el orden de secciones aprobado.
- Datos de contenido (`lib/constants/*`) poblados solo con copy y textos
  explícitamente aprobados en `MOCKUP_SPEC.md`; todo lo no suministrado
  (descripciones de método, categorías/descripciones de proyectos,
  descripciones de servicios, copy de soporte del hero) queda marcado como
  `PENDIENTE` — no se inventó contenido.
- Carpetas de assets (`public/brand`, `public/projects`, `public/icons`).

### 3. Fuera de alcance (explícito)

- Diseño visual final de cualquier sección (Loops 04–11).
- Expansión completa del Design System — spacing scale, tipografía,
  variantes de componente, tokens de motion (Loop 02).
- Contenido de copy final (descripciones de método/proyectos/servicios).
- Menú móvil funcional, animaciones, accesibilidad avanzada.
- Assets reales (logo, imágenes de proyecto) — placeholders vacíos.

### 4. Decisión pendiente de confirmación (no bloqueante)

`MOCKUP_SPEC.md` ofrece dos opciones para el CTA secundario del Hero
("Ver proyectos" / "Conoce nuestro método"). Se usó por defecto
**"Conoce nuestro método"** por continuidad narrativa con el orden de
secciones. Confirmar o cambiar en LOOP 05.

### 5. Restricción de entorno detectada — REPORTE

Este entorno de ejecución no tiene acceso de red saliente (`npm install`
contra `registry.npmjs.org` devuelve `403 Forbidden`). Por lo tanto:

- **No fue posible** ejecutar `npm install`, `next build` ni `next lint`
  dentro de este entorno para validar el build real.
- Se validó manualmente: consistencia de imports (`@/` paths), estructura
  de archivos, sintaxis TSX, y coherencia de `tsconfig.json` /
  `tailwind.config.ts` / `postcss.config.js` / `next.config.ts` entre sí.
- **Acción requerida de Jorge:** ejecutar localmente
  `npm install && npm run build` para la validación de build real antes de
  marcar LOOP 01 como DONE completo. Si aparece cualquier error de
  compilación, reportarlo para corrección inmediata en este mismo loop.

Esto se documenta según el protocolo de conflicto/restricción del contrato
(REPORTAR → PROPONER → ESPERAR APROBACIÓN) en lugar de asumir un build
válido sin evidencia.

### 6. Criterios de aceptación

- [x] Estructura de carpetas montada según boundaries del spec.
- [x] Stack configurado (Next.js App Router + TS + Tailwind).
- [x] Tokens fundacionales aplicados vía Tailwind + CSS vars.
- [x] Todas las secciones del roadmap representadas como componentes.
- [x] Ningún dato inventado (revenue, users, growth, copy no aprobada).
- [ ] Build validado localmente por Jorge (bloqueado por red en este entorno).

### 7. Siguiente loop

LOOP 02 — Design System (expansión de tokens, tipografía, spacing, motion,
variantes de componente).
