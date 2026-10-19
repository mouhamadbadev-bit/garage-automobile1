import React from 'react';


interface PromoBannerProps {
  onOpenReservation: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onOpenReservation }) => {
  return (
    <section className="bg-yellow-500 text-black py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
        <div className="flex items-center gap-6">
          <div className="bg-black text-yellow-500 w-20 h-20 rounded-2xl flex flex-col items-center justify-center font-black shadow-lg">
            <span className="text-2xl">-20%</span>
          </div>
          <div>
            <span className="text-xs font-black uppercase tracking-widest bg-black/10 px-2 py-1 rounded inline-block mb-1">OFFRE DU MOIS</span>
            <h3 className="text-2xl sm:text-3xl font-black">20% de réduction sur le montage et l'équilibrage des pneus.</h3>
          </div>
        </div>

        <button 
          onClick={onOpenReservation}
          className="bg-black hover:bg-neutral-900 text-white font-black px-8 py-4 rounded-xl shadow-xl transition uppercase text-xs tracking-wider cursor-pointer whitespace-nowrap"
        >
          PROFITER DE L'OFFRE
        </button>
      </div>
    </section>
  );
};