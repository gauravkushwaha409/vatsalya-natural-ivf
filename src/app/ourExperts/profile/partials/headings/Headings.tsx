import CustomBreadcrumb from "@/components/CustomBreadcrumb";

import React from "react";

const Headings = () => {
  return (
    <header className="flex items-center flex-col pt-5  bg-gradient-to-b from-[#FFF1EF] to-[#FDFCFB]">
      <div className="flex mx-auto w-max typography-caption text-text-400">
        <CustomBreadcrumb
          items={[
            { name: "Home", link: "/" },
            { name: "Our Experts", link: "/ourExperts" },
            { name: "Profile", link: "ourExperts/profile" },
          ]}
          separator={">"}
        />
      </div>
      <h1 className="typography-h3 font-bold text-secondary-500 mt-[10px]">
        Profile
      </h1>
    </header>
  );
};

export default Headings;
