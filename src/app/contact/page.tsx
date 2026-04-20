import type { Metadata } from "next";
import { ContactSection } from "@/components/home/ContactSection";
import { siteConfig } from "@/data/site";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Chicken City \u00e0 Mer (41500). Adresse, horaires, email et formulaire de contact.",
  alternates: {
    canonical: "https://chickencity41.fr/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="py-16 bg-background-warm">
        <div className="mx-auto max-w-4xl px-4 text-center space-y-4">
          <h1 className="font-display text-4xl sm:text-5xl text-secondary tracking-wide">
            CONTACTEZ-NOUS
          </h1>
          <p className="text-lg text-foreground-muted">
            Une question ? N{"'"}h{"\u00e9"}sitez pas {"\u00e0"} nous contacter.
          </p>
        </div>
      </section>

      {/* Info cards */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-5xl px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-background-warm rounded-xl p-5 text-center space-y-2">
            <MapPin className="mx-auto text-primary-dark" size={28} />
            <h3 className="font-bold text-secondary text-sm">Adresse</h3>
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground-muted hover:text-primary transition-colors"
            >
              {siteConfig.address.street}, {siteConfig.address.city}{" "}
              {siteConfig.address.postalCode}
            </a>
          </div>
          <div className="bg-background-warm rounded-xl p-5 text-center space-y-2">
            <Phone className="mx-auto text-primary-dark" size={28} />
            <h3 className="font-bold text-secondary text-sm">T{"\u00e9"}l{"\u00e9"}phone</h3>
            <a
              href={`tel:${siteConfig.phone}`}
              className="text-sm text-foreground-muted hover:text-primary transition-colors"
            >
              {siteConfig.phoneDisplay}
            </a>
          </div>
          <div className="bg-background-warm rounded-xl p-5 text-center space-y-2">
            <Mail className="mx-auto text-primary-dark" size={28} />
            <h3 className="font-bold text-secondary text-sm">Email</h3>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-foreground-muted hover:text-primary transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>
          <div className="bg-background-warm rounded-xl p-5 text-center space-y-2">
            <Clock className="mx-auto text-primary-dark" size={28} />
            <h3 className="font-bold text-secondary text-sm">Horaires</h3>
            <p className="text-sm text-foreground-muted">
              Lun-Sam : 11h30-14h15, 18h-22h30
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
