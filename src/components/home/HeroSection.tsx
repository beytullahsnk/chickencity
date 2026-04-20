"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { OrderButton } from "@/components/ui/OrderButton";

// Network Information API type (not in default DOM lib types)
interface NetworkInformation {
  saveData?: boolean;
  effectiveType?: "slow-2g" | "2g" | "3g" | "4g";
  downlink?: number;
}

export function HeroSection() {
  // loadVideo = show <video>, otherwise show <Image> poster.
  // Desktop: load immediately (bonne BP, pas de souci batterie).
  // Mobile: progressive enhancement — on attend window.load + 2s, puis on checke
  // navigator.connection (saveData / effectiveType / downlink) avant de charger
  // la vidéo. Respecte les Core Web Vitals et le mode économie données.
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 1024px)");

    // Desktop : chargement immédiat
    if (mq.matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-shot client init
      setLoadVideo(true);
      return;
    }

    // Mobile : on attend le load complet + délai, puis on check la connexion
    const tryLoadAfterReady = () => {
      const c = (navigator as Navigator & { connection?: NetworkInformation })
        .connection;
      if (c) {
        if (c.saveData) return; // respect mode éco données
        if (c.effectiveType && c.effectiveType !== "4g") return; // 2g / 3g / slow-2g
        if (typeof c.downlink === "number" && c.downlink < 1.5) return;
      }
      // Safari iOS / Firefox mobile n'exposent pas navigator.connection →
      // fallback libéral (charge la vidéo après délai).
      setLoadVideo(true);
    };

    const schedule = () => window.setTimeout(tryLoadAfterReady, 2000);

    if (document.readyState === "complete") {
      schedule();
    } else {
      window.addEventListener("load", schedule, { once: true });
    }

    // Support tablette qui passe en landscape ≥1024px pendant la session
    const onResize = () => {
      if (mq.matches) setLoadVideo(true);
    };
    mq.addEventListener("change", onResize);
    return () => mq.removeEventListener("change", onResize);
  }, []);

  return (
    <section
      className="relative overflow-hidden pt-20 bg-primary"
      style={{
        backgroundImage: "url(/images/bg-hero.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 w-full py-12 pb-20 lg:py-20 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 order-2 lg:order-1"
          >
            <h1
              className="font-display tracking-wide leading-tight text-secondary"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            >
              Chicken City {"\u2013"} Le Meilleur Fast-Food au Poulet Fait Maison {"\u00e0"} Mer (41500)
            </h1>

            <h2 className="text-base sm:text-lg leading-relaxed text-secondary/60">
              D{"\u00e9"}couvrez nos sp{"\u00e9"}cialit{"\u00e9"}s :{" "}
              <strong className="text-secondary">poulet fait maison</strong>,{" "}
              <strong className="text-secondary">burgers</strong>,{" "}
              <strong className="text-secondary">tacos</strong>, et plus ! Livraison {"\u00e0"} domicile, sur place ou {"\u00e0"} emporter.
            </h2>

            <div className="flex flex-wrap gap-3 items-center">
              <OrderButton
                variant="dark"
                label="Commander en ligne"
                className="!px-8 !py-3.5 !text-sm"
              />
              <Link
                href="/menu"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider border-2 border-secondary text-secondary transition-all duration-300 hover:bg-secondary hover:text-white"
              >
                Voir le menu
              </Link>
            </div>
          </motion.div>

          {/* Video (desktop immediate / mobile after load) with fade-in */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="order-1 lg:order-2"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/40 aspect-[4/3] relative">
              {/* Poster image (toujours rendu pour LCP rapide) */}
              <Image
                src="/images/hero-poster.webp"
                alt="Chicken City Mer — burgers, tacos et poulet fait maison"
                fill
                sizes="(max-width: 1024px) 90vw, 50vw"
                priority
                className={`object-cover transition-opacity duration-500 ${
                  loadVideo ? "opacity-0" : "opacity-100"
                }`}
              />
              {/* Video superposée avec fade-in quand éligible */}
              {loadVideo && (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/images/hero-poster.webp"
                  aria-label="Chicken City — présentation de nos plats"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100"
                >
                  <source src="/videos/hero.mp4" type="video/mp4" />
                </video>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
