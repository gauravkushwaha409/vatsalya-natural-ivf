import Image from "next/image";
import {
  IHowWeWorkData,
  IHowWeWorkHowWorksDetail,
} from "../interface/howWeWork.interface";
import HowWeWorkAnimatingLine from "./HowWeWorkAnimatingLine";

type HowWeWorkProps = {
  data: IHowWeWorkData;
};
const HowWeWork: React.FC<HowWeWorkProps> = ({ data }) => {
  return (
    <div className="py-10 md:py-20">
      <div className="relative">
        <div className="flex justify-center items-center gap-3 md:gap-5 py-6 md:py-10">
          <span className="bg-primary-500 w-[4rem] md:w-[8.5rem] h-px" />
          <h2 className="font-bold text-primary-500 text-sm md:text-base uppercase tracking-[0.12rem] md:tracking-[0.18rem]">
            {data?.title}
          </h2>
          <span className="bg-primary-500 w-[4rem] md:w-[8.5rem] h-px" />
        </div>
        <h2 className="px-4 pb-8 md:pb-16 font-semibold text-text-500 text-center typography-h2">
          {data?.subtitle}{" "}
        </h2>
        <div className="top-12 right-[9%] -z-10 absolute pointer-events-none">
          <Image
            src={"/svg/butterfly.svg"}
            alt="how-we-work"
            width={500}
            height={500}
            className="size-[15rem] object-contain"
          />
        </div>
      </div>
      {/* <div className="lg:hidden">
        <HowWeWorkMobileCarousel data={data} />
      </div> */}

      {/* large screens */}
      <div className="relative lg:flex flex-col md:gap-32 px-6 sm:px-10 md:px-20 lg:px-40 divide-y md:divide-y-0">
        {data?.HowWorksDetails?.map(
          (step: IHowWeWorkHowWorksDetail, index: number) => (
            <div
              className={`flex flex-col md:flex-row gap-y-6 gap-x-8 lg:gap-x-24 pb-4 mb-4 ${
                index % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              key={index}
            >
              <div
                className={`flex w-full justify-center md:w-1/2 ${
                  index % 2 == 0
                    ? "md:justify-end md:items-center "
                    : "md:justify-start md:items-center"
                }`}
              >
                <div className="w-full max-w-[17.1875rem] h-auto md:h-[12.125rem] aspect-[16/9] md:aspect-square">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div
                className={`w-full md:w-1/2 space-y-3 flex flex-col ${
                  index % 2 == 0
                    ? "items-center md:text-left md:items-start "
                    : "items-center md:text-right md:items-end "
                }`}
              >
                <span className="flex justify-center items-center bg-primary-50 rounded-full size-[2.5rem] md:size-[3.375rem] font-roboto font-medium text-primary-500 text-end typography-paragraph-regular">
                  {index + 1}
                </span>
                <h3
                  className={`font-semibold ${
                    index % 2 === 0 ? "md:text-left" : "md:text-right"
                  } text-center typography-h3`}
                >
                  {step.title}
                </h3>
                <p
                  className="font-medium text-text-400 md:text-left text-justify typography-paragraph-regular"
                  dangerouslySetInnerHTML={{ __html: step.detail }}
                />
              </div>
            </div>
          )
        )}

        <div className="hidden md:block left-1/2 absolute inset-y-0 -translate-x-1/2">
          <HowWeWorkAnimatingLine />
        </div>
      </div>
    </div>
  );
};
export default HowWeWork;
