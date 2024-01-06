import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
export default function CalculatorInterface() {
  return (
    <div className="shadow-2xl max-md:space-y-5 bg-white shadow-neutral-400 w-fit p-14 max-md:px-8 rounded-xl rounded-br-[200px] max-md:rounded-br-[150px]">
      <div className="flex max-md:justify-center justify-between gap-5 w-[500px] max-md:w-[80vw] text-[#716F6F] font-semibold text-xs max-md:text-sm">
        <div className="space-y-1">
          <div>D A Y</div>
          <div>
            <input
              className="text-black border-2 border-[#DBDBDB] p-4  rounded-md w-full text-[32px] max-md:text-3xl"
              type="text"
              placeholder="DD"
            />
          </div>
        </div>
        <div className="space-y-1">
          <div>M O N T H</div>
          <div>
            <input
              className="text-black border-2 border-[#DBDBDB] p-4 rounded-md w-full text-[32px]  max-md:text-3xl"
              type="text"
              placeholder="MM"
            />
          </div>
        </div>
        <div className="space-y-1">
          <div>Y E A R</div>
          <div>
            <input
              className=" text-black border-2 border-[#DBDBDB] p-4 rounded-md w-full text-[32px]  max-md:text-3xl"
              type="text"
              placeholder="YYYY"
            />
          </div>
        </div>
      </div>
      <div className="flex relative items-center justify-end  max-md:justify-center w-[700px] h-32 max-md:h-16 max-md:w-[80vw]">
        <hr className="border w-full" />
        <Image
          className="bg-[#854DFF] rounded-full p-5 absolute max-md:scale-[0.8]"
          src="/icon-arrow.svg"
          width={100}
          height={100}
          alt="Not Loaded Image"
        />
      </div>
      <div className="text-8xl max-md:text-6xl italic space-y-4 max-md:space-y-3" id="bottom">
        <div className="space-x-5 max-md:space-x-3">
          <span className="text-[#854DFF] align-top">- -</span>
          <span>years</span>
        </div>
        <div className="space-x-5 max-md:space-x-3">
          <span className="text-[#854DFF] align-top">- -</span>
          <span>months</span>
        </div>
        <div className="space-x-5 max-md:space-x-3">
          <span className="text-[#854DFF] align-top  ">- -</span>
          <span>days</span>
        </div>
      </div>
    </div>
  );
}
