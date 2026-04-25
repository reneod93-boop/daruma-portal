import { redirect } from 'next/navigation';
export default function ProjectsIndex() {
  // Por ahora redirige al dashboard donde se listan los proyectos.
  redirect('/dashboard');
}
