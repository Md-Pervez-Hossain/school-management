"use client";
import React from "react";
import AllStudentGallery from "../../Components/AllStudentGallery/AllStudentGallery";

async function getData() {
  const res = await fetch("https://bd-schools.vercel.app/api/add-gallery", {
    cache: "no-store",
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed To Fetch");
  }
  return data;
}
const AllClass = () => {
  const data = getData();

  return (
    <div>
      <AllStudentGallery data={data}></AllStudentGallery>
    </div>
  );
};

export default AllClass;
