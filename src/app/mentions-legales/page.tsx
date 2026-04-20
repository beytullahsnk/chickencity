import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions L\u00e9gales",
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <div className="pt-20">
      <section className="py-16 bg-background-warm">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="font-display text-3xl text-secondary tracking-wide text-center mb-10">
            MENTIONS L{"\u00c9"}GALES
          </h1>
          <div className="space-y-6 text-sm text-foreground-muted leading-relaxed">
            <p>
              Les mentions l{"\u00e9"}gales obligatoires relatives au site internet chickencity41.fr sont indiqu{"\u00e9"}es sur cette page, conform{"\u00e9"}ment {"\u00e0"} la loi n{"\u00b0"} 2004-575 du 21 juin 2004 pour la confiance dans l{"\u2019"}{"\u00e9"}conomie num{"\u00e9"}rique.
            </p>

            <div className="bg-white rounded-xl p-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="font-bold text-secondary text-xs uppercase tracking-wider mb-1">D{"\u00e9"}nomination sociale</p>
                  <p>CHICKEN CITY SAS</p>
                </div>
                <div>
                  <p className="font-bold text-secondary text-xs uppercase tracking-wider mb-1">Forme sociale</p>
                  <p>Soci{"\u00e9"}t{"\u00e9"} par Actions Simplifi{"\u00e9"}e unipersonnelle</p>
                </div>
                <div>
                  <p className="font-bold text-secondary text-xs uppercase tracking-wider mb-1">Capital social</p>
                  <p>1.000 euros</p>
                </div>
                <div>
                  <p className="font-bold text-secondary text-xs uppercase tracking-wider mb-1">Si{"\u00e8"}ge social</p>
                  <p>9 Place de l{"\u2019"}{"\u00c9"}glise, 41500 MER</p>
                </div>
                <div>
                  <p className="font-bold text-secondary text-xs uppercase tracking-wider mb-1">N{"\u00b0"} RCS</p>
                  <p>Blois B 911 099 505</p>
                </div>
                <div>
                  <p className="font-bold text-secondary text-xs uppercase tracking-wider mb-1">URL du site</p>
                  <p>https://www.chickencity41.fr</p>
                </div>
                <div>
                  <p className="font-bold text-secondary text-xs uppercase tracking-wider mb-1">T{"\u00e9"}l{"\u00e9"}phone</p>
                  <p>02 54 45 14 26</p>
                </div>
                <div>
                  <p className="font-bold text-secondary text-xs uppercase tracking-wider mb-1">Email</p>
                  <p>chickencity41@gmail.com</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="font-bold text-secondary text-xs uppercase tracking-wider mb-1">N{"\u00b0"} de T.V.A intracommunautaire</p>
                  <p>FR 32911099505</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <p className="font-bold text-secondary text-xs uppercase tracking-wider mb-2">H{"\u00e9"}bergeur du site</p>
              <p>
                Soci{"\u00e9"}t{"\u00e9"} IONOS SARL{" "}
                (7, place de la Gare, BP 70109, 57200 Sarreguemines Cedex, 431 303 775 RCS Sarreguemines, t{"\u00e9"}l. : 0970 808 911, info@IONOS.fr)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
