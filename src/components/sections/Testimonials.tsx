import React from 'react';
import { testimonialsData } from '../../components/data/mockData';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="avis" className="py-24 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-yellow-500 font-bold uppercase tracking-widest text-xs">AVIS CLIENTS</span>
          <h2 className="text-3xl sm:text-4xl font-black">Ils nous font confiance</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item, index) => (
            <div key={index} className="bg-neutral-950 border border-neutral-800 p-8 rounded-2xl flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex gap-1 text-yellow-500 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-neutral-300 text-sm italic leading-relaxed mb-6">"{item.comment}"</p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-800/80">
                <div className="w-10 h-10 rounded-full bg-yellow-500/20 text-yellow-500 font-bold flex items-center justify-center border border-yellow-500/30">
                  {item.name.charAt(0)}
                </div>
                <span className="font-bold text-sm">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};