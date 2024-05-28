import React from 'react';

// Définition et exportation du composant Container
export default function Container({ children }) {
    return (
        // Div englobante avec des classes CSS Tailwind
        <div className='h-full max-w-6xl m-auto'>
            {/* Rendu des enfants passés au composant */}
            {children}
        </div>
    );
}
