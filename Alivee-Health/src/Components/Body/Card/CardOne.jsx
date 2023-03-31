import React from 'react'
import cardoneimg from '../../../assets/card1.png'
function CardOne() {
  return (
    <div className='pt-24 px-44 pb-10 w-full'>
    <div className='flex justify-between'>
    <div className='w-2/5'>
    <h1 className='text-5xl font-medium'>In pursuit of </h1>
     <h1 className='text-5xl font-medium mt-6'>better <span className='text-white'>health </span> </h1>
    
    <p className='py-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quaerat, beatae commodi modi sed atque? Voluptatem possimus  nam rerum id ut veniam, quas reiciendis nobis. Fugit, laboriosam tenetur! Unde.</p>
    <button className='bg-black py-3 px-20 rounded-full text-white text-lg font-medium'>Get Started</button>

    </div>
    <div className='w-3/5 flex justify-end'>
      <div className=''><img  className='h-[400px] w-[350px]' src={cardoneimg} alt="" /></div>
    </div>
    </div>
        
    </div>
  )
}

export default CardOne
