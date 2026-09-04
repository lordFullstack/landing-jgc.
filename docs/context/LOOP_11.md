# JGC.LABS — LOOP 11
## Footer

**Estado:** ENTREGADO — pendiente de QA/build de Jorge
**Depende de:** LOOP 10 (entregado); resuelve H3 del QA de LOOP 05

---

### 1. Objetivo

Dar tratamiento visual final al Footer y resolver H3 (links legales
rotos, 404 confirmado en el QA de LOOP 05). Fuente: `MOCKUP_SPEC.md`
sección 14.

### 2. Alcance implementado

- **Resuelto H3:** creadas `app/privacidad/page.tsx` y
  `app/terminos/page.tsx`, ambas usando un componente compartido
  (`components/layout/LegalPagePlaceholder.tsx`). **No se inventó texto
  legal** — cada página dice explícitamente "Estamos preparando este
  documento. Todavía no está disponible — volvé pronto." Esto evita el
  404 sin fingir tener una Política de Privacidad o Términos reales
  (que sería peor que un 404: texto legal fabricado tiene consecuencias
  reales si alguien lo toma como válido).
- **Footer sin volverse denso:** se mantiene el layout de 3 bloques de
  LOOP 01 (marca+slogan, links de navegación, legal) — sin agregar
  columnas, íconos sociales ni copyright line (el spec no los pide, no
  se inventan).
- **Hover states:** agregados a los links de navegación y legales,
  consistentes con el tratamiento que el Header ya tenía desde LOOP 04
  (mismos tokens `duration-fast`/`ease-smooth`).
- **Sitemap actualizado:** `/privacidad` y `/terminos` agregadas a
  `app/sitemap.ts` con prioridad baja (0.3) y `changeFrequency: yearly`
  (páginas placeholder, no contenido principal).

### 3. Explícitamente NO implementado

- Contenido legal real — sigue sin existir, esa es la causa de fondo de H3; esta página placeholder es un parche honesto, no la solución final.
- Copyright line, íconos sociales, columnas adicionales — no solicitados.

### 4. Validación realizada (sin acceso de red en este entorno)

- Sintaxis TS/TSX de todos los archivos (incluidas las 2 rutas nuevas).
- Resolución de imports `@/*`.
- Confirmada la estructura de archivos `app/privacidad/page.tsx` y `app/terminos/page.tsx`.

**Acción requerida de Jorge:**
- `npm install && npm run build`.
- Confirmar en producción que `/privacidad` y `/terminos` ya no dan 404.
- Proveer el contenido legal real cuando esté listo, para reemplazar el placeholder.

### 5. Criterios de aceptación

- [x] H3 resuelto (sin 404, sin inventar texto legal).
- [x] Footer no denso, sin contenido no solicitado.
- [x] Hover states consistentes con el resto del sitio.
- [x] Sitemap actualizado.
- [ ] Build validado por Jorge.

### 6. Siguiente loop

LOOP 12 — Responsive (per roadmap de LOOP_00.md) — auditoría dedicada de
los 8 breakpoints, en parte ya cubre lo que quedó pendiente como QA
manual en LOOP 05 (sección 3 del reporte de QA).
