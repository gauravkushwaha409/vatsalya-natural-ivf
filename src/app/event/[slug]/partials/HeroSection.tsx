"use client";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import PATHS from "@/utils/path";
import { IEventDetailsType } from "../../interface/event.interface";

const HeroSection = ({ data }: { data: IEventDetailsType }) => {
  return (
    <div className="bg-primary-50 u-padding-x">
      <BreadCrumb data={data} />
    </div>
  );
};

const BreadCrumb = ({ data }: { data: IEventDetailsType }) => {
  return (
    <div className="flex flex-col justify-center items-center pt-5">
      <CustomBreadcrumb
        items={[
          { name: "Home", isHome: true, link: PATHS.home },
          { name: "Event", link: PATHS.event },
        ]}
      />
      <div className="w-full">
        <p className="mt-2.5 font-urbanist font-extrabold text-[2.5rem] text-secondary-500 text-center capitalize leading-[150%] tracking-[-0.78px]">
          {data.title}
        </p>
        <div
          className="mx-auto font-urbanist font-medium text-[#828282] text-center leading-[150%] tracking-[-0.28px]"
          dangerouslySetInnerHTML={{ __html: data?.description || " " }}
        />
        <div className="w-full">
          <p className="mt-10 font-urbanist font-semibold text-[1.25rem] text-text-500 text-left capitalize leading-7.5">
            {data.title}
          </p>
          <div className="bg-[#cecece] w-full h-[1px]" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
