"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Truck,
  Clock,
  CreditCard,
  ChevronDown,
} from "lucide-react";
import type { CityData } from "@/data/cities";
import { siteConfig } from "@/data/site";
import { OrderButton } from "@/components/ui/OrderButton";
import { qualityItems } from "@/data/quality";
import { menuPreview } from "@/data/menu-preview";

interface FAQ {
  question: string;
  answer: string;
}

export function CityPageContent({ city, faqs }: { city: CityData; faqs: FAQ[] }) {
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
            Livraison Fast-Food {city.name} : Burgers, Tacos, Tenders, Kebab...
          </motion.h1>
          <p className="text-lg max-w-3xl mx-auto text-secondary/70">
            {city.heroText}
          </p>
          <OrderButton variant="dark" label="Commander maintenant" />
        </div>
      </section>

      {/* ══ MENU APERÇU ══ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-3 mb-10">
            <h2 className="font-display text-2xl sm:text-3xl text-secondary tracking-wide">
              D{"\u00e9"}couvrez Notre Menu : Burgers, Tacos, Poulet et Bien Plus {"\u00e0"} {city.name}
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">{city.menuIntro}</p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {menuPreview.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background-warm rounded-2xl overflow-hidden group hover:shadow-lg transition-all"
              >
                <div className="relative aspect-square bg-white overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.name} Livraison ${city.name} - Chicken City`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 320px"
                    className="object-contain p-6"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-display text-lg text-secondary">{item.name}</h3>
                  <p className="text-sm text-foreground-muted mt-1">{item.desc} livr{"\u00e9"} {"\u00e0"} {city.name} !</p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-foreground-muted mb-4">Consultez notre menu complet et passez votre commande en ligne d{"\u00e8"}s maintenant !</p>
          <div className="text-center">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center font-bold uppercase tracking-wider px-8 py-3 rounded-full text-sm transition-all duration-300 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white"
            >
              Voir le Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ INFOS PRATIQUES ══ */}
      <section className="py-16 bg-background-warm">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-3 mb-10">
            <h2 className="font-display text-2xl sm:text-3xl text-secondary tracking-wide">
              Informations Pratiques pour Votre Livraison {"\u00e0"} {city.name}
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              Pour profiter pleinement de notre service de livraison {"\u00e0"} {city.name}, retrouvez ici toutes les informations essentielles : horaires, d{"\u00e9"}lais, frais et conditions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Prix circle */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex justify-center">
              <div className="relative">
                <Image
                  src="/images/delivery-kitchen.webp"
                  alt={`Livraison ${city.name}`}
                  width={360}
                  height={480}
                  sizes="(max-width: 768px) 80vw, 360px"
                  className="rounded-2xl shadow-xl object-cover"
                />
                <div className="absolute -bottom-6 -right-6 rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-xl bg-primary">
                  <span className="font-display text-sm text-secondary">{city.name}</span>
                  <span className="font-display text-2xl text-secondary">{city.deliveryFee}</span>
                  <span className="text-[10px] font-semibold text-secondary/60">d{"\u00e8"}s {city.minimumOrder}</span>
                </div>
              </div>
            </motion.div>

            {/* Info cards */}
            <div className="space-y-4">
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-xl p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <Truck className="text-primary-dark mt-1 shrink-0" size={22} />
                  <div>
                    <h3 className="font-bold text-secondary">Temps de Livraison {"\u00e0"} {city.name}</h3>
                    <p className="text-sm text-foreground-muted mt-1">En moyenne {city.estimatedTime}. D{"\u00e9"}lais plus longs possibles le week-end.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-xl p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <Clock className="text-primary-dark mt-1 shrink-0" size={22} />
                  <div>
                    <h3 className="font-bold text-secondary">Horaires de Livraison</h3>
                    <div className="text-sm text-foreground-muted mt-1 space-y-0.5">
                      {siteConfig.openingHours.map((h) => (
                        <p key={h.day}>{h.day} : {h.lunch ? `${h.lunch}, ` : ""}{h.dinner}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white rounded-xl p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <CreditCard className="text-primary-dark mt-1 shrink-0" size={22} />
                  <div>
                    <h3 className="font-bold text-secondary">Frais de Livraison {"\u00e0"} {city.name}</h3>
                    <p className="text-sm text-foreground-muted mt-1">{city.deliveryFee} {"\u00e0"} partir de {city.minimumOrder} d{"'"}achat</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ QUALITÉ ══ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-3 mb-10">
            <h2 className="font-display text-2xl sm:text-3xl text-secondary tracking-wide">
              La Qualit{"\u00e9"} Chicken City : Vos Burgers, Tacos et Poulet Toujours D{"\u00e9"}licieux, M{"\u00ea"}me Livr{"\u00e9"}s {"\u00e0"} {city.name}
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              Nous sommes fiers de vous offrir une exp{"\u00e9"}rience gustative exceptionnelle, m{"\u00ea"}me en livraison {"\u00e0"} {city.name}. Nous mettons tout en {"\u0153"}uvre pour que nos plats conservent leur saveur et leur qualit{"\u00e9"}.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {qualityItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-background-warm rounded-2xl p-5 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary/20">
                    <Icon className="text-primary-dark" size={22} />
                  </div>
                  <h3 className="font-bold text-secondary text-sm">{item.title}</h3>
                  <p className="text-xs text-foreground-muted leading-relaxed">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="py-16 bg-background-warm">
        <div className="mx-auto max-w-3xl px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-3 mb-10">
            <h2 className="font-display text-2xl sm:text-3xl text-secondary tracking-wide">
              FAQ : R{"\u00e9"}ponses {"\u00e0"} Vos Questions sur la Livraison {"\u00e0"} {city.name}
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="bg-white rounded-xl shadow-sm overflow-hidden">
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
            Commandez Vos Burgers, Tacos et Poulet Chicken City {"\u00e0"} {city.name} et Savourez !
          </h2>
          <p className="text-secondary/70">
            N{"'"}attendez plus pour d{"\u00e9"}guster nos d{"\u00e9"}licieux burgers, tacos et poulet croustillant, pr{"\u00e9"}par{"\u00e9"}s {"\u00e0"} la commande avec des ingr{"\u00e9"}dients frais. Commandez d{"\u00e8"}s maintenant et profitez d{"'"}une livraison rapide {"\u00e0"} {city.name} !
          </p>
          <OrderButton variant="dark" label={`Commander en Ligne à ${city.name}`} />
        </div>
      </section>
    </div>
  );
}
