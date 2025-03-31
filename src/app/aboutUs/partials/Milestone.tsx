import React from "react";
import Image from "next/image";
import stat1 from "@/assests/about/stat.png"; // Replace with actual icons

const Milestone = () => {
  const stats = [
    {
      id: 1,
      value: "15",
      label: "Caring for Families",
      subtext: "Years",
      img: stat1,
    },
    {
      id: 2,
      value: "15,000+",
      label: "Successful IVF Treatments",
      subtext: "",
      img: stat1,
    },
    {
      id: 3,
      value: "100+",
      label: "Expert Specialists",
      subtext: "",
      img: stat1,
    },
  ];

  return (
    <div className="pb-16 md:pb-24 ">
      <div className="w-full bg-primary-50 py-16 px-6 md:px-20 ">
        <div className="  flex flex-col md:flex-row items-center gap-20">
          {/* Left Section */}
          <div className="w-sm space-y-5">
            <div className="flex items-center gap-4">
              <div className="space-y-4 ">
                <div className="flex items-center w-full  gap-4 ">
                  <h2 className="text-primary-500 uppercase tracking-widest text-base leading-[150%] font-bold">
                    Our Milestones
                  </h2>
                  <div className="h-px bg-primary-500 flex-1 max-w-[230px]"></div>
                </div>
                <h3 className="typography-h4 font-semibold text-text-500 ">
                  A legacy of care and success
                </h3>
                <p className="text-lg text-[#666] leading-relaxed">
                  Our experience and dedication continue to bring hope and joy
                  to those who trust us with their dreams.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section: Stats */}
          <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-between gap-10 lg:gap-0 ">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col items-center text-center border-b lg:border-r border-primary-100 px-20"
              >
                {/* Icon */}
                <div className="w-24 h-24 flex items-center justify-center border-[7px] border-[rgba(255,189,182,0.54)] rounded-full p-4">
                  <Image
                    src={stat.img}
                    alt="stat-icon"
                    width={50}
                    height={50}
                  />
                </div>
                {/* Number */}
                <h1 className="text-primary-500 typography-h3 leading-[150%] font-bold  mt-5.5">
                  {stat.value}
                  <span className="text-primary-500 typography-paragraph-regular  pl-1">
                    {stat.subtext}
                  </span>
                </h1>
                {/* Label */}
                <p className="text-text-400 typography-paragraph-large font-medium pt-1 pb-10 lg:pb-0">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestone;
