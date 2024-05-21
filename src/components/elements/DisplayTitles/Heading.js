import React from 'react'

// Composant fonctionnel Heading
// Ce composant reçoit des enfants (children), un variant, un theme et un display en tant que props
export default function Heading({ children, variant, theme, display }) {
  // Classe CSS par défaut utilisée pour les titres
  const classDefault = "mt-5 uppercase";
  let font, color;

  // Détermination de la classe de police en fonction du thème
  switch (theme) {
    case "black":
      font = "font-black"; // Utilise une police épaisse si le thème est "black"
      break;
    default:
      font = "tracking-tighter"; // Utilise une police plus condensée par défaut
  }

  // Détermination de la couleur du texte en fonction du display
  switch (display) {
    case "gray":
      color = "text-gray-600"; // Utilise une couleur grise si le display est "gray"
      break;
    default:
      color = "text-black"; // Utilise la couleur noire par défaut
  }

  // Détermination du type de balise de titre à utiliser en fonction du variant
  switch (variant) {
    case "h3":
      return (
        // Conteneur flex pour centrer le titre horizontalement et verticalement
        <div className='flex items-center justify-center my-5'>
          <h3 className={`text-2xl ${classDefault} ${font} ${color}`}>
            {children}
          </h3>
        </div>
      )

      case "h4":
        return (
          // Conteneur flex pour centrer le titre horizontalement et verticalement
          <div className='flex items-center justify-center my-5'>
            <h3 className={`text-2xl ${classDefault} ${font} ${color}`}>
              {children}
            </h3>
          </div>
        )

    default:
      return (
        // Conteneur flex pour centrer le titre horizontalement et verticalement
        <div className='flex items-center justify-center my-5'>
          <h2 className={`${theme === "black" ? "text-5xl " : "text-3xl "} ${classDefault} ${font} ${color}`}>
            {children}
          </h2>
        </div>
      )
  }
}
