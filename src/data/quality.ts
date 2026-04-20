import { Leaf, ChefHat, Package, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface QualityItem {
  icon: LucideIcon;
  title: string;
  text: string;
}

export const qualityItems: QualityItem[] = [
  {
    icon: Leaf,
    title: "Ingr\u00e9dients Frais et Locaux",
    text: "Nous s\u00e9lectionnons rigoureusement nos ingr\u00e9dients aupr\u00e8s de producteurs locaux pour une fra\u00eecheur et une saveur incomparables. Nos viandes sont issues d'\u00e9levages r\u00e9gionaux et nos l\u00e9gumes cueillis \u00e0 maturit\u00e9.",
  },
  {
    icon: ChefHat,
    title: "Pr\u00e9paration \u00e0 la Commande",
    text: "Tous nos plats sont pr\u00e9par\u00e9s \u00e0 la commande, juste avant d'\u00eatre livr\u00e9s. Burgers mont\u00e9s \u00e0 la minute, tacos garnis g\u00e9n\u00e9reusement, poulet pan\u00e9 toujours croustillant.",
  },
  {
    icon: Package,
    title: "Emballages Adapt\u00e9s",
    text: "Emballages sp\u00e9cialement con\u00e7us pour maintenir la temp\u00e9rature et la texture. Mat\u00e9riaux \u00e9co-responsables et recyclables.",
  },
  {
    icon: ShieldCheck,
    title: "Contr\u00f4le Qualit\u00e9 Rigoureux",
    text: "Chaque commande est v\u00e9rifi\u00e9e avant la livraison pour garantir la conformit\u00e9 et la qualit\u00e9 des plats, du d\u00e9but \u00e0 la fin.",
  },
];
