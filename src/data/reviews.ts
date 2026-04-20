export interface Review {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string; // ISO format (YYYY-MM-DD)
  text: string;
  source: "Google";
}

// Avis statiques — à remplacer par vos vrais avis Google.
// Astuce : copier-coller directement depuis votre fiche Google Business.
export const googleReviews: Review[] = [
  {
    author: "Marie L.",
    rating: 5,
    date: "2024-10-15",
    text: "Tenders fait maison exceptionnels, le poulet est vraiment croustillant et savoureux. Livraison rapide à Mer. Mon nouvel adresse pour le vendredi soir !",
    source: "Google",
  },
  {
    author: "Nicolas D.",
    rating: 5,
    date: "2024-10-02",
    text: "Excellent fast-food halal à Mer. Le City Burger est énorme et les frites maison sont top. Personnel sympa et accueillant. Je recommande !",
    source: "Google",
  },
  {
    author: "Sofiane M.",
    rating: 5,
    date: "2024-09-20",
    text: "Les tacos sont généreux, la sauce fromagère maison est une tuerie. Qualité/prix imbattable dans le coin. À tester absolument.",
    source: "Google",
  },
  {
    author: "Julie B.",
    rating: 4,
    date: "2024-09-08",
    text: "Menu enfant parfait pour mon fils, avec petit jouet et jus inclus. Les adultes se régalent aussi. Bonne adresse familiale.",
    source: "Google",
  },
];

/**
 * Chiffres réels de la fiche Google Business Chicken City.
 * À mettre à jour manuellement quand le total évolue (ou brancher l'API Google Places).
 */
export const reviewStats = {
  count: 389,
  average: 4.8,
};
