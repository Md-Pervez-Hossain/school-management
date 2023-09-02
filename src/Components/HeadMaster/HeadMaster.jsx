import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeadMaster = () => {
  return (
    <div className="bg-gray-50">
      <div>
        <Image
          width={500}
          height={200}
          src="https://images.pexels.com/photos/5212649/pexels-photo-5212649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="mb-3"
          layout="responsive"
        ></Image>
      </div>
      <div>
        <div className=" p-3">
          <h2 className=" font-bold text-[#169B81]">Abdur Korim</h2>
          <p className="">Headmaster</p>
          <p>Mohammadpur Govt. High School</p>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            aspernatur sit ab magnam, esse optio quasi eaque sunt soluta.
            Libero...
          </p>
          <Link href="/headmaster">
            {" "}
            <button className="text-[#FFB400] mt-2">Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeadMaster;
