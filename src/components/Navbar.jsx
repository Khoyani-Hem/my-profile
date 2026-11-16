import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return(
        <nav className="relative flex items-center justify-between px-8 py-5 bg-blue-950 text-white">
            
            <a href="#home" className="group cursor-default">

                <h2 className="text-2xl font-black tracking-widest text-blue-400">
                    HEM<span className="text-white">.</span>
                </h2>

                <p className="text-xs tracking-[0.35em] text-blue-200">
                    KHOYANI
                </p>

            </a>

            {/* Hamburger Button */}

            <button
                type="button"
                onClick={() => setIsOpen((open) => !open)}
                className="text-white md:hidden cursor-pointer"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
            >
                {isOpen ? <X size={28} /> : <Menu size={28} /> } 
            </button>

            {/* Desktop Navigation */}

            <div className="hidden md:flex items-center gap-10">

                <a href="#home" className="transition-colors duration-300 ease-in-out hover:text-amber-400">Home</a>
                <a href="#about" className="transition-colors duration-300 ease-in-out hover:text-amber-400">About</a>
                <a href="#project" className="transition-colors duration-300 ease-in-out hover:text-amber-400">Project</a>
                <a href="#contact" className="transition-colors duration-300 ease-in-out hover:text-amber-400">Contact</a>

            </div>

            {/* Mobile Navigation */}

            <div
                id="mobile-navigation"
                aria-hidden={!isOpen}
                className={`absolute top-full left-0 z-50 flex w-full flex-col items-center gap-6 bg-blue-900 py-6 transition-all duration-300 ease-in-out md:hidden ${isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"}`}
            >
                <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                <a href="#project" onClick={() => setIsOpen(false)}>Project</a>
                <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
            </div>

        </nav>
    );
}

export default Navbar;