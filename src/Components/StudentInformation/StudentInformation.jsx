import Link from "next/link";
import React from "react";

const StudentInformation = () => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <Link href="/student-admission-information"> 1 . ভর্তি তথ্য</Link>
        <Link href="/">2 . ছাত্রছাত্রীর আসন সংখ্যা</Link>
        <Link href="/notice"> 3 . নোটিশ</Link>
        <Link href="/exam-routune"> 4 . রুটিন</Link>
        <Link href="/all-class-gallery"> 5 . কৃতি শিক্ষার্থী</Link>
      </div>
    </div>
  );
};

export default StudentInformation;
