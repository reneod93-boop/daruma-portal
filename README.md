# Daruma Portal — Next.js + Supabase

Portal premium para clientes de Daruma Studio. Stack: **Next.js 14 (App Router) + TypeScript + Tailwind + Supabase + Prisma**.

## ⚡ Quick start

```bash
# 1. Instalar dependencias
npm install

# 2. Crear proyecto en https://supabase.com (gratis)
#    Copia: Project URL, anon key, service role key, DB URL

# 3. Copiar variables de entorno
cp .env.example .env.local
# Edita .env.local con tus credenciales de Supabase

# 4. Push del schema a tu base de datos
npm run db:push
npm run db:generate

# 5. Levantar el servidor de desarrollo
npm run dev
# Abre http://localhost:3000
```

## 📂 Estructura

```
src/
├── app/
│   ├── (auth)/login/        ← Pantalla de login
│   ├── (dashboard)/
│   │   ├── dashboard/       ← Panel con proyectos
│   │   ├── projects/[id]/   ← Detalle con fases
│   │   ├── content/         ← Calendario editorial
│   │   ├── reports/         ← PDFs descargables
│   │   └── messages/        ← Chat con el equipo
│   ├── globals.css          ← Tokens y utilidades Daruma
│   ├── layout.tsx           ← Root layout (fuentes)
│   └── page.tsx             ← Redirect a /login
├── components/portal/       ← Sidebar, DarumaLogo, etc.
├── lib/
│   ├── i18n.ts              ← Helper bilingüe ES/EN
│   ├── supabase.ts          ← Clientes browser + server
│   ├── db.ts                ← Singleton Prisma
│   └── utils.ts             ← cn() helper
└── i18n/
    ├── es.json              ← Strings en español
    └── en.json              ← Strings en inglés

prisma/
└── schema.prisma            ← 12 modelos: Org, User, Project, Phase, etc.
```

## 🚀 Deploy a Vercel

1. Sube este repo a GitHub.
2. Ve a https://vercel.com/new e importa el repo.
3. Pega las variables de `.env.local` en Settings → Environment Variables.
4. Deploy. Vercel detecta Next.js y configura todo solo.

## 🔧 Cómo trabajar con Claude Code

Este repo ya tiene un `CLAUDE.md` en la raíz. Solo:

```bash
cd daruma-portal-nextjs
claude
```

Y dile qué quieres hacer. Ejemplos:

- *"Conecta Supabase Auth en la pantalla de login"*
- *"Reemplaza los mocks del dashboard con queries Prisma reales"*
- *"Configura RLS para que cada cliente solo vea sus proyectos"*
- *"Integra Meta Marketing API para sync de campañas"*

Claude Code lee el CLAUDE.md y entiende el contexto.

## 🎨 Brand tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `daruma-red` | `#E94256` | CTAs, acentos, fase actual |
| `daruma-slate` | `#364550` | Tipografía principal |
| `daruma-cream` | `#F5F1EA` | Fondos cálidos |
| `daruma-ink` | `#1F2A33` | Texto sobre claro |

Tipografía: **Playfair Display** (titulares) + **Inter** (UI).

Clases utilitarias listas:
- `.btn-primary` · `.btn-ghost`
- `.card`
- `.h-display` · `.h-card` · `.label`

## 📚 Más contexto

- **PRD completo** (decisiones de producto): `../daruma-portal-PRD.md`
- **Mockup HTML** (referencia visual): `../daruma-portal-online/index.html`
- **Briefing para Claude Code**: `./CLAUDE.md`
