'use client';

import Footer from "@/shared/Footer";
import Header from "@/shared/Header";

export default function PolitiqueConfidentialite() {

  return (
    <div className="min-h-screen flex flex-col max-w-[1200px] m-auto px-3 lg:px-0">
      <Header />
      <main className="my-10 flex flex-col gap-6 max-w-[800px] m-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-red">Politique de confidentialité (RGPD)</h2>

        <section>
            <p>Politique de confidentialité — Bernard Pradier</p>
            <p>Conformément au Règlement Général sur la Protection des Données (RGPD).</p>
        </section>

        <section>
            <h3 className="font-bold">Responsable du traitement</h3>
            <p>Bernard Pradier</p>
            <p>Adresse : [À compléter]</p>
            <p>Email : [À compléter]</p>
        </section>

        <section>
            <h3 className="font-bold">Données collectées</h3>
            <p>Lors d'un achat ou de l'utilisation du site, nous collectons :</p>
            <ul className="list-disc pl-10">
                <li>nom, prénom</li>
                <li>adresse postale</li>
                <li>email</li>
                <li>téléphone</li>
                <li>informations de paiement (via Shopify Payments, jamais stockées par nous)</li>
                <li>adresse IP, logs techniques (Shopify)</li>
            </ul>
            <p>Aucun CRM ou outil marketing tiers n'est utilisé (Mailchimp, Klaviyo, etc.).</p>
        </section>

        <section>
            <h3 className="font-bold">Finalité de la collecte</h3>
            <ul className="list-disc pl-10">
                <li>traitement des commandes</li>
                <li>livraison</li>
                <li>facturation</li>
                <li>support client</li>
                <li>obligations légales (facturation, fiscalité)</li>
            </ul>
        </section>

        <section>
            <h3 className="font-bold">Sous-traitants</h3>
            <ul className="list-disc pl-10">
                <li>Shopify : plateforme e-commerce</li>
                <li>Vercel : hébergement frontend</li>
                <li>Transporteurs : Chronopost / Colissimo</li>
            </ul>
            <p>Aucun autre outil n'est utilisé.</p>
        </section>

        <section>
            <h3 className="font-bold">Cookies</h3>
            <p>Voir Politique de cookies.</p>
        </section>

        <section>
            <h3 className="font-bold">Droits de l'utilisateur</h3>
            <p>Conformément à la loi, vous disposez de :</p>
            <ul className="list-disc pl-10">
                <li>droit d'accès</li>
                <li>droit de rectification</li>
                <li>droit à l'effacement</li>
                <li>droit d'opposition</li>
                <li>droit à la portabilité</li>
            </ul>
            <p>Pour toute demande : [Email]</p>
        </section>

        <section>
            <h3 className="font-bold">Durée de conservation</h3>
            <ul className="list-disc pl-10">
                <li>Données clients : 5 ans</li>
                <li>Facturation : 10 ans (obligation légale)</li>
                <li>Cookies : selon leur durée propre</li>
            </ul>
        </section>
        
      </main>
      <Footer />
    </div>
  );
}
