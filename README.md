# JGC.LABS — Implementación Geist Sans

Este paquete contiene los archivos necesarios para reemplazar la tipografía
actual de la landing por **Geist Sans**, según la jerarquía definida en el
`MOCKUP_SPEC`.

## Archivos incluidos

- `app/layout.tsx` — configura la fuente Geist con `next/font/google` y la
  expone como variable CSS (`--font-geist`).
- `app/globals.css` — define los pesos por tipo de elemento:
  - Headlines (h1, h2): 700
  - Subheadlines (h3): 600
  - Slogan del Hero: 700 + tracking -0.02em
  - Body: 400 / 500
  - Eyebrows / labels: 500 / 600
  - Botones: 500 / 600
- `tailwind.config.ts` — mapea `font-sans` a la variable `--font-geist`
  para que las utilidades de Tailwind (`font-sans`, `font-bold`, etc.)
  usen la fuente correcta.

## Cómo instalarlo

1. Copia estos archivos a tu proyecto, reemplazando los existentes
   (`app/layout.tsx`, `app/globals.css`, `tailwind.config.ts`).
   Si tu proyecto ya tiene contenido en `layout.tsx` (providers, metadata
   adicional, etc.), fusiona ese contenido con este archivo en vez de
   sobrescribirlo por completo.
2. Verifica que `globals.css` esté importado en `layout.tsx`
   (ya está incluido en el archivo de este paquete).
3. Aplica las clases utilitarias donde corresponda, por ejemplo:

```jsx
<h1 className="font-sans font-bold tracking-tight hero-slogan">
  Human vision. AI engineering. Real products.
</h1>
```

4. Corre `npm run dev` y verifica visualmente cada sección
   (Hero, Nosotros, Método, Proyectos, Servicios, Contacto).

## Nota

Este paquete asume Next.js 13+ con App Router y Tailwind CSS. Si tu
proyecto usa Pages Router o no usa Tailwind, avísame y te preparo la
versión equivalente.
