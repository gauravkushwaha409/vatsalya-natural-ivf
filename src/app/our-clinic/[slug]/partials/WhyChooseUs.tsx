import SectionHeading from "@/components/compoundComponent/SectionHeading";
import Image from "next/image";
import React from "react";
import pic1 from "@/assests/about/family.png";
import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import { IWhyChooseUsRoot } from "../interface/whyChooseUs.interface";

const WhyChooseUs = async () => {
  try {
    const { data } = await getData<IWhyChooseUsRoot>(endpoints.why_choose_us);
    return (
      <section className="padding py-10">
        <SectionHeading>
          <SectionHeading.Title>Why Choose Us</SectionHeading.Title>
          <SectionHeading.Subtitle>{data?.title}</SectionHeading.Subtitle>
          <SectionHeading.Paragraph>
            {data?.description}
          </SectionHeading.Paragraph>
        </SectionHeading>
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
          {data?.whychooseus_detail?.map((item, index) => (
            <div
              key={index}
              className=" relative w-full aspect-[410/320] rounded-xl overflow-hidden  "
            >
              <div className="absolute bottom-3 w-full px-5">
                <p className=" bg-secondary-100/50 rounded-lg backdrop-blur-xl py-3 text-secondary-500 typography-paragraph-large font-bold w-full text-center  ">
                  {item?.title}
                </p>
              </div>

              <Image
                alt="image"
                src={item?.image}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">An error occurred</p>
      </div>
    );
  }
};

export default WhyChooseUs;
