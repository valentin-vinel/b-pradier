export default function Navbar({ className = "", onLinkClick }) {
    return (
        <nav aria-label="Menu principal" className={`${className} text-[#6B1E1E] font-medium`}>
            <a href="/" onClick={onLinkClick} className="hover:text-[#C5A572] transition-colors block">
                Histoire
            </a>
            <a href="/" onClick={onLinkClick} className="hover:text-[#C5A572] transition-colors block">
                Cuvées
            </a>
            <a href="/" onClick={onLinkClick} className="hover:text-[#C5A572] transition-colors block">
                Millésimes
            </a>
        </nav>
    );
}
