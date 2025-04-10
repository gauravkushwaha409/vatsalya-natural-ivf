import Image from "next/image";
import React from "react";
import family from "@/assests/about/family.png";

const images = [
  {
    id: 1,
    src: family,
    className:
      "lg:mt-[10.5rem] w-[10rem] lg:w-[13.03988rem] h-[10.5rem] lg:h-[12.5rem] lg:m-4",
    colSpan: "col-span-1",
  },
  {
    id: 2,
    src: family,
    className: "lg:-ml-4 lg:w-[36.51163rem] h-[15rem] lg:m-4",
    colSpan: "col-span-2",
  },
  {
    id: 3,
    src: family,
    className:
      "ml-49 lg:ml-10 -mt-112 lg:mt-18.5 w-[10rem] lg:w-[13.03988rem] h-[10.5rem] lg:h-[12.5rem] lg:w-[191px] lg:h-[180px] lg:m-4",
    colSpan: "col-span-1",
  },
  {
    id: 4,
    src: family,
    className:
      "mt-0 lg:-ml-[0.4rem] lg:mt-[10.5rem] w-[10rem] lg:w-[13.03988rem] h-[10.5rem] lg:m-4",
    colSpan: "col-span-1",
  },
  {
    id: 5,
    src: family,
    className:
      "lg:ml-[16.8rem]  lg:-mt-[6.8rem] -mt-47 w-[11rem]  lg:w-[191px]  h-[10.5rem] lg:h-[180px] lg:m-4",
    colSpan: "col-span-1",
  },
  {
    id: 6,
    src: family,
    className:
      "lg:ml-[14rem] lg:-mt-[6.8rem] -mt-[0.9rem] w-full lg:w-[36.51163rem] h-[15rem] lg:m-4",
    colSpan: "col-span-2",
  },
];
type Props = {
  data: any;
};

const Culture: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <div className="pb-16 md:pb-24 padding">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="flex items-center w-full justify-center gap-4 max-w-3xl">
            {/* line  */}
            <div className="h-px bg-primary-400 flex-1 max-w-[148px]"></div>

            <h2 className="text-primary-500 text-sm md:text-base font-bold tracking-widest uppercase leading-[24px]">
              Our Culture
            </h2>
            {/* line  */}
            <div className="h-px bg-primary-400 flex-1 max-w-[148px]"></div>
          </div>

          <h2 className="typography-h2 font-semibold tracking-tight ">
            Building a Supportive Environment for Parenthood
          </h2>

          <p className="text-text-400 typography-paragraph-large leading-[150%] font-medium max-w-7xl">
            At Vatsalya Natural IVF, we foster a culture of care, prioritizing
            well-being and delivering compassionate IVF treatments to support
            families on their journey to parenthood.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-[1.23rem]">
            {images.map((img) => (
              <div
                key={img.id}
                className={`${img.className} rounded-[24px] ${img.colSpan}`}
              >
                <Image
                  src={img?.src}
                  alt="Family Image"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-[24px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Culture;
