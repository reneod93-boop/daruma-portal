export default function ContentCalendarPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="h-display mb-1">Calendario de contenido</h1>
      <p className="text-daruma-slate-soft mb-8">Tus publicaciones planeadas y publicadas</p>

      <div className="card">
        <p className="text-daruma-slate-soft text-sm">
          TODO: Conectar con Meta Marketing API + Supabase para mostrar posts reales.
          Ver <code className="bg-daruma-cream px-1.5 py-0.5 rounded">prisma/schema.prisma</code> · modelo <code>Post</code>.
        </p>
      </div>
    </div>
  );
}
