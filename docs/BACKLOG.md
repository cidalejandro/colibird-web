# Backlog — Colibird web

## SEO / Google Search Console — seguimiento

> Sitio: [colibird.com.ar](https://colibird.com.ar) · Propiedad GSC: `sc-domain:colibird.com.ar`  
> Última actualización: 17 jun 2026

### Hecho (deployado)

- [x] `robots.txt`, `sitemap.xml` (14 URLs), canonical por página
- [x] Redirects 308 rutas legacy Vite → Next.js (`/radian`, `/scf`, `/echeq`, etc.)
- [x] Redirect `www` → `colibird.com.ar`
- [x] `llms.txt` dinámico
- [x] OG image 1200×630 + Twitter Card
- [x] JSON-LD (`Organization`, `WebSite`, `WebPage`/`Product` por producto)
- [x] Validación GSC iniciada: 404 (8), soft 404 `/colombia`, duplicada `www`

### Pendiente — indexación manual (GSC → Inspección de URLs)

Límite ~10 solicitudes/día. Reintentar o completar:

- [ ] `/productos/scf` — falló con error transitorio de GSC (reintentar)
- [ ] `/productos/opp-card`
- [ ] `/productos/gateway-b2b`
- [ ] `/productos/e-invoicing`
- [ ] `/productos/decisionhub`
- [ ] `/productos/trustpath`
- [ ] `/productos/api-layer`

Ya solicitadas / en proceso (17 jun 2026):

- [x] `/productos/confirming`
- [x] `/productos/echeqs`
- [x] `/productos/click-to-pay`
- [x] `/productos/radian`
- [x] `/productos/tax-engine`
- [x] `/productos/lmcp` — ya indexada en GSC

### Pendiente — monitoreo (esperar re-rastreo de Google)

| Plazo | Qué revisar en GSC |
|-------|-------------------|
| 24–48 h | Estado de solicitudes de indexación anteriores |
| 3–7 días | Que bajen contadores: 404, soft 404, duplicada `www` |
| 1–2 semanas | Páginas indexadas (objetivo: 14 del sitemap) |
| 2–4 semanas | Informe **Rendimiento** (clics / impresiones) |

### Ignorar (normal)

- Redirects HTTP → HTTPS (`http://colibird.com.ar`, `http://www…`)
- `favicon.ico` — rastreada, sin indexar (esperado)

### Referencia rápida

- Sitemap: https://colibird.com.ar/sitemap.xml  
- LLMs: https://colibird.com.ar/llms.txt  
- OG preview: https://colibird.com.ar/opengraph-image
