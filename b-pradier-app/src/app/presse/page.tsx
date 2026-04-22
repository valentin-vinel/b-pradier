import Footer from "@/shared/Footer";
import Header from "@/shared/Header";
import PresseGR from "@/shared/PresseGR";
import PresseCS from "@/shared/PresseCS";
import PresseOC from "@/shared/PresseOC";

export const metadata = {
  title: "Presse",
  description:
    "Découvrez les articles de presse où sont citées certains Millésimes de Bernard Pradier, de 1988 à 2010.",
};

export default function Presse() {

  return (
    <div className="min-h-screen flex flex-col max-w-[1200px] m-auto px-3 lg:px-0">
      <div className="fixed top-0 left-0 w-full h-full bg-[#FFFBEB]/40 z-[-1]"></div>
      <Header />

        <h2 className="text-xl lg:text-2xl text-center text-red font-bold mt-8">REVUE DE PRESSE</h2>
        <p className="text-xl text-center text-red font-bold mb-8">LES CHÂTEAU D'HUGUES MILLÉSIMES 1988 À 2010</p>
        
        <div className="flex justify-between text-lg">
            <PresseGR />

            <PresseCS />

            <PresseOC />
        </div>

      <Footer />
    </div>
  );
}
