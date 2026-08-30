# JGC.LABS — LOOP 05
## Hero

**Estado:** ENTREGADO — pendiente de QA/build de Jorge
**Depende de:** LOOP 04 (DONE, pendiente validación de build)

---

### 1. Objetivo

Implementar el Hero final: composición de dos zonas en desktop, orden de
prioridad mobile exacto, headline con el slogan aprobado sin reescribir,
visual abstracto de marca, y motion de entrada dentro de los rangos del
spec. Fuente: `MOCKUP_SPEC.md` sección 8.

### 2. Alcance implementado

- **Composición desktop:** grid de 2 columnas — texto (eyebrow, headline,
  copy de soporte condicional, CTAs) a la izquierda; visual abstracto a
  la derecha.
- **Orden mobile:** columna única; el orden en el DOM ya respeta la
  prioridad exacta del spec (marca → headline → mensaje de soporte → CTA
  → visual), sin necesidad de `order-*` de Tailwind.
- **Headline:** slogan exacto (`SLOGAN_LINES`), sin reescribir, usando el
  token `text-hero` de LOOP 02.
- **Eyebrow:** "JGC.LABS — AI-native product lab" — tomado literalmente
  del campo WHAT de la sección 8 del spec (no es copy inventada).
- **CTAs:** exactamente 2 (regla explícita del spec: "no more than two
  primary hero actions") — primario "Hablemos de tu proyecto", secundario
  con el default ya decidido en D-012.
- **Visual abstracto** (`components/sections/HeroVisual.tsx`): composición
  SVG decorativa con blobs difuminados en los 3 colores de acento ya
  aprobados (J/G/C). No es un logo ni un asset de marca real — eso sigue
  PENDIENTE. Marcado `aria-hidden`.
- **Copy de soporte:** se agregó la constante `HERO_SUPPORTING_COPY` en
  `lib/constants/copy.ts`, vacía y marcada PENDIENTE; el Hero omite el
  párrafo mientras esté vacía (evita un hueco visual en blanco).
- **Motion:** entrada `fade + translateY` (`animate-fade-up`), timing
  `--duration-content` (450ms, dentro del rango 350–600ms de la sección
  16), con micro-stagger de 0/60/120/180ms entre elementos — no retrasa
  el contenido de forma perceptible. Respeta `prefers-reduced-motion`
  (regla global de LOOP 01).

### 3. Explícitamente NO implementado

- Copy de soporte real — sigue PENDIENTE (sin inventar).
- Asset de marca/logo real — el visual sigue siendo abstracto/decorativo.
- Confirmación final de D-012 (CTA secundario) — se mantiene el default.

### 4. Validación realizada (sin acceso de red en este entorno)

- Sintaxis TS/TSX de todos los archivos.
- Resolución de imports `@/*`.
- Confirmado exactamente 2 `<Button>` en el Hero (regla del spec).
- `tailwind.config.ts` sigue parseando correctamente con todos los tokens acumulados.

**Acción requerida de Jorge:**
- `npm install && npm run build` localmente.
- Verificar visualmente el orden mobile (320–430px) y la composición desktop (1024px+).
- Confirmar si el visual abstracto es aceptable como placeholder o si prefiere ocultarlo hasta tener el asset real.
- Confirmar D-012.

### 5. Criterios de aceptación

- [x] Slogan exacto, sin reescribir.
- [x] Máximo 2 CTAs primarios.
- [x] Orden de prioridad mobile respetado.
- [x] Visual decorativo sin inventar assets de marca.
- [x] Motion dentro de los rangos del spec, sin bloquear contenido.
- [ ] Validación visual y de build por Jorge.

### 6. Siguiente loop

LOOP 06 — Equipo.
