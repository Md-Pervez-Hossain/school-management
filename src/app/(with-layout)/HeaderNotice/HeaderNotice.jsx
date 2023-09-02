import React from "react";

const HeaderNotice = () => {
  return (
    <div className=" flex items-center gap-10 bg-gray-50 mt-8 ">
      <button className="px-6 py-3   text-white bg-[#169B81]">Notice</button>

      <marquee>Your Notice Will be there</marquee>
    </div>
  );
};

export default HeaderNotice;
