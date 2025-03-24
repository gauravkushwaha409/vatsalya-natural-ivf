import Breadcrumb from "@/components/Breadcumb";
import React from "react";

const HeroBlog = () => {
  return (
    <div className="bg-primary-50 backdrop-blur-[0.6px] py-10">
      <div className="flex flex-col justify-center items-center text-center ">
        {/* breadcrumb  */}
        <Breadcrumb name="Blog" baseName="home" style="text-text-400" />

        <h1 className="text-secondary-500 font-bold leading-[150%] typography-h3 pt-3 ">
          Blog & News
        </h1>
      </div>
    </div>
  );
};

export default HeroBlog;
