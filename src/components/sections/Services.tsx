import React from 'react';
import { servicesData, type ServiceItem } from '../../components/data/mockData';
import { Cpu, Wrench, Disc, ShieldCheck, BatteryCharging, Car, ChevronRight } from 'lucide-react';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenReservation: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService, onOpenReservation }) => {
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'Cpu': return <Cpu className="text-yellow-500" size={26} />;
      case 'Wrench': return <Wrench className="text-yellow-500" size={26} />;
      case 'Disc': return <Disc className="text-yellow-500" size={26} />;
      case 'ShieldCheck': return <ShieldCheck className="text-yellow-500" size={26} />;
      case 'BatteryCharging': return <BatteryCharging className="text-yellow-500" size={26} />;
      default: return <Car className="text-yellow-500" size={26} />;
    }
  };

  return (
    <section id="services" className="py-24 bg-neutral-100 text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-yellow-600 font-bold uppercase tracking-widest text-xs">NOS SERVICES</span>
          <h2 className="text-3xl sm:text-4xl font-black">Des services complets pour votre véhicule</h2>
          <p className="text-neutral-600 text-sm">Cliquez sur un service pour afficher les détails complets de la prestation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              onClick={() => onSelectService(service)}
              className="bg-white border border-neutral-200 rounded-2xl p-8 hover:border-yellow-500 transition-all duration-300 hover:-translate-y-1 cursor-pointer group flex flex-col justify-between shadow-md"
            >
              <div>
                <div className="bg-neutral-900 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-xl font-black mb-2 text-neutral-900 group-hover:text-yellow-600 transition">{service.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">{service.description}</p>
              </div>
              <div className="flex items-center text-xs font-black uppercase tracking-wider text-yellow-600 gap-1 pt-4 border-t border-neutral-100">
                <span>Voir les détails</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={onOpenReservation}
            className="bg-neutral-900 hover:bg-black text-white font-black px-8 py-4 rounded-xl shadow-lg transition uppercase text-xs tracking-wider cursor-pointer"
          >
            PRENDRE RENDEZ-VOUS POUR UN SERVICE
          </button>
        </div>
      </div>
    </section>
  );
};