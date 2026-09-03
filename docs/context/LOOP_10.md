# JGC.LABS — LOOP 10
## Contacto (CTA Section)

**Estado:** ENTREGADO — pendiente de QA/build de Jorge
**Depende de:** LOOP 05 QA (READY FOR APPROVAL) y LOOP 09 (entregado)

---

### 1. Objetivo

Dar tratamiento visual final a la sección Contacto (CTA, sección 13 del
spec): mensaje y acción ya aprobados, con contraste fuerte respecto al
resto de la página, sin salirse del sistema dark. Fuente:
`MOCKUP_SPEC.md` sección 13.

### 2. Alcance implementado

- **Copy exacta, sin cambios:** "¿Tienes una idea?" / "Convirtámosla en
  un producto real." / "Hablemos de tu proyecto".
- **Contraste fuerte:** fondo con gradiente diagonal usando los 3
  acentos ya aprobados (`from-accent-j via-accent-c to-accent-g`) en vez
  de la superficie neutra de LOOP 01 — genera un quiebre visual claro
  respecto a las secciones circundantes (todas sobre `bg-background`/
  `bg-surface`).
- **"Remain within the dark visual system":** el texto usa blanco sobre
  el gradiente (necesario para legibilidad), pero el botón usa la nueva
  variante `inverted` de `Button.tsx` (`bg-background`, el token más
  oscuro del sistema) — no se introduce un tema claro, el contraste sale
  de combinar el gradiente vívido con el tono más oscuro existente.
- **Nueva variante `inverted` en `Button.tsx`**, aditiva y retrocompatible
  — no afecta los usos existentes de `primary`/`secondary`.
- **Motion:** reutilizado `.reveal-on-scroll` (LOOP 07), consistente con el resto.

### 3. Explícitamente NO implementado

- **`href`/acción real del botón:** no existe todavía un canal de
  contacto (email, WhatsApp, formulario) suministrado por Jorge. El
  botón permanece sin destino — no se inventa un email ni un link. En
  cuanto exista un canal real, se agrega sin tocar el resto de la
  sección.
- Formulario de contacto — el spec no lo pide para esta sección (es un
  CTA de sección, no un form); si Jorge quiere un formulario real, es
  una decisión de alcance nueva a discutir.

### 4. Validación realizada (sin acceso de red en este entorno)

- Sintaxis TS/TSX de todos los archivos.
- Resolución de imports `@/*`.
- Confirmado que los usos existentes de `Button` (`primary`/`secondary`
  en Hero/Header/MobileNav) no se vieron afectados por la nueva variante.
- Confirmado que `tailwind.config.ts` expone los tokens de acento usados en el gradiente.

**Acción requerida de Jorge:**
- `npm install && npm run build`.
- Confirmar visualmente que el gradiente cumple "strong contrast... within the dark system" (subjetivo, requiere ojo real).
- Proveer un canal de contacto real (email/WhatsApp/link) para poder wirear el botón.

### 5. Criterios de aceptación

- [x] Copy exacta, sin invención.
- [x] Contraste fuerte vs. secciones circundantes.
- [x] Sistema dark preservado (sin tema claro).
- [x] Botón sin destino inventado — pendiente de contenido real, no de implementación.
- [ ] Build validado por Jorge.

### 6. Nota pendiente de LOOP 05 QA (H2, ampliación)

El hallazgo H2 del QA de LOOP 05 (botones sin `href`/`onClick`) sigue
existiendo en `Header.tsx` y `MobileNav.tsx` — el CTA "Hablemos" de esos
dos componentes tampoco tiene destino. Misma causa raíz que el botón de
esta sección: falta un canal de contacto real. Recomendación: una vez
Jorge provea ese dato, wirear los tres de una vez (Header, MobileNav,
CTA) en un solo pase.

### 7. Siguiente loop

LOOP 11 — Footer (incluye resolver H3: `/privacidad` y `/terminos` 404).
