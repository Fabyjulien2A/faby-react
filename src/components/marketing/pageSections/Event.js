import React from 'react';
import Container from '../../elements/container';
import AliceCarousel from 'react-alice-carousel';
import '../../../css/carousel.css';
import 'tailwindcss/tailwind.css';
import Image1 from '../../../medias/images/photos/dorian-hurst-d-igN2ptyC8-unsplash.jpg';
import Image2 from '../../../medias/images/products/Product-1.jpg';
import Image3 from '../../../medias/images/products/Product-2.jpg';
import Heading from '../../elements/DisplayTitles/Heading';

// Définition du composant Slide
const Slide = ({ children, category, title, image }) => {
    return (
        <div className='grid p-3 md:p-6 md:grid-cols-2'>
            <div className='p-5 pb-10 md:p-10 md:mb-10'>
                <Heading variant="h4">{category}</Heading>
                <Heading theme="black" variant="h3" className="mb-5">{title}</Heading>
                <p className='mb-0 text-lg font-light tracking-wide text-gray-800 md:mb-20'>
                    {children}
                </p>
            </div>
            <div className='relative w-full h-64 overflow-hidden md:h-80 lg:h-96'>
                <img src={image} alt="" className="object-cover w-full h-full" />
            </div>
        </div>
    );
};

// Définition du composant Event
export default function Event() {
    const items = [
        <Slide
            image={Image1}
            category="Événements à venir"
            title="Vivez la demi-finale"
        >
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
            <div className='max-w-screen-lg mx-auto border border-gray-100 shadow-2xl'>
                <AliceCarousel
                    mouseTracking
                    items={items}
                    autoPlay
                    autoPlayInterval={4000}
                    infinite
                    disableButtonsControls
                    animationType="fadeout"
                />
            </div>
        </Container>
    );
}
