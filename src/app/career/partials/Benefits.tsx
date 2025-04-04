import React from "react";
import whyUsIcon from "@/assests/about/WhyUsIcon.png";
import Image from "next/image";

const whyChooseUsData = [
  {
    id: 1,
    title: "Compassionate Care",
    description:
      "We listen, support, and care for you at every step of your journey.",
    image: whyUsIcon,
  },
  {
    id: 2,
    title: "Expert Doctors",
    description: "Our experienced professionals provide world-class treatment.",
    image: whyUsIcon,
  },
  {
    id: 3,
    title: "Advanced Technology",
    description: "We use cutting-edge technology to deliver the best outcomes.",
    image: whyUsIcon,
  },
  {
    id: 4,
    title: "Personalized Plans",
    description: "Tailored healthcare solutions for your unique needs.",
    image: whyUsIcon,
  },
  {
    id: 5,
    title: "Advanced Technology",
    description: "We use cutting-edge technology to deliver the best outcomes.",
    image: whyUsIcon,
  },
  {
    id: 6,
    title: "Personalized Plans",
    description: "Tailored healthcare solutions for your unique needs.",
    image: whyUsIcon,
  },
];

const Benefits = () => {
  return (
    <div className="py-16 md:py-24 padding">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="flex items-center w-full justify-center gap-4 max-w-3xl">
          {/* line  */}
          <div className="h-px bg-primary-400 flex-1 max-w-[148px]"></div>

          <h2 className="text-primary-500 text-sm md:text-base font-bold tracking-widest uppercase leading-[24px]">
            Benefits
          </h2>
          {/* line  */}
          <div className="h-px bg-primary-400 flex-1 max-w-[148px]"></div>
        </div>

        <h1 className="typography-h3 font-semibold tracking-tight ">
          Why Work at Vatsalya?
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
        {whyChooseUsData.map((data) => (
          <div
            key={data.id}
            className="flex gap-4 border border-secondary-50 px-6 py-5 rounded-[14px] 
            bg-[rgba(255,241,239,0.30)] shadow-[0px_2px_6.4px_1px_rgba(0,0,0,0.02)]"
          >
            <div className="w-[80px] h-[80px]">
              <Image
                src={data.image}
                alt={data.title}
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-left max-w-[340px]">
              <h5 className="text-text-500 typography-paragraph-large font-semibold mb-2">
                {data.title}
              </h5>
              <p className="text-text-400 typography-paragraph-regular leading-[150%]">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
