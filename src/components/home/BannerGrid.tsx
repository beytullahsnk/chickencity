"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const gridItems = [
  {
    label: "Disponible",
    title: "Livraison a domicile",
    image: "/images/livraison.webp",
    alt: "Service de Livraison Rapide Fast-Food a Mer | Chicken City",
    large: true,
  },
  {
    label: "Tenders & Wings",
    title: "Poulet fait maison",
    image: "/images/gallery/poulet.gif",
    alt: "Tenders et Wings Fait Maison | Poulet Frais Chicken City Mer",
    large: false,
  },
  {
    label: "Emporter",
    title: "Ou sur place",
    image: "/images/sur-place.webp",
    alt: "Restaurant Fast-Food Mer | Sur Place ou a Emporter Chicken City",
    large: false,
  },
];

export function BannerGrid() {
  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Large card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl bg-secondary group md:row-span-2 min-h-[300px]"
          >
            <Image
              src={gridItems[0].image}
              alt={gridItems[0].alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                {gridItems[0].label}
              </p>
              <p className="font-display text-3xl tracking-wide">
                {gridItems[0].title.toUpperCase()}
              </p>
            </div>
          </motion.div>

          {/* Small cards */}
          {gridItems.slice(1).map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              className="relative overflow-hidden rounded-2xl bg-secondary group min-h-[180px]"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized={item.image.endsWith(".gif")}
                className="object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {item.label}
                </p>
                <p className="font-display text-xl tracking-wide">
                  {item.title.toUpperCase()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
