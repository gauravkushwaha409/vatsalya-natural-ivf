import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import React from "react";

const HeroRequest = () => {
  return (
    <div>
      <div className=" py-10">
        <div className="flex flex-col justify-center items-center text-center ">
          {/* breadcrumb  */}
          <CustomBreadcrumb
            items={[{ name: "Home", link: "/" }, { name: "Request a Call" }]}
          />

          <h1 className="text-secondary-500 font-bold leading-[150%] typography-h2 pt-3 ">
            Request a Call
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroRequest;
