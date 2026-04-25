'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FolderKanban, Calendar, FileText, MessageSquare, LogOut } from 'lucide-react';
import { DarumaLogo } from './DarumaLogo';
import { getDict, type Locale } from '@/lib/i18n';
import { cn } from '@/lib/utils';

const items = [
  { href: '/dashboard', icon: LayoutDashboard, key: 'dashboard' },
  { href: '/projects', icon: FolderKanban, key: 'projects' },
  { href: '/content', icon: Calendar, key: 'content' },
  { href: '/reports', icon: FileText, key: 'reports' },
  { href: '/messages', icon: MessageSquare, key: 'messages' },
] as const;

export function Sidebar({ locale = 'es' as Locale }) {
  const t = getDict(locale);
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-daruma-line/60 min-h-screen p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-10">
        <DarumaLogo size={36} />
        <div>
          <div className="font-serif text-lg leading-none text-daruma-slate">Daruma</div>
          <div className="text-[10px] uppercase tracking-widest text-daruma-slate-soft">Studio</div>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {items.map(({ href, icon: Icon, key }) => {
          const active = pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-3 rounded-soft px-3 py-2.5 text-sm transition',
                active
                  ? 'bg-daruma-red/10 text-daruma-red font-medium'
                  : 'text-daruma-slate hover:bg-daruma-cream',
              )}
            >
              <Icon size={18} />
              {t.nav[key as keyof typeof t.nav]}
            </Link>
          );
        })}
      </nav>

      <Link
        href="/login"
        className="flex items-center gap-3 rounded-soft px-3 py-2.5 text-sm text-daruma-slate-soft hover:bg-daruma-cream"
      >
        <LogOut size={18} />
        {t.nav.logout}
      </Link>
    </aside>
  );
}
