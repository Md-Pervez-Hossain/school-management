import React from "react";
import SingleStudentGallery from "../../../../Components/SingleStudentGallery/SingleStudentGallery";

const page = async ({ params }) => {
  const { id } = params;
  async function getData() {
    const res = await fetch(`http://localhost:3000/api/add-gallery/${id}`, {
      cache: "no-store",
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error("Failed To Fetch");
    }
    return data;
  }
  const data = await getData();
  console.log(data);
  return (
    <div>
      <SingleStudentGallery data={data}></SingleStudentGallery>
    </div>
  );
};

export default page;
