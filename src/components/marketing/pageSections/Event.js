import React from 'react';
import Container from '../../elements/container';
import AliceCarousel from 'react-alice-carousel'; // Importation du composant AliceCarousel
import '../../../css/carousel.css'; // Importation des styles personnalisés pour le carousel
import 'tailwindcss/tailwind.css'; // Importation des styles de Tailwind CSS
import Image1 from '../../../medias/images/photos/dorian-hurst-d-igN2ptyC8-unsplash.jpg';
import Image2 from '../../../medias/images/products/Product-1.jpg';
import Image3 from '../../../medias/images/products/Product-2.jpg';
import Heading from '../../elements/DisplayTitles/Heading'; // Importation du composant Heading

// Définition du composant Slide
const Slide = ({ children, category, title, image }) => {
    return (
        <div className='grid grid-cols-2 p-6 h-96'>
            <div className='p-10 mb-10 '>
                {/* Catégorie de l'événement */}
                <Heading variant="h4" alignement="center">{category}</Heading>
                {/* Titre de l'événement */}
                <Heading theme="black" variant="h3" className="mb-5">{title}</Heading>
                <p className='text-lg font-light tracking-wide text-gray-800'>
                    {/* Description de l'événement */}
                    {children}
                </p>
            </div>
            <div className='relative w-full h-full'>
                {/* Image de l'événement */}
                <img src={image} alt="" className="absolute top-0 left-0 z-0 object-cover object-bottom w-full h-full bg-yellow-500" />
            </div>
        </div>
    );
};

// Définition du composant Event
export default function Event() {
    // Tableau des éléments du carousel
    const items = [
        <Slide
            image={Image1}
            category="Événements à venir"
            title="Vivez la demi-finale"
        >
            {/* Description pour l'événement */}
            kgiugui
        </Slide>,

        <Slide
            image={Image2}
            category="Nouveau burger"
            title="Découvrez le nouveau burger"
        >
            kgiugui
        </Slide>,

        <Slide
            image={Image3}
            category="Nouvelle recette"
            title="Le végéburger arrive"
        >
            kgiugui
        </Slide>
    ];

    return (
        <Container>
            <div className='shadow-2xl h-96'>
                {/* Composant AliceCarousel pour le diaporama */}
                <AliceCarousel
                    mouseTracking // Activation du suivi de la souris
                    items={items} // Éléments du carousel
                    autoPlay // Activation de l'auto-play
                    autoPlayInterval="4000" // Intervalle de l'auto-play en millisecondes
                    infinite // Boucle infinie
                    disableButtonsControls // Désactivation des contrôles de boutons
                    animationType="fadeout" // Type d'animation
                />
            </div>
        </Container>
    );
}
