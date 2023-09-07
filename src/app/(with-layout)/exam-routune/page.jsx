"use client";
import React from "react";
import AllExamRoutune from "../../../Components/AllExamRoutune/AllExamRoutune";
async function getClassRoutuneData() {
  const res = await fetch(
    "https://school-management-ten.vercel.app/api/add-routune",
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
const ExamRoutine = () => {
  const data = getClassRoutuneData();
  console.log(data);
  return (
    <div>
      <AllExamRoutune data={data}></AllExamRoutune>
    </div>
  );
};

export default ExamRoutine;
