"use client";

import React, { useState } from "react";

const AddNotice = ({ data }) => {
  console.log(data);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const noticeInfo = {
      title,
      description,
    };
    console.log(noticeInfo);
    try {
      const res = await fetch("/api/add-notice", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(noticeInfo),
      });
      console.log(res);
      if (res.ok) {
        alert("Notice Added");
        setTitle("");
        setDescription("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-5 mb-5">
        <label htmlFor="title">Notice Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 border-gray-200 px-3 py-2 rounded-lg w-full"
          required
        />
      </div>
      <div className="flex flex-col gap-5">
        <label htmlFor="description">Notice Details:</label>
        <textarea
          id="description"
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
          className="border-2 border-gray-200 px-3 py-2 rounded-lg w-full h-32" // Added height class for textarea
          placeholder="Notice Details"
        ></textarea>
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
  );
};

export default AddNotice;
