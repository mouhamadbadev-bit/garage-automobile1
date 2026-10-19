import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/ton_code_formspree", {
      method: "POST",
      body: data,
      headers: { 'Accept': 'json' }
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-lg p-6 relative shadow-2xl text-white">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white bg-neutral-800 p-2 rounded-full transition cursor-pointer"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <CheckCircle2 className="w-16 h-16 text-yellow-500 mx-auto animate-bounce" />
            <h3 className="text-2xl font-bold">Demande envoyée !</h3>
            <p className="text-neutral-400 text-sm">
              Merci ! Votre demande de rendez-vous a bien été transmise. Notre équipe vous contactera rapidement pour confirmation.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="mt-4 bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-2.5 rounded-lg font-bold transition cursor-pointer"
            >
              Fermer
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-black mb-1 text-yellow-500">PRENDRE RENDEZ-VOUS</h2>
            <p className="text-xs text-neutral-400 mb-6 uppercase tracking-wider">Remplissez le formulaire pour planifier votre intervention</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">Nom complet</label>
                <input type="text" name="name" required placeholder="Mamadou Diallo" className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-yellow-500 transition" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">Téléphone</label>
                  <input type="tel" name="phone" required placeholder="+221 77..." className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-yellow-500 transition" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">Véhicule (Marque / Modèle)</label>
                  <input type="text" name="vehicle" required placeholder="Toyota RAV4" className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-yellow-500 transition" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">Service souhaité</label>
                <select name="service" className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-yellow-500 transition">
                  <option value="Diagnostic">Diagnostic</option>
                  <option value="Entretien & Vidange">Entretien & Vidange</option>
                  <option value="Pneumatiques">Pneumatiques</option>
                  <option value="Freinage">Freinage</option>
                  <option value="Batterie">Batterie</option>
                  <option value="Carrosserie">Carrosserie</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">Date souhaitée</label>
                <input type="date" name="date" required className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-yellow-500 transition" />
              </div>
              <button 
                type="submit" 
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black py-3 rounded-lg shadow-lg shadow-yellow-500/20 transition mt-2 cursor-pointer uppercase tracking-wider"
              >
                Confirmer la demande
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};