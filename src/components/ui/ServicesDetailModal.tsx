import React from 'react';
import { X, Clock, Tag } from 'lucide-react';
import {type ServiceItem } from '../../components/data/mockData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenReservation: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose, onOpenReservation }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-lg p-6 relative shadow-2xl text-white">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white bg-neutral-800 p-2 rounded-full transition cursor-pointer"
        >
          <X size={20} />
        </button>

        <span className="text-yellow-500 font-bold uppercase tracking-widest text-xs">Détails de la prestation</span>
        <h3 className="text-2xl font-black mt-1 mb-3 text-white">{service.title}</h3>
        <p className="text-neutral-300 mb-6 text-sm leading-relaxed">{service.longDescription}</p>

        <div className="space-y-3 bg-neutral-800/60 p-4 rounded-xl border border-neutral-800 mb-6">
          <div className="flex items-center gap-3 text-sm">
            <Tag className="text-yellow-500" size={18} />
            <span className="text-neutral-400">Tarif indicatif :</span>
            <span className="font-bold text-white">{service.price}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Clock className="text-yellow-500" size={18} />
            <span className="text-neutral-400">Durée estimée :</span>
            <span className="font-bold text-white">{service.duration}</span>
          </div>
        </div>

        <div className="flex gap-3">
          <button 
            onClick={onClose}
            className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-white py-3 rounded-lg font-semibold transition cursor-pointer"
          >
            Fermer
          </button>
          <button 
            onClick={() => { onClose(); onOpenReservation(); }}
            className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-black py-3 rounded-lg font-black shadow-lg shadow-yellow-500/20 transition cursor-pointer uppercase text-xs"
          >
            Réserver ce service
          </button>
        </div>
      </div>
    </div>
  );
};