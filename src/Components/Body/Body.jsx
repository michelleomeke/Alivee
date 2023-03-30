import React, { useState } from "react";
import Footer from "../footer/Footer";
import CardOne from "./Card/CardOne";
import CardTwo from "./Card/CardTwo";
import CardThree from "./Card/CardThree";
import CardFour from "./Card/CardFour";
import CardFive from "./Card/CardFive";
import HeaderSmall from "../Header/HeaderSmall";

function Body() {
  return (
    <div className='h-screen overflow-x-hidden'>
      <div className=' bg-[#A8E4A0] pt-24'>
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
        <CardFive />
        <Footer />
      </div>
    </div>
  );
}

export default Body;
