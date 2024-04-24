import React from 'react';
import Illustration from '../../../medias/images/background/bg-food.jpg';
import Container from '../../elements/container';
import Header from '../pageSections/Header';
import Products from '../../../medias/images/heroTop/burger-hero-top.png';

export default function HeroTop() {
    return (
       <div className='w-full h-screen bg-yellow-300'>
          <div 
            className='w-full h-full bg-repeat' 
            style={{ backgroundImage: `url(${Illustration})` }}
          >
            <Container>
              <Header />
              <div className='flex items-center w-full'>
                <div className='w-2/3 text-black uppercase'>
                  <h1 className='mb-7'>C'est le moment de gouter au bon goût des hamburger</h1>
                  <h2 className='font-bold'> 
                  <span className='block text-8xl'>Burger</span>
                  <span className='text-6xl'>House</span>
                  <span className='ml-3 text-4xl'>Click&Collect</span>
                  </h2> 
                </div>
                <div className='w-1/3'>
                <img src={Products} alt="Un menu hamburger avec frites et coca cola" className='w-64'/>
                </div>
              </div>
            </Container>
          </div>
       </div>
    );
}
