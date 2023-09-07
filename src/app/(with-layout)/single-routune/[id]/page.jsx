import React from "react";
import SingleClassRoutune from "../../../../Components/SingleClassRoutune/SingleClassRoutune";

const page = async ({ params }) => {
  const { id } = params;
  async function getData() {
    const res = await fetch(
      `https://bd-schools.vercel.app/api/add-routune/${id}`,
      {
        cache: "no-store",
      }
    );
    const data = await res.json();
    if (!res.ok) {
      throw new Error("Failed To Fetch");
    }
    return data;
  }
  const data = await getData();
  return (
    <div>
      <SingleClassRoutune data={data}></SingleClassRoutune>
    </div>
  );
};

export default page;
