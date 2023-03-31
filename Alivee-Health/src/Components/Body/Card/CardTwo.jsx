import React from 'react'
import {FaHeartbeat} from "react-icons/fa";

function CardTwo() {
  return (
    <div className='bg-[#F0FFFF] w-full pt-10 px-28'>
        <div>
            <div className='flex flex-col items-center'><h1 className='text-5xl font-medium text-gray-800'>Take the guesswork</h1><h1 className='text-5xl font-medium text-gray-800'>out of your health</h1></div>
            <div className='flex justify-between px-12 space-x-32 mt-20 pb-5'>
                <div>
                        <div className='flex justify-center item-center'> <div className=' bg-white rounded-full p-4 text-black'><FaHeartbeat size={28}/></div></div>
                        <div className='flex justify-center flex-col '>
                        <h3 className='text-center text-xl font-medium'>Lorem ipsum dolor sit.</h3>
                        <p className='text-center font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, odio.</p>
                        
                    </div>
                    
                </div>
                <div>
                    <div className='flex justify-center item-center'> <div className=' bg-white rounded-full p-4 text-black h-fit w-fit'><FaHeartbeat size={28}/></div></div>
                    <div className='flex justify-center flex-col '>
                        <h3 className='text-center text-xl font-medium'>Lorem ipsum dolor sit.</h3>
                        <p className='text-center font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, odio.</p>
                        
                    </div>
                    
                </div>
                <div>
                        <div className='flex justify-center item-center'> <div className=' bg-white rounded-full p-4 text-black h-fit w-fit'><FaHeartbeat size={28}/></div></div>
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

export default CardTwo
