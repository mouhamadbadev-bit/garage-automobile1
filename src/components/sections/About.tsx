import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import aboutImg from '../../assets/img2.jpg';

export const About: React.FC = () => {
  return (
    <section id="apropos" className="py-24 bg-neutral-950 text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="text-yellow-500 font-bold uppercase tracking-widest text-xs">À PROPOS DE NOUS</span>
            <h2 className="text-3xl sm:text-4xl font-black">Un garage de confiance à votre service</h2>
            <p className="text-neutral-400 leading-relaxed text-sm sm:text-base">
              Autocare Garage est un atelier automobile moderne et équipé des meilleures technologies. Notre équipe passionnée met tout en œuvre pour assurer votre sécurité et la performance de votre véhicule.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 bg-neutral-900 p-4 rounded-xl border border-neutral-800">
                <CheckCircle2 className="text-yellow-500 shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold text-sm">Équipe expérimentée</h4>
                  <p className="text-xs text-neutral-400 mt-1">Professionnels formés et certifiés.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-neutral-900 p-4 rounded-xl border border-neutral-800">
                <CheckCircle2 className="text-yellow-500 shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold text-sm">Matériel moderne</h4>
                  <p className="text-xs text-neutral-400 mt-1">Équipements de dernière génération.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-neutral-900 p-4 rounded-xl border border-neutral-800">
                <CheckCircle2 className="text-yellow-500 shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold text-sm">Prix transparents</h4>
                  <p className="text-xs text-neutral-400 mt-1">Tarifs clairs sans mauvaise surprise.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-neutral-900 p-4 rounded-xl border border-neutral-800">
                <CheckCircle2 className="text-yellow-500 shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold text-sm">Satisfaction garantie</h4>
                  <p className="text-xs text-neutral-400 mt-1">Votre satisfaction est notre priorité.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl group">
            <img 
              src={aboutImg} 
              alt="Atelier garage" 
              className="w-full h-105 object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/30 to-transparent"></div>

            <div className="absolute bottom-6 left-6 bg-yellow-500 text-black px-6 py-4 rounded-xl shadow-2xl flex items-center gap-4">
              <span className="text-4xl font-black">10+</span>
              <span className="text-xs font-black uppercase tracking-wider leading-tight">Ans d'expérience<br />à votre service</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};