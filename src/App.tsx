import  { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { PromoBanner } from './components/sections/PromoBanner';
import { Testimonials } from './components/sections/Testimonials';
import { ReservationModal } from './components/ui/ReservationModal';
import { ServiceDetailModal } from './components/ui/ServicesDetailModal';
import {type ServiceItem } from './components/data/mockData';

export function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-white selection:bg-yellow-500 selection:text-black">
      {/* Barre de navigation */}
      <Navbar onOpenReservation={() => setIsReservationOpen(true)} />

      <main>
        <Hero onOpenReservation={() => setIsReservationOpen(true)} />
        <Services 
          onSelectService={(service) => setSelectedService(service)} 
          onOpenReservation={() => setIsReservationOpen(true)}
        />
        <About />
        <PromoBanner onOpenReservation={() => setIsReservationOpen(true)} />
        <Testimonials />
      </main>

      {/* Pied de page */}
      <Footer onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Modale de Réservation (Formspree) */}
      <ReservationModal 
        isOpen={isReservationOpen} 
        onClose={() => setIsReservationOpen(false)} 
      />

      {/* Modale des Détails de Service */}
      <ServiceDetailModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />
    </div>
  );
}

export default App;