import Navbar from "../components/Navbar";
import { IoLogoChrome, IoShieldOutline } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";
import data from "../data/Choose";
import Choose from "../components/Choose";
import Distraction from "../components/Distraction";
import NoDistraction from "../components/NoDistraction";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden ">
      <Navbar />

      <div className="bg-[#f4f8fc] w-full px-4 py-10">
        <div className="max-w-2xl mx-auto text-center space-y-7">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            <span>Watch YouTube</span>
            <br />
            <span className="text-blue-500">Without Distractions</span>
          </h1>

          <p className="max-w-xl mx-auto text-base sm:text-lg md:text-xl text-[#4b5563]">
            FocusTube hides YouTube's sidebar recommendations, helping you stay
            focused on what you came to watch. No more endless scrolling, just
            pure focus.
          </p>

          <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-5 md:space-y-0">
            <button className="flex  items-center space-x-2 text-sm font-semibold text-white bg-blue-600 px-10 py-2.5 rounded-lg">
              <IoShieldOutline />
              <span>Get Refocus</span>
            </button>
            <button className="flex items-center space-x-2 border border-slate-800 px-10 py-2.5 text-sm rounded-lg font-semibold">
              <IoPlay />
              <span>See How it Works</span>
            </button>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-7">
            <p className="font-semibold text-slate-500">100% Privacy Focused</p>
            <p className="font-semibold text-slate-500">Lightweight & Fast</p>
          </div>
        </div>
      </div>

      <div className="space-y-5 text-center my-28">
        <h1 className="text-3xl font-bold">Why Choose FocusTube?</h1>
        <p className="max-w-xl mx-auto text-xl text-[#4b5563]">
          Designed with your productivity and mental well-being in mind
        </p>

        <div className="flex flex-col items-center justify-center gap-5 p-6 md:items-start md:flex-row">
          {data.map((i, id) => {
            return (
              <>
                <Choose data={i} key={id} />
              </>
            );
          })}
        </div>
      </div>

      <div className="bg-[#f4f8fc] w-screen p-8">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold">See Refocus in Action</h1>
          <p className="max-w-xl mx-auto text-xl text-[#4b5563]">
            Compare YouTube before and after installing FocusTube
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 md:items-start md:flex-row">
          <Distraction />
          <NoDistraction />
        </div>
      </div>

      <div className="bg-[#1e52db] p-7 w-screen">
        <div className="space-y-8 text-center text-white">
          <h1 className="text-3xl font-bold">Start Refocusing Today</h1>
          <p className="text-lg font-semibold">
            Join thousands of users who have regained control over their YouTube
            experience
          </p>
          <div className="flex justify-center">
            <button className=" flex items-center space-x-5 text-sm font-semibold text-blue-500 bg-white px-12 py-2.5 rounded-lg cursor-pointer">
              <IoLogoChrome size={20} />
              <h1 className="text-sm">Add to Chrome</h1>
            </button>
          </div>
          <p className="text-sm">
            Free forever • No registration required • Privacy focused
          </p>
        </div>
      </div>

      <footer className="bg-[#0D1117] text-white py-10 px-6 md:px-20">
        <div className="grid gap-10 mx-auto max-w-7xl md:grid-cols-3">
          <div>
            <div className="flex items-center mb-4">
              <div className="px-2 py-1 mr-2 font-bold text-white bg-blue-600 rounded-md">
                FT
              </div>
              <span className="text-xl font-semibold">FocusTube</span>
            </div>
            <p className="text-gray-400">
              Helping you stay focused and productive while watching YouTube. No
              distractions, just pure content.
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-white">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="">Help Center</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Bug Reports</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-semibold text-white">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-4 mt-10 text-sm text-center text-gray-500 border-t border-gray-700">
          © 2024 FocusTube. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
