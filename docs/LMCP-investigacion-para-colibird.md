# LMCP (Local MCP) — Investigación completa para advertising en Colibird

> **Fecha de investigación:** 17 de junio de 2026  
> **Fuentes:** [local-mcp.com](https://local-mcp.com), npm, GitHub (API, sin clonar repos), guías públicas, `llms.txt` oficial  
> **Objetivo:** Base de conocimiento para promocionar LMCP desde el sitio Colibird ([colibird.com.ar](https://colibird.com.ar))

---

## 1. Resumen ejecutivo

**LMCP** (Local MCP, producto en [local-mcp.com](https://local-mcp.com)) es un servidor MCP nativo para macOS desarrollado por **Colibird**. Conecta asistentes de IA (Claude, ChatGPT, Cursor, VS Code, etc.) con las apps ya instaladas en la Mac del usuario — Mail, Calendar, Teams, Slack, WhatsApp, OneDrive, Office, Notion, iMessage y más — **sin enviar datos personales a la nube** y **sin API keys** para la mayoría de integraciones.

| Dato clave | Valor (jun 2026) |
|------------|------------------|
| **Sitio** | https://local-mcp.com |
| **npm** | `local-mcp` v3.0.293 |
| **Herramientas** | 161 en macOS (sitio/npm); 146 en README releases; plugins mencionan 189 (macOS + Windows en roadmap) |
| **Descargas npm** | ~5.6K–16K+ semanales (npm vs. marketing site) |
| **Precio** | Gratis, licencia permanente, sin tarjeta |
| **Plataforma** | macOS 13+ (Ventura); Windows/Linux en waitlist |
| **Empresa** | Colibird — contacto producto: ctpo@colibird.co |

**Relación con Colibird:** LMCP es un producto de Colibird orientado al mercado global (inglés, macOS, AI tooling). Colibird.com.ar es la plataforma de infraestructura financiera LATAM (eCheq, RADIAN, SCF, etc.). LMCP puede posicionarse como **producto de innovación / AI infrastructure** de Colibird, mostrando capacidad técnica y visión de privacidad.

---

## 2. Qué es LMCP (y qué NO es)

### Definición oficial

LMCP es el **producto específico** en local-mcp.com (paquete npm `local-mcp`). **No** es:
- El concepto genérico de "servidor MCP local"
- Los ejemplos de tutoriales en modelcontextprotocol.io
- Un conector cloud multi-tenant que almacena emails/archivos

### Propuesta de valor en una frase

> *"Tu IA lee tu email, agenda reuniones y trabaja en tu Mac — todo local, sin tokens ni API keys."*

### Diferenciador técnico central

A diferencia de conectores cloud (Microsoft Graph, Composio, etc.) que autentican contra APIs del vendor, LMCP lee **directamente** desde el dispositivo:

| Fuente de datos | Mecanismo LMCP |
|-----------------|----------------|
| Email | AppleScript/JXA → Mail.app (cualquier IMAP: Gmail, Outlook, Exchange, iCloud) |
| Calendario | EventKit (iCloud, Google, Exchange) |
| Contactos | CNContactStore |
| Teams | Caché local LevelDB del cliente Teams (sin Graph API) |
| Slack | Caché IndexedDB de Slack Desktop |
| iMessage | Base de datos local de Messages.app |
| OneDrive / Google Drive | Carpetas sincronizadas en disco |
| Notion | Caché local de Notion Desktop |
| Zoom | Grabaciones en `~/Documents/Zoom` |

**Resultado:** sin OAuth para datos personales, sin rate limits de API, funciona offline (una vez instalado), latencia sub-segundo, datos que no salen de la Mac.

---

## 3. Presencia web y URLs clave

| Recurso | URL |
|---------|-----|
| Homepage | https://local-mcp.com |
| Homepage EN | https://www.local-mcp.com/en |
| Descarga Mac (DMG) | https://local-mcp.com/get |
| Instalador CLI | `curl -fsSL 'https://local-mcp.com/install?ref=colibird' \| bash` |
| Cloud connector (relay) | https://www.local-mcp.com/mcp |
| Guías | https://www.local-mcp.com/guides |
| Privacidad | https://www.local-mcp.com/en/privacy |
| Documentación para LLMs | https://www.local-mcp.com/llms.txt |
| npm | https://www.npmjs.com/package/local-mcp |
| GitHub (releases/issues públicos) | https://github.com/lanchuske/local-mcp-releases |
| Smithery | https://smithery.ai/server/@lanchuske/local-mcp |
| Soporte | ctpo@colibird.co |
| Privacidad / derechos | privacy@local-mcp.com |

### Hosting e infraestructura (público)

- **Sitio y distribución:** Cloudflare (CDN, DNS, R2 para binarios, analytics sin cookies)
- **Backend API:** Railway (regiones EU/US) — `office-mcp-production.up.railway.app` (telemetría, licencias, cloud relay; **no** almacena contenido de herramientas)
- **App Mac:** firmada y notarizada; actualizaciones vía Sparkle
- **Despliegue sitio Colibird:** Railway + Next.js en colibird.com.ar

---

## 4. Arquitectura del producto

```
┌─────────────────────────────────────────┐
│  Clientes IA                            │
│  Claude Desktop · Cursor · VS Code ·    │
│  ChatGPT web · Claude.ai · Grok · etc.  │
└──────────────┬──────────────────────────┘
               │ MCP (stdio local)  o  HTTPS + WebSocket (Cloud Relay, opt-in)
┌──────────────▼──────────────────────────┐
│  LMCP Server (Mac)                      │
│  · App menú bar (tray)                  │
│  · npx local-mcp → stdio MCP            │
│  · JXA · EventKit · AppleScript         │
│  · Lectura cachés locales (Teams, etc.) │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│  Apps nativas del usuario               │
│  Mail · Calendar · Teams · OneDrive · … │
└─────────────────────────────────────────┘
```

### Dos modos de conexión

1. **Local (stdio)** — Claude Desktop, Claude Code, Cursor (Agent mode), Windsurf, VS Code, Zed, Hermes Agent local. Auto-configurado por el instalador. Datos 100% en la Mac.

2. **Cloud Relay (opcional, off por defecto)** — Para ChatGPT web/mobile, Claude.ai, Grok, Perplexity, OpenClaw. Túnel WebSocket cifrado a la Mac del usuario. El backend **no persiste** respuestas de herramientas. Requiere toggle "Cloud Data Forwarding" en menú bar + token por máquina.

### Instalación

```bash
# Recomendado — configura clientes detectados + app menú bar
curl -fsSL 'https://local-mcp.com/install?ref=colibird' | bash

# Alternativa npm
npx -y local-mcp@latest setup

# Config manual MCP
# ~/.cursor/mcp.json, ~/Library/Application Support/Claude/claude_desktop_config.json, etc.
```

**Cursor:** las herramientas solo aparecen en **modo Agent** (⌘I → Agent), no en Chat/Edit. Tras instalar, activar `local-mcp` en Settings → MCP Servers.

---

## 5. Catálogo de integraciones (161 herramientas macOS)

### Apps y categorías

| Categoría | Apps / servicios | Tools (aprox.) | Lectura | Escritura / acción |
|-----------|------------------|----------------|---------------------|-------------------|
| Email | Mail.app (Gmail, Outlook, iCloud, Exchange) | 10 | ✓ | Enviar, responder, mover, carpetas |
| Calendario | Calendar.app (EventKit) | 5 | ✓ | Crear, editar, borrar eventos |
| Contactos | Contacts.app | 3 | ✓ | — |
| iMessage | Messages.app | 3 | ✓ | — |
| Microsoft Teams | Cliente desktop (caché local) | 7 | ✓ | Enviar (preview + confirm) |
| Slack | Slack Desktop (caché local) | 4 | ✓ | — |
| WhatsApp | Wacli (no oficial, QR) | 5 | ✓ | Enviar texto/archivos |
| Signal | Signal Desktop (SQLite local) | 3 | ✓ | — |
| OneDrive | Carpeta sincronizada | 9 | ✓ | Leer, escribir, mover, borrar, scope |
| Google Drive | Drive for Desktop | 6 | ✓ | Leer, escribir, buscar |
| Zoom | Grabaciones locales | 2 | ✓ | — |
| Notion | Caché app desktop | 7 | ✓ | Solo lectura |
| Office | Word, Excel, PowerPoint, PDF | 9+ | ✓ | Crear, editar celdas, append |
| Reminders + To Do | Reminders.app / M365 sync | 10 | ✓ | Crear, completar, borrar |
| OmniFocus | OmniFocus.app | 7 | ✓ | Crear, completar tareas |
| Notes | Apple Notes | 5 | ✓ | Crear, actualizar |
| Finder / FS | Spotlight + filesystem | 5 | ✓ | — |
| Safari | Tabs abiertos + automatización | 13 | ✓ | Click, type, fill forms, JS |
| Stocks | Yahoo Finance (datos públicos) | 3 | ✓ | — |
| Microsoft 365 | Graph vía device code | 16 | ✓ | Email, calendario, directorio |
| ServiceNow | Basic auth local | 9 | ✓ | Incidentes, KB |
| NordVPN | App NordVPN | 3 | ✓ | — |
| Image Playground | Apple Intelligence (macOS 15.4+) | 1 | — | Generar imágenes on-device |
| Sistema / diagnóstico | — | 13 | ✓ | `daily_brief`, `run_diagnostics`, `report_problem`, etc. |
| Referidos | — | 2 | — | Invitar colegas |

### Herramientas destacadas para demos

| Tool | Uso demo |
|------|----------|
| `daily_brief` | Briefing matutino: calendario + reminders + emails no leídos en una llamada |
| `list_emails` / `search_emails` | "¿Hay emails urgentes hoy?" |
| `teams_read_channel_messages` | "¿Qué dijo el canal de engineering?" sin Graph API |
| `lmcp_state` | Health check del producto en <500ms |
| `run_diagnostics` | Ver permisos TCC y servicios |

### Acciones destructivas

Todas las acciones de envío/borrado (`send_email`, `teams_send_message`, etc.) devuelven **preview** primero; requieren `confirm=true` tras aprobación del usuario.

---

## 6. Casos de uso y automatizaciones (copy para marketing)

### Workflows reales (del sitio)

1. **Pedidos WhatsApp → Excel** — Leer chats, extraer pedidos, escribir filas en spreadsheet.
2. **Emails de clientes → CRM + reminder** — Mail → Excel/CRM → Reminders.
3. **Facturas por email → OneDrive** — Buscar adjuntos, guardar en carpeta Finance, marcar email.
4. **Briefing pre-reunión** — Buscar en Mail + Teams + OneDrive sobre "Acme Corp" en <10s.
5. **Standup automático** — Diario 9am: leer calendario, emails y Teams, postear en canal.
6. **Reporte semanal** — Viernes 4pm: agregar semana desde email/Teams/reuniones.

### Audiencias objetivo

| Segmento | Pain point | Mensaje LMCP |
|----------|------------|--------------|
| Ejecutivos / advisors | Demasiadas apps, poco tiempo | "Tu IA gestiona Mail, Calendar y Teams desde un solo chat" |
| Desarrolladores (Cursor) | Context switching IDE ↔ apps | "Lee email y Teams sin salir del editor" |
| Legal / salud / finanzas | GDPR, datos sensibles | "GDPR por arquitectura, no por política" |
| IT consultants | OAuth/Graph es un infierno | "Teams sin tokens, sin admin consent" |
| Usuarios ChatGPT mobile | No pueden acceder a localhost | "Cloud Relay: ChatGPT en el teléfono lee tu Mac" |

### Testimonios (sitio web)

- **Steve H., Strategic Advisor:** *"This is AMAZING! My daily work can all be managed from my key apps now."* (OmniFocus + Mail + Calendar)
- **Lisa S., Software Engineer:** Valora el "no-tokens" para Teams/OneDrive.
- **Marco R., IT Consultant:** GDPR por arquitectura para emails de clientes.

---

## 7. Comparativa vs alternativas

Tabla del sitio (LMCP vs M365 Connector, Composio Outlook, MS-365 MCP):

| Feature | LMCP | Conectores cloud típicos |
|---------|------|--------------------------|
| Local-first | ✓ | ✗ |
| Offline | ✓ | ✗ |
| Sin API keys | ✓ | ✗ |
| Datos no salen del dispositivo | ✓ | ✗ |
| Sin cuenta Microsoft para datos locales | ✓ | ✗ |
| Mail, Calendar, Contacts, Teams, OneDrive | ✓ | Parcial |
| Apps macOS (Notes, Messages, Safari) | ✓ | ✗ |
| Excel/Word local | ✓ | Limitado |
| Uso desde teléfono (relay) | ✓ | ✗ |
| Latencia sub-100ms | ✓ | ✗ |

**vs servidores MCP open-source de una sola app:** LMCP = breadth (161 tools), un instalador, un canal de updates, integraciones que no existen en OSS (iMessage, Teams cache, WhatsApp, relay web).

---

## 8. Privacidad, compliance y confianza

### Principios

- Procesamiento de datos personales **exclusivamente en el dispositivo**
- Cloud Relay: **opt-in**, off por defecto, E2E WebSocket, sin persistir respuestas
- Apto para healthcare, legal, finance (claim del producto)

### Qué NO se recolecta (contenido)

Email, calendario, contactos, Teams, archivos, notas, iMessages — **nunca** transmitidos a servidores LMCP.

### Qué SÍ se recolecta (metadatos)

| Tipo | Frecuencia / uso |
|------|------------------|
| Heartbeats anónimos | Cada 6h — versión, macOS, arch, uptime, machine ID hasheado |
| Eventos de instalación | Versión npm, OS, clientes configurados, geo aproximada por IP (IP no guardada) |
| Licencia | Email + license key (validación outbound) |
| Feedback / bugs | Si el usuario reporta vía `report_problem` |
| Analytics web | Cloudflare, sin cookies |

### Retención

- Heartbeats: 90 días
- Instalaciones: 12 meses, luego anonimizado
- Cuentas: duración + 1 año
- Feedback: hasta resolución o borrado a pedido

### Contactos legales

- privacy@local-mcp.com
- Controlador de datos: Colibird

---

## 9. Modelo de negocio y métricas

### Pricing (jun 2026)

- **Gratis** — sin tarjeta, licencia permanente, "no paid tier yet" (README releases)
- Sitio menciona programa early access: "505+ professionals joined, 495 free spots left" (urgencia/scarcity marketing)
- Newsletter en local-mcp.com/#newsletter

### Tracción pública

| Métrica | Fuente |
|---------|--------|
| npm weekly downloads | ~5.6K (npm) / "16K+" (marketing site) |
| Versiones npm publicadas | 418+ (desde mar 2026) |
| GitHub stars (releases) | 16 |
| Forks | 5 |
| Issues abiertos | 3 |
| Contribuidores releases | lanchuske (618), cidalejandro (2) |
| Versión actual | v3.0.293 (17 jun 2026) |
| Cadencia releases | Múltiples por día en períodos activos |

### Distribución

- npm (`npx local-mcp`)
- DMG desde web
- Smithery registry
- Plugins: Claude Code (`/mcp add local-mcp`), Cursor (`/add-plugin lanchuske/local-mcp-cursor-plugin`)
- 100+ guías SEO en /guides (inglés + localizaciones es, pt, fr, de, it, nl, zh, ja, ko, ru, tr)

---

## 10. Ecosistema GitHub (repos de lanchuske)

### Repos directamente relacionados con LMCP

| Repo | Visibilidad | Descripción | URL | Notas |
|------|-------------|-------------|-----|-------|
| **local-mcp** | 🔒 Privado | Código fuente principal del servidor MCP | https://github.com/lanchuske/local-mcp | Homepage: local-mcp.com. Último push: 17 jun 2026 |
| **local-mcp-releases** | 🌐 Público | Releases, README marketing, issues comunidad | https://github.com/lanchuske/local-mcp-releases | 16⭐, topics: mcp, macos, privacy, gdpr, teams, etc. |
| **local-mcp-claude-plugin** | 🌐 Público | Plugin Claude Code — 189 tools (macOS+Win roadmap) | https://github.com/lanchuske/local-mcp-claude-plugin | Install: `/mcp add local-mcp` |
| **local-mcp-cursor-plugin** | 🌐 Público | Plugin Cursor | https://github.com/lanchuske/local-mcp-cursor-plugin | Install: `/add-plugin lanchuske/local-mcp-cursor-plugin` |
| **lmcp-vault** | 🔒 Privado | Sin descripción pública | https://github.com/lanchuske/lmcp-vault | Posible vault de secretos/docs internos |

### Repos MCP curados (SEO / discovery, no código LMCP)

| Repo | Descripción |
|------|-------------|
| awesome-mcp-servers | Lista curada MCP → mcpservers.org |
| awesome-mcp-servers-2 | Colección → tensorblock.co |
| awesome-mcp-punkpeye | Colección → glama.ai/mcp/servers |
| awesome-mcp-servers-appcypher | Fork/curación |

### Referencias cruzadas

- Plugin Cursor README apunta "Main repo" a `github.com/lanchuske/office-mcp` (posible nombre legacy; el repo activo privado es `local-mcp`)
- npm `repository` apunta a `github.com/lanchuske/local-mcp`

### Issues públicos abiertos (local-mcp-releases)

| # | Título | Tipo |
|---|--------|------|
| 30 | How can I rotate or revoke a cloud_token? | Pregunta |
| 4 | Cannot connect to Evernote | Bug |
| 3 | Incessant Permission Requests Raised in macOS | Bug |

**Nota producto:** Evernote en reconstrucción (npm README: "Coming soon").

---

## 11. Roadmap y señales futuras

### En exploración / planned (sitio web)

- **Teams Write** — Planned
- **Photos** — Exploring
- **Spotify** — Exploring (`roadmap.spotify`)
- **Windows & Linux** — Waitlist vía `setup_install(os=...)`
- Formulario "Request an integration" en sitio

### Discrepancia de conteo de tools

| Fuente | Número | Contexto |
|--------|--------|----------|
| Sitio / npm / llms.txt | 161 | macOS producción actual |
| local-mcp-releases README | 146 | README puede estar desactualizado |
| Plugins Claude/Cursor | 189 | 107 macOS + 82 Windows (roadmap multi-plataforma) |

Usar **161** como número oficial para macOS en marketing Colibird.

---

## 12. Guías y contenido SEO (activos reutilizables)

LMCP tiene **100+ guías** en https://www.local-mcp.com/guides — contenido listo para linkear desde Colibird.

### Guías estratégicas (top para CTAs)

| Guía | URL |
|------|-----|
| Getting Started (5 min) | /guides/getting-started |
| Best MCP Server for Mac 2026 | /guides/best-mcp-server-mac |
| ChatGPT + Mac | /guides/chatgpt-mac |
| Claude.ai Web + Mac | /guides/claudeai-web-mac |
| Cursor MCP Setup | /guides/cursor-mcp-setup |
| GDPR compliant AI | /guides/gdpr-compliant-ai-mac |
| Teams sin Graph API | /guides/claude-teams-no-api |
| Email privacy no cloud | /guides/ai-email-privacy-no-cloud |
| iMessage local | /guides/claude-imessage-mac |
| OmniFocus GTD | /guides/claude-omnifocus-mac |

### Idiomas de guías

Localizadas: **es, pt, fr, de, it, nl, zh, ja, ko, ru, tr** — oportunidad para versión español en Colibird LATAM.

---

## 13. Mensajes clave para advertising en Colibird

### Headlines sugeridos (ES)

1. **"La IA que respeta tus datos: 161 herramientas locales para tu Mac"**
2. **"De Colibird: LMCP conecta Claude y Cursor a Mail, Teams y OneDrive — sin API keys"**
3. **"Infraestructura financiera en LATAM. Innovación AI global. Un mismo equipo."**
4. **"Tu email nunca sale de tu Mac. Tu IA sí puede leerlo."**

### Bullets para sección producto

- ✅ 161 herramientas MCP — Mail, Calendar, Teams, Slack, WhatsApp, Office, Notion, Zoom
- ✅ 100% local y privado — GDPR por diseño
- ✅ Instalación en 2 minutos — gratis, sin tarjeta
- ✅ Compatible con Claude, ChatGPT, Cursor, VS Code
- ✅ Desarrollado por el equipo de Colibird
- ✅ ~16K descargas npm — comunidad activa

### CTAs

| CTA | Destino |
|-----|---------|
| Descargar LMCP | https://local-mcp.com/get?ref=colibird |
| Ver documentación | https://local-mcp.com/guides |
| Probar con Cursor | /guides/cursor-mcp-setup |
| Contacto enterprise | ctpo@colibird.co |

### Ángulo narrativo Colibird ↔ LMCP

Colibird construye **infraestructura digital de liquidez** para bancos y empresas en LATAM (eCheq, RADIAN, SCF). LMCP demuestra la misma filosofía aplicada al espacio AI:

- **Local-first** (como procesamiento on-premise en finanzas)
- **Sin dependencia de tokens cloud** (como evitar vendor lock-in)
- **Privacidad por arquitectura** (compliance nativo)
- **Automatización de workflows** (como los flujos financieros que Colibird digitaliza)

### Dónde ubicar en colibird.com.ar

Opciones sugeridas (para fase de implementación):

1. **Nueva sección "Productos"** — tarjeta LMCP junto a eCheq, RADIAN, SCF
2. **Hero secundario o banner** — "Conoce LMCP, nuestro servidor MCP para Mac"
3. **Página dedicada** `/lmcp` o `/productos/lmcp`
4. **Footer** — link a local-mcp.com
5. **Sección "Innovación" / "Labs"** — si se quiere separar B2B financiero de producto consumer/dev

### Qué NO mezclar sin contexto

- LMCP es producto **global, inglés, macOS** — audiencia developers y knowledge workers worldwide
- Colibird financiero es **B2B LATAM** — no forzar que LMCP "procese cheques", sino mostrar **misma empresa, misma excelencia técnica**

---

## 14. Assets visuales y técnicos disponibles

| Asset | Ubicación |
|-------|-----------|
| Logo colibrí / favicon | public/logo.png, favicon en LMCP releases |
| Screenshots Claude tools | github.com/lanchuske/local-mcp-releases `assets/claude-tools.png` |
| Menu bar app | `assets/tray-app.png` en releases repo |
| Badges npm/GDPR/macOS | README releases |
| Diagrama arquitectura | README releases (ASCII) |

---

## 15. Comandos útiles (referencia)

```bash
# Instalar
curl -fsSL 'https://local-mcp.com/install?ref=colibird' | bash
npx -y local-mcp@latest setup

# Mantenimiento
npx -y local-mcp@latest update
npx -y local-mcp@latest status

# Desinstalar
curl -fsSL 'https://local-mcp.com/uninstall' | bash

# Verificar config Cursor/Claude
grep -l local-mcp ~/.cursor/mcp.json ~/Library/Application\ Support/Claude/claude_desktop_config.json 2>/dev/null
```

### Rutas de config por cliente

| Cliente | Archivo |
|---------|---------|
| Claude Desktop | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Claude Code | `~/.claude.json` |
| Cursor | `~/.cursor/mcp.json` |
| Windsurf | `~/.codeium/windsurf/mcp_config.json` |
| VS Code | `~/.vscode/mcp.json` |
| Zed | `~/.config/zed/settings.json` |

---

## 16. Glosario

| Término | Significado |
|---------|-------------|
| **MCP** | Model Context Protocol — estándar para que IAs llamen herramientas externas |
| **LMCP** | Marca/producto Local MCP en local-mcp.com (no confundir con "cualquier MCP local") |
| **stdio** | Transporte MCP local proceso-a-proceso |
| **Cloud Relay** | Túnel opt-in para clientes web que no alcanzan localhost |
| **TCC** | Transparency, Consent, Control — permisos macOS (Mail, Contacts, etc.) |
| **Device code login** | Flujo M365 sin password en el AI — código en microsoft.com/devicelogin |

---

## 17. Checklist próximos pasos (implementación en Colibird)

- [ ] Definir placement: sección Productos vs página `/lmcp` dedicada
- [ ] Agregar i18n ES/EN para copy LMCP en `src/lib/i18n.ts`
- [ ] Crear componente `LMCPProduct` o entrada en `products.ts`
- [ ] UTMs consistentes: `?ref=colibird` / `?ref=colibird.com.ar`
- [ ] Decidir si Colibird LATAM menciona LMCP en LinkedIn / newsletter
- [ ] Coordinar con ctpo@colibird.co para métricas internas actualizadas
- [ ] Revisar versión README releases (146 vs 161 tools) antes de publicar números

---

## 18. Fuentes consultadas

- https://local-mcp.com (homepage, jun 2026)
- https://www.local-mcp.com/llms.txt (catálogo completo de tools y guías)
- https://www.local-mcp.com/en/privacy
- https://www.local-mcp.com/guides
- https://www.npmjs.com/package/local-mcp
- https://github.com/lanchuske/local-mcp-releases (README, releases, issues)
- https://github.com/lanchuske/local-mcp-claude-plugin (README)
- https://github.com/lanchuske/local-mcp-cursor-plugin (README)
- GitHub API: metadata repos privados `local-mcp`, `lmcp-vault` (solo campos públicos)
- `gh search repos`, `gh release list`, `npm view`

---

*Documento generado para uso interno del equipo Colibird. No clona ni reproduce código de repos privados.*
