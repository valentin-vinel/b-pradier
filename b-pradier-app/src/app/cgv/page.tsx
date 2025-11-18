'use client';

import Footer from "@/shared/Footer";
import Header from "@/shared/Header";

export default function Cgv() {

  return (
    <div className="min-h-screen flex flex-col max-w-[1200px] m-auto px-3 lg:px-0">
      <Header />
      <main className="my-10 flex flex-col gap-6 max-w-[800px] m-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-red">Conditions Générales de Vente (CGV)</h2>

        <section>
            <p>Conditions Générales de Vente — Bernard Pradier</p>
            <p>Dernière mise à jour : 18/11/2025</p>
        </section>

        <section>
            <h3 className="font-bold">Présentation</h3>
            <p>Les présentes Conditions Générales de Vente (CGV) s'appliquent à toutes les commandes passées sur le site exploité par :</p>
            <ul className="list-disc pl-10">
                <li>Bernard Pradier, micro-entreprise, dont l'adresse est : 1740 chemin de la d'Hugues, 84100 Uchaux.</li>
                <li>L'acheteur reconnaît avoir lu et accepté les CGV avant le paiement.</li>
            </ul>
        </section>

        <section>
            <h3 className="font-bold">Produits</h3>
            <p>Les produits vendus sont des vins rouges millésimés (1988 à 2010).</p>
            <p>Chaque produit est accompagné d'une description précise.</p>
            <p>Les millésimes anciens sont vendus dans leur état, avec les spécificités propres aux bouteilles dites "vieux millésimes".</p>
        </section>

        <section>
            <h3 className="font-bold">Prix</h3>
            <p>Les prix sont indiqués en euros (€), toutes taxes comprises.</p>
            <p>Les frais de livraison ne sont pas inclus et s'ajoutent au moment du paiement.</p>
            <p>Bernard Pradier se réserve le droit de modifier ses tarifs à tout moment.</p>
        </section>

        <section>
            <h3 className="font-bold">Commande</h3>
            <p>Toute commande vaut acceptation des prix et descriptions.</p>
            <p>Le vendeur confirme la commande par email.</p>
        </section>

        <section>
            <h3 className="font-bold">Paiement</h3>
            <p>Les paiements sont sécurisés via Shopify Payments.</p>
            <p>Moyens acceptés : carte bancaire, Apple Pay, Google Pay (selon disponibilité Shopify).</p>
            <p>Aucun paiement en espèces ou chèque n'est accepté.</p>
        </section>

        <section>
            <h3 className="font-bold">Livraison</h3>
            <h4 className="font-semibold">Transporteurs</h4>
            <ul className="list-disc pl-10">
                <li>Chronopost (domicile / pickup – en cours de confirmation)</li>
                <li>Colissimo (en cours de confirmation)</li>
            </ul>

            <h4 className="font-semibold">Zones livrées</h4>
            <ul className="list-disc pl-10">
                <li>France métropolitaine uniquement.</li>
            </ul>

            <h4 className="font-semibold">Délais</h4>
            <ul className="list-disc pl-10">
                <li>Préparation : [À compléter, ex. 24–48h]</li>
                <li>Transport : [À compléter, ex. 48–72h selon transporteur]</li>
            </ul>

            <h4 className="font-semibold">Tarifs</h4>
            <p>Les tarifs de livraison varient selon :</p>
            <ul className="list-disc pl-10">
                <li>le poids de la commande</li>
                <li>le mode de livraison (domicile ou point relais)</li>
                <li>les accords contractuels du vendeur avec les transporteurs</li>
            </ul>
            <p>Les tarifs exacts apparaissent lors du paiement.</p>

            <h4 className="font-semibold">Responsabilité transport</h4>
            <p>Les risques sont transférés à l'acheteur dès la remise du colis au transporteur.</p>
            <p>En cas de casse, le client doit émettre des réserves immédiates auprès du transporteur.</p>
        </section>

        <section>
            <h3 className="font-bold">Droit de rétractation & retours</h3>
            <p>Conformément à la loi :</p>
            <ul>
                <li>Délai : 14 jours après réception</li>
                <li>L'acheteur doit informer le vendeur avant tout retour</li>
                <li>Les produits doivent être non ouverts, dans leur emballage d'origine, en parfait état</li>
            </ul>

            <h4>Frais de retour</h4>
            <p>À la charge du client.</p>
            <p>Le remboursement est effectué sous 14 jours après réception et vérification du produit.</p>
        </section>

        <section>
            <h3 className="font-bold">Protection des données</h3>
            <p>Cf. Politique de confidentialité.</p>
        </section>

        <section>
            <h3 className="font-bold">Litiges</h3>
            <p>En cas de litige, une solution amiable sera recherchée.</p>
            <p>À défaut : la juridiction compétente est celle du siège du vendeur.</p>
        </section>
        
      </main>
      <Footer />
    </div>
  );
}
