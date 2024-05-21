import React from 'react';
// Importation des ressources médias
import Logo from '../../../medias/svg/Logo-burger-house.svg';
import Icone from '../../../medias/svg/ico-bag-clickAndCollect.svg';
// Importation du composant Button
import Button from '../../elements/Button';

// Composant fonctionnel Header
// Ce composant représente l'en-tête de la page
export default function Header() {
  return (
    // Conteneur principal de l'en-tête avec des classes pour la position relative, le z-index, et le flexbox
    <div className='relative z-10 flex items-center justify-between py-10'>
      
      {/* Section du logo */}
      <div className='w-full'>
        {/* Logo de l'entreprise avec une largeur définie */}
        <img src={Logo} alt="Burger House" className='w-64' />
      </div>

      {/* Section des options et des boutons */}
      <div className='w-full'>
        {/* Conteneur flex pour l'icône et le texte de commande */}
        <div className='flex items-center justify-end'>
          <img src={Icone} alt="Icône de commande" className='w-5 h-5 mr-1' />
          <span>Commandez votre repas en ligne</span>
        </div>

        {/* Conteneur flex pour les boutons d'inscription et de connexion */}
        <div className='flex items-center justify-end mt-5'>
          {/* Bouton d'inscription avec un style supplémentaire */}
          <Button className='mr-3 tracking-widest'>
            Inscription
          </Button>
          
          {/* Bouton de connexion avec une couleur noire */}
          <Button className='tracking-widest' color='black'>
            Connexion
          </Button>
        </div>
      </div>
    </div>
  );
}
