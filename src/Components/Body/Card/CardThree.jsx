import React from 'react'
import cardthreeimg from '../../../assets/card3.png'
function CardThree() {
  return (
    <div className='  w-full'>
    <div className='flex justify-between  w-full '>
    <div className='w-1/2 mt-40 px-48'>
    <h1 className='text-5xl font-medium'>Metabolism is life.</h1>
    
    <p className='py-16'>Your metabolic health regulates your sleep, appetite, weight, and energy levels. Levels helps you optimize it all so you can live a longer, fuller, healthier life.!</p>
    <button className='bg-black py-3 px-20 rounded-full text-white text-lg font-medium'>Get Started</button>

    </div>


    <div className='w-1/2 bg-white'>
      <div className=''><img  className='h-full w-full' src={cardthreeimg} alt="" /></div>
    </div>
    
    
    </div>
    </div>
  )
}

export default CardThree
