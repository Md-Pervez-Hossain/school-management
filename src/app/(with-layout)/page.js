import Slider from "../../Components/Slider/Slider.jsx";
import ShowNotice from "../../Components/ShowNotice/ShowNotice.jsx";
import HeadMaster from "../../Components/HeadMaster/HeadMaster.jsx";
import Chairman from "../../Components/Chairman/Chairman.jsx";
import Sovapoti from "../../Components/Sovapoti/Sovapoti.jsx";
import Footer from "./Footer/Footer.jsx";
import About from "../../Components/About/About.jsx";
import HeaderNotice from "./HeaderNotice/HeaderNotice.jsx";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
export default function Home() {
  return (
    <main className="w-9/12 mx-auto">
      <HeaderNotice></HeaderNotice>
      <div className="grid grid-cols-3 gap-10 my-16 ">
        <div className="col-span-2">
          <Slider></Slider>
          <div className=" mt-8">
            <h2 className="text-xl font-bold mb-2 text-[#169B81]">
              Our Teachers
            </h2>
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
          <div className="flex justify-end  gap-5 text-end mt-8">
            <button>
              <div className="flex gap-2 items-center">
                <FaArrowLeft></FaArrowLeft>
              </div>
            </button>
            <button>
              <div className="flex gap-2 items-center">
                <FaArrowRight></FaArrowRight>
              </div>
            </button>
          </div>
        </div>
        <div className="col-span-1">
          <div>
            <ShowNotice></ShowNotice>
          </div>
          <div className="my-10">
            <HeadMaster></HeadMaster>
          </div>
          <div>
            <About></About>
          </div>
        </div>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </main>
  );
}
