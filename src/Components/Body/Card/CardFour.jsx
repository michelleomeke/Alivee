import React from "react";
import cardfourimg from "../../../assets/card4.png";
function CardFour() {
  return (
    <div className='  w-full bg-black '>
      <div className='flex lg:justify-between lg:flex-row flex-col justify-center items-center w-full'>
        <div className='lg:w-1/2 w-3/4  lg:flex flex-col justify-center items-center lg:py-20 py-5'>
          <div className=''>
            <img className='' src={cardfourimg} alt='' />
          </div>

          <button className='bg-[#A8E4A0] text-black lg:py-3 lg:px-5 p-4 rounded-full text-sm font-medium mt-10'>
            Join the Waitlist
          </button>
        </div>

        <div className='lg:w-1/2 w-full lg:mt-40 mt-11 text-white lg:text-justify justify-center'>
          <div className='lg:text-4xl text-3xl font-normal lg:p-20 lg:text-justify text-center'>
            <h1 className='py-1'>Lorem ipsum dolor sit </h1>
            <h1 className='py-1'>Lorem ipsum dolor sit </h1>
            <h1 className='py-1'>Lorem ipsum dolor sit </h1>
            <h1 className='py-1'>Lorem ipsum dolor sit </h1>
          </div>

          <div className='flex flex-col'>
            <div className='lg:my-16 my-10'>
              <div className='h-[0.1px]  w-full bg-white mt-4 lg:ml-20'></div>
              <div className='flex lg:ml-20 mt-10 lg:px-0 px-3'>
                <div className='text-5xl text-[#A8E4A0]'>1</div>
                <div className='pl-12'>
                  <h1 className='font-bold text-lg py-2'>LOREM IPSUM </h1>
                  <p className='font-bold'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                  <p>Lorem ipsum dolor sit, amet .</p>
                </div>
              </div>
            </div>

            <div className='lg:my-16 my-10'>
              <div className='h-[0.1px] w-full bg-white lg:ml-20'></div>
              <div className='flex lg:ml-20 mt-10 lg:px-0 px-3'>
                <div className='text-5xl text-[#A8E4A0]'>2</div>
                <div className='pl-12'>
                  <h1 className='font-bold text-lg py-2'>LOREM IPSUM </h1>
                  <p className='font-bold'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                  <p>Lorem ipsum dolor sit, amet .</p>
                </div>
              </div>
            </div>

            <div className='lg:my-16 my-10'>
              <div className='h-[0.1px] w-full bg-white lg:ml-20'></div>
              <div className='flex lg:ml-20 mt-10 lg:px-0 px-3'>
                <div className='text-5xl text-[#A8E4A0]'>3</div>
                <div className='pl-12'>
                  <h1 className='font-bold text-lg py-2'>LOREM IPSUM </h1>
                  <p className='font-bold'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                  <p>Lorem ipsum dolor sit, amet .</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardFour;
