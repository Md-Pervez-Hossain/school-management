import Link from "next/link";
import React from "react";
import { GrGallery } from "react-icons/gr";
const Sidebar = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 ">
        <div className="flex items-center gap-2">
          <GrGallery></GrGallery>
          <Link href="/dashboard/gallery">Add Gallery</Link>
        </div>
        <div className="flex items-center gap-2">
          <GrGallery></GrGallery>
          <Link href="/dashboard/exam-routune">Add Routune</Link>
        </div>
        <div className="flex items-center gap-2">
          <GrGallery></GrGallery>
          <Link href="/dashboard/online-result">Add Result</Link>
        </div>
        <div className="flex items-center gap-2">
          <GrGallery></GrGallery>
          <Link href="/dashboard/student-attendance">Student Attendance</Link>
        </div>
        <div className="flex items-center gap-2">
          <GrGallery></GrGallery>
          <Link href="/dashboard/teacher-attendance">Teacher Attdendance</Link>
        </div>
        <div className="flex items-center gap-2">
          <GrGallery></GrGallery>
          <Link href="/dashboard/notice">Add Notice</Link>
        </div>
        <div className="flex items-center gap-2">
          <GrGallery></GrGallery>
          <Link href="/">Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
