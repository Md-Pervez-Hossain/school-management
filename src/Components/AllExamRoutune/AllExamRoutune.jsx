import Link from "next/link";
import React from "react";
import { MdOutlineNotifications } from "react-icons/md";
import OficialLink from "../OficialLink/OficialLink";
import ImportantLinks from "../ImportantLinks/ImportantLinks";
import TeachersInformation from "../TeachersInformation/TeachersInformation";
import Download from "../Download/Download";
const AllExamRoutune = () => {
  return (
    <div>
      <div className="w-9/12 mx-auto my-16">
        <div className="my-10 grid grid-cols-3 gap-10">
          <div className="col-span-2">
            <div className="grid grid-cols-2 gap-10">
              <div className="flex items-center gap-3 mb-5">
                <span>
                  <MdOutlineNotifications className="text-2xl font-bold"></MdOutlineNotifications>
                </span>
                <Link href="/">৬ষ্ঠ শ্রেণীর রুটিন</Link>
              </div>
              <div className="flex items-center gap-3 mb-5">
                {" "}
                <span>
                  <MdOutlineNotifications className="text-2xl font-bold"></MdOutlineNotifications>
                </span>
                <Link href="/">৭ম শ্রেণীর রুটিন</Link>
              </div>
              <div className="flex items-center gap-3 mb-5">
                {" "}
                <span>
                  <MdOutlineNotifications className="text-2xl font-bold"></MdOutlineNotifications>
                </span>
                <Link href="/">৮ম শ্রেণীর রুটিন</Link>
              </div>
              <div className="flex items-center gap-3 mb-5">
                {" "}
                <span>
                  <MdOutlineNotifications className="text-2xl font-bold"></MdOutlineNotifications>
                </span>
                <Link href="/">৯ম শ্রেণীর রুটিন</Link>
              </div>
              <div className="flex items-center gap-3 mb-5">
                {" "}
                <span>
                  <MdOutlineNotifications className="text-2xl font-bold"></MdOutlineNotifications>
                </span>
                <Link href="/">১০ শ্রেণীর রুটিন</Link>
              </div>
              <div className="flex items-center gap-3 mb-5">
                {" "}
                <span>
                  <MdOutlineNotifications className="text-2xl font-bold"></MdOutlineNotifications>
                </span>
                <Link href="/">একাদ্বশ শ্রেণীর রুটিন</Link>
              </div>
              <div className="flex items-center gap-3 mb-5">
                {" "}
                <span>
                  <MdOutlineNotifications className="text-2xl font-bold"></MdOutlineNotifications>
                </span>
                <Link href="/">দ্বাদশ শ্রেণীর রুটিন</Link>
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

            <div>
              <p className="bg-[#169B81] px-4 py-2 mt-5 text-white mb-5">
                Teachers Information
              </p>
              <div>
                <TeachersInformation></TeachersInformation>
              </div>
            </div>
            <div>
              <p className="bg-[#169B81] px-4 py-2 mt-5 text-white mb-5">
                Downloads
              </p>
              <div>
                <Download></Download>
              </div>
            </div>

            {/* <div className="mt-5">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllExamRoutune;
