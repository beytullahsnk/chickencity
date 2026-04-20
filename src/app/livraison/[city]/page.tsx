import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities, getCityBySlug } from "@/data/cities";
import { siteConfig } from "@/data/site";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateCityDeliverySchema,
} from "@/lib/schema";
import { CityPageContent } from "@/components/livraison/CityPageContent";

export async function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: `${siteConfig.url}/livraison/${city.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: city.metaTitle,
      description: city.metaDescription,
    },
    alternates: {
      canonical: `${siteConfig.url}/livraison/${city.slug}`,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const faqs = [
    {
      question: `O\u00f9 Chicken City livre-t-il ses d\u00e9licieux burgers, tacos et poulet pan\u00e9 \u00e0 ${city.name} ?`,
      answer: `Chicken City assure la livraison de ses savoureux burgers, tacos et poulet pan\u00e9 maison dans toute la ville de ${city.name}. Nous couvrons tous les quartiers de ${city.name} et ses environs imm\u00e9diats. Consultez notre carte interactive ou contactez-nous pour v\u00e9rifier si votre adresse \u00e0 ${city.name} est \u00e9ligible \u00e0 la livraison.`,
    },
    {
      question: `Quels sont les horaires de livraison de Chicken City \u00e0 ${city.name} pour les burgers, tacos et poulet ?`,
      answer: `Nos horaires de livraison \u00e0 ${city.name} : Lundi-Jeudi 11h30-14h15, 18h00-22h15 | Vendredi 11h30-14h00, 18h00-22h30 | Samedi 11h30-14h15, 18h00-22h30 | Dimanche 17h30-22h00. Les horaires peuvent varier les jours f\u00e9ri\u00e9s.`,
    },
    {
      question: `Combien co\u00fbte la livraison de burgers, tacos et poulet avec Chicken City \u00e0 ${city.name} ?`,
      answer: `La livraison de vos burgers, tacos et poulet Chicken City \u00e0 ${city.name} co\u00fbte ${city.deliveryFee} pour toute commande \u00e0 partir de ${city.minimumOrder}. La livraison est con\u00e7ue pour \u00eatre accessible et abordable.`,
    },
    {
      question: `Quel est le d\u00e9lai de livraison estim\u00e9 pour ma commande Chicken City \u00e0 ${city.name} ?`,
      answer: `Les d\u00e9lais de livraison estim\u00e9s \u00e0 ${city.name} sont g\u00e9n\u00e9ralement de ${city.estimatedTime} en moyenne. Les d\u00e9lais peuvent \u00eatre plus longs le week-end.`,
    },
    {
      question: `Comment puis-je payer ma commande Chicken City en livraison \u00e0 ${city.name} ?`,
      answer: `Vous pouvez r\u00e9gler votre commande en livraison \u00e0 ${city.name} en esp\u00e8ces, par carte bancaire ou avec des titres restaurant. Nous acceptons \u00e9galement les paiements en ligne s\u00e9curis\u00e9s.`,
    },
    {
      question: `Comment puis-je suivre l'\u00e9tat de ma livraison Chicken City \u00e0 ${city.name} ?`,
      answer: `Une fois votre commande valid\u00e9e, vous recevrez une confirmation avec un num\u00e9ro de suivi pour suivre l'\u00e9volution de votre livraison en temps r\u00e9el \u00e0 ${city.name}.`,
    },
    {
      question: `Que se passe-t-il si ma livraison Chicken City arrive en retard ou si un plat est manquant \u00e0 ${city.name} ?`,
      answer: `Chez Chicken City, nous mettons tout en \u0153uvre pour garantir une livraison rapide et conforme \u00e0 ${city.name}. Si vous rencontrez un probl\u00e8me, contactez-nous imm\u00e9diatement au ${siteConfig.phoneDisplay}.`,
    },
    {
      question: `Chicken City propose-t-il la livraison sans contact \u00e0 ${city.name} ?`,
      answer: `Oui, Chicken City propose la livraison sans contact \u00e0 ${city.name} pour votre s\u00e9curit\u00e9 et votre confort. Pr\u00e9cisez-le lors de votre commande.`,
    },
  ];

  const breadcrumbs = [
    { name: "Accueil", url: "/" },
    { name: "Livraison", url: "/livraison" },
    { name: city.name, url: `/livraison/${city.slug}` },
  ];

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateCityDeliverySchema(city)) }}
      />
      <CityPageContent city={city} faqs={faqs} />
    </>
  );
}
