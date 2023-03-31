import React from 'react';
import aliveelogo from '../../assets/whitelogo.png'
import { FaGlobe } from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaFacebookF} from "react-icons/fa";
function Footer() {
  return (
    <div className=' w-full h-fit bg-black' >
      <div className='flex justify-between px-14'>
      <div className=' w-44 h-36  flex items-center'  >
      <img src={aliveelogo}/>
      </div>

      <div className='text-white'>
      <h1 className='font-bold text-xl px-3 py-2'>Product</h1>
       <div className='mt-5'>
        <div><a href='#' className='px-3 py-[1px] font-normal text-sm hover:underline'>Help Center</a></div>
        <div><a href='#' className='px-3 py-[1px] font-normal text-sm hover:underline'>Alivee for Business</a></div>
        <div><a href='#' className='px-3 py-[1px] font-normal text-sm hover:underline'>Security at Alivee</a></div>
        <div><a href='#' className='px-3 py-[1px] font-normal text-sm hover:underline'>Privacy Portal</a></div>
        </div>
      </div>

      <div className='text-white'>
      <h1 className='font-bold text-xl px-3 py-2'>Company</h1>
       <div className='mt-5'>
        <div><a href='#' className='px-3 py-[1px] font-normal text-sm hover:underline'>About us</a></div>
        <div><a href='#' className='px-3 py-[1px] font-normal text-sm hover:underline'>Careers</a></div>
        <div><a href='#' className='px-3 py-[1px] font-normal text-sm hover:underline'>Contact Us</a></div>
        <div><a href='#' className='px-3 py-[1px] font-normal text-sm hover:underline'>Press Center</a></div>
        </div>
      </div>

      <div className='text-white'>
      <h1 className='font-bold text-xl px-3 py-2'>Content</h1>
       <div className='mt-5'>
        <div><a href='#' className='px-3 py-[1px] font-normal text-sm hover:underline'>Health Library</a></div>
        <div><a href='#' className='px-3 py-[1px] font-normal text-sm hover:underline'>Editorial Process and standards</a></div>
        <div><a href='#' className='px-3 py-[1px] font-normal text-sm hover:underline'>Advertising Principles</a></div>
        <div><a href='#' className='px-3 py-[1px] font-normal text-sm hover:underline'>Tools</a></div>
        </div>
      </div>

      <div className='text-white'>
      <h1 className='font-bold text-xl px-3 py-2'>Privacy</h1>
       <div className='mt-5'>
        <div><a href='#' className='px-3 py-[1px] font-normal text-sm hover:underline'>Privacy Policy</a></div>
        <div><a href='#' className='px-3 py-[1px] font-normal text-sm hover:underline'>Terms of Use</a></div>
        <div><a href='#' className='px-3 py-[1px] font-normal text-sm hover:underline'>Security at Alivee</a></div>
        <div><a href='#' className='px-3 py-[1px] font-normal text-sm hover:underline'>Privacy Portal</a></div>
        </div>
      </div>

      <div className='text-white'>
      <h1 className='font-bold text-xl px-3 py-2'>Medicine and Science</h1>
       <div className='mt-5'>
        <div><a href='#' className='px-3 py-[1px] font-normal text-sm hover:underline'>Help Center</a></div>
        <div><a href='#' className='px-3 py-[1px] font-normal text-sm hover:underline'>Alivee for Business</a></div>
        <div><a href='#' className='px-3 py-[1px] font-normal text-sm hover:underline'>Security at Alivee</a></div>
        <div><a href='#' className='px-3 py-[1px] font-normal text-sm hover:underline'>Privacy Portal</a></div>
        </div>
      </div>
      </div>
      <div className='h-[1px] w-screen bg-white mt-6'></div>
     
      <div className='flex justify-between text-white px-14 py-6'>
        <div>
          <div className='flex w-fit bg-white text-black rounded-full py-2 px-6 border-[1.5px] hover: border-solid hover: border-white hover:bg-black hover:text-white hover:border-[1.5px]'
           
          >

            <button><a href="#">English</a></button>
             <button className='p-2'><FaGlobe/></button>
            
          </div>
        </div>

         <div>
          <div className='mt-4'>
            <p className='text-sm'>&copy; <span>Copyright {new Date().getFullYear()}  Alivee Health Inc, All rights Reserved.</span></p>
          </div>
        </div>

        <div>
          <div className='flex justify-between space-x-3'>
            <div ><a href='#' ><FaInstagramSquare className='h-6 w-6'/></a></div>
            <div><a href='#' ><FaTwitter className='h-6 w-6'/></a></div>
            <div><a href='#' ><FaFacebookF className='h-6 w-6'/></a></div>
            <div><a href='#' ><FaLinkedinIn className='h-6 w-6'/></a></div>
          </div>
        </div>
        
        </div> 
    </div>
  )
}

export default Footer
