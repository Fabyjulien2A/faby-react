import React from 'react';
import Container from '../../elements/container'; // Importation du composant Container
import Heading from '../../elements/DisplayTitles/Heading'; // Importation du composant Heading
import Assiette from '../../../medias/images/background/Assiette-burger-frites.png'; // Importation de l'image Assiette
import Burger from '../../../medias/images/background/Burger.png'; // Importation de l'image Burger
import Sauce from '../../../medias/images/background/Sauce-pimente.png'; // Importation de l'image Sauce

// Définition et exportation du composant Booking
export default function Booking() {
  return (
    // Utilisation du composant Container pour envelopper le contenu
    <Container>
      <div className='relative mt-16 mb-20'>
        {/* Images positionnées de manière absolue pour la décoration */}
        <img src={Burger} alt="Burger" className="absolute z-10 -left-36 -top-20" />
        <img src={Sauce} alt="Sauce" className="absolute bottom-0 left-0" />
        <img src={Assiette} alt="Assiette" className="absolute -right-96 -bottom-52" />

        <div className='max-w-4xl px-10 py-20 mx-auto'>
          {/* Titre de la section */}
          <Heading variant="h3" alignement="center">
            Réservation
          </Heading>

          {/* Sous-titre de la section */}
          <Heading alignement="center" theme="black" className="mt-5">
            Réserver votre table 
          </Heading>

          {/* Formulaire de réservation */}
          <form className='grid grid-cols-2 mt-20 gap-x-7 gap-y-6'>
            {/* Champ pour le nom */}
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

            {/* Champ pour l'email */}
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

            {/* Champ pour la date */}
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

            {/* Champ pour l'heure */}
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

            {/* Champ pour le nombre de personnes */}
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

            {/* Bouton de réservation */}
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
  );
}
