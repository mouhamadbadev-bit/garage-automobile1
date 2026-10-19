export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  price: string;
  duration: string;
  icon: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "diagnostic",
    title: "DIAGNOSTIC",
    description: "Diagnostic électronique complet avec des équipements de pointe.",
    longDescription: "Analyse complète des calculateurs de votre véhicule à l'aide d'une valise de diagnostic de dernière génération pour identifier instantanément toute anomalie moteur ou électronique.",
    price: "15 000 FCFA",
    duration: "30 minutes",
    icon: "Cpu"
  },
  {
    id: "entretien",
    title: "ENTRETIEN",
    description: "Vidange, filtres, freins, suspension... Nous prenons soin de tout.",
    longDescription: "Remplacement de l'huile moteur, changement des filtres (huile, air, habitacle) et contrôle minutieux de 15 points de sécurité pour garantir la longévité de votre moteur.",
    price: "À partir de 35 000 FCFA",
    duration: "45 minutes",
    icon: "Wrench"
  },
  {
    id: "pneumatiques",
    title: "PNEUMATIQUES",
    description: "Vente et montage de pneus toutes marques et équilibrage.",
    longDescription: "Vente de pneumatiques adaptés à votre budget, montage professionnel, équilibrage dynamique des roues et contrôle de la géométrie.",
    price: "À partir de 5 000 FCFA / pneu",
    duration: "30 minutes",
    icon: "Disc"
  },
  {
    id: "freinage",
    title: "FREINAGE",
    description: "Contrôle et réparation de votre système de freinage.",
    longDescription: "Inspection, rectification ou remplacement des disques et plaquettes de frein, purge du circuit hydraulique et vérification du liquide de frein.",
    price: "Sur devis",
    duration: "1 à 2 heures",
    icon: "ShieldCheck"
  },
  {
    id: "batterie",
    title: "BATTERIE",
    description: "Test, remplacement et recharge de batterie toutes marques.",
    longDescription: "Test de charge de l'alternateur et de la batterie, remplacement par un modèle d'origine adapté aux exigences électriques de votre véhicule.",
    price: "À partir de 45 000 FCFA",
    duration: "20 minutes",
    icon: "BatteryCharging"
  },
  {
    id: "carrosserie",
    title: "CARROSSERIE",
    description: "Réparation carrosserie et peinture pour redonner vie à votre auto.",
    longDescription: "Débosselage, ponçage, préparation et peinture en cabine aux teintes d'origine constructeur pour effacer tous les impacts et rayures.",
    price: "Sur devis",
    duration: "Variable",
    icon: "Car"
  }
];

export const testimonialsData = [
  {
    name: "Mamadou L.",
    comment: "Service rapide et professionnel. Mon véhicule roule parfaitement !",
    rating: 5
  },
  {
    name: "Aissatou D.",
    comment: "Équipe à l'écoute, transparente sur les prix et très accueillante.",
    rating: 5
  },
  {
    name: "Cheikh T.",
    comment: "Le meilleur garage de Dakar pour l'entretien de ma flotte.",
    rating: 5
  }
];