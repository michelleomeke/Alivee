import React from "react";
import cardthreeimg from "../../../assets/card3.png";
function CardThree() {
  return (
    <div className='w-full'>
      <div className='flex lg:justify-between lg:flex-row flex-col w-full '>
        <div className='lg:w-1/2 w-full lg:mt-20 mt-10 lg:px-48'>
          <h1 className='lg:text-5xl text-4xl lg:text-justify text-center font-medium'>
            Metabolism is life.
          </h1>

          <div className='lg:py-16 lg:px-0 px-5 pt-10 lg:text-justify text-center'>
            Your metabolic health regulates your sleep, appetite, weight, and
            energy levels. Levels helps you optimize it all so you can live a
            longer, fuller, healthier life.!
          </div>
          <div className='justify-center lg:justify-start mb-5 lg:block hidden '>
            <button className='bg-black lg:py-3 lg:px-20 lg:rounded-full text-white lg:text-lg font-medium rounded-lg '>
              Get Started
            </button>
          </div>
        </div>

        <div
          className=' lg:w-3/6 w-full  bg-cover bg-no-repeat bg-top min-h-[400px] lg:my-14 lg:mx-10 mt-10 rounded-lg'
          style={{ backgroundImage: `url(${cardthreeimg})` }}
        ></div>
      </div>
    </div>
  );
}

export default CardThree;
