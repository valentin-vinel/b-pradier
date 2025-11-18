import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-8 py-2 text-center text-sm text-gray-700 md:mt-auto">
            <p className="p-2 border-t border-[#C5A572] text-gray-600"><em>L'abus d'alcool est dangereux pour la santé, à consommer avec modération.</em></p>
                <div className="space-x-6 mb-2 flex flex-wrap justify-center ">
                    <Link href={'/'} className="">
                        Facebook
                    </Link>
                    <Link href={'/mentions-legales'} className="text-nowrap">
                        Mentions légales
                    </Link>
                    <Link href={'/cgv'} className="">
                        CGV
                    </Link>
                    <Link href={'/politique-de-confidentialite'}>
                        Politique de confidentialité
                    </Link>
                    <Link href={'/politique-de-cookies'}>
                        Politique de cookie
                    </Link>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                    &copy; 2025 B. Pradier — Tous droits réservés.
                </p>
            </footer>
    );
}
