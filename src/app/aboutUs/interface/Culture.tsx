import Image from "next/image";
import React from "react";
import family from "@/assests/about/family.png";

const Culture = () => {
  return (
    <div>
      <div className="pb-16 md:pb-24 container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="flex items-center w-full justify-center gap-4 max-w-3xl">
            {/* line  */}
            <div className="h-px bg-primary-400 flex-1 max-w-[200px]"></div>

            <h2 className="text-primary-500 text-sm md:text-base font-bold tracking-wide uppercase leading-[24px]">
              Our Culture
            </h2>
            {/* line  */}
            <div className="h-px bg-primary-400 flex-1 max-w-[200px]"></div>
          </div>

          <h1 className="typography-h4 font-semibold tracking-tight ">
            Building a Supportive Environment for Parenthood
          </h1>

          <p className="text-text-400 typography-paragraph-large leading-[150%] font-medium max-w-7xl">
            At Vatsalya Natural IVF, we foster a culture of care, prioritizing
            well-being and delivering compassionate IVF treatments to support
            families on their journey to parenthood.
          </p>

          <div className=" grid grid-cols-1 md:grid-cols-5 gap-5 ">
            {/* Box 1 */}
            <div className="mt-42 w-52 h-50 rounded-[24px] ">
              <Image
                src={family}
                alt="image"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-[24px]"
              />
            </div>

            {/* Box 2 */}
            <div className="w-[484px] h-[240px] col-span-2 rounded-[24px] ">
              <Image
                src={family}
                alt="image"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-[24px]"
              />
            </div>

            {/* Box 3 */}
            <div className="ml-5 mt-15 w-[191px] h-[180px] rounded-[24px] ">
              <Image
                src={family}
                alt="image"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-[24px]"
              />
            </div>

            {/* Box 4 */}
            <div className="mt-42 rounded-[24px] ">
              <Image
                src={family}
                alt="image"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-[24px]"
              />
            </div>
            {/* Box 5 */}
            <div className="ml-65 -mt-28  w-[191px] h-[180px] rounded-[24px] ">
              <Image
                src={family}
                alt="image"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-[24px]"
              />
            </div>
            {/* Box 6 */}
            <div className="ml-60 -mt-28  w-[484px] h-[240px] col-span-2 rounded-[24px] ">
              <Image
                src={family}
                alt="image"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-[24px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Culture;
