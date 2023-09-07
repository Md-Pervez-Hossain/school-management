"use client";
import GetAllNotice from "../../../Components/GetAllNotice/GetAllNotice";
async function getData() {
  const res = await fetch("https://bd-schools.vercel.app/api/add-notice", {
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
      <GetAllNotice></GetAllNotice>
    </div>
  );
};

export default AllNoticePage;
