"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { siteConfig } from "@/data/site";

export function ContactSection() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(siteConfig.email)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
            _subject: `Nouveau message de ${name} — ${siteConfig.name}`,
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      const data = await res.json();
      if (!res.ok || data.success === "false") {
        throw new Error(data.message || "Erreur r\u00e9seau");
      }

      toast.success("Message envoy\u00e9 avec succ\u00e8s !");
      form.reset();
    } catch (err) {
      if (process.env.NODE_ENV !== "production") {
        console.error("Contact form error:", err);
      }
      const msg = err instanceof Error ? err.message : "Erreur inconnue";
      toast.error(`Erreur lors de l'envoi : ${msg}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-20 bg-background-warm">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 mb-10"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Contactez Chicken City {"\u2013"} Fast-Food {"\u00e0"} Mer
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-secondary tracking-wide">
            UNE QUESTION ? ON VOUS {"\u00c9"}COUTE !
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              required
              placeholder="Nom"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Message"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-secondary font-bold uppercase tracking-wider py-3.5 rounded-xl hover:bg-primary-dark transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
          >
            <Send size={18} />
            {loading ? "Envoi en cours..." : "Envoyez"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
