import { IoLogoChrome } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav className="bg-white border-b-[1px] border-slate-200 flex justify-between px-8 py-6">
      <div className="flex items-center space-x-3 ">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"></div>
        <h1 className="text-lg font-semibold">Refocus</h1>
      </div>
      <div>
        <button className="flex items-center px-6 py-3 space-x-5 font-semibold text-white bg-blue-600 rounded-md justify-evenly">
          <IoLogoChrome size={20}/>
          <h1 className="text-sm">Add to Chrome</h1>
        </button>
      </div>
    </nav>
  );
}
