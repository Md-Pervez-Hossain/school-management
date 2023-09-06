import Link from "next/link";
import React from "react";

const OficialLink = () => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <Link href="https://moedu.gov.bd"> 1 . শিক্ষা মন্ত্রণালয়</Link>
        <Link href="http://www.educationboardresults.gov.bd">
          2 . এসএসসি/এইচএসসি ফলাফল
        </Link>
        <Link href="https://banbeis.gov.bd/new/"> 3 . ব্যানবেইজ</Link>
        <Link href="http://www.seqaep.gov.bd"> 4 . সেকায়েপ</Link>
      </div>
    </div>
  );
};

export default OficialLink;
