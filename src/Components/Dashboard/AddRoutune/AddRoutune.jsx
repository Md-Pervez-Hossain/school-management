"use client";
import React, { useState } from "react";

const AddRoutune = () => {
  const [routune, setRoutune] = useState("");
  const [routuneImage, setRoutuneImage] = useState(null);
  const classRoutune = [
    "৬ষ্ঠ শ্রেণীর রুটিন",
    "৭ম শ্রেণীর রুটিন",
    "৮ম শ্রেণীর রুটিন",
    "৯ম শ্রেণীর রুটিন",
    "১০ শ্রেণীর রুটিন",
    "একাদ্বশ শ্রেণীর রুটিন",
    "দ্বাদশ শ্রেণীর রুটিন",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (routuneImage) {
      const formData = new FormData();
      formData.append("image", routuneImage);
      const response = await fetch(
        "https://api.imgbb.com/1/upload?key=86fe1764d78f51c15b1a9dfe4b9175cf",
        {
          method: "POST",
          body: formData,
        }
      );

      const imageData = await response.json();

      const routuneInfo = {
        routune,
        routuneImage: imageData.data.url,
      };
      console.log(routuneInfo);
      const res = await fetch("/api/add-routune", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(routuneInfo),
      });
      console.log(res);
      if (res.ok) {
        alert("Notice Added");
        setRoutune("");
        setRoutuneImage(null);
      }

      // Continue with the rest of the signup process
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5 mb-5">
          <label htmlFor="title">Select Class:</label>
          <select
            name="routune"
            value={routune}
            onChange={(e) => setRoutune(e.target.value)}
            className="bg-transparent border-2 border-gray-200 rounded-lg px-4 py-2 select select-bordered w-full"
          >
            <option className="selected">Select Class</option>
            {classRoutune.map((routune) => (
              <option key={routune}>{routune}</option>
            ))}
          </select>
        </div>
        <input
          type="file"
          accept="image/*"
          required
          onChange={(e) => {
            const file = e.target.files && e.target.files[0];
            setRoutuneImage(file);
          }}
          className="border-2 border-gray-200 bg-transparent px-4 py-2 rounded-lg w-full"
        />

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

export default AddRoutune;
