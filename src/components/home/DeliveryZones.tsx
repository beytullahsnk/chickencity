"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { cities } from "@/data/cities";

export function DeliveryZones() {
  return (
    <section className="py-20 bg-background-warm">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl text-secondary tracking-wide">
            ZONES DE LIVRAISON DE CHICKEN CITY
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Chicken City livre vos plats pr{"\u00e9"}f{"\u00e9"}r{"\u00e9"}s dans plusieurs villes autour de
            Mer. Commandez nos{" "}
            <strong className="text-secondary">tenders maison</strong>,{" "}
            <strong className="text-secondary">burgers gourmands</strong> et{" "}
            <strong className="text-secondary">tacos savoureux</strong> o{"\u00f9"} que
            vous soyez !
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {cities.map((city, i) => (
            <motion.div
              key={city.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <Link
                href={`/livraison/${city.slug}`}
                className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 shadow-sm hover:shadow-md hover:bg-primary hover:border-primary border border-gray-100 transition-all duration-300 group"
              >
                <MapPin
                  size={16}
                  className="text-primary-dark shrink-0 group-hover:scale-110 group-hover:text-secondary transition-transform"
                />
                <span className="text-sm font-semibold text-secondary truncate">
                  {city.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
