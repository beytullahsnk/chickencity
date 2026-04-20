"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { OrderButton } from "@/components/ui/OrderButton";

export function DeliverySection() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[500px] lg:min-h-[600px]">
          {/* Image — style portrait avec bordure blanche */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <div
              className="relative rounded-md overflow-hidden shadow-2xl border-[6px] border-white/50"
              style={{
                width: "380px",
                height: "480px",
              }}
            >
              <Image
                src="/images/delivery-kitchen.webp"
                alt="Préparation en cuisine | Chicken City Mer"
                fill
                sizes="(max-width: 1024px) 90vw, 380px"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Texte — identique à l'inspi */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-right space-y-5"
          >
            <h2
              className="font-display leading-[0.95] tracking-wide text-white"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                textShadow: "2px 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              COMMANDEZ
              <span className="block">EN LIVRAISON</span>
              <span className="block">MAINTENANT</span>
            </h2>
            <p className="text-lg italic text-white/80">
              On garde {"\u00e7"}a entre nous...
            </p>
            <div className="pt-2">
              <OrderButton variant="dark" label="Commander maintenant" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
