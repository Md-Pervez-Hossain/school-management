import React from "react";
import AllNotice from "../../../Components/AllNotice/AllNotice";

async function getData() {
  const res = await fetch("http://localhost:3000/api/add-notice", {
    cache: "no-store",
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed To Fetch");
  }
  return data;
}
const AllNoticePage = async () => {
  const data = await getData();
  console.log("all notice", data);
  return (
    <div>
      <AllNotice data={data}></AllNotice>
    </div>
  );
};

export default AllNoticePage;
