import Navbar from "../components/Navbar";
import { IoShieldOutline } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";

export default function Home() {
  return (
    <div className="bg-[#fefefe] w-screen h-screen">
      <Navbar />

      <div className="max-w-2xl mx-auto my-10 text-center space-y-7">
        <h1 className="text-6xl font-bold">
          <span>Watch YouTube</span>
          <br />
          <span className="text-blue-500">Without Distractions</span>
        </h1>
        <p className="max-w-xl mx-auto text-xl text-[#4b5563]">
          FocusTube hides YouTube's sidebar recommendations, helping you stay
          focused on what you came to watch. No more endless scrolling, just
          pure focus.
        </p>
        <div className="flex flex-col items-center justify-center space-x-5 md:flex-row">
          <button className=" flex items-center space-x-5 text-sm font-semibold text-white bg-blue-600 px-12 py-2.5 rounded-lg cursor-pointer">
            <IoShieldOutline />
            <h1>Get Refocus</h1>
          </button>
          <button className="flex items-center space-x-5 border-[1px] border-slate-800 px-12 py-2.5 text-sm rounded-lg font-semibold cursor-pointer">
            <IoPlay />
            <h1>See How it Works</h1>
          </button>
        </div>
      </div>
    </div>
  );
}
