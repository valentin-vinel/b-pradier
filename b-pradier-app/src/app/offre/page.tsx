import Footer from "@/shared/Footer";
import Header from "@/shared/Header";
import OffreComponent from "@/shared/OffreComponent";

export const metadata = {
  title: "Offre 2025",
  description:
    "Découvrez l'offre 2025 de Bernard Pradier : l'Horizontale 2005 des trois cuvées, une sélection rare et exceptionnelle pour les amateurs de millésimes d'exception.",
};

export default function Offre() {

  return (
    <div className="min-h-screen flex flex-col max-w-[1200px] m-auto px-3 lg:px-0">
      <div className="fixed top-0 left-0 w-full h-full bg-[#FFFBEB]/40 z-[-1]"></div>
      <Header />

      <OffreComponent />

      <Footer />
    </div>
  );
}
