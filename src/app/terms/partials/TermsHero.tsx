import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import React from "react";

const TermsHero = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-primary-50 to-background-100  py-10">
        <div className="flex flex-col justify-center items-center text-center ">
          {/* breadcrumb  */}
          <CustomBreadcrumb
            items={[{ name: "Home", link: "/" }, { name: "Terms & Condition" }]}
          />

          <h1 className="text-secondary-500 font-bold leading-[150%] typography-h2 pt-3 ">
            Terms & Condition
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TermsHero;
