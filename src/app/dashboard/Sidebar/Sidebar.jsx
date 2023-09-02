import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <Link href="/dashboard/gallery">Gallery</Link>
        <Link href="/dashboard/exam-routune">Exam Routune</Link>
        <Link href="/dashboard/online-result">Online Result</Link>
        <Link href="/dashboard/student-attendance">Student Attendance</Link>
        <Link href="/dashboard/teacher-attendance">Teacher Attdendance</Link>
        <Link href="/dashboard/notice">Notice</Link>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
};

export default Sidebar;
