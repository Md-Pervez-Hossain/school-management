"use client";
import Image from "next/image";
import React from "react";
import ShowNotice from "../ShowNotice/ShowNotice";
import { usePathname } from "next/navigation";
import HeaderNotice from "../../app/(with-layout)/HeaderNotice/HeaderNotice";
import Link from "next/link";

const About = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      {pathname === "/about" ? (
        <>
          <div className="w-9/12 mx-auto ">
            <HeaderNotice></HeaderNotice>
            <div className="grid grid-cols-3 gap-10 mt-16">
              <div className="col-span-2">
                <Image
                  width={250}
                  height={200}
                  src="https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  layout="responsive"
                  className="mb-3"
                ></Image>
                <h2 className="text-xl font-bold my-2">History oF school</h2>
                <p className="mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  dolor minima autem iusto quam Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Quod dolor minima autem iusto
                  quam Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quod dolor minima autem iusto quam
                </p>
              </div>
              <div className="col-span-1">
                <ShowNotice></ShowNotice>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="mt-5">
            <div>
              <Image
                width={300}
                height={200}
                src="https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                layout="responsive"
                className="mb-3"
              ></Image>
              <h2 className=" font-bold my-2 text-[#169B81]">
                History of school
              </h2>
              <p className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                dolor minima autem iusto quam Lorem ipsum dolor sit amet,
                consectetur adipisicing elit...
              </p>
              <Link href="/about">
                {" "}
                <button className="text-[#FFB400]">Read More</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default About;
