import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { OrderButton } from "@/components/ui/OrderButton";

export const metadata: Metadata = {
  title: "Restaurant Halal \u00e0 Mer (41500) | Chicken City",
  description:
    "Chicken City \u00e0 Mer, votre restaurant fast-food 100% halal. Poulet fait maison, burgers, tacos, tenders et plus. Viandes halal certifi\u00e9es, pr\u00e9par\u00e9es fra\u00eeches chaque jour. Livraison et \u00e0 emporter.",
  alternates: {
    canonical: "https://chickencity41.fr/halal",
  },
};

export default function HalalPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="mx-auto max-w-5xl px-4 text-center space-y-6">
          <h1
            className="font-display tracking-wide leading-tight text-secondary"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Chicken City {"\u2013"} Restaurant Fast-Food Halal {"\u00e0"} Mer (41500)
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-secondary/65">
            Chez Chicken City, toutes nos <strong className="text-secondary">viandes sont certifi{"\u00e9"}es halal</strong>. Nous nous engageons {"\u00e0"} vous proposer des produits de qualit{"\u00e9"}, pr{"\u00e9"}par{"\u00e9"}s avec soin et respect des traditions.
          </p>
          <OrderButton variant="dark" label="Commander en ligne" />
        </div>
      </section>

      {/* Engagement halal */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-display text-2xl sm:text-3xl text-secondary tracking-wide">
              Notre Engagement Halal
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              Depuis notre ouverture, Chicken City s{"'"}engage {"\u00e0"} proposer exclusivement des viandes halal certifi{"\u00e9"}es. Cet engagement est au c{"\u0153"}ur de notre identit{"\u00e9"} et de nos valeurs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "\u2705", title: "Viandes Certifi\u00e9es Halal", text: "Toutes nos viandes sont issues de fournisseurs certifi\u00e9s halal. Nous exigeons les certificats de conformit\u00e9 et veillons \u00e0 leur validit\u00e9 en permanence." },
              { icon: "\uD83C\uDF57", title: "Poulet Fait Maison", text: "Notre poulet est pr\u00e9par\u00e9 chaque jour sur place. Tenders, wings et escalopes sont pan\u00e9s et cuisin\u00e9s maison, jamais surgel\u00e9s, pour un go\u00fbt authentique." },
              { icon: "\uD83E\uDD57", title: "Ingr\u00e9dients Frais", text: "Au-del\u00e0 de la viande, nous s\u00e9lectionnons des ingr\u00e9dients frais et de qualit\u00e9 : l\u00e9gumes, pains, sauces maison, fromages... Tout est pens\u00e9 pour votre plaisir." },
              { icon: "\uD83D\uDED2", title: "Tra\u00e7abilit\u00e9 Garantie", text: "Nous assurons une tra\u00e7abilit\u00e9 compl\u00e8te de nos produits, de la ferme \u00e0 votre assiette. Nos fournisseurs sont s\u00e9lectionn\u00e9s avec le plus grand soin." },
              { icon: "\uD83D\uDE4C", title: "Respect des Traditions", text: "Nous respectons les traditions et exigences du halal dans toute notre cha\u00eene de pr\u00e9paration, de la r\u00e9ception des mati\u00e8res premi\u00e8res jusqu'au service." },
              { icon: "\uD83D\uDEF5", title: "Livraison Halal", text: "Profitez de notre service de livraison \u00e0 domicile dans plus de 15 villes autour de Mer. Vos plats halal livr\u00e9s chauds et frais directement chez vous." },
            ].map((c) => (
              <div key={c.title} className="bg-background-warm rounded-2xl p-6 space-y-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/20">
                  <span className="text-2xl">{c.icon}</span>
                </div>
                <h3 className="font-bold text-secondary">{c.title}</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre carte halal */}
      <section className="py-16 bg-background-warm">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-display text-2xl sm:text-3xl text-secondary tracking-wide">
              Notre Carte 100% Halal
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              D{"\u00e9"}couvrez l{"'"}ensemble de nos produits, tous pr{"\u00e9"}par{"\u00e9"}s avec des viandes halal certifi{"\u00e9"}es.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: "Burgers Halal", desc: "Steaks halal 100g ou 180g, tenders maison, pain artisanal", img: "/images/menu/Gourmet Burger.webp" },
              { name: "Tacos Halal", desc: "Viandes halal au choix, frites, fromage, sauce fromag\u00e8re maison", img: "/images/menu/Tacos.webp" },
              { name: "Poulet Halal", desc: "Tenders et wings pan\u00e9s maison, poulet frais certifi\u00e9 halal", img: "/images/menu/Sides - Tenders.webp" },
              { name: "Rolls Halal", desc: "Wraps garnis de tenders halal, crudit\u00e9s fra\u00eeches, sauces maison", img: "/images/menu/Chicken Roll.webp" },
            ].map((item) => (
              <div key={item.name} className="bg-white rounded-2xl overflow-hidden group hover:shadow-lg transition-all">
                <div className="relative aspect-square bg-white overflow-hidden">
                  <Image
                    src={item.img}
                    alt={`${item.name} | Chicken City Mer`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-contain p-6"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-display text-lg text-secondary">{item.name}</h3>
                  <p className="text-xs text-foreground-muted mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/menus"
              className="inline-flex items-center justify-center font-bold uppercase tracking-wider px-8 py-3 rounded-full text-sm transition-all duration-300 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white"
            >
              Voir tout le menu →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Halal */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-display text-2xl sm:text-3xl text-secondary tracking-wide text-center mb-10">
            Questions sur le Halal chez Chicken City
          </h2>

          <div className="space-y-4">
            {[
              { q: "Chicken City est-il un restaurant halal ?", a: "Oui, Chicken City est un restaurant 100% halal. Toutes nos viandes sont certifi\u00e9es halal et nous ne proposons aucun produit non halal dans notre carte." },
              { q: "D'o\u00f9 proviennent vos viandes halal ?", a: "Nos viandes proviennent de fournisseurs fran\u00e7ais certifi\u00e9s halal. Nous exigeons les certificats de conformit\u00e9 et veillons \u00e0 leur renouvellement r\u00e9gulier." },
              { q: "Le poulet est-il vraiment fait maison ?", a: "Oui, notre poulet est pan\u00e9 et pr\u00e9par\u00e9 chaque jour sur place \u00e0 partir de filets de poulet frais halal. Rien n'est surgel\u00e9, tout est fait maison." },
              { q: "Proposez-vous des options v\u00e9g\u00e9tariennes ?", a: "Oui, nous proposons \u00e9galement des options v\u00e9g\u00e9tariennes : salades, paninis fromage, et accompagnements sans viande." },
              { q: "La livraison est-elle disponible pour les plats halal ?", a: "Oui, l'ensemble de notre carte halal est disponible en livraison dans plus de 15 villes autour de Mer (41500). Commandez en ligne et recevez vos plats chauds directement chez vous." },
            ].map((faq, i) => (
              <div key={i} className="bg-background-warm rounded-xl p-5">
                <h3 className="font-bold text-secondary text-sm">{faq.q}</h3>
                <p className="text-sm text-foreground-muted mt-2 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-3xl px-4 text-center space-y-6">
          <h2 className="font-display text-2xl sm:text-3xl tracking-wide text-secondary">
            Savourez du Halal Fait Maison chez Chicken City
          </h2>
          <p className="text-secondary/65">
            Commandez en ligne et profitez de notre cuisine halal pr{"\u00e9"}par{"\u00e9"}e avec passion {"\u00e0"} Mer. Livraison rapide ou {"\u00e0"} emporter.
          </p>
          <OrderButton variant="dark" label="Commander maintenant" />
        </div>
      </section>
    </div>
  );
}
