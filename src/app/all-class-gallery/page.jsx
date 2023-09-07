import React from "react";
import AllStudentGallery from "../../Components/AllStudentGallery/AllStudentGallery";

async function getData() {
  const res = await fetch("http://localhost:3000/api/add-gallery");
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed To Fetch");
  }
  return data;
}
const page = async () => {
  const data = await getData();

  return (
    <div>
      <AllStudentGallery data={data}></AllStudentGallery>
    </div>
  );
};

export default page;
