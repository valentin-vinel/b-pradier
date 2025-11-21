'use client';

import Footer from "@/shared/Footer";
import Header from "@/shared/Header";

export default function MentionsLegales() {

  return (
    <div className="min-h-screen flex flex-col max-w-[1200px] m-auto px-3 lg:px-0">
      <Header />
      <main className="my-10 flex flex-col gap-6 max-w-[800px] m-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-red">Mentions légales</h2>

        <section>
            <h3 className="font-bold">Éditeur du site</h3>
            <p>Le site Bernard Pradier est édité par :</p>
            <ul className="list-disc pl-10">
                <li>Nom de l'entreprise : Bernard Pradier</li>
                <li>Forme juridique : Micro-entreprise</li>
                <li>Adresse : 1740 Chemin de la d'Hugue, 84100 Uchaux</li>
                <li>SIREN : 390 771 103</li>
                <li>RCS : 390 771 103 R.C.S. Avignon </li>
                <li>TVA intracommunautaire : Non applicable</li>
                <li>Responsable légal : Bernard Pradier</li>
                <li>Email de contact : bernard.pradier84@gmail.com</li>
            </ul>
        </section>

        <section>
            <h3 className="font-bold">Hébergement du site</h3>
            <p>Le site est hébergé par :</p>
            <ul className="list-disc pl-10">
                <li>Vercel Inc.</li>
                <li>340 S Lemon Ave #4133</li>
                <li>Walnut, CA 91789, États-Unis</li>
            </ul>
            <p>Back-office e-commerce assuré par :</p>
            <ul className="list-disc pl-10">
                <li>Shopify Inc.</li>
                <li>150 Elgin Street, 8th Floor, Ottawa, Ontario K2P 1L4, Canada</li>
            </ul>
        </section>

        <section>
            <h3 className="font-bold">Propriété intellectuelle</h3>
            <p>L'ensemble du contenu (textes, images, logo, charte graphique, produits et descriptions) est la propriété exclusive de Bernard Pradier.</p>
            <p>Toute reproduction, modification ou exploitation sans autorisation est strictement interdite.</p>
        </section>

        <section>
            <h3 className="font-bold">Responsabilité</h3>
            <p>Bernard Pradier décline toute responsabilité en cas d'interruption du site, d'erreur ou d'inexactitude, ou de dommages résultant de l'utilisation du site.</p>
        </section>

        <section>
            <h3 className="font-bold">Vente d'alcool</h3>
            <p>La vente d'alcool est strictement réservée aux personnes majeures (+18 ans).</p>
            <p>L'abus d'alcool est dangereux pour la santé, à consommer avec modération.</p>
            <p>Licence requise :</p>
            <ul className="list-disc pl-10">
                <li>Petite Licence à Emporter</li>
                <li>Date de délivrance : 29/10/2025</li>
            </ul>
        </section>
        
      </main>
      <Footer />
    </div>
  );
}
