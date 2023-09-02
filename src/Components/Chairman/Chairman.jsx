import Image from "next/image";
import React from "react";

const Chairman = () => {
  return (
    <div className="bg-gray-50">
      <Image
        width={250}
        height={200}
        src="https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        layout="responsive"
        className="mb-2"
      ></Image>
      <div className=" p-3">
        <h2 className=" font-bold text-[#169B81]">Abdur Rohim</h2>
        <p>Chairman</p>
        <p>Mohammadpur Govt. High School</p>
        <button className="text-[#FFB400]">Read More </button>
      </div>
    </div>
  );
};

export default Chairman;
