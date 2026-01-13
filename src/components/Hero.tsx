import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section
      className="bg-[#FFF] flex flex-col items-center w-full pt-20"
      id="home"
    >
      <div className="flex flex-col items-center justify-start gap-10 px-4 pb-10 w-full max-w-[768px] xl:max-w-[1440px] xl:flex-row-reverse xl:p-20 xl:gap-0">
        <Image
          height={600}
          width={600}
          alt="Home Hero Image"
          src={"/Home Image.jpg"}
          className=" shadow-xl rounded-2xl"
        />
        <div className="flex flex-col items-center gap-3 xl:gap-10 xl:items-center xl:w-1/2 xl:pr-32">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-wider max-w-[204px] xl:max-w-[350px] xl:text-left  xl:leading-[72px] xl:tracking-[1.12px] xl:text-[56px]">
            <div className="">Design. </div>
            <div className="">Build. </div>
            <div className="">Deliver. </div>
          </h1>
          <p className="text-[#6B7280] leading-5 max-w-[240px] tracking-[0.36px] text-sm font-medium text-center xl:max-w-[492px] xl:text-2xl xl:leading-8 xl:tracking-[0.48px] xl:px-10">
            Build your dream home, brick by brick, with DreamBrick Construction.
          </p>
          <div className="mt-6 xl:mt-5 flex items-center justify-center xl:px-[80px] xl:text-center leading-5">
            <div className="border-r-2 border-opacity-50 border-slate-[#F1F1F1] px-6 xl:px-9 text-center text-[#030712] flex flex-col items-center gap-2 xl:gap-3 last:border-r-0 xl:last:pr-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="xl:w-[48px] xl:h-[48px]"
              >
                <path
                  d="M216,116.69V216H152V152H104v64H40V116.69l82.34-82.35a8,8,0,0,1,11.32,0Z"
                  opacity="0.2"
                ></path>
                <path d="M240,208H224V136l2.34,2.34A8,8,0,0,0,237.66,127L139.31,28.68a16,16,0,0,0-22.62,0L18.34,127a8,8,0,0,0,11.32,11.31L32,136v72H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM48,120l80-80,80,80v88H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48Zm96,88H112V160h32Z"></path>
              </svg>
              <p className="text-base font-medium leading-4 xl:text-2xl xl:leading-6">
                30+
              </p>
              <p className="text-[#6B7280] text-xs leading-4 tracking-[0.24px] xl:text-lg xl:leading-6 xl:tracking-[0.36px]">
                Homes Delivered
              </p>
            </div>
            <div className="border-r-2 border-opacity-50 border-slate-[#F1F1F1] px-6 xl:px-9 text-center text-[#030712] flex flex-col items-center gap-2 xl:gap-3 last:border-r-0 xl:last:pr-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="xl:w-[48px] xl:h-[48px]"
              >
                <path
                  d="M128,104H32V56h96Zm48,0v48H128v48h96V104Z"
                  opacity="0.2"
                ></path>
                <path d="M224,48H32a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V56A8,8,0,0,0,224,48ZM88,144V112h80v32Zm-48,0V112H72v32Zm144-32h32v32H184Zm32-16H136V64h80ZM120,64V96H40V64ZM40,160h80v32H40Zm96,32V160h80v32Z"></path>
              </svg>
              <p className="text-base font-medium leading-4 xl:text-2xl xl:leading-6">
                10+
              </p>
              <p
                className="text-[#6B7280] text-xs leading-4 tracking-[0.24px] xl:text-lg xl:leading-6 xl:tracking-[0.36px]
            w-[82px] xl:w-[120px]"
              >
                Years of Excellence
              </p>
            </div>
            <div className="border-r-2 border-opacity-50 border-slate-[#F1F1F1] px-6 xl:px-9 text-center text-[#030712] flex flex-col items-center gap-2 xl:gap-3 last:border-r-0 xl:last:pr-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="xl:w-[48px] xl:h-[48px]"
              >
                <path
                  d="M216,56v56c0,96-88,120-88,120S40,208,40,112V56a8,8,0,0,1,8-8H208A8,8,0,0,1,216,56Z"
                  opacity="0.2"
                ></path>
                <path d="M80.57,117A8,8,0,0,1,91,112.57l29,11.61V96a8,8,0,0,1,16,0v28.18l29-11.61A8,8,0,1,1,171,127.43l-30.31,12.12L158.4,163.2a8,8,0,1,1-12.8,9.6L128,149.33,110.4,172.8a8,8,0,1,1-12.8-9.6l17.74-23.65L85,127.43A8,8,0,0,1,80.57,117ZM224,56v56c0,52.72-25.52,84.67-46.93,102.19-23.06,18.86-46,25.27-47,25.53a8,8,0,0,1-4.2,0c-1-.26-23.91-6.67-47-25.53C57.52,196.67,32,164.72,32,112V56A16,16,0,0,1,48,40H208A16,16,0,0,1,224,56Zm-16,0L48,56l0,56c0,37.3,13.82,67.51,41.07,89.81A128.25,128.25,0,0,0,128,223.62a129.3,129.3,0,0,0,39.41-22.2C194.34,179.16,208,149.07,208,112Z"></path>
              </svg>
              <p className="text-base font-medium leading-4 xl:text-2xl xl:leading-6">
                99%
              </p>
              <p
                className="text-[#6B7280] text-xs leading-4 tracking-[0.24px] xl:text-lg xl:leading-6 xl:tracking-[0.36px]
            "
              >
                Client Satisfaction
              </p>
            </div>

          </div>
          <a
            className="flex items-center justify-center"
            target="_self"
            href="#contact"
          >
            <button className="inline-flex items-center justify-center mt-2 gap-2 whitespace-nowrap text-sm disabled:pointer-events-none disabled:opacity-50 text-[#FFFFFF] bg-[#f08437] text-primary-foreground shadow hover:bg-[#EA580C]/90 hover:text-[#ffffff] rounded-lg p-7 h-11 w-full xl:w-[340px] xl:h-[44px] xl:text-xl font-medium">
              <h3 className="leading-5 text-base xl:text-xl">
                Consult Our Engineers for Free
              </h3>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
