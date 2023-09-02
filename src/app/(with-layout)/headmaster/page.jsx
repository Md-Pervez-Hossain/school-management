import React from "react";
import HeaderNotice from "../HeaderNotice/HeaderNotice";
import Image from "next/image";
import ShowNotice from "../../../Components/ShowNotice/ShowNotice";

const page = () => {
  return (
    <div className="w-9/12 mx-auto ">
      <HeaderNotice></HeaderNotice>
      <div className="grid grid-cols-3 gap-10 mt-16">
        <div className="col-span-2">
          <Image
            width={250}
            height={200}
            src="https://images.pexels.com/photos/5212649/pexels-photo-5212649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            layout="responsive"
            className="mb-3"
          ></Image>
          <h2 className="text-xl font-bold my-2">History oF school</h2>
          <p className="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            asperiores ducimus accusantium repellat sapiente beatae vitae magni
            delectus maiores quos perferendis eveniet fugiat quae ab quasi,
            recusandae aspernatur iusto quibusdam odit obcaecati totam amet
            natus. Porro similique blanditiis quos laboriosam fuga fugiat
            distinctio commodi sapiente qui! Esse totam reprehenderit error!
          </p>
        </div>
        <div className="col-span-1">
          <ShowNotice></ShowNotice>
        </div>
      </div>
    </div>
  );
};

export default page;
