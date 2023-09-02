import Link from "next/link";
import React from "react";

const AcademicInformation = () => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <Link href="/"> 1 . কক্ষ সংখ্যা</Link>
        <Link href="/">2 . ছাত্রছাত্রীর আসন সংখ্যা</Link>
        <Link href="/"> 3 . ছুটির তালিকা</Link>
        <Link href="/"> 4 . মাল্টিমিডিয়া ক্লাসরুম</Link>
        <Link href="/"> 5 . যানবাহন সুবিধা</Link>
      </div>
    </div>
  );
};

export default AcademicInformation;
