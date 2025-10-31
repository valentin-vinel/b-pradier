'use client'

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { usePathname } from "next/navigation";
import menu from "../../public/bar.png";
import Link from "next/link";
import panier from "../../public/coffret-a-vin.png"

interface HeaderProps {
  cartQuantity?: number; // optionnel si tu veux
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
    const linkClass = (path: string) =>
        `hover:text-[#C5A572] transition-colors ${
        isActive(path) ? "font-bold" : ""
    }`;

    return (
        <>
            <header className="flex justify-between my-4">
                <h1 className="text-2xl md:text-2xl">
                    <a href="/" rel="home">
                        Bernard Pradier
                    </a>
                </h1>

                {/* Bouton menu mobile */}
                <div className="lg:hidden flex items-center">
                    <button type="button" onClick={toggleMenu} className="cursor-pointer">
                        <Image src={menu} width={35} height={35} alt="Logo du menu pour mobile" className="" />
                        <span className="sr-only">Open main menu</span>
                    </button>
                </div>

                {/* Menu desktop */}
                <nav className="hidden lg:flex md:gap-[50px] md:items-end text-[#6B1E1E] font-medium" aria-label="Menu principal">
                    <Link href={'/histoire'} className={linkClass("/histoire")}>HISTOIRE</Link>
                    <Link href={'/cuvees'} className={linkClass("/cuvees")}>CUVÉES</Link>
                    <Link href={'/degustation'} className={linkClass("/degustation")}> DÉGUSTATION</Link>
                    <Link href={'/millesimes'} className={linkClass("/millesimes")}>MILLÉSIMES</Link>
                    <Link href={'/panier'} className="hover:text-[#C5A572] transition-colors relative">
                        <Image src={panier} alt="Icône panier" className="w-[40px]  hover:bg-[#E7DFC9] hover:rounded"></Image>
                        {totalQuantity > 0 && (
                            <span className="absolute -top-2 -right-4 bg-[#6B1E1E] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                {totalQuantity}
                            </span>
                        )}
                    </Link>
                </nav>
            </header>

            {/* Menu mobile déroulant */}
            {mobileMenuOpen && (
                <nav className="flex flex-col gap-4 text-[#6B1E1E] font-medium items-center lg:hidden bg-white/50">
                    <Link href={'/histoire'} onClick={() => setMobileMenuOpen(false)} className={linkClass("/histoire")}>HISTOIRE</Link>
                    <Link href={'/cuvees'} onClick={() => setMobileMenuOpen(false)} className={linkClass("/cuvees")}>CUVÉES</Link>
                    <Link href={'/degustation'} onClick={() => setMobileMenuOpen(false)} className={linkClass("/degustation")}>DÉGUSTATION</Link>
                    <Link href={'/millesimes'} onClick={() => setMobileMenuOpen(false)} className={linkClass("/millesimes")}>MILLÉSIMES</Link>
                    <Link href={'/panier'} className="hover:text-[#C5A572] transition-colors relative">
                        <Image src={panier} alt="Icône panier" className="w-[40px]  hover:bg-[#E7DFC9] hover:rounded"></Image>
                        {totalQuantity > 0 && (
                            <span className="absolute -top-2 -right-4 bg-[#6B1E1E] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                {totalQuantity}
                            </span>
                        )}
                    </Link>
                </nav>
            )}
        </>
    );
}
