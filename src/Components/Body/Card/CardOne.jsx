import React from "react";
import { useState, useEffect } from "react";
import cardoneimg from "../../../assets/card1.png";
import backgroundImage from "../../../assets/card1.png";
import "../../CSS/card.css";

function CardOne() {
  const texts = ["Health", "Mind", "Body", "Immunity", "Energy"];
  const [textIndex, setTextIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const updateTextIndex = () => {
    setTextIndex((textIndex + 1) % texts.length);
  };

  useEffect(() => {
    const interval = setInterval(updateTextIndex, 3000);

    return () => clearInterval(interval);
  }, [updateTextIndex]);

  return (
    <div className='lg:pt-20 lg:px-44 lg:pb-10 mt-10 w-full '>
      <div className='lg:flex lg:flex-row lg:justify-between lg:space-x-10  flex-col'>
        <div className='lg:w-3/6 w-full '>
          <h1 className='lg:text-5xl text-4xl font-medium flex lg:justify-start justify-center '>
            In pursuit of{" "}
          </h1>
          <h1 className='lg:text-5xl text-4xl font-medium mt-6 flex lg:justify-start justify-center'>
            better <span className='text-white'>&nbsp;{texts[textIndex]}</span>
          </h1>

          <p className='lg:py-14 py-5 lg:text-justify text-center lg:px-0 px-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            quaerat, beatae commodi modi sed atque? Voluptatem possimus nam
            rerum id ut veniam, quas reiciendis nobis. Fugit, laboriosam
            tenetur! Unde.
          </p>
          <div className='flex justify-center lg:justify-start mb-5 '>
            <button className='bg-black lg:py-3 lg:px-20 lg:rounded-full text-white lg:text-lg font-medium rounded-lg px-10 py-2'>
              Get Started
            </button>
          </div>
        </div>

        <div
          className=' lg:w-3/6 w-full  h-[350px] bg-cover bg-center min-h-[400px]'
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
      </div>
    </div>
  );
}

export default CardOne;
