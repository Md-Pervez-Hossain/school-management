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

const Slider = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <Image
          src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          width={900}
          height={400}
        ></Image>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://images.pexels.com/photos/8617735/pexels-photo-8617735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          width={900}
          height={400}
        ></Image>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://images.pexels.com/photos/8617742/pexels-photo-8617742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          width={900}
          height={400}
        ></Image>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
