"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const AllStudentGallery = ({ data }) => {
  console.log(data?.studentGallery);

  const [studentClass, setStudentClass] = useState(""); // Initialize the selected class state

  const classGallery = [
    "class Six",
    "class Seven",
    "class Eight",
    "class Nine",
    "class Ten",
  ];

  // Filter the student gallery data based on the selected class
  const filteredGallery = data?.studentGallery?.filter((gallery) => {
    if (!studentClass) {
      // If no class is selected, show all galleries
      return true;
    }
    return gallery.studentClass === studentClass;
  });

  return (
    <div>
      <select
        name="studentClass"
        value={studentClass}
        onChange={(e) => setStudentClass(e.target.value)}
        className="bg-transparent border-2 border-gray-200 rounded-lg px-4 py-3 select select-bordered w-full"
      >
        <option value="">All Class</option>
        {classGallery?.map((routune) => (
          <option key={routune} value={routune}>
            {routune}
          </option>
        ))}
      </select>
      <div className="grid grid-cols-4 gap-10">
        {filteredGallery?.length > 0 ? (
          <>
            {" "}
            {filteredGallery?.map((gallery) => (
              <div key={gallery._id} className="my-10">
                <div>
                  <Link
                    href={`/all-class-gallery/single-student-gallery/${gallery._id}`}
                  >
                    <Image
                      width={300}
                      height={300}
                      src={gallery.studentImage}
                      alt=""
                      className="mb-3"
                    ></Image>
                    <div>
                      <h1 className="text-xl font-semibold pt-2">
                        {gallery.studentName}
                      </h1>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            <h2 className="my-16">No Gallery Found </h2>
          </>
        )}
      </div>
    </div>
  );
};

export default AllStudentGallery;
