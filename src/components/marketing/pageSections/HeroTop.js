import React from 'react';
import Illustration from '../../../medias/images/background/bg-food.jpg';
import Container from '../../elements/container';
import Header from '../pageSections/Header'; // Assurez-vous de spécifier le chemin correct vers le fichier Header

export default function HeroTop() {
    return (
       <div className='w-full h-screen bg-yellow-300'>
          <div 
            className='w-full h-full bg-repeat' 
            style={{ backgroundImage: `url(${Illustration})` }}
          >
            <Container>
              <Header />
            </Container>
          </div>
       </div>
    );
}
