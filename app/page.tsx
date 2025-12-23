
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <div className="flex flex-row items-center justify-between pt-4 pb-4 bg-black text-white">
          <div className="ml-4">
            <div className="font-header text-xl">
              LOCALBOAT:<br/>
              :STUDIO
            </div>
          </div>
          <div>
            <Image
              src="/boat-desktop.png"
              alt="header boat illustration"
              width={59.8}
              height={33.2}
            />
          </div>
          <div className="mr-4">
            ◶ ✪ ◍
          </div>
        </div>
        {/* <div className="h-75 flex flex-row items-center justify-between"> */}
          <div className="ml-4 absolute">
            <div className="inline-block bg-amber-100 h-[176.8px] w-[227.73px]">
              <span className="text-blue-400 font-header">WE’RE</span><br/>
              <span>PERFECTING THE CRAFT OF</span><br/>
              <span className="text-4xl">BRANDING</span><br/>
              <span className="bg-black text-white">PRODUCTS AND </span><br/>
              <span className="bg-red-400 text-black">WEBSITES</span><br/>
              <span>FOR <span className="ml-26"></span><span className="text-blue-400 text-4xl font-header">YOU</span></span><br/>
            </div>

            {/* <div className="">
              Circle Text
            </div> */}
          </div>
          <div className="flex justify-center items-center h-150 w-full border border-black border-solid">
            <div className="inline-block bg-amber-100 h-[176.8px] w-[227.73px]">
              {/* <span className="text-blue-400 font-header">WE’RE</span><br/>
              <span>PERFECTING THE CRAFT OF</span><br/>
              <span className="text-4xl">BRANDING</span><br/>
              <span className="bg-black text-white">PRODUCTS AND </span><br/>
              <span className="bg-red-400 text-black">WEBSITES</span><br/>
              <span>FOR <span className="ml-26"></span><span className="text-blue-400 text-4xl font-header">YOU</span></span><br/> */}
            </div>
          </div>
          {/* <div className="rotate-90 origin-top-left">
            localboat:3000/your/offline/is/where/important/work/can/happen
          </div> */}
          {/* <div className="relative">
            <span className="absolute left-0 bottom-0 rotate-90 origin-bottom-left">
                SECTION TITLE
            </span>
          </div> */}
        {/* </div> */}
      </main>

    </div>
  );
}
