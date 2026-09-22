# DYNAMIC_WEB_SPEC — LOOP 01 (paquete JGC_WEB_DYNAMIC_LOOPS)

Auditoría previa a cualquier cambio de código de los LOOPs 02-08 del
paquete `JGC_WEB_DYNAMIC_LOOPS` (convertir la landing de estática a
interactiva/reactiva). Sigue el contrato de `LOOP_01_AUDITORIA_CONTRATO.md`.

## Objetivo
Mapear qué partes de la landing ya existente (LOOPs 00-12, DONE) deben
sentirse dinámicas y cuáles deben permanecer estáticas a propósito, antes
de escribir código de interacción/motion/datos/backend nuevo.

## Alcance
Los 6 secciones de `app/page.tsx` (Hero, Team, Method, Projects, Services,
CTA) + Header/MobileNav/Footer + las 2 páginas legales placeholder. No
incluye cambios de stack (Next.js 14 App Router + TypeScript + Tailwind,
confirmado D-010, bloqueado sin aprobación).

## Nota previa (bloqueante, ya resuelta en este mismo chat)
Antes de esta auditoría se encontraron y corrigieron dos problemas graves
no relacionados con el paquete dinámico, documentados en D-028 /
CHANGELOG v2.17: (1) código fuente completo filtrado vía `public/`, (2) el
commit más reciente había borrado todo el sistema de diseño (colores,
dark mode, tipografía fluida, motion) al aplicar mal un cambio de fuente.
Ambos ya están arreglados, verificados con `npm run build` y pusheados a
`main`. Esta auditoría parte de ese estado ya saneado.

## Inventario de componentes

| Componente | Tipo actual | Notas |
|---|---|---|
| `Header` | Client (`useState` para mobile menu) | Sticky, glass sutil. CTA "Hablemos" sin acción real (ver bloqueantes). |
| `MobileNav` | Client | Focus trap, Escape, aria-modal ya implementados — sólido. CTA interno también sin acción real. |
| `MenuIcon` | Server, puramente visual | — |
| `Hero` | Server | 2 CTAs ya wireados a anclas (`#contacto`, `#metodo`). Entrada `animate-fade-up` con stagger. |
| `HeroVisual` | Server, decorativo (`aria-hidden`) | SVG estático con blur. No necesita interacción (D-020: es lenguaje visual, no logo). |
| `Team` / `TeamCard` | Server | 3 cards estáticas, sin interacción. |
| `Method` / `MethodStep` | Server | Grid bento/timeline. `.reveal-on-scroll` ya aplicado (CSS puro, `animation-timeline: view()` con fallback). |
| `Projects` / `ProjectCard` | Server | Cards sin interacción (no hay expand/modal). `demoUrl` condicional ya soportado en el tipo pero ningún proyecto lo tiene todavía. |
| `Services` / `ServiceCard` | Server | Bloques compactos, sin interacción. |
| `CTA` | Server | Gradiente de alto contraste. Botón sin `href` (mismo bloqueante que Header). |
| `Footer` | Server | Links de nav + legales, hover states ya consistentes. |
| `Button` (ui) | Server | Ya soporta `href` opcional (ancla o link) y variantes `primary/secondary/inverted`. **No tiene estado `loading`** — necesario para LOOP 06 (formularios). |
| `GlassCard` (ui) | Server, puramente visual | Sin variante interactiva (hover/press) — candidato a LOOP 02/04 si Projects/Method pasan a ser clickeables. |
| `Badge` (ui) | Server, puramente visual | — |
| `Section` / `Container` (layout) | Server | Wrappers de layout puro. |
| `LegalPagePlaceholder` | Server | Copy honesta ("en preparación"), reutilizada por `/privacidad` y `/terminos`. |

## Mapa de interacciones (existente hoy)

- **Header → MobileNav**: toggle real, con accesibilidad completa (foco,
  Escape, focus trap). Único componente con estado de interacción hoy.
- **Nav anchors** (`#inicio`, `#nosotros`, etc.): scroll nativo del
  navegador (`html { scroll-behavior: smooth }` en globals.css). No hay
  scroll-spy (resaltar el link activo según la sección visible) — no
  implementado.
- **Hero CTAs**: anclas reales, sin estado (no hay loading/feedback
  porque son links de scroll, no acciones).
- **Botones "Hablemos"** (Header, MobileNav, CTA section): **no hacen
  nada** — sin `href`, sin `onClick` real, por falta de canal de contacto
  (ver decisiones pendientes).
- **Reveal on scroll**: Method/Projects/Services cards y CTA usan
  `.reveal-on-scroll` — animación CSS pura al montar, con progressive
  enhancement vía `animation-timeline: view()` donde el navegador lo
  soporta. No es JS, no es estado de React.
- **Todo lo demás es 100% estático**: ninguna card (Team/Method/
  Projects/Services) es clickeable, no hay modales, no hay tabs, no hay
  acordeones, no hay filtros, no hay formularios.

## Estados necesarios (según LOOP 02-06 del paquete nuevo)

Lo que existe hoy:
- `Header`/`MobileNav`: estado `open/closed` (ya implementado).
- Hover en links de nav (Header/Footer) y en demo links de proyectos:
  `transition-colors duration-fast` (ya implementado vía Tailwind).
- Focus visible en `Button` (`focus-visible:ring-2`, ya implementado).

Lo que NO existe todavía y el paquete nuevo pediría evaluar:
- `loading/success/error` en `Button` — no aplica hasta que exista un
  formulario real (LOOP 06 del paquete nuevo), porque hoy ningún botón
  ejecuta una acción asíncrona.
- `selected/expanded` en cards — no aplica hasta que Projects/Method
  tengan contenido real que justifique un panel contextual o expandir
  (hoy las cards no tienen suficiente contenido: sin descripción, sin
  tecnologías, sin categoría en 5/5 proyectos).
- Estado `active` en nav al hacer scroll (scroll-spy) — mejora real de
  UX, no depende de contenido pendiente, candidato limpio para LOOP 02.

## Datos que realmente existen
- Copy aprobado y fijo: slogan, eyebrow, CTAs del Hero, headline/sub del
  CTA section, título del Método (`JGC Product Method™`), 6 etapas del
  método (solo título, sin descripción), 4 títulos de servicios (sin
  descripción), 5 nombres de proyecto (sin categoría/descripción/tech/demo),
  3 miembros del equipo (nombre + rol).
- `SITE_URL` (`lib/site-config.ts`) — dominio real confirmado (D-026).
- Nav items y links legales (`lib/constants/nav.ts`).

## Datos que todavía no existen (no se inventan, per D-013 / regla 6 del MASTER_PROMPT)
- Canal de contacto real (email/WhatsApp/formulario) — bloquea 3 CTAs.
- Descripciones de las 6 etapas del método.
- Descripciones de los 4 servicios.
- Categoría, descripción, tecnologías, demoUrl de los 5 proyectos.
- Contenido legal real de Privacidad/Términos.
- Mockup visual final, logo/imagotipo, og:image.

## Dependencias actuales
- `next` 14.2.5, `react`/`react-dom` 18.3.1, `tailwindcss` 3.4.6, fuente
  `geist` (Vercel, recién corregido en este chat — ver D-028).
- Sin dependencias de datos/backend: no hay fetch, no hay API routes, no
  hay Supabase ni ningún cliente HTTP en el proyecto todavía. Todo el
  contenido es estático desde `lib/constants/*.ts`.
- CI: GitHub Actions (`install` + `lint` + `build`) en cada push a `main`.
  Deploy: Vercel, automático desde `main`.

## Clasificación por sección (para LOOPs 02-08 del paquete nuevo)

| Sección | Clasificación | Por qué |
|---|---|---|
| HeroVisual | **Estática intencional** | D-020: decorativa por diseño, no debe volverse interactiva. |
| Team | **Estática intencional** (por ahora) | 3 cards ya completas con todo su contenido — no hay "más" que revelar. |
| Header / MobileNav | **Interacción local** | Ya resuelto, bien implementado. Candidato a mejora: scroll-spy (LOOP 02). |
| Method / Projects / Services | **Estado de UI pendiente de contenido** | Ganarían con expand/modal/selected, pero implementarlo hoy con 0% de contenido real (sin descripción/categoría/tech) sería construir interacción sobre datos vacíos. Recomendado: esperar a que Jorge provea el contenido (ver TODO.md) antes de LOOP 04, o construir el patrón ahora con datos vacíos y poblarlo después — a decidir con Jorge. |
| CTA / formulario de contacto | **Backend requerido (condicional)** | Depende 100% de qué canal de contacto elija Jorge: `mailto:`/WhatsApp (cero backend) vs. formulario real (Server Action + envío de email, LOOP 06/07). |
| Nav scroll-spy | **Interacción local** | No depende de ningún contenido pendiente — implementable ya. |

## Decisiones pendientes — `DECISIÓN A VALIDAR POR JORGE`

1. **Canal de contacto**: ¿`mailto:`, WhatsApp (`https://wa.me/...`), o
   formulario real en la página? Esto define si LOOP 06/07 del paquete
   nuevo necesita backend o no. Bloquea 3 CTAs ahora mismo.
2. **Orden de trabajo sugerido**: dado que Method/Projects/Services no
   tienen contenido real, ¿arrancamos por LOOP 02 (estados) + el
   scroll-spy de nav, que no dependen de contenido, y dejamos
   componentes interactivos de cards (LOOP 04) para cuando haya copy
   real? Evita construir interacción sobre datos vacíos.
3. Confirmar si el canal de contacto también resuelve el TODO ya
   existente "Proveer contenido legal real" o si son cosas separadas.

## Aceptación (checklist LOOP 01)
- [x] La aplicación compila sin cambios funcionales involuntarios (`npm run build` limpio).
- [x] No se inventaron datos.
- [x] Mapa claro de qué debe ser dinámico y qué debe permanecer estático (tabla arriba).
- [x] No se cambió el stack.

## Siguiente LOOP sugerido
LOOP 02 (Sistema de estados e interacción) acotado a lo que **no** depende
de contenido pendiente: scroll-spy de nav + revisión de que todo elemento
que "parece accionable" (los 3 botones "Hablemos") deje de fingir que hace
algo — o se deshabilita visiblemente, o se resuelve el canal de contacto
(decisión 1) y se conecta de una vez.
