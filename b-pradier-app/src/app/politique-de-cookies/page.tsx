'use client';

import Footer from "@/shared/Footer";
import Header from "@/shared/Header";

export default function PolitiqueConfidentialite() {

  return (
    <div className="min-h-screen flex flex-col max-w-[1200px] m-auto px-3 lg:px-0">
      <Header />
      <main className="my-10 flex flex-col gap-6 max-w-[800px] m-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-red">Politique de cookies</h2>

        <section>
            <p>Politique de cookies — Bernard Pradier</p>
        </section>

        <section>
            <h3 className="font-bold">Qu'est-ce qu'un cookie ?</h3>
            <p>Un cookie est un fichier stocké sur votre appareil permettant d'améliorer l'expérience utilisateur et le fonctionnement du site.</p>
        </section>

        <section>
            <h3 className="font-bold">Cookies utilisés</h3>
            <p>Le site utilise uniquement des cookies essentiels liés au fonctionnement de Shopify :</p>
            <ul className="list-disc pl-10">
                <li>Cookies de session</li>
                <li>Cookies de panier</li>
                <li>Cookies de fonctionnement du checkout</li>
                <li>Cookies de sécurité</li>
            </ul>
            <p>Aucun cookie marketing n'est utilisé.</p>
        </section>

        <section>
            <h3 className="font-bold">Gestion des cookies</h3>
            <p>Le visiteur peut désactiver les cookies dans son navigateur.</p>
            <p>Cependant, certaines fonctionnalités du site peuvent ne plus fonctionner correctement.</p>
        </section>

        <section>
            <h3 className="font-bold">Modifications de la politique</h3>
            <p>Cette politique peut être mise à jour.</p>
            <p>Date de dernière modification : 18/11/2025</p>
        </section>
        
      </main>
      <Footer />
    </div>
  );
}
