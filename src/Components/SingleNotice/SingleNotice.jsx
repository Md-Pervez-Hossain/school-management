"use client";

import Link from "next/link";
import { MdOutlineNotifications } from "react-icons/md";

const SingleNotice = ({ data, allNoticeData }) => {
  console.log(data.notice);
  console.log(allNoticeData);
  return (
    <div className="w-9/12 mx-auto my-16">
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-2">
          <h2 className="text-xl mb-5 fond-bold">{data.notice?.title}</h2>
          <p>{data.notice?.description}</p>
        </div>
        <div className="col-span-1">
          <p className="bg-[#169B81] px-4 py-2 mt-5 text-white mb-5">
            Others Notice
          </p>
          <div>
            {allNoticeData?.notice?.map((notice) => {
              return (
                <>
                  <div className="flex items-center gap-3 mb-5">
                    {" "}
                    <span>
                      <MdOutlineNotifications className="text-2xl font-bold"></MdOutlineNotifications>
                    </span>
                    <Link href={`/single-notice/${notice._id}`}>
                      {`${notice.title} ... `}
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNotice;
