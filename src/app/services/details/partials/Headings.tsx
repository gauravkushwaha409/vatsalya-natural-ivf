import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import React from "react";

const Headings = () => {
  return (
    <header className="flex items-center flex-col pt-5 pb-10 bg-gradient-to-b from-[#FFF1EF] to-[#FDFCFB]">
      <div className="flex mx-auto w-max typography-caption text-text-400">
        <CustomBreadcrumb
          items={[
            { name: "Home", link: "/" },
            { name: "Services", link: "/services" },
            { name: "Fertility Treatment", link: "/services/details" }, //need to changes according to the slug name
          ]}
          separator={">"}
          className=""
        />
      </div>
      <h1 className="typography-h2 font-bold text-secondary-500 mt-[10px]">
        Fertility Treatment
      </h1>
      <p className="typography-paragraph-large text-primary-500 mt-5 text-center">
        “Infertility treatment that puts an end to infertility”
      </p>
    </header>
  );
};

export default Headings;
