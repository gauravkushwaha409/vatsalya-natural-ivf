import Image from "next/image";
import React from "react";
import photo from "@/assests/about/ourstory1.png";
const MissionVision = () => {
  return (
    <div>
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-[#EBC0DB] to-primary-100">
        <div className="padding">
          <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-60 lg:items-center">
            {/* Image Grid */}
            <div className="grid grid-cols-2 w-[40%] md:gap-x-30 lg:gap-x-10 gap-y-2">
              {/* 1st  */}
              {/* Outer most border */}
              <div
                className="w-[191.18px] h-[191.18px] pt-[20px] pl-[20px] pr-[7.18px] pb-[20.18px] rounded-full rounded-br-none border-[0.8px] border-white"
                style={{
                  boxShadow: "0px -6px 130.2px 33px rgba(160, 56, 121, 0.20)",
                  backdropFilter: "blur(114.14590454101562px)",
                  background: "rgba(255, 255, 255, 0.56)",
                  opacity: " 0.85",
                }}
              >
                {/* Second  border */}
                <div className="w-[164px] h-[164px] pt-[19px] pl-[19px] pr-[9px] pb-[20px] rounded-full rounded-br-none border-[0.8px] border-white ">
                  {/* Inner most border */}
                  <div className=" w-[138px] h-[138px] rounded-full rounded-br-none border-[0.8px] ">
                    <Image
                      src={photo}
                      alt="Mother holding baby"
                      className="rounded-full rounded-br-none border-[0.8px] border-white w-full h-full object-cover
                      "
                    />
                  </div>
                </div>
              </div>

              {/* 2nd  */}
              {/* Outer most border */}
              <div
                className="w-[191.18px] h-[191.18px] pt-[20px] pr-[20px] pl-[7.18px] pb-[20.18px] rounded-full rounded-bl-none border-[0.8px] border-white
          
              "
                style={{
                  opacity: "0.85",
                  background: "rgba(255, 255, 255, 0.56)",
                  boxShadow:
                    "-187px 162px 130.2px 33px rgba(160, 56, 121, 0.20)",
                  backdropFilter: "blur(114.14590454101562px)",
                }}
              >
                {/* Second  border */}
                <div className="w-[164px] h-[164px] pt-[19px] pr-[19px] pl-[9px] pb-[20px] rounded-full rounded-bl-none border-[0.8px] border-white ">
                  {/* Inner most border */}
                  <div className=" w-[138px] h-[138px] rounded-full rounded-bl-none border-[0.8px] ">
                    <Image
                      src={photo}
                      alt="Mother holding baby"
                      className="rounded-full rounded-bl-none border-[0.8px] border-white w-full h-full object-cover
                      "
                    />
                  </div>
                </div>
              </div>

              {/* 3rd */}
              <div
                className="w-[191.18px] h-[191.18px] pl-[20px] pr-[20px] pt-[7.18px] pb-[20.18px] rounded-full rounded-tr-none border-[0.8px] border-white
           
              "
                style={{
                  opacity: " 0.85",
                  background: "rgba(255, 255, 255, 0.56)",
                  boxShadow: "58px -11px 130.2px 33px rgba(160, 56, 121, 0.20)",
                  backdropFilter: "blur(114.14590454101562px)",
                }}
              >
                {/* Second  border */}
                <div className="w-[164px] h-[164px] pl-[19px] pr-[19px] pt-[9px] pb-[20px] rounded-full rounded-tr-none border-[0.8px] border-white ">
                  {/* Inner most border */}
                  <div className=" w-[138px] h-[138px] rounded-full rounded-tr-none border-[0.8px] ">
                    <Image
                      src={photo}
                      alt="Mother holding baby"
                      className="rounded-full rounded-tr-none border-[0.8px] border-white w-full h-full object-cover
                      "
                    />
                  </div>
                </div>
              </div>

              {/* 4th */}
              <div
                className="w-[191.18px] h-[191.18px] pr-[20px] pl-[7.18px] pt-[7.18px] pb-[20.18px] rounded-full rounded-tl-none border-[0.8px] border-white
            
              "
                style={{
                  opacity: "0.85",
                  background:
                    "linear-gradient(333deg, rgba(255, 255, 255, 0.03) 0.09%, rgba(255, 255, 255, 0.56) 83.34%)",
                  boxShadow: "0px -74px 130.2px 33px rgba(160, 56, 121, 0.20)",
                  backdropFilter: " blur(114.14590454101562px)",
                }}
              >
                {/* Second  border */}
                <div className="w-[164px] h-[164px] pt-[9px] pl-[9px] pb-[19px] pr-[19px] rounded-full rounded-tl-none border-[0.8px] border-white ">
                  {/* Inner most border */}
                  <div className=" w-[138px] h-[138px] rounded-full rounded-tl-none border-[0.8px] ">
                    <Image
                      src={photo}
                      alt="Mother holding baby"
                      className="rounded-full rounded-tl-none border-[0.8px] border-white w-full h-full object-cover
                      "
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6 w-full">
              <div className="flex items-center w-full  gap-4 ">
                <h2 className="text-primary-500 uppercase tracking-widest text-base leading-[150%] font-bold">
                  OUR MISSION & VISION
                </h2>
                <div className="h-px bg-primary-500 flex-1 max-w-[148px]"></div>
              </div>
              <h3 className="typography-h4 font-semibold text-text-500 ">
                Transforming Lives Through Compassionate Fertility Care
              </h3>
              <p className="text-text-400 text-justify typography-paragraph-large font-medium leading-relaxed">
                Our mission is to provide personalized, ethical, and innovative
                fertility solutions that cater to each couples unique needs. We
                aim to be a center of excellence in fertility care, not just
                through advanced technology but by building trust, offering
                emotional support, and walking alongside our patients throughout
                their journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionVision;
