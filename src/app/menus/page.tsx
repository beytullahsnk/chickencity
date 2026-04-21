import type { Metadata } from "next";
import { MenuPageContent } from "@/components/menu/MenuPageContent";
import { generateMenuSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "D\u00e9couvrez le menu complet de Chicken City \u00e0 Mer. Burgers, tacos, poulet fait maison, rolls, boxes et plus. Commandez en ligne !",
  alternates: {
    canonical: "https://chickencity41.fr/menu",
  },
};

export default function MenuPage() {
  return (
    <div className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateMenuSchema()) }}
      />
      <MenuPageContent />
    </div>
  );
}
