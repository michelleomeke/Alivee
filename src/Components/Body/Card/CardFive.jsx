import React from "react";
import cardfiveimg from "../../../assets/card5.png";
function CardFive() {
  return (
    <div className='  w-full'>
      <div className='flex  lg:flex-row flex-col w-full'>
        <div
          className=' lg:w-3/6 w-full  bg-cover bg-no-repeat bg-center  min-h-[400px] lg:my-14  '
          style={{ backgroundImage: `url(${cardfiveimg})` }}
        ></div>

        <div className='lg:w-1/2 w-full lg:mt-32 mt-10 lg:px-48 '>
          <h1 className='lg:text-5xl text-4xl font-medium lg:text-justify text-center'>
            Start living <br /> better today
          </h1>

          <p className='lg:py-16 py-10 lg:px-0 px-5 lg:text-justify text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            tenetur!amet consectetur adipisicing elit. tenetur!
          </p>
          <div className='justify-center lg:justify-start mb-5 lg:block hidden '>
            <button className='bg-black lg:py-3 lg:px-20 lg:rounded-full text-white lg:text-lg font-medium rounded-lg '>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardFive;

// import React, { useState, useEffect } from "react";

// export default function TextSlider() {
//   const [showFirst, setShowFirst] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowFirst(!showFirst);
//     }, 3000); // Change text after 3 seconds
//     return () => clearTimeout(timer);
//   }, [showFirst]);

//   return (
//     <div className="relative overflow-hidden h-screen">
//       <div
//         className={`absolute inset-0 transition-transform transform ${
//           showFirst ? "translate-y-full" : ""
//         }`}
//       >
//         <h1 className="text-4xl font-bold text-white">First Text</h1>
//       </div>
//       <div
//         className={`relative inset-0 transition-transform transform ${
//           showFirst ? "" : "-translate-y-full"
//         }`}
//       >
//         <h1 className="text-4xl font-bold text-white">Second Text</h1>
//       </div>
//     </div>
//   );
// }
