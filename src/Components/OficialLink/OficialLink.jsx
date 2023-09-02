import Link from "next/link";
import React from "react";

const OficialLink = () => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <Link href="/"> 1 . শিক্ষা মন্ত্রণালয়</Link>
        <Link href="/">2 . এসএসসি/এইচএসসি ফলাফল</Link>
        <Link href="/"> 3 . ব্যানবেইজ</Link>
        <Link href="/"> 4 . সেকায়েপ</Link>
      </div>
    </div>
  );
};

export default OficialLink;
