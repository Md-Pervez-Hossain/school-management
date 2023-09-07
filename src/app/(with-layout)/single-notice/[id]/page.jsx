import React from "react";
import SingleNotice from "../../../../Components/SingleNotice/SingleNotice";

async function getAllData() {
  const res = await fetch(`https://bd-schools.vercel.app/api/add-notice`, {
    cache: "no-store",
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed To Fetch");
  }
  return data;
}

const SingleNoticePage = async ({ params }) => {
  const { id } = params;
  async function getData() {
    const res = await fetch(
      `https://bd-schools.vercel.app/api/add-notice/${id}`,
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
  const allNoticeData = await getAllData();

  return (
    <div>
      <SingleNotice data={data} allNoticeData={allNoticeData}></SingleNotice>
    </div>
  );
};

export default SingleNoticePage;
