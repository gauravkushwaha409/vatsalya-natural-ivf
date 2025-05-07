import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import React from "react";

const Headings = () => {
  return (
    <header className="py-10 text-center flex flex-col justify-center items-center bg-background-100 ">
      {/* breadcrumb  */}
      <CustomBreadcrumb
        items={[{ name: "Home", link: "/" }, { name: "Contact Us" }]}
      />
      <h1 className="typography-h2 font-bold text-secondary-500 pt-2.5">
        Contact Us
      </h1>
      <p className="typography-paragraph-large py-3 font-medium text-text-400">
        We’re Here to Support Your Journey
      </p>
    </header>
  );
};

export default Headings;
