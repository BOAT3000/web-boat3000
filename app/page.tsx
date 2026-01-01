import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,

} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ReactNode } from "react";
// import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from "@/components/ui/EmblaCarousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import "./embla.css";

export default function Home() {
  const OPTIONS: EmblaOptionsType = { loop: true }

  const cards: ReactNode[] = [
    <Card key="card-1" className="bg-[#2f2f31] border-none shadow-none">
      <CardContent className="w-80">
        <video
          src="./boxtype-demo-54.mp4"
          autoPlay
          loop
          muted
          className="rounded-lg"
        />
        <div className="text-xl text-white">
          BOXTYPE
        </div>

      </CardContent>
    </Card>,

    <Card key="card-2" className="bg-[#2f2f31] border-none shadow-none">
      <CardContent>
        <div className="flex items-center justify-center">
          <Image
            className="drop-shadow-md"
            src="/bracelet-mobile.png"
            alt="text illustration"
            width={100}
            height={100}
          />
        </div>


        <div className="flex flex-row gap-2 items-center justify-center mt-4 text-xl text-white">
          <Image
            src="/BraceletIcon-v1.0.2-4x.png"
            alt="text illustration"
            width={50}
            height={50}
          /><span>BRACELET <p className="text-xs text-white">tool for long-term curation & study</p></span>
        </div>
      </CardContent>
    </Card>,

    <Card key="card-3">
      <CardHeader>
        <CardTitle>Third</CardTitle>
        <CardDescription>Description</CardDescription>
      </CardHeader>
      <CardContent>Content</CardContent>
    </Card>,
    <Card key="card-4">
      <CardHeader>
        <CardTitle>Fourth</CardTitle>
        <CardDescription>Description</CardDescription>
      </CardHeader>
      <CardContent>Content</CardContent>
    </Card>,

    <Card key="card-5">
      <CardHeader>
        <CardTitle>Fifth</CardTitle>
        <CardDescription>Description</CardDescription>
      </CardHeader>
      <CardContent>Content</CardContent>
    </Card>,

    <Card key="card-6">
      <CardHeader>
        <CardTitle>Sixth</CardTitle>
        <CardDescription>Description</CardDescription>
      </CardHeader>
      <CardContent>Content</CardContent>
    </Card>,
  ]
  return (
    <div>
      <main>
        <div className="fixed w-full top-0 left-0 z-50">
          <div className="relative flex flex-row justify-center items-center">
            <div className="absolute top-7 invisible lg:visible">
              <Image
                src="/boat-desktop.png"
                alt="header boat illustration"
                width={59.8}
                height={33.2}
              />
            </div>
          </div>
          <div className="relative flex flex-row items-center justify-between pt-4 pb-4 bg-none text-white">
            <div className="ml-4">
              <div className="font-header text-xl">
                <span className="text-white font-bold backdrop-blur-lg">LOCALBOAT<span className="text-blue-400">:</span></span><br />
                <span className="text-black backdrop-blur-lg"><span className="text-blue-400">:</span>STUDIO</span>
              </div>
            </div>
            <div className="mr-4">
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
                      <textPath href="#circlePath" className="font-serif backdrop-blur-sm">
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
        </div>
        <Image
          className="fixed right-4 top-24 -z-5 opacity-10 rounded-xl"
          src="/kelly-sikkema-PtI07qwhQBI-unsplash.jpg"
          alt="text illustration"
          width={700}
          height={1000}
        />
        <div className="my-24"></div>
        <Card className="mb-1 md:w-1/2 lg:mb-1 lg:ml-4 lg:mr-4 lg:w-1/2 rounded-b-none  bg-gray-300 shadow-none">
          <CardHeader>
            <CardDescription className="text-red-500"><Input className="border-none bg-gray-100 cursor-not-allowed font-mono" placeholder="https://localhost:3000/*" /></CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row">
              <div className=" relative inline-block ">
                <span className="text-4xl font-serif-gmd font-bold ">CRAFT</span><br />
                <span className=" inline-block text-4xl font-serif-gmd font-bold ">FOCUSED</span>
                <Image
                  className="absolute -right-22 top-5"
                  src="/local-first.png"
                  alt="text illustration"
                  width={100}
                  height={70}
                /><br />
                <span className="text-4xl font-serif-gmd font-bold ">PRODUCT</span><br />
                <span className="text-4xl font-serif-gmd font-bold ">STUDIO</span><br />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="font-mono text-muted-foreground text-sm"><span className="text-blue-400">**</span>local-first & online products too.<br />* your offline is where important work can happen.</div>
          </CardFooter>
        </Card>
        <br />
        <Card className="rounded-none h-fit border-none bg-[#2f2f31] mb-4 lg:mx-4 lg:mt-1">
          <CardHeader className="justify-center">
            <CardDescription>
              <a className="flex flex-row items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30" className="inline-block">
                  <defs>
                    <rect width="30" height="30" x="0" y="0"></rect>
                  </defs>
                  <g>
                    <g transform="matrix(0.24650000035762787,0,0,0.24650000035762787,80.07599639892578,25.10649871826172)" opacity="0.46049999999998514">
                      <g opacity="1" transform="matrix(1,0,0,1,-264,-40.75)">
                        <path fill="rgb(0,190,63)" fillOpacity="1" d=" M0,-33.5 C18.488649368286133,-33.5 33.5,-18.488649368286133 33.5,0 C33.5,18.488649368286133 18.488649368286133,33.5 0,33.5 C-18.488649368286133,33.5 -33.5,18.488649368286133 -33.5,0 C-33.5,-18.488649368286133 -18.488649368286133,-33.5 0,-33.5z">
                        </path>
                      </g>
                    </g>
                    <g transform="matrix(0.20000000298023224,0,0,0.20000000298023224,67.80000305175781,23.200000762939453)" opacity="1">
                      <g opacity="1" transform="matrix(1,0,0,1,-264,-40.75)">
                        <path fill="rgb(0,190,63)" fillOpacity="1" d=" M0,-33.5 C18.488649368286133,-33.5 33.5,-18.488649368286133 33.5,0 C33.5,18.488649368286133 18.488649368286133,33.5 0,33.5 C-18.488649368286133,33.5 -33.5,18.488649368286133 -33.5,0 C-33.5,-18.488649368286133 -18.488649368286133,-33.5 0,-33.5z">
                        </path>
                      </g>
                    </g>
                  </g>
                </svg>
                <span>BOOKINGS AVAILABLE FROM 5TH JAN. &apos;26</span>
              </a>
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-6">
            <div className="flex flex-col justify-center md:justify-center lg:flex-row gap-8">
              <div className="flex flex-col items-start md:items-center lg:items-start">
                <span className="text-gray-300">SOME OF OUR PRODUCTS:</span>
                <div className="my-6"></div>
                {/* <DualStackCarousel/> */}
                {/* <InfiniteScrollCarousel/> */}
                <EmblaCarousel slides={cards} options={OPTIONS} />
              </div>
              {/* <div className="flex flex-col justify-center md:justify-center lg:flex-row lg:justify-between gap-4"> */}
              <div className="text-gray-300 pr-0 max-w-119 mx-auto lg:items-center">
                <span>Hello, This is <span className="font-header">Localboat</span>;<br /><br />
                  a dev and design studio that designs, brands, and builds for B2B, Web3, & AI startups.</span><br />
                {/* <span></span><br /> */}
                <br />
                We build products we&apos;d love to pay for— we also build for clients.<br /><br />
                We&apos;ve worked with clients that have been featured by <span className="inline-flex items-baseline gap-1"><span className="w-3 h-3 inline-flex"><svg viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                  <g>
                    <rect fill="#FB651E" x="0" y="0" width="256" height="256"></rect>
                    <path d="M119.373653,144.745813 L75.43296,62.4315733 L95.5144533,62.4315733 L121.36192,114.52416 C121.759575,115.452022 122.2235,116.413008 122.753707,117.407147 C123.283914,118.401285 123.747838,119.428546 124.145493,120.48896 C124.410597,120.886615 124.609422,121.251127 124.741973,121.582507 C124.874525,121.913886 125.007075,122.212123 125.139627,122.477227 C125.802386,123.802744 126.39886,125.095105 126.929067,126.354347 C127.459274,127.613589 127.923198,128.773399 128.320853,129.833813 C129.381268,127.580433 130.541078,125.1614 131.80032,122.57664 C133.059562,119.99188 134.351922,117.307747 135.67744,114.52416 L161.92256,62.4315733 L180.612267,62.4315733 L136.27392,145.739947 L136.27392,198.826667 L119.373653,198.826667 L119.373653,144.745813 Z" fill="#FFFFFF"></path>
                  </g>
                </svg></span>Combinator</span>, <span className="inline-flex items-baseline gap-1">
                <Image
                  className=""
                  src="/techcrunch.jpg"
                  alt="text illustration"
                  width={12}
                  height={12}
                />TechCrunch</span>, Forbes, BBC, and many more.<br /><br />
                We work in weekly sprints.

                It&apos;s deep, collaborative work -
                the kind that ships beautiful experiences really quickly.<br /><br />

                $5k per sprint  ·  Most projects need 1-2 sprints
                <br />
                <br />
                We&apos;d love to hear about your project.<br /><br />
                <p className="text-red-400">***</p>
              </div>
              <div className="text-gray-500 max-w-98 mx-auto">
                <span className="text-gray-300">Our Process—</span><br />
                <span className="text-red-400">Step 1</span><br />
                You book a free 30-minute call with us to understand your needs. <a href="" className="underline decoration-1">You can do that here.</a> <a href="" className="underline decoration-1">Or just text us here.</a>
                <br />
                <br />
                We get to understand the details of your business and the specific problems you want solved.
                <br />
                <br />
                <span className="text-red-400">Step 2</span><br />
                We come to an agreement on the timeline and scope of the project.<br /><br />

                We create a project-file in your name. Of which you have read-access to.<br /><br />

                <span className="text-red-400">Step 3</span><br />
                We carry you along daily as we work through your backlog. We’re your partner at each step of the way.
                <br />
                <br />
                <a href="" className="underline decoration-1"><span className="text-blue-400">→</span> Book a call to discuss your project today.</a>
              </div>
              {/* </div> */}
            </div>
          </CardContent>
          <CardFooter>
            <div className="m-4"></div>
          </CardFooter>
        </Card>
        <div className="my-10"></div>
        <Card className="rounded-none h-fit border-none bg-gray-200 mb-4 lg:mx-4 lg:mt-1">
          <CardHeader className="justify-center">
            <CardDescription>
              <div className="flex flex-row gap-1">
                <svg xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(0) matrix(1 0 0 1 0 0)"
                  width="20" height="20" viewBox="0 0 256 256">
                  <path fill="rgb(234, 57, 57)"
                    d="M219.71 117.38a12 12 0 0 0-7.25-8.52l-51.18-20.47l10.59-70.61a12 12 0 0 0-20.64-10l-112 120a12 12 0 0 0 4.31 19.33l51.18 20.47l-10.59 70.64a12 12 0 0 0 20.64 10l112-120a12 12 0 0 0 2.94-10.84M113.6 203.55l6.27-41.77a12 12 0 0 0-7.41-12.92l-43.72-17.49l73.66-78.92l-6.27 41.77a12 12 0 0 0 7.41 12.92l43.72 17.49Z">
                  </path>
                </svg>
                <p>SOME OF OUR DESIGNS —
                  <a className="text-black">
                    <svg xmlns="http://www.w3.org/2000/svg"
                      className="inline"
                      width="24" height="24"
                      viewBox="0 0 24 24"
                      fill="none" stroke="rgb(0, 0, 0)"
                      strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                    </svg>DECK
                    <svg
                      className="inline"
                      xmlns="http://www.w3.org/2000/svg"
                      transform="rotate(0) matrix(1 0 0 1 0 0)"
                      width="24" height="24" viewBox="0 0 256 256">
                      <path fill="rgb(0, 0, 0)" d="M200 64v104a8 8 0 0 1-16 0V83.31L69.66 197.66a8 8 0 0 1-11.32-11.32L172.69 72H88a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8">
                      </path>
                    </svg></a></p></div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="flex items-center justify-center">
                  <Image
                    className="drop-shadow-md"
                    src="/bracelet-mobile.png"
                    alt="text illustration"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    className="rounded-sm shadow-md"
                    src="/bracelet-desktop.png"
                    alt="text illustration"
                    width={500}
                    height={100}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    className="drop-shadow-md"
                    src="/bracelet-mobile-2.png"
                    alt="text illustration"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    className="rounded-sm shadow-md"
                    src="/mockup-1.png"
                    alt="text illustration"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    className="rounded-sm shadow-md"
                    src="/mockup-2.png"
                    alt="text illustration"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    className="rounded-sm shadow-md"
                    src="/mockup-3.png"
                    alt="text illustration"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>

          </CardContent>
          <CardFooter>
            <div className="m-4"></div>
          </CardFooter>
        </Card>
        <div className="my-10"></div>
        <div className="flex flex-col items-center bg-[#2f2f31] w-full">
          <div className="mt-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30" className="inline-block">
              <defs>
                <rect width="30" height="30" x="0" y="0"></rect>
              </defs>
              <g>
                <g transform="matrix(0.24650000035762787,0,0,0.24650000035762787,80.07599639892578,25.10649871826172)" opacity="0.46049999999998514">
                  <g opacity="1" transform="matrix(1,0,0,1,-264,-40.75)">
                    <path fill="rgb(0,80,190)" fillOpacity="1" d=" M0,-33.5 C18.488649368286133,-33.5 33.5,-18.488649368286133 33.5,0 C33.5,18.488649368286133 18.488649368286133,33.5 0,33.5 C-18.488649368286133,33.5 -33.5,18.488649368286133 -33.5,0 C-33.5,-18.488649368286133 -18.488649368286133,-33.5 0,-33.5z">
                    </path>
                  </g>
                </g>
                <g transform="matrix(0.20000000298023224,0,0,0.20000000298023224,67.80000305175781,23.200000762939453)" opacity="1">
                  <g opacity="1" transform="matrix(1,0,0,1,-264,-40.75)">
                    <path fill="rgb(0,80,190)" fillOpacity="1" d=" M0,-33.5 C18.488649368286133,-33.5 33.5,-18.488649368286133 33.5,0 C33.5,18.488649368286133 18.488649368286133,33.5 0,33.5 C-18.488649368286133,33.5 -33.5,18.488649368286133 -33.5,0 C-33.5,-18.488649368286133 -18.488649368286133,-33.5 0,-33.5z">
                    </path>
                  </g>
                </g>
              </g>
            </svg>
            <span className="text-gray-500">FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <div className="flex">
            <Accordion type="single" collapsible className="w-66 mx-4 lg:w-md text-white my-10">
              <AccordionItem value="item-1" className="border-none">
                <AccordionTrigger>Can you handle branding, product, and website work?</AccordionTrigger>
                <AccordionContent>
                  Absolutely. Whether you need a new brand identity, a Framer/Webflow site, or a full product UX/UI overhaul, we’ve done it all — and fast. You can mix and match based on what matters most right now.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-none">
                <AccordionTrigger>What is the deliverable during a project?</AccordionTrigger>
                <AccordionContent>
                  Developer-ready Figma files, interactive prototypes, and clear experience documentation.
                  We focus on creating designs that are easy to implement, ensuring a smooth handoff to your development team.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-none">
                <AccordionTrigger>How do you communicate during a project?</AccordionTrigger>
                <AccordionContent>
                  Linear, Slack, Figma, and Notion are our go-to tools for keeping everyone in the loop.
                  We set up a dedicated Slack channel for real-time updates and quick questions. For task management and progress tracking, we use Linear to ensure everything stays organized. Figma is our primary tool for design collaboration, allowing you to see and comment on designs as they evolve. Finally, we document key decisions and project details in Notion, so you always have a reference point.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-none">
                <AccordionTrigger>What is involved during a project?</AccordionTrigger>
                <AccordionContent>
                  Daily collaboration. You see progress as it happens, no big reveal at the end.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-none">
                <AccordionTrigger>How long does it take?</AccordionTrigger>
                <AccordionContent>
                  5 days. Monday to Friday. We work in focused sprints to deliver high-quality results quickly.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
      <footer className="flex pt-6 pb-6 border-t border-zinc-500 border-solid w-full text-white bg-[#2f2f31]">
        <div className="flex flex-col gap-4 items-center w-full">
          <div className="flex justify-center items-center h-[227.73px] w-[227.73px] lg:h-[227.73px] lg:w-[227.73px]">
            <svg width="300" height="300" viewBox="0 0 300 300">
              <defs>
                <path
                  id="circlePath"
                  d="M150,150 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0"
                />
              </defs>

              {/* ROTATING GROUP */}
              <g className="spin-origin">
                <text className="fill-white" fontSize="28" letterSpacing="4">
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
          <div>
            <a href="#top">back up &uarr;</a>
          </div>
          <div className="flex flex-row text-sm ">
            <a href="https://github.com/dco2" className="underline">
              Github
            </a>
            &nbsp; &#124; &nbsp;
            <a href="mailto:dco2.caleb@gmail.com" className="underline">
              Email
            </a>
            &nbsp; &#124; &nbsp;
            <a href="https://twitter.com/vocaldeathstar" className="underline">
              Twitter
            </a>
          </div>
          <div className="flex flex-col items-center text-[0.8rem]">
            <div>
              &#8482; 2024
            </div>
            <div>
              designed by Caleb &#8212;
            </div>
            <div>
              in association with <a href="https://wasegun.com/" className="underline">wasegun! studio</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
