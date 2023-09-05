"use client";
import Image from "next/image";
import React from "react";

const SingleClassRoutune = ({ data }) => {
  console.log(data?.routune);

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = data?.routune?.routuneImage; // Replace with the image URL
    link.download = "routune_image.jpg"; // Specify the desired filename
    link.click();
  };

  return (
    <div className="w-9/12 mx-auto my-16 flex flex-col justify-center items-center">
      <h2 className="text-xl">{data?.routune?.routune}</h2>
      <button
        className="bg-[#169B81] px-4 py-2 mt-5 text-white mb-5"
        onClick={downloadImage}
      >
        Download
      </button>
      <Image
        src={data?.routune?.routuneImage}
        alt=""
        width={400}
        height={500}
      />
    </div>
  );
};

export default SingleClassRoutune;
