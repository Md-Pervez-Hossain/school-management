import React from "react";
import Chairman from "../Chairman/Chairman";
import Sovapoti from "../Sovapoti/Sovapoti";

const OutTeachers = () => {
  return (
    <div>
      <div className=" mt-8">
        <h2 className="text-xl font-bold mb-2 text-[#169B81]">Our Teachers</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum,
          laudantium fugit, sint error eligendi deleniti ratione voluptates
          quasi, obcaecati quas
        </p>
        <p className="mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum,
          laudantium fugit, sint error eligendi deleniti ratione voluptates
          quasi, obcaecati quas necessitatibus pariatur ducimus odio nulla
          tempora assumenda fuga
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10 mt-8">
        <Chairman></Chairman>
        <Sovapoti></Sovapoti>
        <Chairman></Chairman>
        <Sovapoti></Sovapoti>
        <Chairman></Chairman>
        <Sovapoti></Sovapoti>
      </div>
    </div>
  );
};

export default OutTeachers;
