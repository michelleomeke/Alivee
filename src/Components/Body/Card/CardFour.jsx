import React from 'react'
import cardfourimg from '../../../assets/card4.png'
function CardFour() {
  return (
    <div className='  w-full bg-black '>
    <div className='flex justify-between w-full'>
    
    <div className='w-1/2 flex flex-col justify-center items-center py-20'>
      <div className=''><img  className='' src={cardfourimg} alt="" /></div>
      <button className='bg-[#A8E4A0] text-black py-3 px-5 rounded-full text-sm font-medium mt-10'>Join the Waitlist</button>
    </div>

    <div className='w-1/2 mt-40  text-white'>
    <div className='text-5xl font-normal p-20'>
      <h1 className='py-1'>Lorem ipsum dolor sit  </h1>
      <h1 className='py-1'>Lorem ipsum dolor sit  </h1>
      <h1 className='py-1'>Lorem ipsum dolor sit  </h1>
      <h1 className='py-1'>Lorem ipsum dolor sit </h1> 
    </div>
    
    <div>
    <div className='my-20'>
    <div className='h-[0.1px] w-full bg-white mt-4 ml-20'></div>
    <div className='flex ml-20 mt-10'>
    <div className='text-5xl text-[#A8E4A0]'>1</div>
    <div className='pl-12'>
    <h1 className='font-bold text-lg py-2'>LOREM IPSUM </h1>
    <p className='font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit, amet .</p>
    </div>

    </div>
    </div>

  <div className='my-20'>
    <div className='h-[0.1px] w-full bg-white  ml-20'></div>
    <div className='flex ml-20 mt-10'>
    <div className='text-5xl text-[#A8E4A0]'>2</div>
    <div className='pl-12'>
    <h1 className='font-bold text-lg py-2'>LOREM IPSUM </h1>
    <p className='font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit, amet .</p>
    </div>
    </div>
  </div>

  <div className='my-20'>
    <div className='h-[0.1px] w-full bg-white  ml-20'></div>
    <div className='flex ml-20 mt-10'>
    <div className='text-5xl text-[#A8E4A0]'>3</div>
    <div className='pl-12'>
    <h1 className='font-bold text-lg py-2'>LOREM IPSUM </h1>
    <p className='font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit, amet .</p>
    </div>
    </div>
    </div>

    

    </div>

    </div>
    </div>
    </div>
  )
}

export default CardFour
