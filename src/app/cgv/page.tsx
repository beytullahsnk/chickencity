import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions G\u00e9n\u00e9rales de Vente",
  robots: { index: false, follow: false },
};

function Article({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="font-display text-xl text-secondary tracking-wide">
        Article {num}. {title}
      </h2>
      <div className="text-sm text-foreground-muted leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}

function Sub({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      {title && <h3 className="font-bold text-secondary text-sm">{title}</h3>}
      <div className="text-sm text-foreground-muted leading-relaxed space-y-2">{children}</div>
    </div>
  );
}

export default function CGVPage() {
  return (
    <div className="pt-20">
      <section className="py-16 bg-background-warm">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="font-display text-3xl text-secondary tracking-wide text-center mb-10">
            CONDITIONS G{"\u00c9"}N{"\u00c9"}RALES DE VENTE
          </h1>

          <div className="space-y-10">
            <Article num="1" title="Champ d'application">
              <p>Les pr{"\u00e9"}sentes Conditions G{"\u00e9"}n{"\u00e9"}rales de Vente ({"\u00ab"} CGV {"\u00bb"}) s{"'"}appliquent, sans restriction ni r{"\u00e9"}serve {"\u00e0"} l{"'"}ensemble des ventes conclues par Chicken City ({"\u00ab"} le Vendeur {"\u00bb"}, {"\u00ab"} Nous {"\u00bb"}, {"\u00ab"} Notre {"\u00bb"}) aupr{"\u00e8"}s de consommateurs ({"\u00ab"} les Clients ou le Client {"\u00bb"}, {"\u00ab"} Vous {"\u00bb"}, {"\u00ab"} Votre {"\u00bb"}) en France m{"\u00e9"}tropolitaine, d{"\u00e9"}sirant acqu{"\u00e9"}rir les produits propos{"\u00e9"}s {"\u00e0"} la vente par le Vendeur sur le site Internet www.chickencity41.fr (le {"\u00ab"} Site {"\u00bb"}), et ses d{"\u00e9"}clinaisons sur tablette et mobile (ensemble {"\u00ab"} le/les {"\u00c9"}quipement(s) {"\u00bb"}), lequel est {"\u00e9"}dit{"\u00e9"} par la soci{"\u00e9"}t{"\u00e9"} Chicken City SAS, d{"\u00e9"}tentrice des droits sur la marque Chicken City en France.</p>
              <p>Le Vendeur a pour principale activit{"\u00e9"} la vente de poulets et autres accompagnements ({"\u00ab"} les Produits {"\u00bb"}), en livraison et en vente {"\u00e0"} emporter.</p>
              <p>Selon le Chicken City s{"\u00e9"}lectionn{"\u00e9"}, votre contrat sera conclu (i) soit avec une succursale d{"\u00e9"}tenue en propre par Chicken City, et exploit{"\u00e9"}e sous l{"'"}enseigne et la marque Chicken City, (ii) soit avec un franchis{"\u00e9"} Chicken City, {"\u00e9"}tant entendu que l{"'"}ensemble des points de vente en franchise sont des commer{"\u00e7"}ants ind{"\u00e9"}pendants, appartenant au r{"\u00e9"}seau de franchise Chicken City.</p>
              <p>Ces CGV sont accessibles {"\u00e0"} tout moment sur le Site et pr{"\u00e9"}vaudront, le cas {"\u00e9"}ch{"\u00e9"}ant, sur toute autre version ou tout autre document contradictoire. Le Client d{"\u00e9"}clare avoir pris connaissance des pr{"\u00e9"}sentes CGV et les avoir accept{"\u00e9"}es en cochant la case pr{"\u00e9"}vue {"\u00e0"} cet effet avant la validation de la commande en ligne ainsi que des conditions g{"\u00e9"}n{"\u00e9"}rales d{"'"}utilisation du Site.</p>
              <p>Chicken City se r{"\u00e9"}serve {"\u00e0"} tout moment la possibilit{"\u00e9"} d{"'"}adapter ou de modifier ses CGV. En cas de modification, il sera appliqu{"\u00e9"} {"\u00e0"} chaque commande les CGV en vigueur sur le Site au jour de la passation de la commande.</p>
              <p>La validation de la commande par le Client vaut acceptation sans restriction ni r{"\u00e9"}serve des pr{"\u00e9"}sentes CGV.</p>
              <p>Le Client reconna{"\u00ee"}t avoir la capacit{"\u00e9"} requise pour contracter et acqu{"\u00e9"}rir les Produits propos{"\u00e9"}s sur le Site.</p>
            </Article>

            <Article num="2" title="Produits">
              <p>Les caract{"\u00e9"}ristiques principales des Produits propos{"\u00e9"}s {"\u00e0"} la vente par Chicken City sont pr{"\u00e9"}sent{"\u00e9"}es sur le Site. Le Client est tenu de se reporter au descriptif de chaque Produit afin d{"'"}en conna{"\u00ee"}tre les propri{"\u00e9"}t{"\u00e9"}s et les particularit{"\u00e9"}s essentielles ainsi qu{"'"}aux informations relatives aux allerg{"\u00e8"}nes figurant en pied de page du Site, avant toute passation de commande.</p>
              <p>Les photographies et graphismes pr{"\u00e9"}sent{"\u00e9"}s sur le Site ne sont pas contractuels et ne sauraient engager la responsabilit{"\u00e9"} du Vendeur.</p>
              <p>Les offres de Produits s{"'"}entendent dans la limite des stocks disponibles, tels que pr{"\u00e9"}cis{"\u00e9"}s lors de la passation de la commande.</p>
              <p>Chicken City usera de tous ses efforts raisonnables pour garantir la pr{"\u00e9"}cision des informations sur les Produits figurant sur le Site.</p>
            </Article>

            <Article num="3" title="Commande">
              <Sub title="3.1 Passation de commande">
                <p>Pour commander des Produits sur le Site, il convient de :</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>S{"\u00e9"}lectionner les Produits que vous souhaitez commander</li>
                  <li>Valider votre panier d{"'"}achat</li>
                  <li>Compl{"\u00e9"}ter le formulaire avec les informations n{"\u00e9"}cessaires</li>
                  <li>Prendre connaissance des CGV et les accepter avant la validation</li>
                  <li>Payer en ligne votre commande</li>
                </ul>
                <p>Chicken City s{"'"}engage {"\u00e0"} honorer les commandes re{"\u00e7"}ues sur le Site dans la limite des stocks disponibles. {"\u00c0"} d{"\u00e9"}faut de disponibilit{"\u00e9"} du Produit, Chicken City s{"'"}engage {"\u00e0"} en informer le Client.</p>
                <p>Chicken City se r{"\u00e9"}serve le droit d{"'"}annuler ou de refuser toute commande en cas de rupture de stock, d{"'"}indisponibilit{"\u00e9"} du produit ou de refus de certains moyens de paiement.</p>
              </Sub>
              <Sub title="3.2 Modification ou annulation de votre commande">
                <p><strong>Avant validation :</strong> Jusqu{"'"}{"à"} la validation de votre commande, celle-ci peut {"\u00ea"}tre modifi{"\u00e9"}e ou annul{"\u00e9"}e directement sur le Site.</p>
                <p><strong>Apr{"\u00e8"}s validation :</strong> Veuillez contacter directement le Chicken City vers lequel vous avez {"\u00e9"}t{"\u00e9"} dirig{"\u00e9"} au moment de votre commande. Les coordonn{"\u00e9"}es vous sont communiqu{"\u00e9"}es dans l{"'"}e-mail de confirmation.</p>
              </Sub>
              <Sub title="3.3 Preuve">
                <p>Les Clients reconnaissent la validit{"\u00e9"} et la force probante des courriers {"\u00e9"}lectroniques, des SMS, des notifications transmis par le Vendeur, ainsi que de tous enregistrements {"\u00e9"}lectroniques conserv{"\u00e9"}s par le Vendeur dans le cadre de la commande.</p>
              </Sub>
            </Article>

            <Article num="4" title="Prix et conditions de paiement">
              <p>Les Produits sont fournis aux prix en vigueur figurant sur le catalogue Internet au jour de la confirmation de l{"'"}acceptation de la commande. Les prix indiqu{"\u00e9"}s s{"'"}entendent en euros toutes taxes comprises.</p>
              <p>Le prix est payable comptant, en totalit{"\u00e9"} au jour de la passation de la commande, par voie de paiement s{"\u00e9"}curis{"\u00e9"} au livreur ou au comptoir du Chicken City, selon les modalit{"\u00e9"}s suivantes :</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Par carte bancaire : Visa, MasterCard</li>
                <li>Esp{"\u00e8"}ces</li>
                <li>Tickets Restaurants</li>
              </ul>
            </Article>

            <Article num="5" title="Offres promotionnelles">
              <p>Les Produits Chicken City peuvent faire l{"'"}objet d{"'"}offres promotionnelles sur le Site. Toute offre promotionnelle est propos{"\u00e9"}e sous r{"\u00e9"}serve des stocks disponibles.</p>
              <p>Chicken City se r{"\u00e9"}serve le droit de modifier les termes des offres promotionnelles ou de retirer ces derni{"\u00e8"}res {"\u00e0"} tout moment. Toute commande pass{"\u00e9"}e avant que l{"'"}offre ne soit retir{"\u00e9"}e sera honor{"\u00e9"}e aux conditions en vigueur {"\u00e0"} la date de la commande.</p>
            </Article>

            <Article num="6" title="Livraison">
              <Sub title="6.1 Livraison \u00e0 domicile">
                <p>La livraison de la commande interviendra {"\u00e0"} l{"'"}adresse de livraison indiqu{"\u00e9"}e par le Client lors de sa commande sur le Site. Les informations communiqu{"\u00e9"}es par le Client l{"'"}engagent et toute erreur dans les coordonn{"\u00e9"}es rel{"\u00e8"}ve de sa responsabilit{"\u00e9"} exclusive.</p>
              </Sub>
              <Sub title="6.2 Commande \u00e0 emporter">
                <p>Le client viendra chercher sa commande {"\u00e0"} l{"'"}adresse du Chicken City telle que figurant dans l{"'"}e-mail de confirmation de la commande et {"\u00e0"} l{"'"}horaire indicatif qui y sera mentionn{"\u00e9"}.</p>
              </Sub>
              <Sub title="6.3 Dispositions g\u00e9n\u00e9rales">
                <p>Chicken City s{"'"}engage {"\u00e0"} faire ses meilleurs efforts pour livrer les Produits command{"\u00e9"}s dans un d{"\u00e9"}lai aussi court que possible. Ces d{"\u00e9"}lais sont communiqu{"\u00e9"}s {"\u00e0"} titre indicatif. La livraison est constitu{"\u00e9"}e par le transfert au Client de la possession physique du Produit.</p>
              </Sub>
            </Article>

            <Article num="7" title="Droit de r\u00e9tractation">
              <p>Le Client est inform{"\u00e9"} que, suite {"\u00e0"} la validation de sa commande, il ne pourra pas exercer le droit de r{"\u00e9"}tractation pr{"\u00e9"}vu {"\u00e0"} l{"'"}article L. 221-18 du Code de la consommation puisque sa commande concerne la fourniture de biens susceptibles de se d{"\u00e9"}t{"\u00e9"}riorer ou de se p{"\u00e9"}rimer rapidement vis{"\u00e9"}s {"\u00e0"} l{"'"}article L. 221-28, 4{"\u00b0"} du Code de la consommation.</p>
            </Article>

            <Article num="8" title="Question \u2013 R\u00e9clamation">
              <p>Toute question ou r{"\u00e9"}clamation pourra {"\u00ea"}tre adress{"\u00e9"}e par {"\u00e9"}crit {"\u00e0"} : chickencity41@gmail.com.</p>
              <p>Toute r{"\u00e9"}clamation concernant les Produits livr{"\u00e9"}s devra {"\u00ea"}tre faite dans un d{"\u00e9"}lai maximum de quarante-huit (48) heures apr{"\u00e8"}s la livraison.</p>
              <p>En cas de diff{"\u00e9"}rend non r{"\u00e9"}solu {"\u00e0"} l{"'"}amiable, les consommateurs ont la possibilit{"\u00e9"} de recourir au service de m{"\u00e9"}diation propos{"\u00e9"} par {"\u00ab"} M{"\u00e9"}diation de la Consommation & Patrimoine {"\u00bb"} (MCP M{"\u00e9"}diation).</p>
            </Article>

            <Article num="9" title="Responsabilit\u00e9 du Vendeur \u2013 Garanties">
              <p>La responsabilit{"\u00e9"} de Chicken City ne pourrait {"\u00ea"}tre engag{"\u00e9"}e dans le cas o{"\u00f9"} l{"'"}inex{"\u00e9"}cution de ses obligations serait imputable soit au fait impr{"\u00e9"}visible et insurmontable d{"'"}un tiers au contrat, soit {"\u00e0"} un cas de force majeure, soit en cas d{"'"}impossibilit{"\u00e9"} de livraison en raison de coordonn{"\u00e9"}es erron{"\u00e9"}es du Client.</p>
              <p>Les Produits vendus sur le Site sont conformes {"\u00e0"} la r{"\u00e9"}glementation en vigueur en France et b{"\u00e9"}n{"\u00e9"}ficient de la garantie l{"\u00e9"}gale de conformit{"\u00e9"} ainsi que de la garantie contre les vices cach{"\u00e9"}s.</p>
            </Article>

            <Article num="10" title="Droits de propri\u00e9t\u00e9 intellectuelle">
              <p>La structure g{"\u00e9"}n{"\u00e9"}rale du Site, l{"'"}ensemble des {"\u00e9"}l{"\u00e9"}ments de toute nature contenus sur le Site sont la propri{"\u00e9"}t{"\u00e9"} exclusive de Chicken City et sont prot{"\u00e9"}g{"\u00e9"}s par des droits de propri{"\u00e9"}t{"\u00e9"} intellectuelle.</p>
              <p>Le Client s{"'"}interdit notamment de reproduire et/ou repr{"\u00e9"}senter, t{"\u00e9"}l{"\u00e9"}charger, vendre, distribuer, {"\u00e9"}mettre, traduire, adapter, exploiter, diffuser et communiquer tout contenu figurant sur le Site. {"\u00c0"} d{"\u00e9"}faut, le Client s{"'"}expose {"\u00e0"} des poursuites judiciaires.</p>
            </Article>

            <Article num="11" title="Donn\u00e9es personnelles">
              <p>Toutes les informations fournies par les clients sont strictement utilis{"\u00e9"}es dans le cadre de leurs relations avec Chicken City. Ces donn{"\u00e9"}es ne sont en aucun cas vendues ou lou{"\u00e9"}es {"\u00e0"} des tiers sans le consentement expr{"\u00e8"}s des clients.</p>
              <p>Chicken City s{"'"}engage {"\u00e0"} prendre toutes les pr{"\u00e9"}cautions n{"\u00e9"}cessaires pour garantir la s{"\u00e9"}curit{"\u00e9"} des informations fournies par ses clients.</p>
            </Article>

            <Article num="12" title="Loi applicable \u2013 Langue">
              <p>Les pr{"\u00e9"}sentes CGV et les op{"\u00e9"}rations qui en d{"\u00e9"}coulent sont r{"\u00e9"}gies et soumises {"\u00e0"} la loi fran{"\u00e7"}aise. Les pr{"\u00e9"}sentes CGV sont r{"\u00e9"}dig{"\u00e9"}es en langue fran{"\u00e7"}aise. Seule la version fran{"\u00e7"}aise fait foi en cas de litige.</p>
            </Article>

            <Article num="13" title="R\u00e8glement des litiges">
              <p>Tous les litiges qui n{"'"}auraient pas pu {"\u00ea"}tre r{"\u00e9"}solus {"\u00e0"} l{"'"}amiable dans un d{"\u00e9"}lai d{"'"}un (1) mois seront soumis aux tribunaux fran{"\u00e7"}ais comp{"\u00e9"}tents. Le Client est invit{"\u00e9"} {"\u00e0"} contacter le service client de Chicken City pour tenter de r{"\u00e9"}soudre le litige de mani{"\u00e8"}re amiable. En l{"'"}absence de solution, le Client a la possibilit{"\u00e9"} de recourir {"\u00e0"} une m{"\u00e9"}diation conventionnelle ou {"\u00e0"} tout autre mode alternatif de r{"\u00e8"}glement des diff{"\u00e9"}rends.</p>
            </Article>
          </div>
        </div>
      </section>
    </div>
  );
}
