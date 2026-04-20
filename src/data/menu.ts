export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: string;
  image: string;
  category: MenuCategory;
  isBestSeller?: boolean;
}

export type MenuCategory =
  | "burgers"
  | "tacos"
  | "bowls"
  | "rolls"
  | "sides"
  | "paninis"
  | "salades"
  | "familial"
  | "enfant"
  | "desserts"
  | "sauces";

export const menuCategories: { id: MenuCategory; label: string }[] = [
  { id: "burgers", label: "Burgers" },
  { id: "tacos", label: "Tacos" },
  { id: "bowls", label: "Bowls" },
  { id: "rolls", label: "Rolls" },
  { id: "sides", label: "Sides" },
  { id: "paninis", label: "Paninis" },
  { id: "salades", label: "Salades" },
  { id: "familial", label: "Familial" },
  { id: "enfant", label: "Enfant" },
  { id: "desserts", label: "Desserts" },
  { id: "sauces", label: "Sauces" },
];

export const menuItems: MenuItem[] = [
  // ── BURGERS ──
  {
    id: "chesse-burger",
    name: "Chesse",
    description: "Steak 100 grammes, cheddar, crudit\u00e9s, sauce au choix",
    price: "6,90\u20ac",
    image: "/images/menu/Chesse Burger.webp",
    category: "burgers",
  },
  {
    id: "chicken-burger",
    name: "Chicken",
    description: "Tenders (fait maison), cheddar, crudit\u00e9s, sauce au choix",
    price: "7,90\u20ac",
    image: "/images/menu/Chicken Burger.webp",
    category: "burgers",
    isBestSeller: true,
  },
  {
    id: "mega-burger",
    name: "M\u00e9ga",
    description: "2 steak 100 grammes, 2 cheddar, crudit\u00e9s, sauce au choix",
    price: "7,90\u20ac",
    image: "/images/menu/M\u00e9ga Burger.webp",
    category: "burgers",
  },
  {
    id: "triple-burger",
    name: "Triple",
    description: "3 steak 100 grammes, 3 cheddar, crudit\u00e9s, sauce au choix",
    price: "8,90\u20ac",
    image: "/images/menu/Triple Burger.webp",
    category: "burgers",
  },
  {
    id: "180-burger",
    name: "180",
    description: "Steak 180 grammes, 2 cheddar, crudit\u00e9s, sauce au choix",
    price: "9,40\u20ac",
    image: "/images/menu/180 Burger.webp",
    category: "burgers",
  },
  {
    id: "360-burger",
    name: "360",
    description: "2 steak 180 grammes, 3 cheddar, crudit\u00e9s, sauce au choix",
    price: "11,40\u20ac",
    image: "/images/menu/360 Burger.webp",
    category: "burgers",
  },
  {
    id: "city-burger",
    name: "City",
    description: "Steak 100 grammes, tenders (fait maison), crudit\u00e9, sauce au choix",
    price: "9,60\u20ac",
    image: "/images/menu/City Burger.webp",
    category: "burgers",
    isBestSeller: true,
  },
  {
    id: "chevre-miel-burger",
    name: "Ch\u00e8vre Miel",
    description: "Steak 100 grammes, cheddar, salade, ch\u00e8vre, miel, sauce au choix",
    price: "8,90\u20ac",
    image: "/images/menu/Ch\u00e8vre Miel Burger.webp",
    category: "burgers",
  },
  {
    id: "mini-fish-burger",
    name: "Mini Fish",
    description: "Filet de poisson, pain doux, cheddar, sauce au choix",
    price: "6,00\u20ac",
    image: "/images/menu/Mini Fish Burger.webp",
    category: "burgers",
  },
  {
    id: "gourmet-burger",
    name: "Gourmet",
    description: "2 steak 100g, bacon, cornichons, crudit\u00e9s, 2 cheddar, sauce au choix",
    price: "9,60\u20ac",
    image: "/images/menu/Gourmet Burger.webp",
    category: "burgers",
    isBestSeller: true,
  },

  // ── TACOS ──
  {
    id: "tacos-1-viande",
    name: "Tacos 1 Viande",
    description: "1 viande, cheddar, frites, mozzarella, sauce fromag\u00e8re",
    price: "8,90\u20ac",
    image: "/images/menu/Tacos.webp",
    category: "tacos",
    isBestSeller: true,
  },
  {
    id: "tacos-2-viandes",
    name: "Tacos 2 Viandes",
    description: "2 viandes, cheddar, frites, mozzarella, sauce fromag\u00e8re",
    price: "10,40\u20ac",
    image: "/images/menu/Tacos.webp",
    category: "tacos",
  },
  {
    id: "tacos-3-viandes",
    name: "Tacos 3 Viandes",
    description: "3 viandes, cheddar, frites, mozzarella, sauce fromag\u00e8re",
    price: "11,90\u20ac",
    image: "/images/menu/Tacos.webp",
    category: "tacos",
  },

  // ── BOWLS ──
  {
    id: "bowl-1-viande",
    name: "Bowl 1 Viande",
    description: "Sauce fromag\u00e8re (fait maison), fromage, frites, 1 viande au choix",
    price: "10,90\u20ac",
    image: "/images/menu/Bowls.webp",
    category: "bowls",
  },
  {
    id: "bowl-2-viandes",
    name: "Bowl 2 Viandes",
    description: "Sauce fromag\u00e8re (fait maison), fromage, frites, 2 viandes au choix",
    price: "11,90\u20ac",
    image: "/images/menu/Bowls.webp",
    category: "bowls",
  },
  {
    id: "bowl-3-viandes",
    name: "Bowl 3 Viandes",
    description: "Sauce fromag\u00e8re (fait maison), fromage, frites, 3 viandes au choix",
    price: "12,90\u20ac",
    image: "/images/menu/Bowls.webp",
    category: "bowls",
  },

  // ── ROLLS ──
  {
    id: "roll-chicken",
    name: "Roll Chicken",
    description: "Tenders (fait maison), cheddar, crudit\u00e9s, sauce au choix",
    price: "7,90\u20ac",
    image: "/images/menu/Chicken Roll.webp",
    category: "rolls",
    isBestSeller: true,
  },
  {
    id: "roll-curry",
    name: "Roll Curry",
    description: "Chicken curry (fait maison), crudit\u00e9, sauce au choix",
    price: "7,90\u20ac",
    image: "/images/menu/Curry Roll.webp",
    category: "rolls",
  },
  {
    id: "roll-fromagere",
    name: "Roll Fromag\u00e8re",
    description: "Tenders, sauce fromag\u00e8re (fait maison), cheddar, crudit\u00e9, sauce au choix",
    price: "8,90\u20ac",
    image: "/images/menu/Fromag\u00e8re Roll.webp",
    category: "rolls",
  },
  {
    id: "roll-mega",
    name: "Roll M\u00e9ga",
    description: "Tenders (fait maison), galette de pomme de terre, cheddar, crudit\u00e9, sauce au choix",
    price: "8,90\u20ac",
    image: "/images/menu/Mega Roll.webp",
    category: "rolls",
  },
  {
    id: "roll-chevre-miel",
    name: "Roll Ch\u00e8vre Miel",
    description: "Tenders (fait maison), cheddar, crudit\u00e9, ch\u00e8vre et miel",
    price: "8,40\u20ac",
    image: "/images/menu/Ch\u00e8vre Miel Roll.webp",
    category: "rolls",
  },
  {
    id: "roll-tikka",
    name: "Roll Tikka",
    description: "Chicken \u00e9pic\u00e9s (fait maison), crudit\u00e9, sauce au choix",
    price: "8,90\u20ac",
    image: "/images/menu/Tikka Roll.webp",
    category: "rolls",
  },
  {
    id: "roll-americain",
    name: "Roll Am\u00e9ricain",
    description: "Steak 100 grammes, cheddar, crudit\u00e9, sauce au choix",
    price: "7,90\u20ac",
    image: "/images/menu/am\u00e9ricain Roll.webp",
    category: "rolls",
  },
  {
    id: "roll-cordon",
    name: "Roll Cordon",
    description: "Cordon bleu, cheddar, crudit\u00e9, sauce au choix",
    price: "7,90\u20ac",
    image: "/images/menu/cordon Roll.webp",
    category: "rolls",
  },

  // ── SIDES ──
  {
    id: "sides-tenders",
    name: "Tenders",
    description: "x6",
    price: "9,40\u20ac",
    image: "/images/menu/Sides - Tenders.webp",
    category: "sides",
    isBestSeller: true,
  },
  {
    id: "sides-nuggets",
    name: "Nuggets",
    description: "x6 \u2192 6,50\u20ac | x10 \u2192 7,50\u20ac",
    price: "6,50\u20ac",
    image: "/images/menu/Sides - Nuggets.webp",
    category: "sides",
  },
  {
    id: "sides-mozza",
    name: "Mozza",
    description: "x6 \u2192 6,50\u20ac | x10 \u2192 7,50\u20ac",
    price: "6,50\u20ac",
    image: "/images/menu/Sides - Mozza Sticks.webp",
    category: "sides",
  },
  {
    id: "sides-camembert",
    name: "Camembert",
    description: "x6 \u2192 6,50\u20ac | x10 \u2192 7,50\u20ac",
    price: "6,50\u20ac",
    image: "/images/menu/Sides - Camembert.webp",
    category: "sides",
  },
  {
    id: "sides-city-box",
    name: "City Box",
    description: "4 tenders + 5 hot wings",
    price: "11,40\u20ac",
    image: "/images/menu/Sides - City Box.webp",
    category: "sides",
  },
  {
    id: "sides-hot-wings",
    name: "Hot Wings",
    description: "x6 \u2192 7,40\u20ac | x10 \u2192 8,90\u20ac",
    price: "7,40\u20ac",
    image: "/images/menu/Sides - Hot Wings.webp",
    category: "sides",
  },
  {
    id: "sides-onion-rings",
    name: "Onion Rings",
    description: "x10 \u2192 6,50\u20ac | x14 \u2192 7,50\u20ac",
    price: "6,50\u20ac",
    image: "/images/menu/Sides - Onion rings.webp",
    category: "sides",
  },
  {
    id: "sides-jalapenos",
    name: "Jalapenos",
    description: "x6 \u2192 6,50\u20ac | x10 \u2192 7,50\u20ac",
    price: "6,50\u20ac",
    image: "/images/menu/Sides - Japanoles.webp",
    category: "sides",
  },
  {
    id: "waffle-fries",
    name: "Waffle Frites",
    description: "+1,90\u20ac avec menu",
    price: "3,90\u20ac",
    image: "/images/menu/waffle fries.webp",
    category: "sides",
  },
  {
    id: "sides-boisson",
    name: "Boisson 33cl",
    description: "Canette au choix",
    price: "1,90\u20ac",
    image: "/images/menu/Boisson - Dada P\u00eache.webp",
    category: "sides",
  },
  {
    id: "1-tenders",
    name: "1 Tenders",
    price: "1,40\u20ac",
    image: "/images/menu/1 Tenders.webp",
    category: "sides",
  },
  {
    id: "1-hot-wings",
    name: "1 Hot Wings",
    price: "1,00\u20ac",
    image: "/images/menu/1 Hot Wings.webp",
    category: "sides",
  },

  // ── PANINIS ──
  {
    id: "panini-steak",
    name: "Panini Steak",
    description: "Steak 100 grammes, cheddar, mozzarella",
    price: "6,90\u20ac",
    image: "/images/menu/Panini Steak.webp",
    category: "paninis",
  },
  {
    id: "panini-fromage",
    name: "Panini Fromage",
    description: "Ch\u00e8vre, cheddar, mozzarella",
    price: "6,90\u20ac",
    image: "/images/menu/Panini Fromage.webp",
    category: "paninis",
  },
  {
    id: "panini-nutella",
    name: "Panini Nutella",
    price: "3,50\u20ac",
    image: "/images/menu/Panini Nutella.webp",
    category: "paninis",
  },
  {
    id: "panini-curry",
    name: "Panini Curry",
    description: "Chicken curry (fait maison), cheddar, mozzarella",
    price: "6,90\u20ac",
    image: "/images/menu/Panini Curry.webp",
    category: "paninis",
  },

  // ── SALADES ──
  {
    id: "salade-tenders",
    name: "Salade Tenders",
    description: "Tenders, salade, tomate, oignon frit, mozzarella, vinaigrette, sauce blanche",
    price: "8,90\u20ac",
    image: "/images/menu/SALADES Tenders.webp",
    category: "salades",
  },
  {
    id: "salade-chevre",
    name: "Salade Ch\u00e8vre",
    description: "Ch\u00e8vre, salade, tomate, oignon frit, mozzarella, vinaigrette, sauce blanche",
    price: "8,90\u20ac",
    image: "/images/menu/SALADES Che\u00e8vre.webp",
    category: "salades",
  },

  // ── FAMILIAL ──
  {
    id: "familial-a",
    name: "Familial A",
    description: "10 hot wings + 6 tenders + 2 frites",
    price: "22,90\u20ac",
    image: "/images/menu/FAMILIAL A.webp",
    category: "familial",
  },
  {
    id: "familial-b",
    name: "Familial B",
    description: "17 tenders + 3 frites",
    price: "29,90\u20ac",
    image: "/images/menu/FAMILIAL B.webp",
    category: "familial",
  },
  {
    id: "familial-c",
    name: "Familial C",
    description: "25 hot wings + 2 frites",
    price: "25,40\u20ac",
    image: "/images/menu/FAMILIAL C.webp",
    category: "familial",
  },
  {
    id: "familial-d",
    name: "Familial D",
    description: "33 hot wings + 3 frites",
    price: "29,90\u20ac",
    image: "/images/menu/FAMILIAL D.webp",
    category: "familial",
  },
  {
    id: "familial-e",
    name: "Familial E",
    description: "20 hot wings + 6 tenders + 3 frites",
    price: "29,90\u20ac",
    image: "/images/menu/FAMILIAL E.webp",
    category: "familial",
  },
  {
    id: "familial-f",
    name: "Familial F",
    description: "20 hot wings + 10 tenders + 4 frites",
    price: "35,40\u20ac",
    image: "/images/menu/FAMILIAL F.webp",
    category: "familial",
  },

  // ── MENU ENFANT ──
  {
    id: "enfant-tenders",
    name: "Boite Tenders Enfant",
    description: "4 tenders + frites + caprisun + Petit Filou",
    price: "7,90\u20ac",
    image: "/images/menu/Menu Enfant - Tenders.webp",
    category: "enfant",
  },
  {
    id: "enfant-nuggets",
    name: "Nuggets Enfant",
    description: "6 nuggets + frites + caprisun + Petit Filou",
    price: "6,50\u20ac",
    image: "/images/menu/Menu Enfant - Nuggets.webp",
    category: "enfant",
  },
  {
    id: "enfant-chesse",
    name: "Chesse Burger Enfant",
    description: "Steak, cheddar, ketchup/mayo, salade, tomate",
    price: "6,50\u20ac",
    image: "/images/menu/Chesse Burger - Menu Enfant.webp",
    category: "enfant",
  },
  {
    id: "enfant-fish",
    name: "Fish Burger Enfant",
    description: "Poisson pan\u00e9, cheddar, ketchup/mayo",
    price: "6,50\u20ac",
    image: "/images/menu/Mini Fish Burger - Menu Enfant.webp",
    category: "enfant",
  },

  // ── DESSERTS ──
  {
    id: "tiramisu",
    name: "Tiramisu",
    price: "3,50\u20ac",
    image: "/images/menu/Dessert - Tiramisu.webp",
    category: "desserts",
  },
  {
    id: "tarte-daim",
    name: "Tarte Daim",
    price: "2,50\u20ac",
    image: "/images/menu/Dessert - Tarte Daim.webp",
    category: "desserts",
  },
  {
    id: "salade-fruits",
    name: "Salade de Fruits",
    price: "1,50\u20ac",
    image: "/images/menu/Dessert - Salade de Fruits.webp",
    category: "desserts",
  },

  // ── SAUCES ──
  {
    id: "sauce-ketchup",
    name: "Ketchup",
    image: "/images/menu/SAUCE - KETCHUP.webp",
    category: "sauces",
  },
  {
    id: "sauce-mayo",
    name: "Mayonnaise",
    image: "/images/menu/SAUCE - MAYONNAISE.webp",
    category: "sauces",
  },
  {
    id: "sauce-blanche-maison",
    name: "Blanche Maison",
    image: "/images/menu/SAUCE - BLANCHE MAISON.webp",
    category: "sauces",
  },
  {
    id: "sauce-moutarde-miel",
    name: "Moutarde Miel",
    image: "/images/menu/SAUCE - MOUTARDE MIEL.webp",
    category: "sauces",
  },
  {
    id: "sauce-biggy",
    name: "Biggy Burger",
    image: "/images/menu/SAUCE - BIGGY BURGER.webp",
    category: "sauces",
  },
  {
    id: "sauce-samourai",
    name: "Samoura\u00ef",
    image: "/images/menu/SAUCE - SAMOURAI.webp",
    category: "sauces",
  },
  {
    id: "sauce-poivre",
    name: "Poivre",
    image: "/images/menu/SAUCE - POIVRE.webp",
    category: "sauces",
  },
  {
    id: "sauce-harissa",
    name: "Harissa",
    image: "/images/menu/SAUCE - HARISSA.webp",
    category: "sauces",
  },
  {
    id: "sauce-algerienne",
    name: "Alg\u00e9rienne",
    image: "/images/menu/SAUCE - ALGERIENNE.webp",
    category: "sauces",
  },
  {
    id: "sauce-barbecue",
    name: "Barbecue",
    image: "/images/menu/SAUCE - BARBECUE.webp",
    category: "sauces",
  },
  {
    id: "sauce-andalouse",
    name: "Andalouse",
    image: "/images/menu/SAUCE - ANDALOUSE.webp",
    category: "sauces",
  },
];

/* Viandes au choix (tacos & bowls) — pas des produits à commander, juste les options disponibles */
export const viandesChoices: { id: string; name: string; image: string }[] = [
  { id: "viande-tenders", name: "Tenders", image: "/images/menu/Viandes - Tenders.webp" },
  { id: "viande-nuggets", name: "Nuggets", image: "/images/menu/Viandes - Nuggets.webp" },
  { id: "viande-steak", name: "Steak", image: "/images/menu/Viandes - Steak.webp" },
  { id: "viande-cordon-bleu", name: "Cordon Bleu", image: "/images/menu/Viandes - Cordon Bleu.webp" },
  { id: "viande-kebab", name: "Kebab", image: "/images/menu/Viandes - Kebab.webp" },
  { id: "viande-chicken-curry", name: "Chicken Curry", image: "/images/menu/Viandes - Chicken Curry.webp" },
];

export function getMenuByCategory(category: MenuCategory): MenuItem[] {
  return menuItems.filter((item) => item.category === category);
}

export function getBestSellers(): MenuItem[] {
  return menuItems.filter((item) => item.isBestSeller);
}
