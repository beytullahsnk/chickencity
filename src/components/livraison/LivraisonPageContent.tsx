"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Clock,
  Truck,
  CreditCard,
  ChevronDown,
  Smartphone,
  ShoppingCart,
  CheckCircle,
  MapPinned,
  Wallet,
  Timer,
} from "lucide-react";
import { cities } from "@/data/cities";
import { siteConfig } from "@/data/site";
import { OrderButton } from "@/components/ui/OrderButton";
import { qualityItems } from "@/data/quality";

interface FAQ {
  question: string;
  answer: string;
}

/* ── Steps data ── */
const steps = [
  {
    icon: Smartphone,
    title: "Consultez notre menu en ligne",
    text: "D\u00e9couvrez notre large choix de burgers gourmands, tacos vari\u00e9s, tenders croustillants, salades fra\u00eeches et autres sp\u00e9cialit\u00e9s.",
  },
  {
    icon: ShoppingCart,
    title: "Choisissez vos plats et personnalisez",
    text: "S\u00e9lectionnez les plats qui vous font envie et personnalisez-les selon vos pr\u00e9f\u00e9rences (sauces, garnitures, options v\u00e9g\u00e9tariennes ou halal).",
  },
  {
    icon: CheckCircle,
    title: "Ajoutez vos plats au panier",
    text: "V\u00e9rifiez votre commande. N'oubliez pas nos desserts et boissons pour un repas complet !",
  },
  {
    icon: MapPinned,
    title: "Renseignez votre adresse de livraison",
    text: "Indiquez votre adresse avec pr\u00e9cision pour une livraison rapide et efficace.",
  },
  {
    icon: Wallet,
    title: "Choisissez votre mode de paiement",
    text: "Payez en ligne de mani\u00e8re s\u00e9curis\u00e9e (CB, PayPal) ou \u00e0 la livraison (esp\u00e8ces, CB, tickets restaurant).",
  },
  {
    icon: Timer,
    title: "Validez et patientez",
    text: "Confirmez votre commande et suivez son \u00e9volution en temps r\u00e9el. Livraison en 30-45 min !",
  },
];

export function LivraisonPageContent({ faqs }: { faqs: FAQ[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-20">
      {/* ══ HERO ══ */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-wide text-secondary"
          >
            Livraison Chicken City : Votre Fast-Food {"\u00e0"} Domicile autour de Mer
          </motion.h1>
          <p className="text-lg max-w-3xl mx-auto text-secondary/70">
            Chicken City, votre fast-food pr{"\u00e9"}f{"\u00e9"}r{"\u00e9"} {"\u00e0"} Mer et ses environs, vous propose un service de livraison rapide et fiable. Savourez nos <strong className="text-secondary">d{"\u00e9"}licieux burgers</strong>, <strong className="text-secondary">tacos</strong>, <strong className="text-secondary">poulet pan{"\u00e9"} maison</strong> et autres sp{"\u00e9"}cialit{"\u00e9"}s, livr{"\u00e9"}s directement {"\u00e0"} votre domicile.
          </p>
          <OrderButton variant="dark" label="Commander en ligne" />
        </div>
      </section>

      {/* ══ ZONES DE LIVRAISON ══ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-3 mb-10">
            <h2 className="font-display text-2xl sm:text-3xl text-secondary tracking-wide">
              Zones de Livraison : O{"\u00f9"} Chicken City Vous R{"\u00e9"}gale
            </h2>
            <p className="text-foreground-muted">Chicken City livre dans un large secteur autour de Mer. Retrouvez ci-dessous la liste compl{"\u00e8"}te des villes desservies.</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {cities.map((city, i) => (
              <motion.div key={city.slug} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}>
                <Link
                  href={`/livraison/${city.slug}`}
                  className="flex items-center gap-2 bg-background-warm rounded-xl px-4 py-3 shadow-sm hover:shadow-md hover:bg-primary/30 hover:border-primary border border-gray-100 transition-all group"
                >
                  <MapPin size={14} className="text-primary-dark shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-semibold text-secondary truncate">{city.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ COMMENT COMMANDER ══ */}
      <section className="py-16 bg-background-warm">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-3 mb-12">
            <h2 className="font-display text-2xl sm:text-3xl text-secondary tracking-wide">
              Comment Commander : Simple et Rapide
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              Commander chez Chicken City n{"'"}a jamais {"\u00e9"}t{"\u00e9"} aussi facile ! Suivez ces quelques {"\u00e9"}tapes simples pour savourer nos d{"\u00e9"}licieux burgers, tacos, poulet maison et bien plus encore.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm bg-primary">
                      {i + 1}
                    </div>
                    <Icon size={22} className="text-primary-dark" />
                  </div>
                  <h3 className="font-bold text-secondary">{step.title}</h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">{step.text}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/menus"
              className="inline-flex items-center justify-center font-bold uppercase tracking-wider px-8 py-3 rounded-full text-sm transition-all duration-300 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white"
            >
              Voir le menu →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ INFOS PRATIQUES ══ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-3 mb-10">
            <h2 className="font-display text-2xl sm:text-3xl text-secondary tracking-wide">
              Informations Pratiques : Tout Savoir sur Notre Livraison
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              Retrouvez ici toutes les informations concernant nos horaires, d{"\u00e9"}lais, frais et conditions de livraison.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Temps */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl p-6 text-center space-y-3 bg-primary">
              <Truck size={36} className="mx-auto text-secondary" />
              <h3 className="font-display text-xl text-secondary">Temps de Livraison</h3>
              <p className="text-sm font-semibold text-secondary/70">30-45 minutes selon votre localisation</p>
            </motion.div>

            {/* Horaires */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-2xl p-6 text-center space-y-3 bg-secondary">
              <Clock size={36} className="mx-auto text-primary" />
              <h3 className="font-display text-xl text-primary">Horaires de Livraison</h3>
              <div className="text-sm text-gray-300 space-y-0.5">
                {siteConfig.openingHours.map((h) => (
                  <p key={h.day}>{h.day} : {h.lunch ? `${h.lunch}, ` : ""}{h.dinner}</p>
                ))}
              </div>
            </motion.div>

            {/* Frais */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="rounded-2xl p-6 text-center space-y-3 bg-accent">
              <CreditCard size={36} className="mx-auto text-white" />
              <h3 className="font-display text-xl text-white">Frais de Livraison</h3>
              <p className="text-sm text-white/90">Les frais varient selon votre zone de livraison, {"\u00e0"} partir de <strong className="text-white">2,90{"\u20ac"}</strong></p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ QUALITÉ ══ */}
      <section className="py-16 bg-background-warm">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/delivery-kitchen.webp"
                alt="Préparation en cuisine Chicken City"
                fill
                sizes="(max-width: 1024px) 90vw, 50vw"
                className="object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <h2 className="font-display text-2xl sm:text-3xl text-secondary tracking-wide">
                La Qualit{"\u00e9"} Chicken City : M{"\u00ea"}me Livr{"\u00e9"}e, Toujours D{"\u00e9"}licieuse
              </h2>
              <p className="text-foreground-muted leading-relaxed">
                Nous sommes fiers de vous offrir des plats de qualit{"\u00e9"}, pr{"\u00e9"}par{"\u00e9"}s avec des ingr{"\u00e9"}dients frais et savoureux. Nous mettons tout en {"\u0153"}uvre pour que votre repas reste d{"\u00e9"}licieux, m{"\u00ea"}me livr{"\u00e9"} chez vous.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {qualityItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="bg-white rounded-xl p-4 space-y-2 shadow-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-primary/20">
                          <Icon size={18} className="text-primary-dark" />
                        </div>
                        <h3 className="font-bold text-secondary text-sm">{item.title}</h3>
                      </div>
                      <p className="text-xs text-foreground-muted leading-relaxed">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-3 mb-10">
            <h2 className="font-display text-2xl sm:text-3xl text-secondary tracking-wide">
              FAQ : R{"\u00e9"}ponses {"\u00e0"} Vos Questions sur la Livraison
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-background-warm rounded-xl shadow-sm overflow-hidden"
              >
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                  <h3 className="font-semibold text-secondary text-sm sm:text-base pr-4">{faq.question}</h3>
                  <ChevronDown size={20} className={`text-primary-dark shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm text-foreground-muted leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA FINAL ══ */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-3xl px-4 text-center space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl tracking-wide text-secondary">
            Commandez et Profitez !
          </h2>
          <p className="text-secondary/70">
            N{"'"}attendez plus pour savourer les d{"\u00e9"}licieux plats de Chicken City, livr{"\u00e9"}s directement chez vous ! Commandez en ligne d{"\u00e8"}s maintenant et profitez d{"'"}une exp{"\u00e9"}rience fast-food gourmande et pratique.
          </p>
          <OrderButton variant="dark" label="Commander en Ligne" />
        </div>
      </section>
    </div>
  );
}
