import { IoPlay } from "react-icons/io5";

export default function Distraction() {
  return (
    <div className="px-4 my-10">
      <div className="w-full max-w-2xl  md:max-w-xl mx-auto bg-[#fef2f2] py-2 text-center rounded-lg">
        <h1 className="font-semibold text-orange-700">
          Before: Distracted & Overwhelmed
        </h1>
      </div>

      <div className="flex flex-col justify-center w-full max-w-6xl gap-5 p-5 mx-auto mt-5 bg-white border border-orange-400 rounded-lg md:flex-row">
        <div className="bg-[#111827] rounded-lg w-full md:w-52 h-52 text-white flex justify-center items-center mx-auto md:mx-0">
          <IoPlay size={28} />
        </div>

        <div className="flex-1">
          <h1 className="mb-2 font-semibold">Recommended videos</h1>
          {new Array(5).fill(0).map((_, id) => (
            <div
              key={id}
              className="my-4 p-4 border border-orange-500 rounded-lg w-full bg-[#fef2f2] flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-[#fecaca] rounded-lg"></div>
              <div className="space-y-2">
                <div className="bg-[#fca5a5] rounded-xl w-44 h-5"></div>
                <div className="bg-[#fecaca] rounded-xl w-28 h-5"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
