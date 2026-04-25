import { redirect } from 'next/navigation';

export default function HomePage() {
  // Eventualmente: si hay sesión activa, redirigir a /dashboard
  redirect('/login');
}
