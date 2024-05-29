import React from 'react';
import Illustration from '../../../medias/images/background/bg-food.jpg'; // Importation de l'image de fond
import Container from '../../elements/container'; // Importation du composant Container
import Header from '../pageSections/Header'; // Importation du composant Header
import Products from '../../../medias/images/heroTop/burger-hero-top.png'; // Importation de l'image du produit
import Button from '../../elements/Button'; // Importation du composant Button

// Définition et exportation du composant HeroTop
export default function HeroTop() {
  return (
    // Conteneur principal avec une largeur complète et un fond jaune
    <div className='w-full bg-yellow-300'>
      {/* Conteneur avec l'image de fond en répétition */}
      <div
        className='w-full h-full pb-20 bg-repeat md:pb-40'
        style={{ backgroundImage: `url(${Illustration})` }} >
        <Container>
          {/* Inclusion du Header */}
          <Header />
          <div className='relative w-full mt-10 md:mt-28'>
            {/* Image du produit, positionnée de manière absolue */}
            <img src={Products} className='absolute right-0 z-0 hidden w-6/12 md:block lg:-top-64' style={{width:`568px`}} alt="Un menu hamburger avec frites et coca cola" />
            {/* Cercle rouge contenant le prix */}
            <div className='absolute hidden w-40 h-40 p-3 bg-red-500 rounded-full lg:block right-80 top-40'>
              <div className='flex items-center justify-center w-full h-full text-white border-2 border-white border-dashed rounded-full'>
                <div className='text-center'>
                  <span className='block font-extrabold'>
                    <span className='text-5xl'>5</span>.49€
                  </span>
                  <span className='text-sm tracking-widest uppercase'>seulement</span>
                </div>
              </div>
            </div>

            {/* Titres et slogans */}
            <div className='relative z-10 text-left text-black uppercase md:text-center lg:text-left'>
              <h1 className='mb-4'>C'est le moment de gouter au bon goût des hamburger</h1>
              <h2 className='font-semibold shadowTittleSecondary'>
                <span className='block text-7xl md:text-8xl'>Burger</span>
                <span className='block text-5xl md:text-6xl sm:inline-block'>House</span>
                <span className='ml-0 text-4xl sm:ml-3'>Click <span className='text-red-500'>&</span>Collect</span>
              </h2>
            </div>
          </div>
          {/* Bouton pour créer un compte */}
          <Button className='w-full mt-5 lg:w-1/2' color='black' theme='big'>
            Créer mon compte
          </Button>
        </Container>
      </div>
    </div>
  );
}
