import Link from "next/link";
import React from "react";

const ImportantLinks = () => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <Link href="http://www.ebook.gov.bd"> 1 . ই-বুক</Link>
        <Link href="https://teachers.gov.bd">2 . শিক্ষক বাতায়ন</Link>
        <Link href="http://mmc.e-service.gov.bd">
          {" "}
          3 . মাল্টিমিডিয়া ক্লাসরুম ম্যানেজমেন্ট
        </Link>
      </div>
    </div>
  );
};

export default ImportantLinks;
