import { siteConfig } from "@/data/site";
import type { CityData } from "@/data/cities";
import { menuItems, menuCategories, type MenuCategory } from "@/data/menu";
import { googleReviews, reviewStats } from "@/data/reviews";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    image: `${siteConfig.url}${siteConfig.logo}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: siteConfig.email,
      telephone: siteConfig.phone,
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.tiktok,
    ],
  };
}

export function generateRestaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FastFoodRestaurant",
    name: siteConfig.name,
    image: `${siteConfig.url}${siteConfig.logo}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    telephone: siteConfig.phone,
    url: siteConfig.url,
    hasMap: siteConfig.mapsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "17:30",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "11:30",
        closes: "14:15",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "18:00",
        closes: "22:15",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "11:30",
        closes: "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "18:00",
        closes: "22:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "11:30",
        closes: "14:15",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "18:00",
        closes: "22:30",
      },
    ],
    priceRange: siteConfig.priceRange,
    description:
      "Chicken City est un fast-food spécialisé dans le poulet fait maison à Mer (41500). Découvrez nos tenders maison, burgers, tacos et bien plus, disponibles sur place, à emporter ou en livraison.",
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    servesCuisine: siteConfig.servesCuisine,
    menu: siteConfig.url,
    acceptsReservations: true,
    paymentAccepted: [
      "Cartes de crédit",
      "Cartes de débit",
      "Paiements mobiles NFC",
      "Pluxee",
      "Ticket Restaurant",
    ],
    areaServed: siteConfig.areaServed,
    hasDelivery: true,
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateHeroVideoSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Chicken City \u2014 Fast-Food Poulet Fait Maison \u00e0 Mer",
    description:
      "D\u00e9couvrez Chicken City, restaurant fast-food \u00e0 Mer (41500) : burgers gourmands, tacos g\u00e9n\u00e9reux, poulet pan\u00e9 fait maison et viandes halal. Livraison, sur place ou \u00e0 emporter.",
    thumbnailUrl: `${siteConfig.url}/images/hero-poster.webp`,
    contentUrl: `${siteConfig.url}/videos/hero.mp4`,
    uploadDate: "2024-01-01",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}${siteConfig.logo}`,
      },
    },
  };
}

export function generateMenuSchema() {
  const categoryLabels: Record<MenuCategory, string> = {
    burgers: "Burgers",
    tacos: "Tacos",
    bowls: "Bowls",
    rolls: "Rolls",
    sides: "Sides",
    paninis: "Paninis",
    salades: "Salades",
    familial: "Menus familiaux",
    enfant: "Menu Enfant",
    desserts: "Desserts",
    sauces: "Sauces",
  };

  const sections = menuCategories.map((cat) => {
    const items = menuItems
      .filter((item) => item.category === cat.id && item.price)
      .map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        description: item.description,
        image: `${siteConfig.url}${item.image}`,
        offers: {
          "@type": "Offer",
          price: item.price!.replace("\u20ac", "").replace(",", ".").trim(),
          priceCurrency: "EUR",
        },
      }));
    return {
      "@type": "MenuSection",
      name: categoryLabels[cat.id] || cat.label,
      hasMenuItem: items,
    };
  }).filter((s) => s.hasMenuItem.length > 0);

  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "Menu Chicken City",
    description:
      "Carte compl\u00e8te Chicken City \u00e0 Mer : burgers, tacos, bowls, rolls, sides, paninis, salades, menus familiaux et enfant, desserts.",
    hasMenuSection: sections,
  };
}

export function generateAggregateRatingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${siteConfig.url}#restaurant`,
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.logo}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviewStats.average.toFixed(1),
      reviewCount: reviewStats.count,
      bestRating: "5",
      worstRating: "1",
    },
    review: googleReviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      datePublished: r.date,
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: "5",
      },
      reviewBody: r.text,
    })),
  };
}

export function generateCityDeliverySchema(city: CityData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Food Delivery",
    provider: {
      "@type": "FastFoodRestaurant",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    description: `Livraison de fast-food à ${city.name} par Chicken City. Burgers, tacos, poulet fait maison et plus.`,
    offers: {
      "@type": "Offer",
      price: city.deliveryFee.replace("€", "").replace(",", ".").trim(),
      priceCurrency: "EUR",
      description: `Livraison à ${city.name} à partir de ${city.minimumOrder} d'achat`,
    },
  };
}
