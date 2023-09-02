import Link from "next/link";
import React from "react";

const TeachersInformation = () => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <Link href="/"> 1 . শিক্ষকবৃন্দ</Link>
        <Link href="/">2 . শূণ্যপদের তালিকা</Link>
        <Link href="/"> 3 . প্রাক্তন প্রধান শিক্ষক</Link>
        <Link href="/"> 4 . কর্মকর্তা কর্মচারী</Link>
        <Link href="/"> 5 . পরিচালনা পরিষদs</Link>
      </div>
    </div>
  );
};

export default TeachersInformation;
