import Link from 'next/link';
import { getDict } from '@/lib/i18n';

// MOCK data — reemplazar con queries Prisma cuando se conecte Supabase
const projects = [
  { id: '1', name: 'Lanzamiento Marca', service: 'Branding', phase: 'design', progress: 45 },
  { id: '2', name: 'Sitio Web Nuevo', service: 'Web Design', phase: 'development', progress: 70 },
  { id: '3', name: 'Campaña Q2', service: 'Meta Ads', phase: 'launch', progress: 90 },
];

export default function DashboardPage() {
  const t = getDict('es');

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="h-display mb-1">{t.dashboard.greeting}, Cliente</h1>
      <p className="text-daruma-slate-soft mb-8">{t.dashboard.summary}</p>

      <h2 className="label mb-4">{t.dashboard.active}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Link key={p.id} href={`/projects/${p.id}`} className="card hover:shadow-lift transition">
            <div className="text-xs uppercase tracking-wider text-daruma-red mb-2">{p.service}</div>
            <h3 className="h-card mb-3">{p.name}</h3>
            <div className="text-xs text-daruma-slate-soft mb-1">{t.dashboard.phase_label}</div>
            <div className="text-sm text-daruma-slate font-medium mb-4">
              {t.phases[p.phase as keyof typeof t.phases]}
            </div>
            <div className="h-1.5 bg-daruma-cream-deep rounded-full overflow-hidden">
              <div className="h-full bg-daruma-red rounded-full" style={{ width: `${p.progress}%` }} />
            </div>
            <div className="mt-2 text-xs text-daruma-slate-soft">{p.progress}%</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
