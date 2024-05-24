import React from 'react';
import Container from '../../elements/container';
import AliceCarousel from 'react-alice-carousel';
import '../../../css/carousel.css';
import 'tailwindcss/tailwind.css';
import Image1 from '../../../medias/images/photos/dorian-hurst-d-igN2ptyC8-unsplash.jpg';
import Image2 from '../../../medias/images/products/Product-1.jpg';
import Image3 from '../../../medias/images/products/Product-2.jpg';
import Heading from '../../elements/DisplayTitles/Heading';

const Slide = ({ children, category, title, image }) => {
    return (
        <div className='grid grid-cols-2 p-6 h-96'>
            <div className='p-10 mb-10 '>
                <Heading variant="h4" alignement="center">{category}</Heading>
                <Heading theme="black" variant="h3" className="mb-5">{title}</Heading>
                <p className='text-lg font-light tracking-wide text-gray-800'>
                    {children}
                </p>

            </div>
            <div className='relative w-full h-full'>
                <img src={image} alt="" className="absolute top-0 left-0 z-0 object-cover object-bottom w-full h-full bg-yellow-500" />
            </div>

        </div>
    );
};

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
            <div className='shadow-2xl h-96'>
                <AliceCarousel
                    mouseTracking
                    items={items}
                    autoPlay
                    autoPlayInterval="4000"
                    infinite
                    disableButtonsControls
                    animationType="fadeout"
                />
            </div>
        </Container>
    );
}
