import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import React from "react";

const FAQHero = () => {
  return (
    <div>
      <div className=" py-10">
        <div className="flex flex-col justify-center items-center text-center ">
          {/* breadcrumb  */}
          <CustomBreadcrumb
            items={[{ name: "Home", link: "/" }, { name: "FAQs" }]}
          />

          <h1 className="text-secondary-500 font-bold leading-[150%] typography-h3 pt-3 ">
            FAQs
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FAQHero;
