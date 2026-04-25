'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { getDict } from '@/lib/i18n';

export default function MessagesPage() {
  const t = getDict('es');
  const [text, setText] = useState('');

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="h-display mb-1">{t.messages.title}</h1>
      <p className="text-daruma-slate-soft mb-8">Daruma Studio · Equipo</p>

      <div className="card flex flex-col h-[600px]">
        <div className="flex-1 space-y-4 overflow-y-auto">
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-daruma-red/10 flex items-center justify-center text-xs font-medium text-daruma-red">
              R
            </div>
            <div className="bg-daruma-cream rounded-soft px-4 py-2.5 max-w-md">
              <div className="text-sm text-daruma-slate">
                Hola! Te dejé las primeras propuestas en la pestaña de proyectos.
              </div>
              <div className="text-[10px] text-daruma-slate-soft mt-1">Ren · hace 2h</div>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setText('');
          }}
          className="flex items-center gap-2 border-t border-daruma-line/60 pt-4"
        >
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={t.messages.placeholder}
            className="flex-1 rounded-soft border border-daruma-line bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-daruma-red/30"
          />
          <button type="submit" className="btn-primary">
            <Send size={16} />
            {t.messages.send}
          </button>
        </form>
      </div>
    </div>
  );
}
