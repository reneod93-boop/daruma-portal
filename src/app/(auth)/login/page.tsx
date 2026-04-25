'use client';

import { useState } from 'react';
import { DarumaLogo } from '@/components/portal/DarumaLogo';
import { getDict, type Locale } from '@/lib/i18n';
import { useRouter } from 'next/navigation';
import { createSupabaseBrowser } from '@/lib/supabase';

export default function LoginPage() {
  const [locale, setLocale] = useState<Locale>('es');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const t = getDict(locale);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const supabase = createSupabaseBrowser();
    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }
    router.push('/dashboard');
    router.refresh();
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="card w-full max-w-md">
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setLocale(locale === 'es' ? 'en' : 'es')}
            className="text-xs uppercase tracking-wider text-daruma-slate-soft hover:text-daruma-red"
          >
            {locale === 'es' ? 'EN' : 'ES'}
          </button>
        </div>

        <div className="flex flex-col items-center gap-3 mb-8">
          <DarumaLogo size={64} />
          <h1 className="font-serif text-2xl text-daruma-slate">Daruma Studio</h1>
          <p className="text-sm text-daruma-slate-soft">{t.brand.tagline}</p>
        </div>

        <h2 className="h-display text-center mb-1">{t.login.welcome}</h2>
        <p className="text-center text-daruma-slate-soft mb-6">{t.login.subtitle}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label block mb-1">{t.login.email}</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-soft border border-daruma-line bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-daruma-red/30"
            />
          </div>
          <div>
            <label className="label block mb-1">{t.login.password}</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-soft border border-daruma-line bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-daruma-red/30"
            />
          </div>
          {error && (
            <p className="text-sm text-daruma-red text-center">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? '…' : t.login.submit}
          </button>
          <a href="#" className="block text-center text-sm text-daruma-slate-soft hover:text-daruma-red">
            {t.login.forgot}
          </a>
        </form>
      </div>
    </div>
  );
}
