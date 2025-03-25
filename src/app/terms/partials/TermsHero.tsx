import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import React from "react";

const TermsHero = () => {
  return (
    <div>
      <div className="bg-primary-50 backdrop-blur-[0.6px] py-10">
        <div className="flex flex-col justify-center items-center text-center ">
          {/* breadcrumb  */}
          <CustomBreadcrumb
            items={[{ name: "Home", link: "/" }, { name: "Terms & Condition" }]}
          />

          <h1 className="text-secondary-500 font-bold leading-[150%] typography-h3 pt-3 ">
            Terms & Condition
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TermsHero;
