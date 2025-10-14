"use client";
import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../../../Master.css';
import Slider1 from "../../../../../public/Home/9ff9ec0b-7044-45b7-8090-a56bfbb3b55c.jpg";
import Slider2 from "../../../../../public/Home/9ff287d2-b759-481d-940c-0b4e5a0f3f60.jpg";
import Slider3 from "../../../../../public/Home/9ffdce91-3c1c-49c4-b1da-6bb7a9b906d6.jpg";
import Slider4 from "../../../../../public/Home/a010ba4d-8934-4bdf-8888-3b4a207799f5.jpg";
import Slider5 from "../../../../../public/Home/a010ba08-559f-4e57-a0f3-acdc9ce50e25.jpg";


// import required modules
import {Keyboard , Pagination, Navigation } from "swiper/modules";
import Image from "next/image";


function HomePageTop(props) {
    
    
  return (
    <section className="flex justify-center items-center w-[1900px] h-[50vh] mt-10 ">
      <>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Keyboard , Pagination, Navigation]}
        className="mySwiper"
        >
          <SwiperSlide>
            <Image className="w-full h-[300px]" src={Slider1}  alt="Slider1"/>
          </SwiperSlide>
          <SwiperSlide>
            <Image className="w-full h-[300px]" src={Slider2}  alt="Slider1"/>
          </SwiperSlide>
          <SwiperSlide>
            <Image className="w-full h-[300px]" src={Slider3}  alt="Slider1"/>
          </SwiperSlide>
          <SwiperSlide>
            <Image className="w-full h-[300px]" src={Slider4}  alt="Slider1"/>
          </SwiperSlide>
          <SwiperSlide>
            <Image className="w-full h-[300px]" src={Slider5}  alt="Slider1"/>
          </SwiperSlide>
        
        </Swiper>
      </>
    </section>
  );
}

export default HomePageTop;
