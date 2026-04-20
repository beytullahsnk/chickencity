import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Protection des Donn\u00e9es Personnelles",
  robots: { index: false, follow: false },
};

function Section({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="font-display text-xl text-secondary tracking-wide">
        {num}. {title}
      </h2>
      <div className="text-sm text-foreground-muted leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}

export default function DonneesPersonnellesPage() {
  return (
    <div className="pt-20">
      <section className="py-16 bg-background-warm">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="font-display text-3xl text-secondary tracking-wide text-center mb-4">
            CHARTE SUR LA PROTECTION DES DONN{"\u00c9"}ES PERSONNELLES
          </h1>
          <p className="text-center text-sm text-foreground-muted mb-10">
            Date de mise {"\u00e0"} jour : 12 septembre 2023
          </p>

          <div className="space-y-6 text-sm text-foreground-muted leading-relaxed mb-10">
            <p>La pr{"\u00e9"}sente Charte est applicable aux CGV du Site, ainsi qu{"'"}{"à"} la soci{"\u00e9"}t{"\u00e9"} Chicken City.</p>

            <div className="bg-white rounded-xl p-6 space-y-3">
              <p className="font-bold text-secondary text-xs uppercase tracking-wider mb-3">D{"\u00e9"}finitions</p>
              <p><strong className="text-secondary">Chicken City :</strong> d{"\u00e9"}signe CHICKEN CITY SAS, soci{"\u00e9"}t{"\u00e9"} par actions simplifi{"\u00e9"}e au capital de 1 000 euros, si{"\u00e8"}ge social au 9 Place de l{"'"}{"É"}glise, 41500 Mer.</p>
              <p><strong className="text-secondary">CGV :</strong> conditions g{"\u00e9"}n{"\u00e9"}rales de vente de Chicken City, consultables {"\u00e0"} chickencity41.fr/cgv.</p>
              <p><strong className="text-secondary">Charte :</strong> la pr{"\u00e9"}sente charte relative {"\u00e0"} la protection des donn{"\u00e9"}es personnelles.</p>
              <p><strong className="text-secondary">CNIL :</strong> Commission Nationale de l{"'"}Informatique et des Libert{"\u00e9"}s.</p>
              <p><strong className="text-secondary">Donn{"\u00e9"}es Personnelles :</strong> informations nominatives de l{"'"}Utilisateur.</p>
              <p><strong className="text-secondary">RGPD :</strong> R{"\u00e8"}glement g{"\u00e9"}n{"\u00e9"}ral sur la protection des donn{"\u00e9"}es 2016/679 du 27 avril 2016.</p>
              <p><strong className="text-secondary">Site :</strong> le site web accessible via chickencity41.fr.</p>
              <p><strong className="text-secondary">Traitements :</strong> la gestion, la collecte, la protection, et la conservation des Donn{"\u00e9"}es Personnelles.</p>
              <p><strong className="text-secondary">Utilisateur :</strong> toute personne utilisant le Site, qu{"'"}elle soit cliente ou visiteuse.</p>
            </div>

            <p>Chicken City a {"\u00e9"}labor{"\u00e9"} cette Charte pour permettre {"\u00e0"} l{"'"}Utilisateur de fournir ses Donn{"\u00e9"}es Personnelles en respectant une politique rigoureuse de confidentialit{"\u00e9"} et de s{"\u00e9"}curit{"\u00e9"}. Chicken City s{"'"}engage {"\u00e0"} prot{"\u00e9"}ger la vie priv{"\u00e9"}e de l{"'"}Utilisateur et {"\u00e0"} traiter ses Donn{"\u00e9"}es Personnelles de mani{"\u00e8"}re loyale et transparente.</p>
          </div>

          <div className="space-y-10">
            <Section num="1" title="Responsable de traitement">
              <p>Pour garantir le respect de ses engagements en tant que responsable du traitement des Donn{"\u00e9"}es Personnelles recueillies sur le Site, conform{"\u00e9"}ment au RGPD et {"\u00e0"} la Loi Informatique & Libert{"\u00e9"}s, Chicken City a nomm{"\u00e9"} un d{"\u00e9"}l{"\u00e9"}gu{"\u00e9"} {"\u00e0"} la protection des donn{"\u00e9"}es. Cette personne peut {"\u00ea"}tre jointe par e-mail {"\u00e0"} : chickencity41@gmail.com.</p>
            </Section>

            <Section num="2" title="Cat\u00e9gories de Donn\u00e9es Personnelles collect\u00e9es">
              <p>Chicken City informe l{"'"}Utilisateur des diff{"\u00e9"}rentes cat{"\u00e9"}gories de Donn{"\u00e9"}es Personnelles qu{"'"}elle est susceptible de collecter. Ces donn{"\u00e9"}es peuvent {"\u00ea"}tre transmises lors d{"'"}une commande sur le Site, via un formulaire, ou {"\u00ea"}tre publiques et accessibles {"\u00e0"} Chicken City.</p>
              <p>Chicken City se r{"\u00e9"}serve {"\u00e9"}galement le droit de collecter des Donn{"\u00e9"}es Personnelles en observant ou en d{"\u00e9"}duisant les interactions de l{"'"}Utilisateur, directement ou via des tiers (partenaires, co-responsables de traitements ou sous-traitants).</p>
              <p>Les Donn{"\u00e9"}es Personnelles collect{"\u00e9"}es comprennent, sans s{"'"}y limiter : nom, pr{"\u00e9"}nom, adresse e-mail, num{"\u00e9"}ro de t{"\u00e9"}l{"\u00e9"}phone, adresse postale et mode de paiement.</p>
            </Section>

            <Section num="3" title="Nature et finalit\u00e9 du Traitement">
              <p>Chicken City utilisera les Donn{"\u00e9"}es Personnelles principalement pour le traitement des commandes, la gestion du fichier clients, et la transmission d{"'"}offres commerciales et/ou promotionnelles.</p>
              <p>Les donn{"\u00e9"}es essentielles sont mises en {"\u00e9"}vidence par un ast{"\u00e9"}risque lors de la saisie. Si l{"'"}Utilisateur ne fournit pas ces informations obligatoires, sa commande ne pourra pas {"\u00ea"}tre confirm{"\u00e9"}e. Les informations facultatives visent {"\u00e0"} optimiser les services offerts.</p>
              <p>Si l{"'"}Utilisateur ne souhaite plus recevoir d{"'"}offres commerciales, il peut se d{"\u00e9"}sinscrire en envoyant un email {"\u00e0"} chickencity41@gmail.com.</p>
            </Section>

            <Section num="4" title="Protection de la vie priv\u00e9e des enfants">
              <p>Le site de Chicken City n{"'"}a pas {"\u00e9"}t{"\u00e9"} con{"\u00e7"}u pour et n{"'"}est pas destin{"\u00e9"} {"\u00e0"} {"\u00ea"}tre utilis{"\u00e9"} par des enfants de moins de 16 ans. La politique stricte de Chicken City est de ne jamais collecter ni conserver sciemment des informations concernant un individu de moins de 16 ans.</p>
            </Section>

            <Section num="5" title="Destinataires des Donn\u00e9es Personnelles">
              <p>Chicken City pourrait {"\u00ea"}tre tenue de divulguer des Donn{"\u00e9"}es Personnelles lorsque cette divulgation est requise par la loi, une autorit{"\u00e9"} administrative ou dans le cadre d{"'"}une proc{"\u00e9"}dure judiciaire.</p>
            </Section>

            <Section num="6" title="Transfert des Donn\u00e9es Personnelles">
              <p>L{"'"}Utilisateur est inform{"\u00e9"} que ses Donn{"\u00e9"}es Personnelles peuvent {"\u00ea"}tre transf{"\u00e9"}r{"\u00e9"}es vers un pays autre que celui o{"\u00f9"} il r{"\u00e9"}side, y compris au sein de l{"'"}Union europ{"\u00e9"}enne, toujours dans le respect des r{"\u00e9"}glementations en vigueur.</p>
            </Section>

            <Section num="7" title="S\u00e9curit\u00e9 des Donn\u00e9es Personnelles">
              <p>Chicken City prend toutes les mesures appropri{"\u00e9"}es, y compris organisationnelles, techniques, logicielles et physiques, pour garantir la s{"\u00e9"}curit{"\u00e9"} des Donn{"\u00e9"}es Personnelles face {"\u00e0"} tout risque de perte, de vol, d{"'"}interception frauduleuse, ainsi que contre tout acc{"\u00e8"}s, divulgation, modification ou destruction non autoris{"\u00e9"}e.</p>
              <p>Il est toutefois essentiel de souligner que le web n{"'"}est pas un espace totalement s{"\u00e9"}curis{"\u00e9"}. Chicken City ne peut assurer la totale s{"\u00e9"}curit{"\u00e9"} des informations transmises ou stock{"\u00e9"}es sur Internet.</p>
            </Section>

            <Section num="8" title="Les droits de l'Utilisateur">
              <p>Selon la l{"\u00e9"}gislation nationale et europ{"\u00e9"}enne, l{"'"}Utilisateur dispose des droits suivants :</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>{"\u00ca"}tre inform{"\u00e9"} de l{"'"}existence et des finalit{"\u00e9"}s de tout Traitement de ses Donn{"\u00e9"}es Personnelles</li>
                <li>Acc{"\u00e9"}der {"\u00e0"} ses Donn{"\u00e9"}es Personnelles, en demander la rectification, la suppression, ou une limitation du Traitement</li>
                <li>S{"'"}opposer au Traitement de ses Donn{"\u00e9"}es Personnelles et solliciter leur portabilit{"\u00e9"}</li>
                <li>R{"\u00e9"}voquer, {"\u00e0"} tout moment, son consentement donn{"\u00e9"} {"\u00e0"} Chicken City</li>
                <li>Informer rapidement le d{"\u00e9"}l{"\u00e9"}gu{"\u00e9"} {"\u00e0"} la protection des donn{"\u00e9"}es de toute perte, interception ou utilisation ill{"\u00e9"}gale de ses Donn{"\u00e9"}es Personnelles</li>
              </ul>
              <p>Pour exercer ces droits, l{"'"}Utilisateur peut adresser une demande par email {"\u00e0"} chickencity41@gmail.com.</p>
              <p>L{"'"}Utilisateur est {"\u00e9"}galement inform{"\u00e9"} de l{"'"}existence de la liste d{"'"}opposition au d{"\u00e9"}marchage t{"\u00e9"}l{"\u00e9"}phonique {"\u00ab"} Bloctel {"\u00bb"}.</p>
              <p>En cas de pr{"\u00e9"}occupation concernant la gestion de ses Donn{"\u00e9"}es Personnelles, l{"'"}Utilisateur a le droit de d{"\u00e9"}poser une plainte aupr{"\u00e8"}s de l{"'"}autorit{"\u00e9"} comp{"\u00e9"}tente de protection des donn{"\u00e9"}es.</p>
            </Section>

            <Section num="9" title="Dur\u00e9e de conservation des Donn\u00e9es Personnelles">
              <p>Chicken City conservera les Donn{"\u00e9"}es Personnelles selon la p{"\u00e9"}riode la plus longue parmi : (i) la p{"\u00e9"}riode n{"\u00e9"}cessaire {"\u00e0"} l{"'"}envoi d{"'"}informations, la prise en compte et livraison des commandes ; (ii) toute dur{"\u00e9"}e impos{"\u00e9"}e par la loi ; ou (iii) jusqu{"'"}{"à"} la fin de la p{"\u00e9"}riode de prescription l{"\u00e9"}gale en cas de litige, sauf demande de suppression pr{"\u00e9"}alable {"\u00e0"} chickencity41@gmail.com.</p>
              <p>{"\u00c0"} l{"'"}issue de la p{"\u00e9"}riode d{"\u00e9"}finie, les Donn{"\u00e9"}es Personnelles seront effac{"\u00e9"}es conform{"\u00e9"}ment {"\u00e0"} la r{"\u00e9"}glementation en vigueur.</p>
            </Section>

            <Section num="10" title="Modification de la Charte">
              <p>Chicken City se r{"\u00e9"}serve le droit de modifier ou de mettre {"\u00e0"} jour cette Charte {"\u00e0"} tout moment, notamment en fonction de l{"'"}{"é"}volution l{"\u00e9"}gislative et/ou r{"\u00e9"}glementaire.</p>
              <p>En cas de modification, Chicken City publiera la nouvelle version sur son site et informera ses Utilisateurs en mettant {"\u00e0"} jour la date de r{"\u00e9"}vision situ{"\u00e9"}e en haut de cette page.</p>
            </Section>
          </div>
        </div>
      </section>
    </div>
  );
}
