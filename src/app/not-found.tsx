import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-background-warm pt-20">
      <div className="mx-auto max-w-xl px-4 text-center space-y-6">
        <h1
          className="font-display tracking-wide text-secondary leading-none"
          style={{ fontSize: "clamp(4rem, 12vw, 7rem)" }}
        >
          404
        </h1>
        <p className="font-display text-2xl sm:text-3xl text-primary tracking-wide">
          Oups, cette page n{"'"}existe plus.
        </p>
        <p className="text-foreground-muted">
          Le lien que vous avez suivi est cass{"\u00e9"} ou la page a {"\u00e9"}t{"\u00e9"} d{"\u00e9"}plac{"\u00e9"}e. Revenez {"\u00e0"} l{"'"}accueil pour continuer votre visite.
        </p>
        <div className="flex flex-wrap gap-3 justify-center pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center font-bold uppercase tracking-wider px-8 py-3 rounded-full text-sm bg-primary text-secondary hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Retour {"\u00e0"} l{"'"}accueil
          </Link>
          <Link
            href="/menu"
            className="inline-flex items-center justify-center font-bold uppercase tracking-wider px-8 py-3 rounded-full text-sm border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
          >
            Voir le menu
          </Link>
        </div>
      </div>
    </section>
  );
}
