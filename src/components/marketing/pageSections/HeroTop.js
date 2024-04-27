import React from 'react';
import Illustration from '../../../medias/images/background/bg-food.jpg';
import Container from '../../elements/container';
import Header from '../pageSections/Header';
import Products from '../../../medias/images/heroTop/burger-hero-top.png';
import Button from '../../elements/Button';

export default function HeroTop() {
    return (
       <div className='w-full h-screen bg-yellow-300'>
          <div 
            className='w-full h-full bg-repeat' 
            style={{ backgroundImage: `url(${Illustration})` }} >
            <Container>
              <Header />
              <div className='relative w-full mt-28'>
              <img src={Products} className='absolute right-0 z-0 w-6/12 -top-64' alt="Un menu hamburger avec frites et coca cola"/>
                <div className='relative z-10 text-black uppercase'>
                  <h1 className='mb-4'>C'est le moment de gouter au bon goût des hamburger</h1>
                  <h2 className='font-semibold'> 
                  <span className='block text-8xl'>Burger</span>
                  <span className='text-6xl'>House</span>
                  <span className='ml-3 text-4xl'>Click<span className='text-red-500'>&</span>Collect</span>
                  </h2> 
                </div>
              </div>
            <Button className='mt-5' color='black' theme='small'>
              Créer mon compte
            </Button> 
            <Button className='mt-5'>
              Créer mon compte
            </Button> 
            <Button className='mt-5' color='danger' theme='big'>
              Créer mon compte
            </Button> 
            </Container>
          </div>
       </div>
    );
}

