# JGC.LABS — LOOP 04
## Header

**Estado:** ENTREGADO — pendiente de QA/build de Jorge
**Depende de:** LOOP 03 (DONE, pendiente validación de build)

---

### 1. Objetivo

Implementar el Header final: desktop lightweight con nav + CTA, y
navegación mobile funcional y accesible en panel de ancho completo.
Fuente: `MOCKUP_SPEC.md` sección 7, tokens de `DESIGN_SYSTEM.md` (LOOP 02).

### 2. Alcance implementado

- **Desktop:** logo izquierda, nav centro/derecha (Inicio, Nosotros,
  Método, Proyectos, Servicios, Contacto), CTA "Hablemos" a la derecha.
  Header liviano, altura fija de 64px, sin barra sobredimensionada.
- **Sticky + glass sutil:** `sticky top-0` con `bg-background/80` +
  `backdrop-blur-sm` — decisión de diseño amparada por el spec
  ("Header may become sticky if it improves navigation"), sin
  comprometer legibilidad (sección 6).
- **Mobile:** logo izquierda, trigger de menú derecha (44×44px mínimo,
  `MenuIcon` hamburguesa/cierre). Al activarse, abre `MobileNav`: panel
  de ancho completo con los 6 links + CTA, cada item con `min-h-[44px]`.
- **Accesibilidad del panel mobile** (`components/layout/MobileNav.tsx`):
  - `role="dialog"` + `aria-modal="true"` + `aria-label`.
  - Foco inicial en el primer link al abrir.
  - `Escape` cierra el panel y devuelve el foco al botón trigger.
  - Focus trap simple (Tab/Shift+Tab no escapan del panel mientras está abierto).
  - `aria-expanded` / `aria-controls` en el botón trigger.
  - Bloqueo de scroll del body mientras el panel está abierto.
- **Motion:** transición de hover en links (`duration-fast`/`ease-smooth`,
  tokens de LOOP 02); entrada del panel con keyframe `panel-in` usando
  `--duration-content`/`--ease-smooth`; ya cubierto por la regla global
  de `prefers-reduced-motion` de LOOP 01.

### 3. Componentes nuevos

- `components/layout/MobileNav.tsx`
- `components/ui/MenuIcon.tsx`

### 4. Explícitamente NO implementado

- Logo real (sigue siendo texto "JGC.LABS" — falta asset de marca).
- Cambios de comportamiento del header al hacer scroll (ocultar/mostrar) — no lo pide el spec, no se inventa.
- Hero — LOOP 05.

### 5. Validación realizada (sin acceso de red en este entorno)

- Sintaxis TS/TSX de todos los archivos (parse-only).
- Resolución de imports `@/*`.
- Confirmado `"use client"` en `Header.tsx` y `MobileNav.tsx` (ambos usan hooks de React).
- Revisión manual del flujo de foco: trigger → primer link → Tab trap → Escape → retorno de foco.

**Acción requerida de Jorge:**
- `npm install && npm run build` localmente.
- Probar el menú mobile con teclado (Tab, Shift+Tab, Escape) y con lector de pantalla si es posible.
- Confirmar visualmente el header sticky + glass en scroll real.

### 6. Criterios de aceptación

- [x] Header desktop según spec (logo, nav, CTA, liviano).
- [x] Menú mobile funcional y accesible (44px, foco, Escape, trap).
- [x] Motion usando tokens de LOOP 02, sin animación agresiva.
- [x] Sin cambios de stack ni alcance fuera de Header.
- [ ] Build y prueba manual de accesibilidad validados por Jorge.

### 7. Siguiente loop

LOOP 05 — Hero (implementación visual final + resolución de D-012).
