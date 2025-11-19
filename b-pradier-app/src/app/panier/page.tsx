// 'use client';

import PanierClient from "@/shared/PanierClient";

export const metadata = {
  title: "Panier",
  robots: { index: false, follow: false },
};

export default function PanierPage() {
  return (
    <PanierClient />
  )
}
