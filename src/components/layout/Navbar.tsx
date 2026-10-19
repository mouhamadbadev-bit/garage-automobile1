import React, { useState } from 'react';
import { Menu, X, Phone, Wrench } from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-2">
          <div className="bg-yellow-500 text-black p-2 rounded-xl font-black">
            <Wrench size={22} />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-wider text-white">AUTOCARE <span className="text-yellow-500">GARAGE</span></span>
            <span className="text-[9px] tracking-widest text-neutral-400 uppercase">Entretien & Réparation</span>
          </div>
        </a>

        {/* Liens Desktop */}
        <div className="hidden lg:flex items-center space-x-8 text-xs font-bold uppercase tracking-wider text-neutral-300">
          <a href="#accueil" className="hover:text-yellow-500 transition">Accueil</a>
          <a href="#services" className="hover:text-yellow-500 transition">Services</a>
          <a href="#apropos" className="hover:text-yellow-500 transition">À propos</a>
          <a href="#realisations" className="hover:text-yellow-500 transition">Nos Réalisations</a>
          <a href="#avis" className="hover:text-yellow-500 transition">Avis clients</a>
          <a href="#contact" className="hover:text-yellow-500 transition">Contact</a>
        </div>

        {/* Contact et Réservation Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="tel:+221771234567" className="flex items-center gap-2 text-xs font-bold text-black bg-yellow-500 hover:bg-yellow-400 px-4 py-2.5 rounded-xl transition">
            <Phone size={14} />
            <span>+221 77 123 45 67</span>
          </a>
          <button 
            onClick={onOpenReservation}
            className="bg-neutral-900 border border-yellow-500/50 hover:bg-yellow-500 hover:text-black text-yellow-500 text-xs font-black uppercase tracking-wider px-5 py-2.5 rounded-xl transition cursor-pointer"
          >
            Réserver
          </button>
        </div>

        {/* Bouton Menu Mobile */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-neutral-300 hover:text-white p-2 cursor-pointer"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-900 border-b border-neutral-800 px-6 py-6 space-y-4 text-sm font-bold uppercase tracking-wider">
          <a href="#accueil" onClick={() => setMobileMenuOpen(false)} className="block text-neutral-300 hover:text-yellow-500">Accueil</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-neutral-300 hover:text-yellow-500">Services</a>
          <a href="#apropos" onClick={() => setMobileMenuOpen(false)} className="block text-neutral-300 hover:text-yellow-500">À propos</a>
          <a href="#realisations" onClick={() => setMobileMenuOpen(false)} className="block text-neutral-300 hover:text-yellow-500">Nos Réalisations</a>
          <a href="#avis" onClick={() => setMobileMenuOpen(false)} className="block text-neutral-300 hover:text-yellow-500">Avis clients</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-neutral-300 hover:text-yellow-500">Contact</a>
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenReservation(); }}
            className="w-full bg-yellow-500 text-black font-black py-3 rounded-xl text-center cursor-pointer uppercase text-xs"
          >
            Réserver en ligne
          </button>
        </div>
      )}
    </nav>
  );
};