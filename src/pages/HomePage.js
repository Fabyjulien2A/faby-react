import React from 'react';

// Importation des composants de différentes sections de la page d'accueil
import HeroTop from '../components/marketing/pageSections/HeroTop';
import LastProducts from '../components/marketing/pageSections/LastProducts';
import Products from '../components/marketing/pageSections/Products';
import Event from '../components/marketing/pageSections/Event';
import Booking from '../components/marketing/pageSections/Booking';

// Composant fonctionnel HomePage
// Ce composant représente la page d'accueil et inclut plusieurs sections
export default function HomePage() {
  return (
    // Fragment React vide pour encapsuler les sections sans ajouter de nœud DOM supplémentaire
    <>
      {/* Section supérieure de la page d'accueil */}
      <HeroTop />

      {/* Section des derniers produits */}
      <LastProducts />

      {/* Section des produits */}
      <Products />

      {/* Section des évenements */}
      <Event />

       {/* Section formulaire de contact */}
      <Booking />

      
    </>
  );
}
