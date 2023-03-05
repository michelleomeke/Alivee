import React, { useEffect, useState } from 'react'
import aliveelogo from '../../assets/logo.png'
import { HiOutlineChevronDown} from "react-icons/hi";

function Header() {
  const [display, setDisplay] = useState(false)
  const [display2, setDisplay2] = useState(false)
  const [display3, setDisplay3] = useState(false)
  const [display4, setDisplay4] = useState(false)

  const [headerBg, setHeaderBg] = useState("bg-[#A8E4A0] opacity-100")
  

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
    return()=>{
      window.removeEventListener("scroll", handleScroll);
    };
  },[]);

  const handleScroll = () => {
    if(window.pageYOffset >= 50){
      setHeaderBg(" opacity-100 backdrop-blur-sm bg-[#ffffffb3] ");
    }else{
      setHeaderBg("bg-[#A8E4A0]");
    }
  }

  const toggle = ()=>{
    setDisplay(!display)
    setDisplay2(false)
    setDisplay3(false)
    setDisplay4(false)
  }
  const toggleOut = ()=>{
    setDisplay(false)
    setDisplay2(false)
    setDisplay3(false)
    setDisplay4(false)
  }

   const toggle2 = ()=>{
    setDisplay2(!display2)
    setDisplay(false)
    setDisplay3(false)
    setDisplay4(false)
  }
  const toggle2Out = ()=>{
    setDisplay2(false)
    setDisplay(false)
    setDisplay3(false)
    setDisplay4(false)
  }

   const toggle3 = ()=>{
    setDisplay3(!display3)
    setDisplay(false)
    setDisplay2(false)
    setDisplay4(false)
  }
  const toggle3Out = ()=>{
    setDisplay3(false)
    setDisplay(false)
    setDisplay2(false)
    setDisplay4(false)
  }

   const toggle4 = ()=>{
    setDisplay4(!display4)
    setDisplay(false)
    setDisplay2(false)
    setDisplay3(false)
  }
  const toggle4Out = ()=>{
    setDisplay3(false)
    setDisplay(false)
    setDisplay2(false)
    setDisplay4(false)
  }
  return (
    <div className={`fixed top-0 ${headerBg}`}>
    <div className='h-fit  w-screen flex justify-between space-x-28 px-44 pt-2 items-center'>
      <div className='flex items-center space-x-5'>
        <div className='h-20 w-32 py-4'>
      <img src={aliveelogo}/>
    </div>
    
    <div className='flex justify-between space-x-4 text-base font-bold  mt-2'>
    <div className='flex flex-col' onMouseEnter={toggle} onMouseLeave={toggleOut}>
      <div className='flex justify-between space-x-1 '>
      <a href='#' className='w-full h-full'  >Product</a>
      <div className={display==false ? 'py-[5px] transform ease-in duration-300' : 'rotate-180 py-[1px] transform ease-in duration-300'}> <div className='h-fit -fit' ><button className='h-full w-full'><HiOutlineChevronDown/></button></div></div>
      </div>
      
      <div className={display==false?'absolute top-16 w-48  p-4 bg-[#bcecb5] shadow-lg shadow-gray-400 rounded-lg hidden transform ease-out duration-400' : ' absolute top-16 w-48  p-4 bg-[#bcecb5] shadow-lg shadow-gray-400 rounded-lg transform ease-in duration-400 block'}>
      <div className='p-3 font-normal'>content1</div>
      <div className='p-3 font-normal'>content1</div>
      <div className='p-3 font-normal'>content1</div>
      <div className='p-3 font-normal'>content1</div>
      </div>
      </div>

      {/* <div className='flex flex-col' onMouseEnter={toggle2} onMouseLeave={toggle2Out}>
      <div className='flex justify-between space-x-1 '>
      <a href='#' >Health Libraries</a>
       <div className={display2==false ? 'py-[5px] transform ease-in duration-300' : 'rotate-180 py-[1px] transform ease-in duration-300'}> <button  ><HiOutlineChevronDown/></button></div>
      </div>
      
      <div className={display2==false?'absolute top-16 w-48  p-4 bg-[#bcecb5] shadow-lg shadow-gray-400 rounded-lg hidden' : ' absolute top-16 w-48  p-4 bg-[#bcecb5] shadow-lg shadow-gray-400 rounded-lg block'}>
      <div className='p-3 font-normal'>content2</div>
      <div className='p-3 font-normal'>content2</div>
      <div className='p-3 font-normal'>content2</div>
      <div className='p-3 font-normal'>content2</div>
      </div>
      </div> */}

      <div className='flex flex-col' onMouseEnter={toggle3} onMouseLeave={toggle3Out}>
      <div className='flex justify-between space-x-1 '>
      <a href='#'>Calculator</a>
      <div className={display3==false ? 'py-[5px] transform ease-in duration-300' : 'rotate-180 py-[1px] transform ease-in duration-300'}> <button ><HiOutlineChevronDown/></button></div>
      </div>
      
      <div className={display3==false?'absolute top-14 w-48  p-4 bg-[#bcecb5] shadow-lg shadow-gray-400 rounded-lg hidden' : ' absolute top-16 w-48  p-4 bg-[#bcecb5] shadow-lg shadow-gray-400 rounded-lg block'}>
      <div className='p-3 font-normal'>content1</div>
      <div className='p-3 font-normal'>content1</div>
      <div className='p-3 font-normal'>content1</div>
      <div className='p-3 font-normal'>content1</div>
      </div>
      </div>

      <div className='flex flex-col' onMouseEnter={toggle4} onMouseLeave={toggle4Out}>
      <div className='flex justify-between space-x-1 ' >
      <a href='#'>About</a>
       <div className={display4==false ? 'py-[5px] transform ease-in duration-300' : 'rotate-180 py-[1px] transform ease-in duration-300'}> <button><HiOutlineChevronDown/></button></div>
      </div>
      
      <div className={display4==false?'absolute top-16 w-48  p-4 bg-[#bcecb5] shadow-lg shadow-gray-400 rounded-lg hidden' : ' absolute top-16 w-48  p-4 bg-[#bcecb5] shadow-lg shadow-gray-400 rounded-lg block'}>
      <div className='p-3 font-normal'>content1</div>
      <div className='p-3 font-normal'>content1</div>
      <div className='p-3 font-normal'>content1</div>
      <div className='p-3 font-normal'>content1</div>
      </div>
      </div>
    
    </div>
    </div>
    
    <div className='flex space-x-4 justify-between'>
    <div className='py-3 text-base font-bold'><a href='# ' className='p-1 hover:underline'>Manage Subscription</a></div>
    <div>
      <button className='bg-black  px-7 py-3 rounded-full text-white text text-lg font-semibold'><a href='#'>Try Alivee today</a></button>
    </div>
    </div>
    
    </div>
    </div>
  )
}

export default Header
