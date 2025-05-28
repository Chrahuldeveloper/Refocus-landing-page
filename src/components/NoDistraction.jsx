import { IoPlay } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

export default function NoDistraction() {
  return (
    <div className="px-4 my-10">
      <div className="w-full max-w-2xl  md:max-w-xl mx-auto bg-[#dcfce7] py-2 text-center rounded-lg">
        <h1 className="font-semibold text-green-700">
          After: Focused & Productive
        </h1>
      </div>

      <div className="flex flex-col justify-center w-full max-w-6xl gap-5 p-5 mx-auto mt-5 bg-white border border-green-400 rounded-lg md:flex-row">
        <div className="bg-[#111827] rounded-lg w-full md:w-72 h-52 text-white flex justify-center items-center mx-auto md:mx-0">
          <IoPlay size={28} />
        </div>

        <div className="w-full max-w-sm mx-auto md:mx-0">
          <div className="bg-[#f0fdf4] p-5 rounded-lg border border-green-400 text-center space-y-3">
            <div className="flex items-center justify-center">
              <RxCross2 size={25} color="green" />
            </div>
            <h1 className="font-semibold text-green-600">
              Recommendations Hidden
            </h1>
            <p className="text-sm text-green-600">Stay focused on your video</p>
          </div>
        </div>
      </div>
    </div>
  );
}
