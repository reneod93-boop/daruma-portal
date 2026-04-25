import { Download, FileText } from 'lucide-react';
import { getDict } from '@/lib/i18n';

const reports = [
  { id: '1', period: 'Marzo 2026', project: 'Campaña Q1', size: '2.4 MB' },
  { id: '2', period: 'Febrero 2026', project: 'Campaña Q1', size: '2.1 MB' },
  { id: '3', period: 'Enero 2026', project: 'Campaña Q1', size: '1.9 MB' },
];

export default function ReportsPage() {
  const t = getDict('es');

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="h-display mb-1">{t.reports.title}</h1>
      <p className="text-daruma-slate-soft mb-8">{t.reports.subtitle}</p>

      <div className="space-y-3">
        {reports.map((r) => (
          <div key={r.id} className="card flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-soft bg-daruma-red/10 flex items-center justify-center">
                <FileText className="text-daruma-red" />
              </div>
              <div>
                <div className="font-serif text-lg text-daruma-slate">{r.period}</div>
                <div className="text-xs text-daruma-slate-soft">
                  {r.project} · {r.size}
                </div>
              </div>
            </div>
            <button className="btn-ghost">
              <Download size={16} />
              {t.reports.download}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
