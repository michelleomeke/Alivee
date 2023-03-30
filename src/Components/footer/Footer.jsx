import React from "react";
import aliveelogo from "../../assets/whitelogo.png";
import { FaGlobe } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
function Footer() {
  return (
    <div className=' w-full h-[350px] bg-black'>
      <div className='grid md:grid-cols-3 grid-cols-2 lg:flex flex-wrap lg:justify-between lg:px-14 lg:pt-10 lg:pl-0 px-10'>
        <div className=' lg:w-44 lg:h-36  hidden  lg:flex lg:items-center'>
          <img src={aliveelogo} />
        </div>

        <div className='text-gray-400'>
          <h1 className='font-bold lg:text-xl text-lg px-3 py-2'>Product</h1>
          <div>
            <div>
              <a
                href='#'
                className='px-3 py-[1px] font-normal text-sm hover:underline'
              >
                Help Center
              </a>
            </div>
            <div>
              <a
                href='#'
                className='px-3 py-[1px] font-normal text-sm hover:underline'
              >
                Alivee for Business
              </a>
            </div>
          </div>
        </div>

        <div className='text-gray-400'>
          <h1 className='font-bold lg:text-xl text-lg px-3 py-2'>Company</h1>
          <div>
            <div>
              <a
                href='#'
                className='px-3 py-[1px] font-normal text-sm hover:underline'
              >
                About us
              </a>
            </div>
            <div>
              <a
                href='#'
                className='px-3 py-[1px] font-normal text-sm hover:underline'
              >
                Careers
              </a>
            </div>
          </div>
        </div>

        <div className='text-gray-400'>
          <h1 className='font-bold lg:text-xl text-lg px-3 py-2'>Privacy</h1>
          <div>
            <div>
              <a
                href='#'
                className='px-3 py-[1px] font-normal text-sm hover:underline'
              >
                Privacy Policy
              </a>
            </div>
            <div>
              <a
                href='#'
                className='px-3 py-[1px] font-normal text-sm hover:underline'
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>

        <div className='text-gray-400'>
          <h1 className='font-bold lg:text-xl text-lg px-3 py-2'>Medicine</h1>
          <div>
            <div>
              <a
                href='#'
                className='px-3 py-[1px] font-normal text-sm hover:underline'
              >
                Help Center
              </a>
            </div>

            <div>
              <a
                href='#'
                className='px-3 py-[1px] font-normal text-sm hover:underline'
              >
                Security at Alivee
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='h-[1px] w-screen bg-white mt-6'></div>
      <div className='mt-4 block lg:hidden text-gray-400 text-xs text-center font-extralight'>
        <p>
          &copy;{" "}
          <span>
            {new Date().getFullYear()} Alivee Health Inc, All rights Reserved.
          </span>
        </p>
      </div>

      <div className='flex justify-between text-white px-2 py-5'>
        <div>
          <div className='flex w-fit bg-white text-black rounded-full border-[1.5px] hover: border-solid hover: border-white hover:bg-black hover:text-white hover:border-[1.5px]'>
            <button className=' lg:py-2 lg:px-6 p-2 text-xs'>
              <a href='#'>English</a>
            </button>
            <button className='p-2'>
              <FaGlobe />
            </button>
          </div>
        </div>

        <div>
          <div className='mt-4 hidden lg:block'>
            <p className='text-sm'>
              &copy;
              <span>
                {new Date().getFullYear()} Alivee Health Inc, All rights
                Reserved.
              </span>
            </p>
          </div>
        </div>

        <div>
          <div className='flex justify-between py-3 space-x-3'>
            <div>
              <a href='#'>
                <FaInstagramSquare className='lg:h-6 lg:w-6 h-5 w-5' />
              </a>
            </div>
            <div>
              <a href='#'>
                <FaTwitter className='lg:h-6 lg:w-6 h-5 w-5' />
              </a>
            </div>
            <div>
              <a href='#'>
                <FaFacebookF className='lg:h-6 lg:w-6 h-5 w-5' />
              </a>
            </div>
            <div>
              <a href='#'>
                <FaLinkedinIn className='lg:h-6 lg:w-6 h-5 w-5' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
