import Slider from "../../Components/Slider/Slider.jsx";
import ShowNotice from "../../Components/ShowNotice/ShowNotice.jsx";
import HeadMaster from "../../Components/HeadMaster/HeadMaster.jsx";
import Chairman from "../../Components/Chairman/Chairman.jsx";
import Sovapoti from "../../Components/Sovapoti/Sovapoti.jsx";
import Footer from "./Footer/Footer.jsx";
import About from "../../Components/About/About.jsx";
import HeaderNotice from "./HeaderNotice/HeaderNotice.jsx";
import StudentInformation from "../../Components/StudentInformation/StudentInformation.jsx";
import TeachersInformation from "../../Components/TeachersInformation/TeachersInformation.jsx";
import Download from "../../Components/Download/Download.jsx";
import AcademicInformation from "../../Components/AcademicInformation/AcademicInformation.jsx";
import OfficialLink from "../../Components/OficialLink/OficialLink.jsx";
import ImportantLinks from "../../Components/ImportantLinks/ImportantLinks.jsx";
import Link from "next/link.js";
export default function Home() {
  return (
    <main className="w-9/12 mx-auto">
      <HeaderNotice></HeaderNotice>
      <div className="grid grid-cols-4 gap-10 my-16 ">
        <div className="col-span-3">
          <div>
            <Slider></Slider>
          </div>
          <div>
            <p className="bg-[#169B81] px-4 py-2 mt-5 text-white mb-5">
              School History
            </p>
            <About></About>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-5">
            <div>
              <p className="bg-[#169B81] px-4 py-2 text-white mb-5">
                Principal Words
              </p>
              <Chairman></Chairman>
            </div>
            <div>
              <p className="bg-[#169B81] px-4 py-2 text-white mb-5">
                Principal Words
              </p>
              <Sovapoti></Sovapoti>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <p className="bg-[#169B81] px-4 py-2 mt-5 text-white mb-5">
                Student Information
              </p>
              <div>
                <StudentInformation></StudentInformation>
              </div>
            </div>
            <div>
              <p className="bg-[#169B81] px-4 py-2 mt-5 text-white mb-5">
                Teachers Information
              </p>
              <div>
                <TeachersInformation></TeachersInformation>
              </div>
            </div>
            <div>
              <p className="bg-[#169B81] px-4 py-2 mt-5 text-white mb-5">
                Downloads
              </p>
              <div>
                <Download></Download>
              </div>
            </div>
            <div>
              <p className="bg-[#169B81] px-4 py-2 mt-5 text-white mb-5">
                Academic Information
              </p>
              <div>
                <AcademicInformation></AcademicInformation>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="mb-5">
            <ShowNotice></ShowNotice>
          </div>
          <div className="flex flex-col">
            <Link
              href="/student-admission-information"
              className="bg-[#169B81] mb-3 px-4 py-2 text-white"
            >
              ভর্তি তথ্য
            </Link>
            <Link href="/" className="bg-[#169B81] mb-3 px-4 py-2 text-white">
              ভর্তি ফরম
            </Link>
            <Link
              href="/all-class-gallery"
              className="bg-[#169B81] mb-3 px-4 py-2 text-white"
            >
              ফটোগ্যালারী
            </Link>
            <Link
              href="/all-class-gallery"
              className="bg-[#169B81] mb-3 px-4 py-2 text-white"
            >
              ভিডিও গ্যালারী
            </Link>
          </div>

          <div className="my-5">
            <p className="bg-[#FFB400] px-4 py-2 text-white mb-5">
              Principal Words
            </p>
            <HeadMaster></HeadMaster>
          </div>
          <div className="my-5">
            <p className="bg-[#FFB400] px-4 py-2 text-white mb-5">
              Oficial Links
            </p>
            <OfficialLink></OfficialLink>
          </div>

          <div className="my-5">
            <p className="bg-[#FFB400] px-4 py-2 text-white mb-5">
              Important Links
            </p>
            <ImportantLinks></ImportantLinks>
          </div>
        </div>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </main>
  );
}
