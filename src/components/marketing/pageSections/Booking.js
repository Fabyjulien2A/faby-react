import React from 'react'
import Container from '../../elements/container';
import Heading from '../../elements/DisplayTitles/Heading';
import Assiette from '../../../medias/images/background/Assiette-burger-frites.png'
import Burger from '../../../medias/images/background/Burger.png'
import Sauce from '../../../medias/images/background/Sauce-pimente.png';


export default function Booking() {
  return (
    <Container>
      <div className='relative mt-16 mb-20'>
        <img src={Burger} alt="Burger" className="absolute z-10 -left-36 -top-20" />
        <img src={Sauce} alt="Sauce" className="absolute bottom-0 left-0" />
        <img src={Assiette} alt="Assiette" className="absolute -right-96 -bottom-52" />

        <div className='max-w-4xl px-10 py-20 mx-auto'>
          <Heading variant="h3" alignement="center">
            Réservation
          </Heading>

          <Heading alignement="center" theme="black" className="mt-5">
            Réserver votre table 
          </Heading>

          <form className='grid grid-cols-2 mt-20 gap-x-7 gap-y-6'>

            <div>
              <label htmlFor='name'>Nom</label>
              <input             
                type="text" 
                name="name" 
                id="name" 
                autoComplete="off"  
                placeholder=""
              />
            </div>

            <div>
              <label htmlFor='email'>Email</label>
              <input             
                type="email" 
                name="email" 
                id="email" 
                autoComplete="off"  
                placeholder=""
              />
            </div>

            <div>
              <label htmlFor='date'>Date</label>
              <input             
                type="date" 
                name="date" 
                id="date" 
                autoComplete="off"  
                placeholder=""
              />
            </div>

            <div>
              <label htmlFor='time'>Heure</label>
              <input             
                type="time" 
                name="time" 
                id="time" 
                autoComplete="off"  
                placeholder=""
              />
            </div>

            <div>
              <label htmlFor='customer'>Nombre de personnes</label>
              <input             
                type="text" 
                name="customer" 
                id="customer" 
                autoComplete="off"  
                placeholder=""
              />
            </div>

            <div>
              <label htmlFor='sendBooking' className='invisible'>Réserver</label>
              <input             
                type="button" 
                name="sendBooking" 
                id="sendBooking" 
                value="Réserver votre repas"
              />
            </div>
          
          </form>
        </div>

      </div>


    </Container>
  )
}
