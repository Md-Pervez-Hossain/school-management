"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
const GalleryHeader = () => {
  const pathname = usePathname();
  const isLinkActive = (href) => {
    return pathname === href
      ? "text-white bg-[#169B81] px-6 py-3 font-bold  "
      : "text-black";
  };
  return (
    <div className="w-9/12 mx-auto">
      <h2 className="text-xl font-bold mb-5">All Classes Gallery</h2>
      <div className="flex justify-between mb-5">
        <span className="inline-block">
          <Link
            href="/all-class-gallery/class-six-gallery"
            className={`text-xl mb-2 ${isLinkActive(
              "/all-class-gallery/class-six-gallery"
            )}`}
          >
            Class Six Gallery
          </Link>
        </span>
        <span className="inline-block">
          <Link
            href="/all-class-gallery/class-seven-gallery"
            className={`text-xl mb-2 ${isLinkActive(
              "/all-class-gallery/class-seven-gallery"
            )}`}
          >
            Class Seven Gallery
          </Link>
        </span>
        <span className="inline-block">
          <Link
            href="/all-class-gallery/class-eight-gallery"
            className={`text-xl mb-2 ${isLinkActive(
              "/all-class-gallery/class-eight-gallery"
            )}`}
          >
            Class Eight Gallery
          </Link>
        </span>
        <span className="inline-block">
          <Link
            href="/all-class-gallery/class-nine-gallery"
            className={`text-xl mb-2 ${isLinkActive(
              "/all-class-gallery/class-nine-gallery"
            )}`}
          >
            Class Nine Gallery
          </Link>
        </span>
        <span className="inline-block">
          <Link
            href="/all-class-gallery/class-ten-gallery"
            className={`text-xl mb-2 ${isLinkActive(
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
