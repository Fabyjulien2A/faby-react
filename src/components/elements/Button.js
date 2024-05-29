import React from 'react';

// Composant fonctionnel Button
// Ce composant reçoit des enfants, une classe CSS, une couleur et un thème en tant que props
export default function Button({ children, className, color, theme }) {

  // Déclaration de la variable background pour la couleur de fond du bouton
  let background;

  // Définition de la couleur de fond en fonction du prop color
  if (color === 'black') { 
    background = 'bg-black'; 
  } else if (color === 'danger') { 
    background = 'bg-red-500'; 
  } else { 
    background = 'bg-yellow-400'; 
  }

  // Utilisation d'un switch pour définir la couleur de fond (redondant avec le code précédent)
  switch (color) {
    case 'black':
      background = "bg-black";
      break;
    case 'danger':
      background = "bg-red-500";
      break;
    default:
      background = "bg-yellow-400";
  }

  // Utilisation d'un switch pour définir le style du bouton en fonction du thème
  switch (theme) {
    // Si le thème est 'small', retourner un bouton avec des petites dimensions
    case 'small':
      return (
        <div>
          <button className={`${className} ${background} px-4 py-2 uppercase shadow-xl text-white text-xs font-medium animate`}>
            {children}
          </button>
        </div>
      );

    // Si le thème est 'big', retourner un bouton avec des grandes dimensions
    case 'big':
      return (
        <div>
          <button className={`${className} ${background} px-4 py-4 md:px-8 py-4 uppercase shadow-xl text-white text-sm md:text-base font-medium animate`}>
            {children}
          </button>
        </div>
      );

    // Par défaut, retourner un bouton avec des dimensions moyennes
    default:
      return (
        <div>
          <button className={`${className} ${background} px-4 py-3 uppercase shadow-xl text-white text-xs md: text-sm font-medium animate`}>
            {children}
          </button>
        </div>
      );
  }
}
