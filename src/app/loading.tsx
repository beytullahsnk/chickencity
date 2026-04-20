export default function Loading() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-background-warm pt-20">
      <div className="flex flex-col items-center gap-6">
        {/* Spinner style Chicken City */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
          <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin" />
        </div>
        <p className="font-display text-xl text-secondary tracking-wide">
          Chargement…
        </p>
      </div>
    </section>
  );
}
