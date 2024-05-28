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
        className='w-full h-full pb-40 bg-repeat'
        style={{ backgroundImage: `url(${Illustration})` }} >
        <Container>
          {/* Inclusion du Header */}
          <Header />
          <div className='relative w-full mt-28'>
            {/* Image du produit, positionnée de manière absolue */}
            <img src={Products} className='absolute right-0 z-0 w-6/12 -top-64' alt="Un menu hamburger avec frites et coca cola" />
            {/* Cercle rouge contenant le prix */}
            <div className='absolute w-40 h-40 p-3 bg-red-500 rounded-full top-40 right-80'>
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
            <div className='relative z-10 text-black uppercase'>
              <h1 className='mb-4'>C'est le moment de gouter au bon goût des hamburger</h1>
              <h2 className='font-semibold shadowTittleSecondary'>
                <span className='block text-8xl'>Burger</span>
                <span className='text-6xl'>House</span>
                <span className='ml-3 text-4xl'>Click<span className='text-red-500'>&</span>Collect</span>
              </h2>
            </div>
          </div>
          {/* Bouton pour créer un compte */}
          <Button className='mt-5' color='black' theme='big'>
            Créer mon compte
          </Button>
        </Container>
      </div>
    </div>
  );
}
