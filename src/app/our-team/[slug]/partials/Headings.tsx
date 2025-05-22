import CustomBreadcrumb from "@/components/CustomBreadcrumb";

import React from "react";

const Headings = () => {
  return (
    <header className="flex flex-col items-center bg-gradient-to-b from-[#FFF1EF] to-[#FDFCFB] pt-5">
      <div className="flex mx-auto w-max text-text-400 typography-caption item">
        <div className="flex justify-center items-center">
          <CustomBreadcrumb
            items={[
              { name: "Home", link: "/" },
              { name: "Our Team", link: "/our-team" },
              { name: "Profile", link: "ourExperts/profile" },
            ]}
            mt={true}
          />
        </div>
      </div>
      <h1 className="mt-[10px] font-bold text-secondary-500 typography-h2">
        Profile
      </h1>
    </header>
  );
};

export default Headings;
