"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.error(error);
    }
  }, [error]);

  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-background-warm pt-20">
      <div className="mx-auto max-w-xl px-4 text-center space-y-6">
        <h1
          className="font-display tracking-wide text-secondary leading-none"
          style={{ fontSize: "clamp(3rem, 10vw, 6rem)" }}
        >
          Oups !
        </h1>
        <p className="font-display text-2xl sm:text-3xl text-primary tracking-wide">
          Un problème est survenu.
        </p>
        <p className="text-foreground-muted">
          D{"\u00e9"}sol{"\u00e9"}, quelque chose s{"'"}est mal pass{"\u00e9"}. Vous pouvez r{"\u00e9"}essayer ou revenir {"\u00e0"} l{"'"}accueil.
        </p>
        <div className="flex flex-wrap gap-3 justify-center pt-2">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center font-bold uppercase tracking-wider px-8 py-3 rounded-full text-sm bg-primary text-secondary hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg"
          >
            R{"\u00e9"}essayer
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center font-bold uppercase tracking-wider px-8 py-3 rounded-full text-sm border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
          >
            Retour {"\u00e0"} l{"'"}accueil
          </Link>
        </div>
      </div>
    </section>
  );
}
