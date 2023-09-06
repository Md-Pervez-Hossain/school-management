"use client";
import Image from "next/image";
import React from "react";
import ShowNotice from "../ShowNotice/ShowNotice";
import { usePathname } from "next/navigation";
import HeaderNotice from "../../app/(with-layout)/HeaderNotice/HeaderNotice";
import Link from "next/link";
import schoolImage from "../../Components/assets/school.jpg";

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
                <div className="flex flex-col mt-5">
                  <Link
                    href="/student-admission-information"
                    className="bg-[#169B81] mb-3 px-4 py-2 text-white"
                  >
                    ভর্তি তথ্য
                  </Link>
                  <Link
                    href="/"
                    className="bg-[#169B81] mb-3 px-4 py-2 text-white"
                  >
                    ভর্তি ফরম
                  </Link>
                  <Link
                    href="/all-class-gallery"
                    className="bg-[#169B81] mb-3 px-4 py-2 text-white"
                  >
                    ফটোগ্যালারী
                  </Link>
                  <Link
                    href="/all-class-gallery"
                    className="bg-[#169B81] mb-3 px-4 py-2 text-white"
                  >
                    ভিডিও গ্যালারী
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="mt-5">
            <div className="flex  gap-5">
              <Image
                width={300}
                height={300}
                src={schoolImage}
                alt=""
                layout="responsive"
                className="mb-3"
              ></Image>

              <div>
                <p className="mb-2">
                  সুনামগঞ্জ জেলাধীন জগন্নাথপুরস্থ এক প্রাচীন জনপদের নাম ইসহাকপুর
                  । এ গ্রামের সম্ভ্রান্ত ধর্মভীরু মুসলিম পরিবার সমূহের মধ্যে
                  শীর্ষস্থানে অবস্থান খান পরিবারের । বংশমর্যাদায় যেমন
                  শ্রেষ্ঠত্বের দাবীদার তেমনি শিক্ষা-দীক্ষায়...{" "}
                  <Link href="/about">
                    {" "}
                    <button className="text-[#FFB400]">Read More</button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default About;
