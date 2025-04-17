import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import React from "react";
import { IServiceDetailsData } from "../../interfaces/serviceDetails.interface";

interface HeadingsProps {
  data: IServiceDetailsData;
}
const Headings: React.FC<HeadingsProps> = ({ data }) => {
  console.log(data?.service?.slug, "slugggggg");
  return (
    <header className="flex items-center flex-col pt-5 pb-10 bg-gradient-to-b from-[#FFF1EF] to-[#FDFCFB]">
      <div className="flex mx-auto w-max typography-caption text-text-400">
        <CustomBreadcrumb
          items={[
            { name: "Home", link: "/" },
            { name: "Services", link: "/services" },
            { name: data?.service?.slug },
          ]}
        />
      </div>
      <h1 className="typography-h1 font-bold text-secondary-500 mt-[10px]">
        {data?.service?.name}
      </h1>
      <h2 className="typography-paragraph-large text-primary-500 mt-5 text-center">
        {` " ${data?.service?.tagLine} "`}
      </h2>
    </header>
  );
};

export default Headings;
