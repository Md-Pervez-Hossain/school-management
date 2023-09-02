"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
const Header = () => {
  const pathname = usePathname();
  const isLinkActive = (href) => {
    return pathname === href ? "text-[#169B81] font-bold  " : "text-black";
  };
  return (
    <div className=" w-9/12 mx-auto ">
      <div className=" text-center mt-5 mb-10 bg-[#169B81] px-4 py-12  text-white">
        <div>
          <h2 className="text-3xl mb-2">
            মোহাম্মদপুর সরকারি উচ্চ বিদ্যালয়, ঢাকা-১২০৭
          </h2>
          <h2 className="text-3xl mb-2">
            Mohammadpur Govt. High School, Dhaka-1207
          </h2>
        </div>
      </div>

      <div className="flex items-center justify-between gap-5">
        <Link href="/" className={`text-xl mb-2 ${isLinkActive("/")}`}>
          Home
        </Link>
        <Link
          href="/about"
          className={`text-xl mb-2 ${isLinkActive("/about")}`}
        >
          About
        </Link>
        <Link
          href="/administration"
          className={`text-xl mb-2 ${isLinkActive("/administration")}`}
        >
          Administration
        </Link>
        <Link
          className={`text-xl mb-2 ${isLinkActive("/academic")}`}
          href="/academic"
        >
          Academic
        </Link>
        <Link
          className={`text-xl mb-2 ${isLinkActive("/notice")}`}
          href="/notice"
        >
          Notice
        </Link>
        <Link
          className={`text-xl mb-2 ${isLinkActive("/all-class-gallery")}`}
          href="/all-class-gallery"
        >
          Gallery
        </Link>
        <Link
          className={`text-xl mb-2 ${isLinkActive("/all-results")}`}
          href="/all-results"
        >
          Result
        </Link>
        <Link
          className={`text-xl mb-2 ${isLinkActive("/exam-routune")}`}
          href="/exam-routune"
        >
          Exam Routune
        </Link>
        <Link
          className={`text-xl mb-2 ${isLinkActive("/dashboard")}`}
          href="/dashboard"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Header;
