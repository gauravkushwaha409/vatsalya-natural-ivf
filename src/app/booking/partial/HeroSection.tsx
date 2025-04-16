import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className=" py-10">
        <div className="flex flex-col justify-center items-center text-center ">
          {/* breadcrumb  */}
          <CustomBreadcrumb
            items={[{ name: "Home", link: "/" }, { name: "Booking" }]}
          />

          <h1 className="text-secondary-500 font-bold leading-[150%] typography-h1 pt-3 ">
            Consultation Booking{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
