export default function Choose({ data }) {
  return (
    <>
      <div className=" flex flex-col justify-center items-center p-5 rounded-lg border-[1px] border-slate-200 max-w-sm cursor-pointer hover:bg-slate-100 ease-in-out duration-500">
        <div className="bg-[#dbeafe] p-3 rounded-full">{data.icon}</div>
        <div className="my-4 space-y-3">
          <h1 className="text-lg font-semibold ">{data.tittle}</h1>
          <p className="max-w-xs text-sm text-gray-500">{data.para}</p>
        </div>
      </div>
    </>
  );
}
