import React from "react";
import { FaHeartbeat } from "react-icons/fa";

function CardTwo() {
  return (
    <div className='bg-[#F0FFFF] w-full lg:px-28 lg:py-20'>
      <div>
        <div className='flex flex-col items-center pt-5'>
          <h1 className='lg:text-5xl text-4xl font-medium text-gray-800 flex md:justify-start justify-center'>
            Take the guesswork
          </h1>
          <h1 className='lg:text-5xl text-4xl font-medium text-gray-800'>
            out of your health
          </h1>
        </div>
        <div className='flex lg:justify-between lg:flex-row flex-col lg:px-12 lg:space-x-32 lg:mt-20 mt-5 lg:pb-5 px-5'>
          <div>
            <div className='flex justify-center item-center'>
              {" "}
              <div className=' bg-white rounded-full p-4 text-black'>
                <FaHeartbeat size={28} />
              </div>
            </div>
            <div className='flex justify-center flex-col '>
              <h3 className='text-center text-xl font-medium'>
                Lorem ipsum dolor sit.
              </h3>
              <p className='text-center font-medium'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,
                odio.
              </p>
            </div>
          </div>
          <div>
            <div className='flex justify-center item-center'>
              {" "}
              <div className=' bg-white rounded-full p-4 text-black h-fit w-fit'>
                <FaHeartbeat size={28} />
              </div>
            </div>
            <div className='flex justify-center flex-col '>
              <h3 className='text-center text-xl font-medium'>
                Lorem ipsum dolor sit.
              </h3>
              <p className='text-center font-medium'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,
                odio.
              </p>
            </div>
          </div>
          <div>
            <div className='flex justify-center item-center'>
              {" "}
              <div className=' bg-white rounded-full p-4 text-black h-fit w-fit'>
                <FaHeartbeat size={28} />
              </div>
            </div>
            <div className='flex justify-center flex-col '>
              <h3 className='text-center text-xl font-medium'>
                Lorem ipsum dolor sit.
              </h3>
              <p className='text-center font-medium mb-10'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,
                odio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTwo;
