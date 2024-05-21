import React from 'react';
import Container from '../../elements/container';
import AliceCarousel from 'react-alice-carousel';
import '../../../css/carousel.css';
import 'tailwindcss/tailwind.css';
import Image1 from '../../../medias/images/photos/dorian-hurst-d-igN2ptyC8-unsplash.jpg'
import Heading from '../../elements/DisplayTitles/Heading';

const Slide = ({ children }) => {
    return (

        <div className='grid grid-cols-2 p-6 h-96'>
            <div className='p-10 mb-10 '>

                <Heading variant="h4">
                    test
                </Heading>

                <Heading>
                    test 2
                </Heading>
                
            </div>

          
            {children}
          

            {/*Contenu */}
            <div className='relative w-full h-full'>
                <img src={Image1} alt="" className="absolute top-0 left-0 z-0 object-cover object-bottom w-full h-full bg-yellow-500" />
            </div>
        </div>

    )
}

export default function Event() {

    {/* Carousel tailwinds */ }


    const items = [


        <Slide>
            
        </Slide>,

        <Slide>
           
        </Slide>

        

    ];
    return (
        <Container>
            <div className='shadow-2xl h-96'>
                <AliceCarousel mouseTracking items={items}
                    //autoPlay
                    infinite
                    //autoPlayInterval="4000"
                    disableButtonsControls


                />
            </div>
        </Container>
    );
}
