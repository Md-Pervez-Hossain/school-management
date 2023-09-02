import Image from "next/image";
import React from "react";
import Princial from "../../Components/assets/teacher.jpg";
import Link from "next/link";

const Chairman = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2 ">
        <div>
          <Image
            width={400}
            height={200}
            src={Princial}
            alt=""
            layout="responsive"
            className="mb-2"
          ></Image>
        </div>
        <div className=" p-3">
          <p>
            মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড, যশোর জনগণের দোরগোড়ায় শিক্ষা
            সেবা পৌঁছে দেবার লক্ষ্যে যাবতীয় কার্যাদী সম্পাদনে ...{" "}
            <Link href="/about">
              {" "}
              <button className="text-[#FFB400]">Read More</button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chairman;
