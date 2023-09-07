/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
const AddGallery = () => {
  const [studentClass, setStudentClass] = useState("");
  const [studentName, setStudentName] = useState("");
  const [roleNumber, setRoleNumber] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [villageName, setVillageName] = useState("");
  const [postName, setPostName] = useState("");
  const [upozillaName, setUpozillaName] = useState("");
  const [zillaName, setZillaName] = useState("");
  const [parentPhoneNumber, setParentPhoneNumber] = useState("");
  const [studentImage, setStudentImage] = useState(null);
  const classRoutune = [
    "class Six",
    "class Seven",
    "class Eight",
    "class Nine",
    "class Ten",
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (studentImage) {
      const formData = new FormData();
      formData.append("image", studentImage);
      const response = await fetch(
        "https://api.imgbb.com/1/upload?key=86fe1764d78f51c15b1a9dfe4b9175cf",
        {
          method: "POST",
          body: formData,
        }
      );
      const imageData = await response.json();
      const studentGallery = {
        studentClass,
        studentImage: imageData.data.url,
        studentName,
        roleNumber,
        fatherName,
        motherName,
        villageName,
        postName,
        upozillaName,
        zillaName,
        parentPhoneNumber,
      };
      console.log(studentGallery);
      const res = await fetch("/api/add-gallery", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(studentGallery),
      });
      console.log(res);
      if (res.ok) {
        alert("Gallery Added");
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-5">
          <div className="flex flex-col gap-3 ">
            <label htmlFor="title">Student Name</label>
            <input
              type="text"
              id="studentName"
              value={studentName}
              placeholder="Enter Student Name"
              onChange={(e) => setStudentName(e.target.value)}
              className="border-2  border-gray-200 px-3 py-3 rounded-lg w-full"
              required
            />
          </div>
          <div className="flex flex-col gap-3 ">
            <label htmlFor="title">Student Name</label>
            <input
              type="text"
              id="roleNumber"
              value={roleNumber}
              placeholder="Enter Student Role Number"
              onChange={(e) => setRoleNumber(e.target.value)}
              className="border-2  border-gray-200 px-3 py-3 rounded-lg w-full"
              required
            />
          </div>
          <div className="flex flex-col gap-3 ">
            <label htmlFor="title">Student Father's Name</label>
            <input
              type="text"
              id="fatherName"
              value={fatherName}
              placeholder="Enter Student Role Number"
              onChange={(e) => setFatherName(e.target.value)}
              className="border-2  border-gray-200 px-3 py-3 rounded-lg w-full"
              required
            />
          </div>
          <div className="flex flex-col gap-3 ">
            <label htmlFor="title">Student Mother's Name</label>
            <input
              type="text"
              id="motherName"
              value={motherName}
              placeholder="Enter Student Role Number"
              onChange={(e) => setMotherName(e.target.value)}
              className="border-2  border-gray-200 px-3 py-3 rounded-lg w-full"
              required
            />
          </div>
          <div className="flex flex-col gap-3 ">
            <label htmlFor="title">Student Village Name</label>
            <input
              type="text"
              id="villageName"
              value={villageName}
              placeholder="Enter Student Role Number"
              onChange={(e) => setVillageName(e.target.value)}
              className="border-2  border-gray-200 px-3 py-3 rounded-lg w-full"
              required
            />
          </div>
          <div className="flex flex-col gap-3 ">
            <label htmlFor="title">Student Post Name</label>
            <input
              type="text"
              id="postName"
              value={postName}
              placeholder="Enter Student Role Number"
              onChange={(e) => setPostName(e.target.value)}
              className="border-2  border-gray-200 px-3 py-3 rounded-lg w-full"
              required
            />
          </div>
          <div className="flex flex-col gap-3 ">
            <label htmlFor="title">Student Upozilla Name</label>
            <input
              type="text"
              id="upozillaName"
              value={upozillaName}
              placeholder="Enter Student Role Number"
              onChange={(e) => setUpozillaName(e.target.value)}
              className="border-2  border-gray-200 px-3 py-3 rounded-lg w-full"
              required
            />
          </div>
          <div className="flex flex-col gap-3 ">
            <label htmlFor="title">Student Zilla Name</label>
            <input
              type="text"
              id="zillaName"
              value={zillaName}
              placeholder="Enter Student Role Number"
              onChange={(e) => setZillaName(e.target.value)}
              className="border-2  border-gray-200 px-3 py-3 rounded-lg w-full"
              required
            />
          </div>
          <div className="flex flex-col gap-3 ">
            <label htmlFor="title">Student Phone Number</label>
            <input
              type="text"
              id="parentPhoneNumber"
              value={parentPhoneNumber}
              placeholder="Enter Student Role Number"
              onChange={(e) => setParentPhoneNumber(e.target.value)}
              className="border-2  border-gray-200 px-3 py-3 rounded-lg w-full"
              required
            />
          </div>
          <div className="flex flex-col gap-3 ">
            <label htmlFor="title">Select Class</label>
            <select
              name="studentClass"
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
              className="bg-transparent border-2 border-gray-200 rounded-lg px-4 py-3 select select-bordered w-full"
            >
              <option className="selected">Select Class</option>
              {classRoutune.map((routune) => (
                <option key={routune}>{routune}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-3 ">
            <label htmlFor="title">Select Image:</label>
            <input
              type="file"
              accept="image/*"
              required
              onChange={(e) => {
                const file = e.target.files && e.target.files[0];
                setStudentImage(file);
              }}
              className="border-2 border-gray-200 bg-transparent px-4 py-2 rounded-lg w-full"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-500 mt-5 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddGallery;
