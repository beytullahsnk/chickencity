"use client";

import { useState } from "react";

// Liste de groupes de photos à gérer
const GROUPS: { title: string; paths: string[] }[] = [
  {
    title: "Strip / Galerie (25 photos)",
    paths: Array.from({ length: 25 }, (_, i) => `/images/strip/strip-${i + 1}.webp`),
  },
  {
    title: "Hero & pages",
    paths: [
      "/images/hero-poster.webp",
      "/images/delivery-kitchen.webp",
      "/images/bg-hero.webp",
      "/images/livraison.webp",
      "/images/sur-place.webp",
    ],
  },
  {
    title: "Menu — burgers & tacos",
    paths: [
      "/images/menu/Chesse Burger.webp",
      "/images/menu/Chesse Burger - Menu Enfant.webp",
      "/images/menu/Chicken Burger.webp",
      "/images/menu/Méga Burger.webp",
      "/images/menu/Triple Burger.webp",
      "/images/menu/180 Burger.webp",
      "/images/menu/360 Burger.webp",
      "/images/menu/City Burger.webp",
      "/images/menu/Chèvre Miel Burger.webp",
      "/images/menu/Mini Fish Burger.webp",
      "/images/menu/Mini Fish Burger - Menu Enfant.webp",
      "/images/menu/Gourmet Burger.webp",
      "/images/menu/Tacos.webp",
      "/images/menu/Bowls.webp",
    ],
  },
  {
    title: "Menu — rolls, sides, paninis, salades, enfant, dessert, sauces",
    paths: [
      "/images/menu/Chicken Roll.webp",
      "/images/menu/Curry Roll.webp",
      "/images/menu/Fromagère Roll.webp",
      "/images/menu/Mega Roll.webp",
      "/images/menu/Chèvre Miel Roll.webp",
      "/images/menu/Tikka Roll.webp",
      "/images/menu/américain Roll.webp",
      "/images/menu/cordon Roll.webp",
      "/images/menu/Sides - Tenders.webp",
      "/images/menu/Sides - Nuggets.webp",
      "/images/menu/Sides - Mozza Sticks.webp",
      "/images/menu/Sides - Camembert.webp",
      "/images/menu/Sides - City Box.webp",
      "/images/menu/Sides - Hot Wings.webp",
      "/images/menu/Sides - Onion rings.webp",
      "/images/menu/Sides - Japanoles.webp",
      "/images/menu/waffle fries.webp",
      "/images/menu/1 Tenders.webp",
      "/images/menu/1 Hot Wings.webp",
      "/images/menu/Boisson - Dada Pêche.webp",
      "/images/menu/Panini Steak.webp",
      "/images/menu/Panini Fromage.webp",
      "/images/menu/Panini Curry.webp",
      "/images/menu/Panini Nutella.webp",
      "/images/menu/SALADES Tenders.webp",
      "/images/menu/SALADES Cheèvre.webp",
      "/images/menu/Menu Enfant - Tenders.webp",
      "/images/menu/Menu Enfant - Nuggets.webp",
      "/images/menu/FAMILIAL A.webp",
      "/images/menu/FAMILIAL B.webp",
      "/images/menu/FAMILIAL C.webp",
      "/images/menu/FAMILIAL D.webp",
      "/images/menu/FAMILIAL E.webp",
      "/images/menu/FAMILIAL F.webp",
      "/images/menu/Dessert - Tiramisu.webp",
      "/images/menu/Dessert - Tarte Daim.webp",
      "/images/menu/Dessert - Salade de Fruits.webp",
    ],
  },
  {
    title: "Viandes au choix",
    paths: [
      "/images/menu/Viandes - Tenders.webp",
      "/images/menu/Viandes - Nuggets.webp",
      "/images/menu/Viandes - Steak.webp",
      "/images/menu/Viandes - Cordon Bleu.webp",
      "/images/menu/Viandes - Kebab.webp",
      "/images/menu/Viandes - Chicken Curry.webp",
    ],
  },
];

function PhotoCard({ path }: { path: string }) {
  const [bust, setBust] = useState(0); // force re-render with cache-bust
  const [loading, setLoading] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const rotate = async (angle: number) => {
    setLoading(angle);
    setError(null);
    try {
      const res = await fetch("/api/rotate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path, angle }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Server error");
      setBust(Date.now());
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown");
    } finally {
      setLoading(null);
    }
  };

  const name = path.split("/").pop()?.replace(/\.webp$/, "") || path;
  // Use regular <img> + cache busting query param so we see the rotation immediately,
  // without going through Next/image optimizer cache
  const src = `${path}?v=${bust}`;

  return (
    <div className="relative rounded-lg overflow-hidden border border-gray-200 bg-gray-50 group">
      <div className="relative aspect-square bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element -- admin tool needs cache bust */}
        <img
          src={src}
          alt={name}
          className="w-full h-full object-cover"
        />
        {loading !== null && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-xs font-bold">
            Rotating {loading}°…
          </div>
        )}
      </div>
      <div className="p-2 space-y-2 bg-white">
        <p className="text-[10px] text-gray-500 truncate" title={path}>
          {name}
        </p>
        <div className="grid grid-cols-3 gap-1">
          <button
            onClick={() => rotate(-90)}
            disabled={loading !== null}
            className="text-xs font-bold bg-primary text-secondary px-2 py-1.5 rounded hover:bg-primary-dark disabled:opacity-40 transition-colors"
            title="Tourner 90° à gauche (counter-clockwise)"
          >
            ↺ -90
          </button>
          <button
            onClick={() => rotate(180)}
            disabled={loading !== null}
            className="text-xs font-bold bg-accent text-white px-2 py-1.5 rounded hover:bg-accent-dark disabled:opacity-40 transition-colors"
            title="Tourner 180° (à l'envers)"
          >
            ↕ 180
          </button>
          <button
            onClick={() => rotate(90)}
            disabled={loading !== null}
            className="text-xs font-bold bg-primary text-secondary px-2 py-1.5 rounded hover:bg-primary-dark disabled:opacity-40 transition-colors"
            title="Tourner 90° à droite (clockwise)"
          >
            ↻ +90
          </button>
        </div>
        {error && (
          <p className="text-[10px] text-accent font-bold">Erreur : {error}</p>
        )}
      </div>
    </div>
  );
}

export default function AdminRotatePage() {
  return (
    <div className="pt-24 px-4 pb-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-display text-3xl text-secondary mb-2">
          🔄 Rotation des images
        </h1>
        <p className="text-sm text-gray-600 mb-8">
          Cliquez sur <span className="font-bold">-90°</span> (gauche), <span className="font-bold">+90°</span> (droite) ou <span className="font-bold">180°</span> (à l&apos;envers) pour corriger une image. La modification est instantanée et persistée sur disque.
          <br />
          <strong className="text-accent">À supprimer avant la mise en production.</strong>
        </p>
        {GROUPS.map((group) => (
          <section key={group.title} className="mb-12">
            <h2 className="font-bold text-xl text-secondary mb-4 border-b-2 border-primary/30 pb-2">
              {group.title}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {group.paths.map((path) => (
                <PhotoCard key={path} path={path} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
