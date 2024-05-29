import React from 'react'
import Container from '../../elements/container'
import Heading from '../../elements/DisplayTitles/Heading'
import HeadingTitles from '../../elements/DisplayTitles/HeadingTitles'
import Button from '../../elements/Button'
import Product1 from '../../../medias/images/products/Product-1.jpg'
import Product2 from '../../../medias/images/products/Product-2.jpg'
import Product3 from '../../../medias/images/products/Product-3.jpg'

// Composant fonctionnel Products
export default function Products() {
  return (
    <Container>
      {/* Titre principal de la section */}
      <HeadingTitles>
        Toujours des délicieux burgers
      </HeadingTitles>

      {/* Sous-titre avec un thème noir */}
      <Heading theme="black" alignement="center" className="my-5 text-center">
        Choisissez et savourez
      </Heading>

      {/* Paragraphe de description centré */}
      <p className='my-4 text-center'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      {/* Grille de produits */}
      <div className='grid mt-10 mb-20 lg:grid-cols-3 gap-x-1'>
        
        {/* Première colonne de la grille */}
        <div className='w-full h-full mx-auto lg:w-full'>
          {/* Conteneur de l'image avec positionnement relatif */}
          <div className='relative w-full h-72'>
            {/* Image du produit avec object-cover pour ajustement */}
            <img src={Product1} alt="" className="absolute top-0 left-0 z-0 object-cover w-full h-full bg-yellow-500" />
          </div>
          {/* Contenu du produit : titre, description et bouton */}
          <div className='flex flex-col items-center justify-center px-5 pb-5'>
            <Heading variant="h3" className="my-5">
              lorem ipsum color
            </Heading>
            <p className='text-center'>
              Lorem ipsum dolor sit amet
            </p>
            <br/>
            <Button color="danger" className="mb-10 font-black lg:mb-0">
              Commandez
            </Button>
          </div>
        </div>

        {/* Deuxième colonne de la grille */}
        <div className='w-full h-full mx-auto lg:w-full'>
          {/* Conteneur de l'image avec positionnement relatif */}
          <div className='relative w-full h-72'>
            {/* Image du produit avec object-cover pour ajustement */}
            <img src={Product2} alt="" className="absolute top-0 left-0 z-0 object-cover w-full h-full bg-yellow-500" />
          </div>
          {/* Contenu du produit : titre, description et bouton */}
          <div className='flex flex-col items-center justify-center px-5 pb-5'>
            <Heading variant="h3" className="my-5">
              lorem ipsum color
            </Heading>
            <p className='text-center'>
              Lorem ipsum dolor sit amet
            </p>
            <br/>
            <Button color="danger" className="mb-10 font-black lg:mb-0">
              Commandez
            </Button>
          </div>
        </div>

        {/* Troisième colonne de la grille */}
        <div className='w-full h-full mx-auto lg:w-full'>
          {/* Conteneur de l'image avec positionnement relatif */}
          <div className='relative w-full h-72'>
            {/* Image du produit avec object-cover pour ajustement */}
            <img src={Product3} alt="" className="absolute top-0 left-0 z-0 object-cover w-full h-full bg-yellow-500" />
          </div>
          {/* Contenu du produit : titre, description et bouton */}
          <div className='flex flex-col items-center justify-center px-5 pb-5'>
            <Heading variant="h3" className="my-5">
              lorem ipsum color
            </Heading>
            <p className='text-center'>
              Lorem ipsum dolor sit amet
            </p>
            <br/>
            <Button color="danger" className="font-black  lg:mb-0">
              Commandez
            </Button>
          </div>
        </div>

      </div>
    </Container>
  )
}
