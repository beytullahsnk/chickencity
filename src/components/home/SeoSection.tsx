"use client";

import { motion } from "framer-motion";
import { OrderButton } from "@/components/ui/OrderButton";

export function SeoSection() {
  return (
    <section className="py-16 bg-primary">
      <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl tracking-wide text-secondary">
            Chicken City {"\u2013"} Savourez le Meilleur Poulet Fait Maison {"\u00e0"} Mer
          </h2>
          <p className="leading-relaxed text-lg text-secondary/70">
            Savourez des{" "}
            <strong className="text-secondary">tenders faits maison croustillants</strong>
            , des{" "}
            <strong className="text-secondary">burgers gourmands</strong> et des{" "}
            <strong className="text-secondary">tacos g{"\u00e9"}n{"\u00e9"}reux</strong> chez Chicken
            City. Situ{"\u00e9"} {"\u00e0"} Mer, nous offrons des repas de qualit{"\u00e9"}, pr{"\u00ea"}ts {"\u00e0"} {"\u00ea"}tre
            savour{"\u00e9"}s sur place, {"\u00e0"} emporter ou en livraison. Faites l{"'"}exp{"\u00e9"}rience
            d{"'"}un{" "}
            <strong className="text-secondary">fast-food local</strong> o{"\u00f9"} la{" "}
            <strong className="text-secondary">fra{"\u00ee"}cheur et le go{"\u00fb"}t</strong>{" "}
            sont notre priorit{"\u00e9"}.
          </p>
          <p className="leading-relaxed text-secondary/70">
            Que vous soyez en famille, entre amis ou en solo,{" "}
            <strong className="text-secondary">Chicken City</strong> est
            l{"'"}endroit id{"\u00e9"}al pour un repas rapide et d{"\u00e9"}licieux. Commandez
            maintenant et profitez de nos{" "}
            <strong className="text-secondary">offres sp{"\u00e9"}ciales</strong> !
          </p>
          <div className="pt-2">
            <OrderButton
              variant="dark"
              label="Commandez"
              className="!px-8 !py-3.5 !text-sm"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
