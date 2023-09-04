"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import logo from ".././../../Components/assets/gov logo.png";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();

  const isLinkActive = (href) => {
    return pathname === href ? "text-[#169B81] font-bold" : "text-white";
  };

  return (
    <div className="w-9/12 mx-auto">
      <div className="mt-5 mb-10 bg-[#169B81] px-6 py-10 text-white">
        <div className="  flex justify-center gap-5 items-center">
          {/* <Image src={logo} alt="" width={100} height={100}></Image> */}
          <div className="text-center">
            <h2 className="text-3xl mb-2">
              শিরগ্রাম বহুমুখী স্কুল উচ্চ বিদ্যালয়
            </h2>
            <p>স্থাপিতঃ ১৯৫২ ইং </p>
            <p>পূনঃ নির্মাণঃ ২০০১ </p>
            <p>বাস্তবায়নেঃ ফ্যাসিলিটিজ ডিপার্টমেন্ট ।</p>
            <p>উপজেলাঃ আলফাডাঙ্গা, জেলাঃ ফরিদপুর । </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-5 bg-[#FFB400] text-white px-4 py-3">
        <Link href="/" className={`text-xl  ${isLinkActive("/")}`}>
          Home
        </Link>
        <Link href="/about" className={`text-xl  ${isLinkActive("/about")}`}>
          About
        </Link>
        <Link
          href="/administration"
          className={`text-xl  ${isLinkActive("/administration")}`}
        >
          Administration
        </Link>
        <Link
          className={`text-xl  ${isLinkActive("/academic")}`}
          href="/academic"
        >
          Academic
        </Link>
        <Link className={`text-xl  ${isLinkActive("/notice")}`} href="/notice">
          Notice
        </Link>

        <div
          className={`relative group text-xl ${isLinkActive(
            "/all-class-gallery"
          )}`}
        >
          <Link href="/all-class-gallery" className={`cursor-pointer`}>
            Gallery
          </Link>
        </div>

        <Link
          className={`text-xl  ${isLinkActive("/all-results")}`}
          href="/all-results"
        >
          Result
        </Link>
        <Link
          className={`text-xl  ${isLinkActive("/exam-routune")}`}
          href="/exam-routune"
        >
          Exam Routine
        </Link>
        <Link
          className={`text-xl  ${isLinkActive("/dashboard")}`}
          href="/dashboard"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Header;
