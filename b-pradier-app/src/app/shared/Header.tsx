import Image from "next/image";
import { useState } from "react";
import menu from "../../../public/bar.png";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            <header className="flex justify-between my-4">
                <h1 className="text-2xl font-bold md:text-3xl">
                    <a href="/" rel="home">
                        Bernard Pradier
                    </a>
                </h1>

                {/* Bouton menu mobile */}
                <div className="md:hidden flex items-center">
                    <button type="button" onClick={toggleMenu} className="">
                        <Image src={menu} width={35} height={35} alt="Logo du menu pour mobile" className="" />
                        <span className="sr-only">Open main menu</span>
                    </button>
                </div>

                {/* Menu desktop */}
                <nav className="hidden md:flex md:gap-[50px] md:items-end text-[#6B1E1E] font-medium" aria-label="Menu principal">
              <a href="/" className="hover:text-[#C5A572] transition-colors">Histoire</a>
              <a href="/" className="hover:text-[#C5A572] transition-colors">Cuvées</a>
              <a href="/" className="hover:text-[#C5A572] transition-colors">Millésimes</a> </nav>
            </header>
            {/* Menu mobile déroulant */}
            {mobileMenuOpen && (
                <nav className="flex flex-col gap-3 text-[#6B1E1E] font-medium  items-center hover:font-bold lg:hidden">
                    <a href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C5A572] transition-colors">
                        Histoire
                    </a>
                    <a href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C5A572] transition-colors">
                        Cuvées
                    </a>
                    <a href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C5A572] transition-colors">
                        Millésimes
                    </a>
                </nav>
            )}
        </>
    );
}
