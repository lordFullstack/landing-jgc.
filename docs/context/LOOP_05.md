# JGC.LABS — LOOP 05
## Hero — FINAL QA

**Estado:** READY FOR APPROVAL
**QA ejecutado sobre:** https://landing-jgc.vercel.app/ (producción real, 2026-08-30)
**Depende de:** LOOP 04 (DONE)

---

### 0. Método de QA y limitación honesta de entorno

Este QA se hizo combinando dos fuentes:
1. **Verificación real contra producción** vía fetch HTTP del HTML/metadata servido, incluyendo intentos de acceso a rutas de Footer.
2. **Revisión de código fuente** del repo para confirmar la lógica que produce ese HTML.

**Limitación de entorno, declarada explícitamente:** el entorno de Claude
no tiene navegador con renderizado visual, DevTools ni consola. Los
ítems que requieren eso están marcados como **"requiere QA manual de
Jorge"** — no se inventaron resultados para ellos. Todo lo demás es
verificación real, no simulada.

---

### 1. Resultado por ítem del checklist

| # | Ítem | Resultado | Método |
|---|------|-----------|--------|
| 1 | Hero desktop | Código conforme al spec (grid 2 zonas) | Código + requiere confirmación visual manual |
| 2 | Hero mobile | Código conforme (orden DOM = prioridad del spec) | Código + requiere confirmación visual manual |
| 3 | Responsive 320-1440 | No verificable sin navegador/DevTools | **Requiere QA manual de Jorge** |
| 4 | Slogan exacto con espacios | **ISSUE encontrado y corregido** (H1) | Fetch real + fix aplicado |
| 5 | Máximo 2 CTAs en Hero | PASS — confirmado por fetch real | Fetch real |
| 6 | Eyebrow | PASS — presente | Fetch real |
| 7 | HeroVisual | Presente en código, aria-hidden (no aparece en texto, es lo esperado) | Código + requiere confirmación visual manual |
| 8 | Motion / micro-stagger | Implementado en CSS | Código; comportamiento real requiere QA manual |
| 9 | prefers-reduced-motion | Implementado globalmente desde LOOP 01 | Código; toggle real requiere QA manual |
| 10 | Navegación | **ISSUE encontrado y corregido** (H2) | Código + fix aplicado |
| 11 | Accesibilidad | Skip link, landmarks, aria-* de LOOP 03/04 vigentes; suma fix H1 | Código |
| 12 | Focus states | Implementados en Button.tsx desde LOOP 02 | Código; confirmación con teclado requiere QA manual |
| 13 | Touch targets | min-h-[44px], cumple mínimo del spec | Código |
| 14 | Overflow horizontal | Sin señales de riesgo en el código | Código; confirmación visual requiere QA manual |
| 15 | Console errors | No verificable sin navegador | **Requiere QA manual de Jorge** |
| 16 | Build production | **PASS** — sitio desplegado, responde 200 | Fetch real |
| 17 | Links | **ISSUE encontrado, reportado, NO corregido** (H3 — fuera de alcance) | Fetch real (404 confirmado) |
| 18 | Metadata básica | PASS — title/description/og/twitter/viewport/theme-color presentes | Fetch real |
| 19 | Coherencia con MOCKUP_SPEC.md | PASS | Código + spec |

---

### 2. Hallazgos

#### H1 — Slogan sin espacio de texto real entre frases (MEDIUM)
El H1 renderizaba 3 `<span className="block">` sin carácter de espacio
real entre ellos. Fetch real confirmó texto extraído como "Human
vision.AI engineering.Real products." (sin espacios). **Fix aplicado:**
`aria-label="Human vision. AI engineering. Real products."` (exacto) en
el `<h1>`, spans visuales marcados `aria-hidden="true"`. Layout visual
sin cambios.

#### H2 — Los 2 CTAs del Hero no hacían nada al hacer click (HIGH)
Ningún `href`/`onClick`. **Fix aplicado:** `Button.tsx` acepta `href`
opcional (retrocompatible — confirmado que CTA.tsx/Header.tsx/
MobileNav.tsx siguen igual). Hero primario → `#contacto`, secundario →
`#metodo` (ambas anclas ya existen). **Nota:** el mismo patrón existe en
CTA.tsx/Header.tsx/MobileNav.tsx — no tocado, fuera de alcance de Hero.

#### H3 — Links del Footer rotos, 404 confirmado (HIGH, fuera de alcance)
`/privacidad` y `/terminos` no existen como páginas. No corregido en
este QA (es Footer, LOOP 11, no Hero). Reportado para priorización de
Jorge.

#### H4 — Informativo, no requiere acción
`og:url` aún no aparece en producción porque D-026 no fue pusheado
todavía (ya entregado en ZIP anterior).

---

### 3. Requiere QA manual de Jorge (no verificable desde este entorno)
- Responsive real en los 8 breakpoints pedidos.
- Errores de consola del navegador.
- Comportamiento visual real de motion / prefers-reduced-motion.
- Confirmación visual de foco por teclado.
- Confirmación visual de ausencia de overflow horizontal.
- Confirmación visual del HeroVisual renderizando correctamente.

### 4. Criterios de aceptación
- [x] Slogan exacto y accesible (H1 corregido).
- [x] Máximo 2 CTAs, ahora funcionales (H2 corregido).
- [x] Build en producción confirmado.
- [x] Ningún cambio de diseño no solicitado; HeroVisual.tsx sin tocar.
- [ ] Ítems de QA manual (sección 3) — pendientes de Jorge.
- [~] H3 — reportado, no corregido, fuera de alcance.

### 5. Declaración
**LOOP 05 — READY FOR APPROVAL**, condicionado a que Jorge confirme los
ítems de QA manual y decida cuándo abordar H3.

### 6. Siguiente
LOOP 06 a 09 ya fueron entregados en loops posteriores a este QA. El
siguiente pendiente real es LOOP 10 — Contacto.
