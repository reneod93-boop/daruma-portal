import { getDict } from '@/lib/i18n';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

const PHASES = [
  { key: 'discovery', status: 'completed' },
  { key: 'design', status: 'active' },
  { key: 'development', status: 'pending' },
  { key: 'review', status: 'pending' },
  { key: 'launch', status: 'pending' },
] as const;

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const t = getDict('es');

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-xs uppercase tracking-wider text-daruma-red mb-2">Branding</div>
      <h1 className="h-display mb-2">Proyecto #{params.id}</h1>
      <p className="text-daruma-slate-soft mb-10">Lanzamiento de marca con identidad completa.</p>

      <div className="card">
        <h2 className="h-card mb-6">Fases del proyecto</h2>
        <ol className="space-y-4">
          {PHASES.map((p) => (
            <li key={p.key} className="flex items-center gap-4">
              {p.status === 'completed' && <CheckCircle2 className="text-daruma-red" />}
              {p.status === 'active' && <Clock className="text-daruma-red animate-pulse" />}
              {p.status === 'pending' && <Circle className="text-daruma-slate-soft/50" />}
              <span
                className={
                  p.status === 'pending' ? 'text-daruma-slate-soft' : 'text-daruma-slate font-medium'
                }
              >
                {t.phases[p.key]}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
