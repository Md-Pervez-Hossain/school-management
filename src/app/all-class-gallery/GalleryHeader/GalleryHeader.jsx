"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { SiGoogleclassroom } from "react-icons/si";
const GalleryHeader = () => {
  const pathname = usePathname();
  const isLinkActive = (href) => {
    return pathname === href ? "text-[#169B81]  font-bold  " : "text-black";
  };
  return (
    <div className="bg-gray-50   ">
      <h2 className="text-xl font-bold  mb-5 bg-[#169B81] px-6 py-3 text-white">
        All Classes Gallery
      </h2>
      <div className="flex flex-col p-5 ">
        <span className="mb-5 flex items-center gap-3">
          <SiGoogleclassroom
            className={`text-xl  ${isLinkActive(
              "/all-class-gallery/class-six-gallery"
            )}`}
          ></SiGoogleclassroom>
          <Link
            href="/all-class-gallery/class-six-gallery"
            className={`text-xl  ${isLinkActive(
              "/all-class-gallery/class-six-gallery"
            )}`}
          >
            Class Six Gallery
          </Link>
        </span>
        <span className="mb-5 flex items-center gap-3">
          <SiGoogleclassroom
            className={`text-xl mb-b ${isLinkActive(
              "/all-class-gallery/class-seven-gallery"
            )}`}
          ></SiGoogleclassroom>
          <Link
            href="/all-class-gallery/class-seven-gallery"
            className={`text-xl mb-b ${isLinkActive(
              "/all-class-gallery/class-seven-gallery"
            )}`}
          >
            Class Seven Gallery
          </Link>
        </span>
        <span className="mb-5 flex items-center gap-3">
          <SiGoogleclassroom
            className={`text-xl mb-b ${isLinkActive(
              "/all-class-gallery/class-eight-gallery"
            )}`}
          ></SiGoogleclassroom>
          <Link
            href="/all-class-gallery/class-eight-gallery"
            className={`text-xl mb-b ${isLinkActive(
              "/all-class-gallery/class-eight-gallery"
            )}`}
          >
            Class Eight Gallery
          </Link>
        </span>
        <span className="mb-5 flex items-center gap-3">
          <SiGoogleclassroom
            className={`text-xl  ${isLinkActive(
              "/all-class-gallery/class-nine-gallery"
            )}`}
          ></SiGoogleclassroom>
          <Link
            href="/all-class-gallery/class-nine-gallery"
            className={`text-xl  ${isLinkActive(
              "/all-class-gallery/class-nine-gallery"
            )}`}
          >
            Class Nine Gallery
          </Link>
        </span>
        <span className="mb-5 flex items-center gap-3">
          <SiGoogleclassroom
            className={`text-xl font-bold mb-b ${isLinkActive(
              "/all-class-gallery/class-ten-gallery"
            )}`}
          ></SiGoogleclassroom>
          <Link
            href="/all-class-gallery/class-ten-gallery"
            className={`text-xl mb-b ${isLinkActive(
              "/all-class-gallery/class-ten-gallery"
            )}`}
          >
            Class Ten Gallery
          </Link>
        </span>
      </div>
    </div>
  );
};

export default GalleryHeader;
