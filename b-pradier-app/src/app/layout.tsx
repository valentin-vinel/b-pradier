import type { Metadata } from "next";
import { Playfair_Display, Open_Sans, Lora } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choisis les graisses que tu veux
  variable: "--font-playfair",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cinzel',
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
      <body
        className={`${playfair.variable} ${openSans.variable} ${lora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
