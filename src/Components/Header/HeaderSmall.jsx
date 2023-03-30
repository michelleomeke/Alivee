import React, { useState } from "react";
import { HiX, HiChevronDown } from "react-icons/hi";

function HeaderSmall({ setIsOpen }) {
  const [showProducts, setShowProducts] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const toggleProducts = () => {
    setShowProducts(!showProducts);
    setShowCalculator(false);
    setShowAbout(false);
  };

  const toggleCalculator = () => {
    setShowCalculator(!showCalculator);
    setShowProducts(false);
    setShowAbout(false);
  };

  const toggleAbout = () => {
    setShowAbout(!showAbout);
    setShowProducts(false);
    setShowCalculator(false);
  };

  return (
    <div>
      <div className='lg:hidden z-10 opacity-100 backdrop-blur fixed top-0 l-0 w-full h-full flex justify-end'>
        <div
          className='w-full h-full'
          onClick={() => setIsOpen(!setIsOpen)}
        ></div>
        <button
          className='w-fit h-fit mt-7 mr-2 rounded-md'
          onClick={() => setIsOpen(!setIsOpen)}
        >
          <HiX className='h-7 w-7 text-gray-200 hover:text-white' />
        </button>
        <div className=' h-full w-[35%] bg-gray-100 p-5 font-medium'>
          <div className='py-3 text-gray-600 text-md '>MENU</div>

          <div className='flex flex-col'>
            <div className=''>
              <div className='flex space-x-2'>
                <div className='py-2 text-gray-600 text-sm'>Product</div>
                <button
                  className={showProducts == false ? "rotate-0" : "rotate-180"}
                  onClick={toggleProducts}
                >
                  <HiChevronDown />
                </button>
              </div>

              <div
                className={
                  showProducts == false
                    ? "hidden "
                    : "flex flex-col text-sm text-gray-600"
                }
              >
                <a href='#' className='py-1 px-3 underline underline-offset-4 '>
                  Contnent1
                </a>
                <a href='#' className='py-1 px-3  underline underline-offset-4'>
                  Contnent2
                </a>
                <a href='#' className='py-1 px-3  underline underline-offset-4'>
                  Contnent3
                </a>
              </div>
            </div>

            <div className=''>
              <div className='flex space-x-2'>
                <div className='py-2 text-gray-600 text-sm'>Calculator</div>
                <button
                  className={
                    showCalculator == false ? "rotate-0" : "rotate-180"
                  }
                  onClick={toggleCalculator}
                >
                  <HiChevronDown />
                </button>
              </div>

              <div
                className={
                  showCalculator == false
                    ? "hidden"
                    : "flex flex-col text-sm text-gray-600"
                }
              >
                <a href='#' className='py-1 px-3 underline underline-offset-4'>
                  Contnent1
                </a>
                <a href='#' className='py-1 px-3  underline underline-offset-4'>
                  Contnent2
                </a>
                <a href='#' className='py-1 px-3  underline underline-offset-4'>
                  Contnent3
                </a>
              </div>
            </div>
            <div className=''>
              <div className='flex space-x-2'>
                <div className='py-2 text-gray-600 text-sm'>About</div>
                <button
                  className={showAbout == false ? "rotate-0" : "rotate-180"}
                  onClick={toggleAbout}
                >
                  <HiChevronDown />
                </button>
              </div>

              <div
                className={
                  showAbout == false
                    ? "hidden"
                    : "flex flex-col text-sm text-gray-600 transform ease-in duration-500"
                }
              >
                <a href='#' className='py-1 px-3 underline underline-offset-4'>
                  Contnent1
                </a>
                <a href='#' className='py-1 px-3  underline underline-offset-4'>
                  Contnent2
                </a>
                <a href='#' className='py-1 px-3  underline underline-offset-4'>
                  Contnent3
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSmall;
