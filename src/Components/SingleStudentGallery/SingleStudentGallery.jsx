"use client";
import Image from "next/image";
import React from "react";
const SingleStudentGallery = ({ data }) => {
  console.log(data?.singleGallery);
  return (
    <div className="flex items-center justify-center my-16  gap-10">
      <div className="grid grid-cols-2 gap-10 items-center">
        <Image
          src={data?.singleGallery?.studentImage}
          alt=""
          width={400}
          height={400}
        ></Image>
        <div>
          <h2 className="text-xl font-semibold mb-3">
            {data?.singleGallery?.studentName}
          </h2>
          <p className="mb-2">Class : {data?.singleGallery?.studentClass}</p>
          <p className="mb-2">
            Role Number : {data?.singleGallery?.roleNumber}
          </p>
          <p className="mb-2">
            Father's Name : {data?.singleGallery?.fatherName}
          </p>
          <p className="mb-2">
            Mother's Name : {data?.singleGallery?.motherName}
          </p>
          <p className="mb-2">Village : {data?.singleGallery?.villageName}</p>
          <p className="mb-2">Post : {data?.singleGallery?.postName}</p>
          <p className="mb-2">Upozilla : {data?.singleGallery?.upozillaName}</p>
          <p className="mb-2">Zilla : {data?.singleGallery?.zillaName}</p>
          <p className="mb-2">
            Parents Number : {data?.singleGallery?.parentPhoneNumber}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleStudentGallery;
