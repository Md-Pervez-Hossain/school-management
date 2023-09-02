"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ResultSidebar = () => {
  const pathname = usePathname();
  const isLinkActive = (href) => {
    return pathname === href
      ? "text-white bg-[#169B81] px-6 py-3 font-bold   "
      : "text-black";
  };

  return (
    <div className="w-9/12 mx-auto">
      <h2 className="text-xl font-bold mb-8">All Classes Results </h2>
      <div className="flex justify-between mb-5">
        <span className="inline-block">
          <Link
            href="/all-results/class-six"
            className={`text-xl mb-2 ${isLinkActive("/all-results/class-six")}`}
          >
            Class Six
          </Link>
        </span>
        <span className="inline-block">
          <Link
            href="/all-results/class-seven"
            className={`text-xl mb-2 ${isLinkActive(
              "/all-results/class-seven"
            )}`}
          >
            Class Seven
          </Link>
        </span>
        <span className="inline-block">
          <Link
            href="/all-results/class-eight"
            className={`text-xl mb-2 ${isLinkActive(
              "/all-results/class-eight"
            )}`}
          >
            Class Eight
          </Link>
        </span>
        <span className="inline-block">
          <Link
            href="/all-results/class-nine"
            className={`text-xl mb-2 ${isLinkActive(
              "/all-results/class-nine"
            )}`}
          >
            Class Nine
          </Link>
        </span>
        <span className="inline-block">
          <Link
            href="/all-results/class-ten"
            className={`text-xl mb-2 ${isLinkActive("/all-results/class-ten")}`}
          >
            Class Ten
          </Link>
        </span>
      </div>
    </div>
  );
};

export default ResultSidebar;
