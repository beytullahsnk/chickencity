import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { cities } from "@/data/cities";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52V6.84a4.84 4.84 0 0 1-1-.15z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-full">
                <Image
                  src="/images/logo-footer.webp"
                  alt={`Logo ${siteConfig.name}`}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-display text-2xl text-primary tracking-wide">
                CHICKEN CITY
              </span>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              Fast-food sp{"\u00e9"}cialis{"\u00e9"} en poulet fait maison {"\u00e0"} Mer (41500). Tenders, burgers, tacos et plus encore !
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display text-xl text-primary mb-4 tracking-wide">
              LIENS UTILES
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/menu"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  Notre Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/halal"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  Halal
                </Link>
              </li>
              <li>
                <Link
                  href="/livraison"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  Livraison
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Delivery zones */}
          <div>
            <h3 className="font-display text-xl text-primary mb-4 tracking-wide">
              ZONES DE LIVRAISON
            </h3>
            <ul className="space-y-1">
              {cities.slice(0, 8).map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/livraison/${city.slug}`}
                    className="text-sm text-gray-300 hover:text-primary transition-colors"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/livraison"
                  className="text-sm text-primary hover:text-primary-light transition-colors font-semibold"
                >
                  Voir toutes les villes →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-xl text-primary mb-4 tracking-wide">
              CONTACT
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  {siteConfig.address.street}, {siteConfig.address.city}{" "}
                  {siteConfig.address.postalCode}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-4 mt-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-400">
            &copy; Chicken City {new Date().getFullYear()}. Tous droits r{"\u00e9"}serv{"\u00e9"}s.
            Conception web par{" "}
            <a
              href="https://skyaksa.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2 hover:text-primary-light transition-colors"
            >
              SKYAKSA
            </a>
          </p>
          <div className="flex gap-4 text-xs text-gray-400">
            <Link
              href="/mentions-legales"
              className="hover:text-primary transition-colors"
            >
              Mentions l{"\u00e9"}gales
            </Link>
            <Link
              href="/cgv"
              className="hover:text-primary transition-colors"
            >
              CGV
            </Link>
            <Link
              href="/donnees-personnelles"
              className="hover:text-primary transition-colors"
            >
              Donn{"\u00e9"}es personnelles
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
