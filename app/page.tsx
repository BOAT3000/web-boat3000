
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <div className="flex flex-row justify-center items-center">
          <div className="absolute top-7 invisible lg:visible">
            <Image
              src="/boat-desktop.png"
              alt="header boat illustration"
              width={59.8}
              height={33.2}
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between pt-4 pb-4 bg-black text-white">
          <div className="ml-4">
            <div className="font-header text-xl">
              LOCALBOAT:<br/>
              <span className="text-gray-600">:STUDIO</span>
            </div>
          </div>
          <div className="mr-4">
            {/* ◶ ✪ ◍ */}
            <div className="flex justify-center items-center h-[60] w-[60] lg:h-[60] lg:w-[60]">
              <svg width="300" height="300" viewBox="0 0 300 300">
                  <defs>
                    <path
                      id="circlePath"
                      d="M150,150 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0"
                    />
                  </defs>

                  {/* ROTATING GROUP */}
                  <g className="spin-origin">
                    <text fill="#fff" fontSize="32" letterSpacing="4">
                      <textPath href="#circlePath" className="font-serif">
                        BOOK A CALL • BOOK A CALL • BOOK A CALL •  ☆ ★ ⋆｡°✩
                      </textPath>
                    </text>
                  </g>
                    <svg
                        x="130" y="125"
                        xmlns="http://www.w3.org/2000/svg"
                        transform="rotate(0) matrix(1 0 0 1 0 0)"
                        width="40" height="40"
                        viewBox="0 0 256 256">
                          <path fill="red" d="M231.88 175.08A56.26 56.26 0 0 1 176 224C96.6 224 32 159.4 32 80a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15v.12A16 16 0 0 1 117.39 96c-.18.27-.37.52-.57.77L96 121.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8 8 0 0 1 .75-.56a16 16 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62"
                      >
                        </path>
                    </svg>
              </svg>
            </div>
          </div>
        </div>
        {/* <div className="h-75 flex flex-row items-center justify-between"> */}
        {/* <div className="ml-4 absolute"> */}
        <div className="flex flex-row justify-between">
          <div className="ml-4 inline-block h-[176.8px] w-[227.73px]">
            <div className="p-2"></div>
            <span className="text-blue-400 font-header">WE&apos;RE</span><br/>
            {/* <div className="p-2"></div> */}
            <span>PERFECTING THE CRAFT OF</span><br/>
            {/* <div className="p-2"></div> */}
            <span className="text-4xl">BRANDING</span><br/>
            {/* <div className="p-2"></div> */}
            <span className="bg-black text-white">PRODUCTS AND </span><br/>
            {/* <div className="p-2"></div> */}
            <span className="bg-red-400 text-black">WEBSITES</span><br/>
            <span>FOR <span className="text-blue-400 text-4xl font-header">YOU</span></span><br/>
          </div>

          {/* <div className="">
            Circle Text
          </div> */}
          {/* <div className="flex">
            <Image
              src="/squid-one-cropped.png"
              alt="fed-up squidward"
              width={221}
              height={171}
            />
          </div> */}
        {/* </div> */}
        </div>
        <div className="border-b-2 border-black border-dashed mt-4"></div>
                <div className="relative">
          <div className="absolute w-100 bottom-0 left-1/2">
            <Image
              src="/squid-one-cropped-drop-shadow.png"
              alt="fed-up squidward"
              width={221}
              height={171}
            />
            </div>
          </div>
        <div className="flex justify-center items-center bg-black lg:bg-white h-[300px] w-full border-b-2 border-black border-dashed">

          <div className="lg:visible flex justify-center items-center h-[227.73px] w-[227.73px] lg:h-[227.73px] lg:w-[227.73px]">
            {/* <span className="text-blue-400 font-header">WE’RE</span><br/>
            <span>PERFECTING THE CRAFT OF</span><br/>
            <span className="text-4xl">BRANDING</span><br/>
            <span className="bg-black text-white">PRODUCTS AND </span><br/>
            <span className="bg-red-400 text-black">WEBSITES</span><br/>
            <span>FOR <span className="ml-26"></span><span className="text-blue-400 text-4xl font-header">YOU</span></span><br/> */}
            <svg width="300" height="300" viewBox="0 0 300 300">
                <defs>
                  <path
                    id="circlePath"
                    d="M150,150 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0"
                  />
                </defs>

                {/* ROTATING GROUP */}
                <g className="spin-origin">
                  <text className="fill-white lg:fill-black" fontSize="28" letterSpacing="4">
                    <textPath href="#circlePath" className="font-serif">
                      BOOK A CALL • BOOK A CALL • BOOK A CALL • BOOK A CALL • 
                    </textPath>
                  </text>
                </g>

                {/* STATIC CENTER */}
                {/* <circle
                  cx="150" cy="150"
                  r="10" fill="#8b0000" /> */}
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(0) matrix(1 0 0 1 0 0)"
                  width="40" height="40"
                  viewBox="0 0 40 40">
                    <path fill="currentColor"
                    d="M231.88 175.08A56.26 56.26 0 0 1 176 224C96.6 224 32 159.4 32 80a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15v.12A16 16 0 0 1 117.39 96c-.18.27-.37.52-.57.77L96 121.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8 8 0 0 1 .75-.56a16 16 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62"
                  >
                    </path>
                    </svg> */}

                    <svg
                      // className="left-1/2"
                      x="130" y="125"
                      xmlns="http://www.w3.org/2000/svg"
                      transform="rotate(0) matrix(1 0 0 1 0 0)"
                      width="40" height="40"
                      viewBox="0 0 256 256">
                        <path fill="red" d="M231.88 175.08A56.26 56.26 0 0 1 176 224C96.6 224 32 159.4 32 80a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15v.12A16 16 0 0 1 117.39 96c-.18.27-.37.52-.57.77L96 121.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8 8 0 0 1 .75-.56a16 16 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62"
                    >
                      </path>
                      </svg>
              </svg>
          </div>
          <div className="hidden lg:flex justify-center items-center h-[227.73px] w-[227.73px] lg:h-[227.73px] lg:w-[227.73px]">
            <svg width="300" height="300" viewBox="0 0 300 300">
                <defs>
                  <path
                    id="circlePath"
                    d="M150,150 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0"
                  />
                </defs>

                {/* ROTATING GROUP */}
                <g className="spin-origin">
                  <text className="fill-white lg:fill-black" fontSize="28" letterSpacing="4">
                    <textPath href="#circlePath" className="font-serif">
                      BOOK A CALL • BOOK A CALL • BOOK A CALL • BOOK A CALL • 
                    </textPath>
                  </text>
                </g>

                <svg
                  x="130" y="125"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(0) matrix(1 0 0 1 0 0)"
                  width="40" height="40"
                  viewBox="0 0 256 256">
                    <path fill="red" d="M231.88 175.08A56.26 56.26 0 0 1 176 224C96.6 224 32 159.4 32 80a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15v.12A16 16 0 0 1 117.39 96c-.18.27-.37.52-.57.77L96 121.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8 8 0 0 1 .75-.56a16 16 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62"
                >
                  </path>
                  </svg>
              </svg>
          </div>
          <div className="hidden lg:flex justify-center items-center h-[227.73px] w-[227.73px] lg:h-[227.73px] lg:w-[227.73px]">
            <svg width="300" height="300" viewBox="0 0 300 300">
                <defs>
                  <path
                    id="circlePath"
                    d="M150,150 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0"
                  />
                </defs>

                {/* ROTATING GROUP */}
                <g className="spin-origin">
                  <text className="fill-white lg:fill-black" fontSize="28" letterSpacing="4">
                    <textPath href="#circlePath" className="font-serif">
                      BOOK A CALL • BOOK A CALL • BOOK A CALL • BOOK A CALL • 
                    </textPath>
                  </text>
                </g>

                <svg
                  x="130" y="125"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(0) matrix(1 0 0 1 0 0)"
                  width="40" height="40"
                  viewBox="0 0 256 256">
                    <path fill="red" d="M231.88 175.08A56.26 56.26 0 0 1 176 224C96.6 224 32 159.4 32 80a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15v.12A16 16 0 0 1 117.39 96c-.18.27-.37.52-.57.77L96 121.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8 8 0 0 1 .75-.56a16 16 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62"
                >
                  </path>
                  </svg>
              </svg>
          </div>
          {/* <hr className="text-black mt-4"/> */}
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
