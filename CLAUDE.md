# CLAUDE.md — Briefing para Claude Code

> Este archivo lo lee Claude Code automáticamente al abrir el repo. Contiene contexto del proyecto, decisiones de arquitectura y siguientes pasos.

## Quién soy

Soy Ren, fundador de **Daruma Studio**, una agencia de **branding, diseño web y publicidad en Meta**. Este repo es el portal de clientes de la agencia.

## Qué estoy construyendo

Una plataforma web donde **mis clientes** entran con su login y ven:

1. Sus proyectos activos y la **fase actual** de cada uno
2. El **calendario de contenido** y publicaciones programadas
3. Los **anuncios de Meta** corriendo y sus métricas
4. **Reportes mensuales** descargables (PDF)
5. **Chat directo** con el equipo de Daruma
6. **Notificaciones** por email/WhatsApp cuando hay novedades

Es **bilingüe** (ES/EN), elegante y premium. Los clientes **no son técnicos**, así que la UX tiene que ser obvia.

## Tech stack (ya configurado)

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** con tokens Daruma (`tailwind.config.ts`)
- **Supabase** — Auth + Postgres + Storage + Realtime (ver `src/lib/supabase.ts`)
- **Prisma** — ORM (ver `prisma/schema.prisma`)
- **Resend + Twilio** — notificaciones email/WhatsApp
- **Vercel** — hosting

## Brand tokens

```ts
red:   #E94256  // primario — CTAs, acentos
slate: #364550  // tipografía principal
cream: #F5F1EA  // fondos cálidos
ink:   #1F2A33  // texto sobre fondos claros
```

Tipografía: **Playfair Display** (serif, titulares) + **Inter** (sans, UI/cuerpo).

## Multi-tenancy

- Cada cliente es una `Organization` (no es Daruma).
- Daruma misma es una `Organization` con `isAgency: true`.
- Los `User` pertenecen a una `Organization` y tienen un `Role`:
  - `SUPER_ADMIN` → yo (Ren)
  - `TEAM_MEMBER` → mi equipo
  - `CLIENT_PRIMARY` → punto de contacto del cliente
  - `CLIENT_VIEWER` → otros stakeholders del cliente
- Aislamiento de datos vía **Row-Level Security (RLS)** en Supabase. **CRÍTICO**: configurar antes de meter datos reales.

## Cómo empezar (paso a paso)

```bash
# 1. Instalar deps
npm install

# 2. Copiar env y rellenar
cp .env.example .env.local

# 3. Crear proyecto Supabase en supabase.com → copiar URL y keys → pegar en .env.local

# 4. Push del schema a Supabase
npm run db:push

# 5. Generar cliente Prisma
npm run db:generate

# 6. Levantar dev server
npm run dev
```

## Roadmap (orden sugerido)

### Fase 1 — MVP (lo prioritario)
- [ ] Conectar Supabase Auth en `/login` (magic link + email/password)
- [ ] Configurar RLS en Supabase para Organization, Project, Message, Report
- [ ] Reemplazar mocks en `dashboard/page.tsx` con queries Prisma reales
- [ ] CRUD de Projects desde panel admin (`/admin/projects`)
- [ ] Upload de Reports (PDF) a Supabase Storage
- [ ] Vista de descarga de reports con tracking en `ReportDownload`

### Fase 2 — Contenido y Ads
- [ ] Integrar Google Calendar API → poblar `Post.scheduledAt`
- [ ] Integrar Meta Marketing API → sync diario de `AdMetric`
- [ ] Vista de calendario con Posts (drag & drop opcional)
- [ ] Dashboard de métricas Meta por proyecto

### Fase 3 — Mensajería y notificaciones
- [ ] Chat con Supabase Realtime (`Message`)
- [ ] Cron diario que dispare `Notification`s pendientes
- [ ] Resend para emails, Twilio para WhatsApp

### Fase 4 — Pulido
- [ ] i18n con next-intl (reemplazar el helper actual)
- [ ] Tests E2E con Playwright (login + ver proyecto + descargar reporte)
- [ ] Dark mode (opcional)

## Convenciones

- **Componentes** en `src/components/portal/` (específicos del portal) y `src/components/ui/` (genéricos).
- **Server Components por defecto.** Solo `'use client'` cuando hay estado o handlers.
- **Datos**: queries Prisma en Server Components o Server Actions. No fetcheo desde el cliente excepto Realtime.
- **Strings UI**: en `src/i18n/{es,en}.json`. NO hardcodear texto en componentes.
- **Comentarios `// TODO:`** marcan donde reemplazar mocks por queries reales.

## Archivos clave

- `prisma/schema.prisma` — modelo completo de datos
- `tailwind.config.ts` — tokens Daruma
- `src/app/globals.css` — clases utilitarias `.btn-primary`, `.card`, `.h-display`...
- `src/lib/supabase.ts` — clientes de Supabase (browser + server)
- `src/lib/db.ts` — singleton de Prisma
- `src/components/portal/Sidebar.tsx` — navegación
- `src/components/portal/DarumaLogo.tsx` — logo SVG (reemplazar con SVG real cuando esté)

## Recursos

- PRD completo: `../daruma-portal-PRD.md`
- Mockup HTML estático: `../daruma-portal-online/index.html`

---

**Nota para Claude Code**: cuando trabajes en este repo, prioriza claridad sobre cleverness. Los clientes de Daruma no son técnicos — todo error de UX cuesta. Y mantén el look premium: sombras suaves, espacios generosos, tipografía bien calibrada.
