import React from "react";
import TestimonialCard from "./TestimonialCard";
import { testimonialData } from "@/data/testimonialData";
import CustomPagination from "../../../components/CustomPagination";

const StoriesSection = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="flex items-center w-full justify-center gap-4 max-w-3xl">
          {/* line  */}
          <div className="h-px bg-primary-400 flex-1 max-w-[200px]"></div>

          <h2 className="text-primary-500 text-sm md:text-base font-bold tracking-wide uppercase leading-[24px]">
            Stories of Hope and Joy
          </h2>
          {/* line  */}
          <div className="h-px bg-primary-400 flex-1 max-w-[200px]"></div>
        </div>

        <h1 className="typography-h4 font-semibold tracking-tight ">
          Real journeys of couples who overcame fertility challenges with
          Vatsalya’s expert care
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 rounded-lg ">
        {testimonialData.map((testimonial, index) => (
          <TestimonialCard key={index} data={testimonial} />
        ))}
      </div>

      {/* pagination  */}
      <CustomPagination />
    </div>
  );
};

export default StoriesSection;
