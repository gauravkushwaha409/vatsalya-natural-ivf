import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import React from "react";

const PrivacyHero = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-primary-50 to-background-100 py-10">
        <div className="flex flex-col justify-center items-center text-center ">
          {/* breadcrumb  */}
          <CustomBreadcrumb
            items={[{ name: "Home", link: "/" }, { name: "Privacy Policy" }]}
          />

          <h1 className="text-secondary-500 font-bold leading-[150%] typography-h3 pt-3 ">
            Privacy Policy
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PrivacyHero;
