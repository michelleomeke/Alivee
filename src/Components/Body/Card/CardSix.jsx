import React from 'react'
import cardsiximg from '../../../assets/card6.png'


function CardSix() {
    return (
    <div className=' w-full pt-10 px-28 '>
        <div>

            <div className='flex flex-col items-center'><h1 className='text-5xl font-medium text-white'>Explore our blog to learn more</h1><h1 className='text-5xl font-medium text-white'>about metabolic health.</h1></div>
            <div className='flex justify-between px-12 space-x-32 mt-20 pb-5'>
        

        <div className=''>
                <div className=''>
                <div className=''><img  className='h-full w-full' src={cardsiximg} alt="" /></div>
                </div>
                        <div className='flex justify-center flex-col '>
                        <h3 className='text-center text-xl font-medium'>Lorem ipsum dolor sit.</h3>
                        <p className='text-center font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, odio.</p>
                        </div>
                        
        </div>

        <div>
                <div className=' bg-red-500'>
                <div className=''><img  className='h-full w-full' src={cardsiximg} alt="" /></div>
                </div>

                        <div className='flex justify-center flex-col'>
                        <h3 className='text-center text-xl font-medium'>Lorem ipsum dolor sit.</h3>
                        <p className='text-center font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, odio.</p>
                        
                        </div>
                    
        </div>

        <div>
                <div className=' bg-white'>
                <div className=''><img  className='h-full w-full' src={cardsiximg} alt="" /></div>
                </div>
                    <div className='flex justify-center flex-col '>
                        <h3 className='text-center text-xl font-medium'>Lorem ipsum dolor sit.</h3>
                        <p className='text-center font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, odio.</p>
                        
                    </div>
        </div>

            </div>
        </div>

    </div>
  )
}

export default CardSix
