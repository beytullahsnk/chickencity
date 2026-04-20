"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { siteConfig } from "@/data/site";
import { googleReviews, reviewStats } from "@/data/reviews";

function Stars({ rating }: { rating: number }) {
  return (
    <div
      role="img"
      aria-label={`${rating} étoiles sur 5`}
      className="flex gap-0.5"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          aria-hidden="true"
          className={i < rating ? "fill-primary text-primary" : "fill-gray-200 text-gray-200"}
        />
      ))}
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true" className="shrink-0">
      <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.9 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2 1.4-4.5 2.4-7.2 2.4-5.2 0-9.6-3.1-11.3-7.5l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.1 5.7l6.2 5.2C41 35.8 44 30.3 44 24c0-1.3-.1-2.6-.4-3.9z" />
    </svg>
  );
}

export function GoogleReviews() {
  const googleBusinessUrl = siteConfig.mapsUrl;
  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("fr-FR", { month: "long", year: "numeric" });

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl text-secondary tracking-wide">
            Ce que disent nos clients
          </h2>

          {/* Note moyenne */}
          <div className="inline-flex items-center gap-3 bg-background-warm rounded-full px-5 py-2.5">
            <GoogleLogo />
            <span className="font-bold text-secondary text-lg">
              {reviewStats.average.toFixed(1)}
            </span>
            <Stars rating={Math.round(reviewStats.average)} />
            <span className="text-foreground-muted text-sm">
              ({reviewStats.count} avis)
            </span>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {googleReviews.map((review, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-background-warm rounded-2xl p-5 space-y-3 border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center font-bold text-secondary text-sm">
                  {review.author.charAt(0)}
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-secondary text-sm truncate">{review.author}</p>
                  <p className="text-xs text-foreground-muted capitalize">
                    {formatDate(review.date)}
                  </p>
                </div>
              </div>
              <Stars rating={review.rating} />
              <p className="text-sm text-secondary/80 leading-relaxed">
                « {review.text} »
              </p>
              <div className="flex items-center gap-1.5 pt-1 text-xs text-foreground-muted">
                <GoogleLogo />
                <span>Avis Google</span>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={googleBusinessUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold uppercase tracking-wider px-8 py-3 rounded-full text-sm border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
          >
            <GoogleLogo />
            Voir tous les avis sur Google
          </a>
        </div>
      </div>
    </section>
  );
}
