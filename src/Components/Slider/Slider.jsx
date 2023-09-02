"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";
import banner1 from "../../Components/assets/banner-1.jpg";

const Slider = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <Image src={banner1} alt="" width={900} height={400}></Image>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={banner1} alt="" width={900} height={400}></Image>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={banner1} alt="" width={900} height={400}></Image>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
