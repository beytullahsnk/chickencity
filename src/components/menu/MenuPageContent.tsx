"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { menuItems, menuCategories, viandesChoices, type MenuCategory } from "@/data/menu";

/* ── Banner labels ── */
const categoryBannerLabels: Record<string, [string, string, string?]> = {
  burgers: ["NOS", "BURGERS", "SERVIS AVEC FRITES"],
  tacos: ["COMPOSE TON", "TACOS", "SERVIS AVEC FRITES"],
  bowls: ["COMPOSE TON", "BOWL"],
  rolls: ["NOS", "ROLLS", "SERVIS AVEC FRITES"],
  sides: ["NOS", "SIDES", "SERVIS AVEC FRITES"],
  paninis: ["NOS", "PANINIS", "+0,50\u20ac POUR LES FRITES"],
  salades: ["NOS", "SALADES"],
  familial: ["MENU", "FAMILIAL", "BOUTEILLE 1,5L OFFERTE !"],
  enfant: ["MENU", "ENFANT", "FRITES \u2022 CAPRISUN \u2022 PETIT FILOU"],
  desserts: ["NOS", "DESSERTS"],
  sauces: ["SAUCES", "& EXTRAS"],
};

/* ── Banner images ── */
const categoryBannerImages: Partial<Record<MenuCategory, string>> = {
  burgers: "/images/menu/Gourmet Burger.webp",
  tacos: "/images/menu/Tacos.webp",
  bowls: "/images/menu/Bowls.webp",
  rolls: "/images/menu/Chicken Roll.webp",
  sides: "/images/menu/Sides - City Box.webp",
  paninis: "/images/menu/Panini Steak.webp",
  salades: "/images/menu/SALADES Tenders.webp",
  familial: "/images/menu/FAMILIAL A.webp",
  enfant: "/images/menu/Menu Enfant - Tenders.webp",
  desserts: "/images/menu/Dessert - Tiramisu.webp",
  sauces: "/images/menu/SAUCE - SAMOURAI.webp",
};

const BOISSON_CATEGORIES: MenuCategory[] = ["burgers", "tacos", "bowls", "rolls", "sides"];

/* ── Category banner card ── */
function CategoryBanner({
  category,
  image,
}: {
  category: string;
  image?: string;
}) {
  const labels = categoryBannerLabels[category] || ["MENU", "CITY"];
  const subtitle = labels[2];

  return (
    <div className="mx-auto max-w-3xl rounded-2xl overflow-hidden flex items-center justify-between mb-10 border-[3px] border-secondary">
      <div className="p-6 sm:p-8 flex-1 min-w-0">
        <h2 className="font-display leading-[0.9] tracking-wide">
          <span
            className="block text-secondary"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
          >
            {labels[0]}
          </span>
          <span
            className="block text-primary"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            {labels[1]}
            <span className="text-primary">.</span>
          </span>
        </h2>
        {subtitle && (
          <p className="mt-2 text-[11px] font-bold uppercase tracking-wider italic leading-tight text-primary">
            {subtitle}
          </p>
        )}
      </div>
      {image && (
        <div className="relative w-36 h-32 sm:w-48 sm:h-40 shrink-0 -mr-2 -my-2">
          <Image
            src={image}
            alt={labels.join(" ")}
            fill
            sizes="(max-width: 640px) 144px, 192px"
            className="object-contain object-right scale-125"
          />
        </div>
      )}
    </div>
  );
}

/* ── Price display (superscript style) ── */
function PriceDisplay({ price }: { price: string }) {
  const clean = price.replace("\u20ac", "").replace(",", ".");
  const parts = clean.split(".");
  const main = parts[0];
  const cents = parts[1] || "00";

  return (
    <p className="mt-1 text-primary">
      <span className="font-extrabold text-2xl">{main}</span>
      <span className="font-extrabold text-sm align-super">{cents}</span>
    </p>
  );
}

/* ── Product card ── */
function ProductCard({ item }: { item: (typeof menuItems)[0] }) {
  return (
    <div className="text-center group" style={{ width: "160px" }}>
      <div className="relative aspect-square w-[140px] mx-auto mb-3 rounded-full overflow-hidden bg-gray-100">
        <Image
          src={item.image}
          alt={`${item.name} | Chicken City`}
          fill
          sizes="140px"
          className="object-contain p-2"
        />
      </div>
      <p className="text-xs font-extrabold uppercase tracking-wider text-gray-900 leading-tight">
        {item.name}
      </p>
      {item.description && (
        <p className="mt-1 text-[10px] text-gray-500 leading-snug px-1">
          {item.description}
        </p>
      )}
      {item.price && <PriceDisplay price={item.price} />}
    </div>
  );
}

/* ── Viandes au choix (petit bandeau discret) ── */
function ViandesStrip() {
  return (
    <div className="mx-auto max-w-3xl mb-8 rounded-xl bg-background-warm border border-primary/30 px-4 py-4">
      <div className="flex items-center justify-center gap-2 mb-3">
        <span className="h-px w-6 bg-primary" />
        <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-secondary">
          Viandes au choix
        </p>
        <span className="h-px w-6 bg-primary" />
      </div>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {viandesChoices.map((v) => (
          <div key={v.id} className="flex flex-col items-center" style={{ width: "72px" }}>
            <div className="relative w-[64px] h-[64px] rounded-full overflow-hidden mb-1 bg-white">
              <Image
                src={v.image}
                alt={v.name}
                fill
                sizes="64px"
                className="object-contain p-1"
              />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-wide text-gray-700 text-center leading-tight">
              {v.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── +1€ Boisson strip ── */
function BoissonStrip() {
  return (
    <div className="mx-auto max-w-3xl mb-8 rounded-xl bg-background-warm border border-primary/30 px-4 py-4">
      <div className="flex items-center justify-center gap-2 mb-3">
        <span className="h-px w-6 bg-primary" />
        <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-secondary">
          Boisson en supplément
        </p>
        <span className="h-px w-6 bg-primary" />
      </div>
      <div className="flex items-center justify-center gap-4 sm:gap-6">
        <div className="relative w-[64px] h-[64px] rounded-full overflow-hidden bg-white shrink-0">
          <Image
            src="/images/menu/Boisson - Dada Pêche.webp"
            alt="Canette de boisson 33cl"
            fill
            sizes="64px"
            className="object-contain p-1"
          />
        </div>
        <div className="text-center sm:text-left">
          <p className="text-[11px] font-bold uppercase tracking-wide text-gray-700 leading-tight">
            Ajoutez une boisson 33cl
          </p>
          <p className="mt-0.5 text-primary">
            <span className="font-extrabold text-xl">+1</span>
            <span className="font-extrabold text-xs align-super">00</span>
            <span className="ml-1 text-[10px] font-bold text-gray-500 uppercase tracking-wide">
              au lieu de 1,90€
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Category section ── */
function CategorySection({
  category,
  items,
}: {
  category: MenuCategory;
  items: typeof menuItems;
}) {
  if (items.length === 0) return null;

  const showViandes = category === "tacos" || category === "bowls";
  const showBoisson = BOISSON_CATEGORIES.includes(category);

  return (
    <section id={`cat-${category}`} className="py-8 scroll-mt-[100px]">
      <div className="mx-auto max-w-5xl px-4">
        <CategoryBanner
          category={category}
          image={categoryBannerImages[category]}
        />
        {showViandes && <ViandesStrip />}
        {showBoisson && <BoissonStrip />}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-10">
          {items.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Main ── */
export function MenuPageContent() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const scrollToCategory = (catId: string) => {
    setActiveCategory(catId);
    const el = document.getElementById(`cat-${catId}`);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const groupedItems = menuCategories
    .map((cat) => ({
      ...cat,
      items: menuItems.filter((item) => item.category === cat.id),
    }))
    .filter((cat) => cat.items.length > 0);

  return (
    <>
      {/* Hero compact */}
      <section className="pt-8 pb-4 bg-primary">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h1
            className="font-display tracking-wide text-secondary"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          >
            MENU
          </h1>
        </div>
      </section>

      {/* Nav sticky — fond blanc, compact */}
      <nav className="sticky top-[80px] z-30 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="mx-auto max-w-5xl px-4 py-2 overflow-x-auto scrollbar-hide">
          <div className="flex gap-1 min-w-max justify-center">
            {groupedItems.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => scrollToCategory(cat.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`text-[11px] font-bold uppercase tracking-wider transition-all duration-300 px-3 py-1.5 rounded-full whitespace-nowrap ${
                    isActive
                      ? "bg-secondary text-white"
                      : "bg-transparent text-secondary hover:bg-primary/20"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Sections */}
      <div className="bg-white pt-4">
        {groupedItems.map((cat) => (
          <CategorySection key={cat.id} category={cat.id} items={cat.items} />
        ))}
      </div>

      {/* Allergies */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-md px-4 text-center space-y-4">
          <h2
            className="font-display tracking-wide text-secondary"
            style={{ fontSize: "2.5rem" }}
          >
            UNE
            <span className="block text-primary">ALLERGIE<span>?</span></span>
          </h2>
          <p className="text-gray-500 text-sm">
            Si vous avez des allergies alimentaires, n{"'"}h{"\u00e9"}sitez pas {"\u00e0"} nous contacter.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center font-bold uppercase tracking-wider px-8 py-3 rounded-full text-sm transition-all duration-300 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white"
          >
            Voir les allerg{"\u00e8"}nes →
          </Link>
        </div>
      </section>
    </>
  );
}
