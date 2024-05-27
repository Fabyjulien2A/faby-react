import React from 'react'
import Container from '../../elements/container'
import BackgroundImage from '../../../medias/images/background/bg-footer.jpg'

export default function footer() {
    return (
        <Container>
            <div className='relative p-5 mb-20 text-white'>
                <img src={BackgroundImage} alt="Un plan de travail" className="absolute top-0 left-0 z-0 object-cover w-full h-full bg-black" />
                <div className='relative z-10 grid grid-cols-2 bg-yellow-400 h-96'>
                    <div className='w-full h-full bg-yellow-500'>
                        {/*left */}
                    </div>
                    <div className='w-full h-full bg-yellow-600'>
                        {/*right */}
                    </div>
                </div>
                <div className='relative z-10 h-10 bg-red-500'>
                    {/*footer */}
                </div>
            </div>
        </Container>
    )
}
