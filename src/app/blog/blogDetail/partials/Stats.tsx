import Image from "next/image";
import React from "react";
import views from "@/assests/blogDetail/viewsBlogDetail.png";

const Stats = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-10 w-4">
        <div className="flex flex-col gap-2 items-center text-center">
          <div className="w-3 h-3  ">
            <Image
              src={views}
              alt="views"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="typography-paragraph-regular text-text-400 ">
            views 1.6K
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center text-center">
          <div className="w-3 h-3  ">
            <Image
              src={views}
              alt="views"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="typography-paragraph-regular text-text-400 ">
            views 1.6K
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center text-center">
          <div className="w-3 h-3  ">
            <Image
              src={views}
              alt="views"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="typography-paragraph-regular text-text-400 ">
            views 1.6K
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center text-center">
          <div className="w-3 h-3  ">
            <Image
              src={views}
              alt="views"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="typography-paragraph-regular text-text-400 ">
            views 1.6K
          </p>
        </div>
      </div>
    </>
  );
};

export default Stats;
