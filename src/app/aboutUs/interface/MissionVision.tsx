import Image from "next/image";
import React from "react";

const MissionVision = () => {
  return (
    <div>
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-[#EBC0DB] to-[#FFD2CE]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between gap-40 items-center">
            {/* Image Grid */}
            <div className="grid grid-cols-2 w-[40%] gap-y-4 md:gap-x-12">
              <div className="relative w-38 h-38 ">
                {/* Outer most border */}
                <div className="absolute inset-0 rounded-[50%] rounded-br-none border-[0.8px] border-white bg-gradient-to-br from-white/5 via-white/50 to-transparent"></div>

                {/* Middle border */}
                <div className="absolute inset-2 rounded-[50%] rounded-br-none border-[0.8px] border-white m-4"></div>
                {/* Inner border */}
                <div className="absolute inset-4 rounded-[50%] rounded-br-none border-[0.8px] border-white m-6">
                  <Image
                    src="/home/svg/infertality.svg"
                    layout="fill"
                    objectFit="cover"
                    alt="Mother holding baby"
                  />
                </div>
              </div>

              <div className="relative w-38 h-38 ">
                {/* Outer most border */}
                <div className="absolute bg-gradient-to-br from-white/5 via-white/50 to-transparent inset-0 rounded-[50%] rounded-bl-none border-[0.8px] border-white "></div>

                {/* Middle border */}
                <div className="absolute inset-2 rounded-[50%] rounded-bl-none border-[0.8px] border-white m-4"></div>
                {/* Inner border */}
                <div className="absolute inset-4 rounded-[50%] rounded-bl-none border-[0.8px] border-white m-6">
                  <Image
                    src="/home/svg/infertality.svg"
                    layout="fill"
                    objectFit="cover"
                    alt="Mother holding baby"
                  />
                </div>
              </div>

              <div className="relative w-38 h-38 ">
                {/* Outer most border */}
                <div className="absolute bg-gradient-to-br from-white/5 via-white/50 to-transparent inset-0 rounded-[50%] rounded-tr-none border-[0.8px] border-white "></div>

                {/* Middle border */}
                <div className="absolute inset-2 rounded-[50%] rounded-tr-none border-[0.8px] border-white m-4"></div>
                {/* Inner border */}
                <div className="absolute inset-4 rounded-[50%] rounded-tr-none border-[0.8px] border-white m-6">
                  <Image
                    src="/home/svg/infertality.svg"
                    layout="fill"
                    objectFit="cover"
                    alt="Mother holding baby"
                  />
                </div>
              </div>

              <div className="relative w-38 h-38 ">
                {/* Outer most border */}
                <div className="absolute bg-gradient-to-br from-white/5 via-white/50 to-transparent inset-0 rounded-[50%] rounded-tl-none border-[0.8px] border-white "></div>

                {/* Middle border */}
                <div className="absolute inset-2 rounded-[50%] rounded-tl-none border-[0.8px] border-white m-4"></div>
                {/* Inner border */}
                <div className="absolute inset-4 rounded-[50%] rounded-tl-none border-[0.8px] border-white m-6">
                  <Image
                    src="/home/svg/infertality.svg"
                    layout="fill"
                    objectFit="cover"
                    alt="Mother holding baby"
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6 w-full">
              <div className="flex items-center w-full  gap-4 ">
                <h2 className="text-primary-500 uppercase tracking-wider text-base leading-[150%] font-bold">
                  OUR MISSION & VISION
                </h2>
                <div className="h-px bg-primary-500 flex-1 max-w-[230px]"></div>
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
