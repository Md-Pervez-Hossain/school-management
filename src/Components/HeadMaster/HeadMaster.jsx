import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeadMaster = () => {
  return (
    <div>
      <div>
        <Image
          width={500}
          height={200}
          src="https://images.pexels.com/photos/5212649/pexels-photo-5212649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="mb-2"
          layout="responsive"
        ></Image>
      </div>
      <div>
        <div className=" p-3">
          <p className="mt-2">
            সুনামগঞ্জ জেলাধীন জগন্নাথপুরস্থ এক প্রাচীন জনপদের নাম ইসহাকপুর । এ
            গ্রামের সম্ভ্রান্ত ধর্মভীরু মুসলিম পরিবার সমূহের মধ্যে শীর্ষস্থানে
            অবস্থান খান পরিবারের । বংশমর্যাদায় যেমন শ্রেষ্ঠত্বের দাবীদার ..
            <Link href="/headmaster">
              {" "}
              <button className="text-[#FFB400] mt-2">Read More</button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeadMaster;
