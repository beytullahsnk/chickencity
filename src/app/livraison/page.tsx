import type { Metadata } from "next";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { LivraisonPageContent } from "@/components/livraison/LivraisonPageContent";

export const metadata: Metadata = {
  title: "Livraison Chicken City : Votre Fast-Food \u00e0 Domicile autour de Mer",
  description:
    "Livraison rapide de fast-food \u00e0 Mer et ses environs. Burgers, tacos, poulet fait maison, salades, bowls. Commandez en ligne chez Chicken City !",
  alternates: {
    canonical: "https://chickencity41.fr/livraison",
  },
};

const faqs = [
  {
    question: "Dans quelles villes Chicken City livre-t-il ses d\u00e9licieux burgers, tacos et poulet maison ?",
    answer: "Chicken City assure la livraison de ses savoureux plats dans les villes suivantes : Mer, Su\u00e8vres, Muides-sur-Loire, Courbouzon, Saint-Dy\u00e9, La Chapelle-Saint-Martin-en-Plaine, Villexanton, Avaray, Lestiou, Josnes, Nouan-sur-Loire, Talcy, Saint-Laurent-Nouan, Menars et S\u00e9ris.",
  },
  {
    question: "Quels sont les horaires de livraison de Chicken City ?",
    answer: "Lundi-Jeudi : 11h30-14h15, 18h00-22h15 | Vendredi : 11h30-14h00, 18h00-22h30 | Samedi : 11h30-14h15, 18h00-22h30 | Dimanche : 17h30-22h00. Les horaires peuvent varier les jours f\u00e9ri\u00e9s.",
  },
  {
    question: "Combien co\u00fbte la livraison avec Chicken City ?",
    answer: "Les frais de livraison varient en fonction de votre zone de livraison, \u00e0 partir de 2,90\u20ac.",
  },
  {
    question: "Quel est le d\u00e9lai de livraison estim\u00e9 pour ma commande Chicken City ?",
    answer: "Nos d\u00e9lais de livraison varient en fonction de votre localisation, de l'affluence et des conditions de circulation. En g\u00e9n\u00e9ral, comptez 30 \u00e0 45 minutes.",
  },
  {
    question: "Comment puis-je payer ma commande Chicken City en livraison ?",
    answer: "Vous pouvez r\u00e9gler en esp\u00e8ces, par carte bancaire, avec des titres restaurant ou par paiement en ligne s\u00e9curis\u00e9.",
  },
  {
    question: "Comment puis-je suivre l'\u00e9tat de ma commande Chicken City ?",
    answer: "Une fois votre commande valid\u00e9e, vous recevrez une confirmation avec un num\u00e9ro de suivi pour suivre l'\u00e9volution de votre livraison en temps r\u00e9el.",
  },
  {
    question: "Que se passe-t-il si ma commande Chicken City arrive en retard ou si un plat est manquant ?",
    answer: "Contactez-nous imm\u00e9diatement au 02 54 45 14 26. Nous ferons le n\u00e9cessaire pour r\u00e9soudre la situation dans les plus brefs d\u00e9lais.",
  },
  {
    question: "Chicken City propose-t-il la livraison sans contact ?",
    answer: "Oui, Chicken City propose la livraison sans contact pour votre s\u00e9curit\u00e9 et votre confort. Pr\u00e9cisez-le lors de votre commande.",
  },
];

const breadcrumbs = [
  { name: "Accueil", url: "/" },
  { name: "Livraison", url: "/livraison" },
];

export default function LivraisonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }}
      />
      <LivraisonPageContent faqs={faqs} />
    </>
  );
}
