"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { usePathname } from "next/navigation";
import menu from "../../public/bar.png";
import Link from "next/link";
import panier from "../../public/boite-ouverte-noir.png";

interface HeaderProps {
    cartQuantity?: number;
}

export default function Header({ cartQuantity }: HeaderProps) {
    const { totalQuantity } = useCart();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname(); // ✅ récupère la route actuelle

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // ✅ Fonction pour savoir si un lien est actif
    const isActive = (path: string) => pathname === path;

    // ✅ Fonction pour générer les classes dynamiques
    const linkClass = (path: string) => `hover:text-[#C5A572] transition-colors hover:border-b ${isActive(path) ? "font-bold" : ""}`;

    return (
        <>
            <header className="flex justify-between my-4">
                <h1 className="text-2xl md:text-2xl text-black lg:mt-2">
                    <Link href="/" rel="home" className={linkClass("/")}>
                        Bernard Pradier
                    </Link>
                </h1>

                {/* Bouton menu mobile */}
                <div className="lg:hidden flex items-center">
                    <button type="button" onClick={toggleMenu} className="cursor-pointer">
                        <Image src={menu} width={35} height={35} alt="Logo du menu pour mobile" className="" />
                        <span className="sr-only">Open main menu</span>
                    </button>
                </div>

                {/* Menu desktop */}
                <nav className="hidden lg:flex md:gap-8 md:items-end text-black font-medium text-lg" aria-label="Menu principal">
                    <Link href={"/histoire"} className={linkClass("/histoire")}>
                        L'HISTOIRE
                    </Link>
                    <Link href={"/cuvees"} className={linkClass("/cuvees")}>
                        LES CUVÉES
                    </Link>
                    <Link href={"/degustation"} className={linkClass("/degustation")}>
                        LES DÉGUSTATIONS
                    </Link>
                    <Link href={"/offre"} className={linkClass("/offre")}>
                        L'OFFRE
                    </Link>
                    <Link href={"/millesimes"} className={linkClass("/millesimes")}>
                        LES MILLÉSIMES
                    </Link>
                    <Link href={"/presse"} className={linkClass("/presse")}>
                        PRESSE
                    </Link>
                    <Link href={"/panier"} className="hover:text-[#C5A572] transition-colors relative">
                        <Image src={panier} alt="Icône panier" className="w-9  hover:bg-[#E7DFC9]/50 hover:rounded"></Image>
                        {totalQuantity > 0 && <span className="absolute -top-2 -right-4 bg-[#6B1E1E] text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">{totalQuantity}</span>}
                    </Link>
                </nav>
            </header>

            {/* Menu mobile déroulant */}
            {mobileMenuOpen && (
                <nav className="flex flex-col gap-4 text-black font-medium items-center lg:hidden bg-white/50 mb-4">
                    <Link href={"/histoire"} onClick={() => setMobileMenuOpen(false)} className={linkClass("/histoire")}>
                        L'HISTOIRE
                    </Link>
                    <Link href={"/cuvees"} onClick={() => setMobileMenuOpen(false)} className={linkClass("/cuvees")}>
                        LES CUVÉES
                    </Link>
                    <Link href={"/offre"} onClick={() => setMobileMenuOpen(false)} className={linkClass("/offre")}>
                        L'OFFRE
                    </Link>
                    <Link href={"/degustation"} onClick={() => setMobileMenuOpen(false)} className={linkClass("/degustation")}>
                        LES DÉGUSTATIONS
                    </Link>
                    <Link href={"/millesimes"} onClick={() => setMobileMenuOpen(false)} className={linkClass("/millesimes")}>
                        LES MILLÉSIMES
                    </Link>
                    <Link href={"/presse"} onClick={() => setMobileMenuOpen(false)} className={linkClass("/presse")}>
                        PRESSE
                    </Link>
                    <Link href={"/panier"} className="hover:text-[#C5A572] transition-colors relative mb-2">
                        <Image src={panier} alt="Icône panier" className="w-10  hover:bg-[#E7DFC9] hover:rounded"></Image>
                        {totalQuantity > 0 && <span className="absolute -top-2 -right-4 bg-[#6B1E1E] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">{totalQuantity}</span>}
                    </Link>
                </nav>
            )}
        </>
    );
}
