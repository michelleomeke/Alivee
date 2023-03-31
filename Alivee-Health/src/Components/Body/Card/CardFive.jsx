import React from 'react'
import cardfiveimg from '../../../assets/card5.png'
function CardFive() {
  return (
    <div className='  w-full'>
    <div className='flex justify-between w-full'>
    
    <div className='w-1/2 bg-white'>
      <div className=''><img  className='h-full w-full' src={cardfiveimg} alt="" /></div>
    </div>

    <div className='w-1/2 mt-40 px-48 '>
    <h1 className='text-5xl font-medium'>Start living <br /> better today</h1>
    
    <p className='py-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. tenetur!</p>
    <button className='bg-black py-3 px-20 rounded-full text-white text-lg font-medium'>Get Started</button>
    </div>

    
    </div>
    </div>
  )
}

export default CardFive
