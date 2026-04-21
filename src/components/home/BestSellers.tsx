"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { getBestSellers } from "@/data/menu";

export function BestSellers() {
  const bestSellers = getBestSellers();

  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Title block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 lg:sticky lg:top-32"
          >
            <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl text-secondary leading-[0.95] tracking-wide">
              BURGERS
              <span className="block">TACOS</span>
              <span className="block">POULET</span>
              <span className="block text-accent">
                & PLUS
              </span>
            </h3>
            <p className="text-foreground-muted text-lg max-w-sm">
              Personne ne saura que vous avez craqu{"\u00e9"}...
            </p>
            <Link
              href="/menus"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-secondary border-2 border-secondary px-6 py-3 rounded-full hover:bg-secondary hover:text-white transition-all"
            >
              Voir tout le menu →
            </Link>
          </motion.div>

          {/* Right — Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {bestSellers.map((item) => (
                <Link
                  key={item.id}
                  href="/menus"
                  className="flex-shrink-0 text-center group"
                  style={{ flex: "0 0 45%", minWidth: 0 }}
                  aria-label={`${item.name} - voir le menu`}
                >
                  <div className="relative aspect-square bg-background-warm rounded-2xl overflow-hidden mb-3">
                    <Image
                      src={item.image}
                      alt={`${item.name} | Fast-Food Chicken City Mer`}
                      fill
                      sizes="(max-width: 1024px) 45vw, 300px"
                      className="object-contain p-4"
                    />
                  </div>
                  <h4 className="font-bold text-secondary text-sm uppercase tracking-wide">
                    {item.name}
                  </h4>
                  {item.price && (
                    <p className="text-accent font-bold text-sm mt-0.5">
                      {item.price}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
