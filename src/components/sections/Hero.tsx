import React from 'react';
import { ShieldCheck, Clock, Award,  } from 'lucide-react';
import heroImg from '../../assets/img1.jpg';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section id="accueil" className="relative bg-neutral-950 text-white py-24 lg:py-36 overflow-hidden border-b border-neutral-800">
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Voiture de sport" 
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-linear-to-r from-neutral-950 via-neutral-950/90 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-6">
          <span className="text-yellow-500 font-bold uppercase tracking-widest text-xs bg-yellow-500/10 border border-yellow-500/30 px-3 py-1.5 rounded-full inline-block">
            GARAGE AUTOMOBILE À DAKAR
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
            VOTRE VOITURE, <br /><span className="text-yellow-500">NOTRE PASSION</span>
          </h1>
          <p className="text-neutral-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Entretien, réparation et diagnostic automobile par des professionnels qualifiés. Qualité et sécurité garanties.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={onOpenReservation}
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-black px-8 py-4 rounded-xl shadow-lg shadow-yellow-500/20 transition flex items-center gap-2 cursor-pointer uppercase text-xs tracking-wider"
            >
              PRENDRE RENDEZ-VOUS
            </button>
            <a 
              href="#services"
              className="border border-neutral-700 hover:border-yellow-500 bg-neutral-900/60 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-xl transition flex items-center gap-2 uppercase text-xs tracking-wider"
            >
              VOIR NOS SERVICES
            </a>
          </div>
        </div>

        {/* Badges de réassurance */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 pt-12 border-t border-neutral-800/80 relative z-10">
          <div className="flex items-center gap-4 bg-neutral-900/80 backdrop-blur-md p-4 rounded-xl border border-neutral-800">
            <Award className="text-yellow-500 shrink-0" size={32} />
            <div>
              <h4 className="font-bold text-sm">Techniciens qualifiés</h4>
              <p className="text-xs text-neutral-400">Experts certifiés</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-neutral-900/80 backdrop-blur-md p-4 rounded-xl border border-neutral-800">
            <Clock className="text-yellow-500 shrink-0" size={32} />
            <div>
              <h4 className="font-bold text-sm">Intervention rapide</h4>
              <p className="text-xs text-neutral-400">Respect des délais</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-neutral-900/80 backdrop-blur-md p-4 rounded-xl border border-neutral-800">
            <ShieldCheck className="text-yellow-500 shrink-0" size={32} />
            <div>
              <h4 className="font-bold text-sm">Pièces de qualité</h4>
              <p className="text-xs text-neutral-400">Garantie constructeur</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};