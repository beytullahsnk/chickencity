import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Actualit\u00e9s, recettes et conseils de Chicken City. D\u00e9couvrez nos articles sur le fast-food fait maison \u00e0 Mer.",
  alternates: {
    canonical: "https://chickencity41.fr/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="pt-20">
      <section className="py-16 bg-background-warm">
        <div className="mx-auto max-w-4xl px-4 text-center space-y-4">
          <h1 className="font-display text-4xl sm:text-5xl text-secondary tracking-wide">
            BLOG & ACTUS
          </h1>
          <p className="text-lg text-foreground-muted">
            D{"\u00e9"}couvrez nos derni{"\u00e8"}res actualit{"\u00e9"}s, recettes et coulisses.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-foreground-muted text-lg">
            Articles {"\u00e0"} venir bient{"\u00f4"}t ! Restez connect{"\u00e9"}s.
          </p>
        </div>
      </section>
    </div>
  );
}
