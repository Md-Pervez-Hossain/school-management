import Link from "next/link";
import React from "react";

const ImportantLinks = () => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <Link href="/"> 1 . ই-বুক</Link>
        <Link href="/">2 . শিক্ষক বাতায়ন</Link>
        <Link href="/"> 3 . মাল্টিমিডিয়া ক্লাসরুম ম্যানেজমেন্ট</Link>
      </div>
    </div>
  );
};

export default ImportantLinks;
