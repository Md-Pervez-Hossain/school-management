import Link from "next/link";
import React from "react";
import { MdOutlineNotifications } from "react-icons/md";
import OficialLink from "../OficialLink/OficialLink";
import ImportantLinks from "../ImportantLinks/ImportantLinks";

const Allnotice = () => {
  return (
    <div className="w-9/12 mx-auto my-16">
      <div className="my-10 grid grid-cols-3 gap-10">
        <div className="col-span-2">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span>
                <MdOutlineNotifications className="text-2xl font-bold"></MdOutlineNotifications>
              </span>
              <Link href="/">
                আগামী নির্বাচনী পরীক্ষা ৩১ মার্চের পরিবর্তে ৫ জুন অনুষ্ঠিত হবে
              </Link>
            </div>
            <div className="flex items-center gap-3 mb-5">
              {" "}
              <span>
                <MdOutlineNotifications className="text-2xl font-bold"></MdOutlineNotifications>
              </span>
              <Link href="/">আগামী ১২ এপ্রিল বিজ্ঞান বিভাগের পরীক্ষা</Link>
            </div>
            <div className="flex items-center gap-3 mb-5">
              {" "}
              <span>
                <MdOutlineNotifications className="text-2xl font-bold"></MdOutlineNotifications>
              </span>
              <Link href="/">
                আগামী ৩১ মার্চের মধ্যে সকল ফি পরিশোধ করতে হবে
              </Link>
            </div>
            <div className="flex items-center gap-3 mb-5">
              {" "}
              <span>
                <MdOutlineNotifications className="text-2xl font-bold"></MdOutlineNotifications>
              </span>
              <Link href="/">
                স্কুলের ভিতর মোবাইল ব্যবহার করা সম্পূর্ণ নিষেধ
              </Link>
            </div>
            <div className="flex items-center gap-3 mb-5">
              {" "}
              <span>
                <MdOutlineNotifications className="text-2xl font-bold"></MdOutlineNotifications>
              </span>
              <Link href="/">আমাদের শিক্ষা প্রতিষ্ঠানে আপনাদের স্বাগতম</Link>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col">
            <Link href="/" className="bg-[#169B81] mb-3 px-4 py-2 text-white">
              ভর্তি তথ্য
            </Link>
            <Link href="/" className="bg-[#169B81] mb-3 px-4 py-2 text-white">
              ভর্তি ফরম
            </Link>
            <Link href="/" className="bg-[#169B81] mb-3 px-4 py-2 text-white">
              ফটোগ্যালারী
            </Link>
            <Link href="/" className="bg-[#169B81] mb-3 px-4 py-2 text-white">
              ভিডিও গ্যালারী
            </Link>
          </div>

          <div className="mt-5">
            <p className="bg-[#FFB400] px-4 py-2 text-white mb-5">
              Official Links
            </p>
            <OficialLink></OficialLink>
          </div>
          <div className="my-5">
            <p className="bg-[#FFB400] px-4 py-2 text-white mb-5">
              Important Links
            </p>
            <ImportantLinks></ImportantLinks>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allnotice;
