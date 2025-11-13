export default function Footer() {
    return (
        <footer className="mt-8 py-2 text-center text-sm text-gray-700 md:mt-auto">
            <p className="p-2 border-t border-[#C5A572] text-gray-600"><em>L'abus d'alcool est dangereux pour la santé, à consommer avec modération.</em></p>
                <div className="space-x-6 mb-2 flex flex-wrap justify-center ">
                    <a href="#" className="">
                        Facebook
                    </a>
                    <a href="#" className="text-nowrap">
                        Mentions légales
                    </a>
                    <a href="#" className="">
                        CGV
                    </a>
                    <a href="text-nowrap">
                        Politique de confidentialité
                    </a>
                    <a href="text-nowrap">
                        Politique de cookie
                    </a>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                    &copy; 2025 B. Pradier — Tous droits réservés.
                </p>
            </footer>
    );
}
