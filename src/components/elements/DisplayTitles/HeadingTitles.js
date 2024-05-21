import React from 'react';

// Composant fonctionnel HeadingTitles
// Ce composant reçoit des enfants et un variant en tant que props
export default function HeadingTitles({ children, variant }) {

    // Classe CSS par défaut utilisée pour les titres
    const classDefault = "px-7 py-3 bg-yellow-400 text-black uppercase font-bold inline-block";

    // Utilisation d'un switch pour déterminer quel type de titre afficher en fonction du variant
    switch (variant) {
        // Si variant est "h3", afficher un h3
        case "h3":
            return (
                // Conteneur flex pour centrer le titre horizontalement et verticalement
                <div className='flex items-center justify-center my-5'>
                    <h3 className={`text-sm ${classDefault}`}>
                        {children}
                    </h3>
                </div>
            )
        // Si aucun variant n'est spécifié, afficher un h2 par défaut
        default:
            return (
                // Conteneur flex pour centrer le titre horizontalement et verticalement
                <div className='flex items-center justify-center my-5'>
                    <h2 className={`${classDefault}`}>
                        {children}
                    </h2>
                </div>
            )
    }
}
