import type { Metadata } from "next";
import { CartProvider } from "../context/CartContext";
import { Lora, Playfair_Display, Caveat, Playball } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "700"], // choisis les graisses que tu veux
    variable: "--font-playfair",
});

const caveat = Caveat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-open-sans",
});

const lora = Lora({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-lora",
});

const playball = Playball({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-playball",
});

export const metadata: Metadata = {
    title: "B. Pradier — Millésimes rares de 1988 à 2010 | Château d'Hugues",
    description: "Découvrez les millésimes rares du Château d'Hugues signés B. Pradier, de 1988 à 2010, conservés avec passion et proposés à la vente en ligne.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className={`${playfair.variable} ${caveat.variable} ${lora.variable} ${playball.variable} antialiased md:text-xl`}>
                <CartProvider>
                    {children}
                </CartProvider>
            </body>
        </html>
    );
}
