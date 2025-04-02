import Image from "next/image";
import React from "react";
import whyUsIcon from "@/assests/about/WhyUsIcon.png";

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
];

const WhyChooseUs = () => {
  return (
    <div className="pb-16 md:pb-24 padding">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="flex items-center w-full justify-center gap-4 max-w-3xl">
          {/* line  */}
          <div className="h-px bg-primary-400 flex-1 max-w-[148px]"></div>

          <h2 className="text-primary-500 text-sm md:text-base font-bold tracking-widest uppercase leading-[24px]">
            Why choose us
          </h2>
          {/* line  */}
          <div className="h-px bg-primary-400 flex-1 max-w-[148px]"></div>
        </div>

        <h1 className="typography-h4 font-semibold tracking-tight ">
          A Team United by Care and Compassion
        </h1>

        <div className="flex flex-col lg:flex-row justify-between gap-6 mt-4">
          <div className="grid grid-cols-2 gap-6">
            {whyChooseUsData.map((data) => (
              <div
                key={data.id}
                className="flex flex-col lg:flex-row items-center lg:items-start gap-4 border border-secondary-50 px-4 py-5 rounded-[14px]"
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
                <div className="text-left">
                  <h5 className="text-secondary-500 typography-h5 mb-2">
                    {data.title}
                  </h5>
                  <p className="text-text-400 typography-paragraph-large font-medium leading-[150%]">
                    {data.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Video Section */}
          <div className=" rounded-[8.44px] w-full md:w-1/2 h-auto md:h-[320px]">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&rel=0"
              // src={`https://www.youtube.com/embed/${extractVideoId(
              //   productVideo?.url
              // )}?autoplay=1&rel=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[250px] sm:h-[350px] md:h-full rounded-[8.44px] object-cover"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
