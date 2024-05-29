import React from 'react'
import Container from '../../elements/container'
import BackgroundImage from '../../../medias/images/background/bg-footer.jpg'
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/16/solid'
import Logo from '../../../medias/svg/Logo-burger-house-white.svg'
import IcoInsta from '../../../medias/svg/icons8-insta.svg'
import IcoFacebook from '../../../medias/svg/icons8-facebook-nouveau.svg'
import IcoTwitter from '../../../medias/svg/icons8-twitter-30.png'
import IcoWhatsapp from '../../../medias/svg/icons8-whatsapp.svg'

// Définition du composant Footer
export default function footer() {
    return (
        // Utilisation du composant Container pour un conteneur global
        <Container>
            <div className='relative p-5 text-white lg:mb-20'>
                {/* Image de fond positionnée absolument */}
                <img src={BackgroundImage} alt="Un plan de travail" className="absolute top-0 left-0 z-0 object-cover w-full h-full bg-black" />
                <div className='relative z-10 grid md:grid-cols-2'>
                    <div className='w-full p-5 mt-10 md:mt-20 md:mb-28'>
                        {/* Logo du footer */}
                        <img src={Logo} alt="Logo footer" className='w-2/3' />
                        <p className='mt-10'>
                            {/* Texte de description */}
                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and 
                            I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,
                            the master-builder of human happiness. 
                        </p>
                    </div>

                    <div className='flex flex-col items-start justify-center h-full p-5 mb-10 md:w-full md:items-center md:mb-0 md:p-0 '>
                        {/* Informations de contact */}
                        <div className='flex items-center'>
                            <MapPinIcon className='w-6 h-6 mr-5 md:h-10 md:w-10' />
                            <span className='text-sm font-extrabold uppercase md:text-lg -tracking-tighter'>15 place bellecour, 6900 Lyon</span>
                        </div>

                        <div className='flex items-center mt-5'>
                            <EnvelopeIcon className='w-6 h-6 mr-5 md:h-10 md:w-10' />
                            <span className='text-sm font-extrabold uppercase md:text-lg -tracking-tighter'>burger@jgjhj.com</span>
                        </div>
                    </div>
                </div>
                <div className='relative z-10 flex items-center justify-between '>
                    {/* Texte de copyright */}
                    <div className='text-sm font-extrabold uppercase -tricking-tighter'>Burger house 2021</div>
                    <div className='flex'>
                        {/* Icônes de réseaux sociaux */}
                        <div>
                            <a href='https://google.com' target='_blank' rel="noreferrer">
                                <img src={IcoInsta} alt="icone instagram" className="p-1 mr-2 bg-white rounded-full w-7 h-7"/>
                            </a>
                        </div>
                        <div>
                            <img src={IcoFacebook} alt="icone facebook" className="p-1 mr-2 bg-white rounded-full w-7 h-7"/>
                        </div>
                        <div>
                            <img src={IcoTwitter} alt="icone twitter" className="p-1 mr-2 bg-white rounded-full w-7 h-7 "/>
                        </div>
                        <div>
                            <img src={IcoWhatsapp} alt="icone whatsapp" className="p-1 bg-white rounded-full w-7 h-7 "/>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

