import React from 'react'
import Container from '../../elements/container'
import Image1 from'../../../medias/images/products/LastProducts-1.jpg'
import Image2 from'../../../medias/images/products/LastProducts-2.jpg'
import Image3 from'../../../medias/images/products/LastProducts-3.jpg'

export default function LastProducts() {
  return (
    <Container>
      <div className='grid w-full grid-cols-2 grid-rows-2 my-20 text-white gap-x-9 gap-y-9 h-96 px-11'>
        <div className='relative h-full row-span-2 bg-yellow-400 rounded-md p-7'>
        <img src={Image1} className='absolute top-0 left-0 z-0 object-cover w-full h-full rounded-md' alt="" />
         <div className='relative z-10'>
          <span className='block text-lg font-bold'>Killer Burger</span>
          <span className='font-black text 2xl'>Burger le plus populaire</span>
          </div> w-full h-full
        </div>

      <div className='relative h-full bg-yellow-500 rounded-md p-7'>
      <img src={Image2} className='absolute top-0 left-0 z-0 object-cover w-full h-full rounded-md' alt="" />
        <div className='relative z-10'>
          <span className='block text-lg font-bold'>Island Burger</span>
          <span className='block text-2xl font-black'>Plus de plaisir</span>
          <span className='text-2xl font-black'>Plus de goût</span>
        </div>

      </div>
      <div className='relative h-full bg-yellow-600 rounded-md p-7'>
      <img src={Image3} className='absolute top-0 left-0 z-0 object-cover w-full h-full rounded-md' alt="" />
        <div className='relative z-10'>
          <span className='block text-lg font-bold'>Orlando's Burger</span>
          <span className='block text-2xl font-black'>Frais & Pimenté</span>
        </div>
      </div>
      </div>
    </Container>

  )
}
