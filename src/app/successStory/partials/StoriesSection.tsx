"use client";
import React, { useState } from "react";
import { testimonialData } from "@/data/testimonialData";
import CustomPagination from "../../../components/CustomPagination";
import TestimonialCard from "@/components/TestimonialCard";
import VideoModal from "@/components/VideoModal";

const StoriesSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className="padding">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="flex items-center w-full justify-center gap-4 max-w-3xl">
          {/* line  */}
          <div className="h-px bg-primary-400 flex-1 max-w-[148px]"></div>

          <h2 className="text-primary-500 text-sm md:text-base font-bold tracking-widest uppercase leading-[24px]">
            Stories of Hope and Joy
          </h2>
          {/* line  */}
          <div className="h-px bg-primary-400 flex-1 max-w-[148px]"></div>
        </div>

        <h1 className="typography-h4 font-semibold tracking-tight ">
          Real journeys of couples who overcame fertility challenges with
          Vatsalya’s expert care
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 rounded-lg ">
        {testimonialData.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            data={testimonial}
            setIsOpenModal={setIsOpen}
          />
        ))}
      </div>
      <VideoModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        videoUrl="https://www.youtube.com/embed/vLyP1aOmENc?si=aPCpD2JOABihWFx_"
      />

      {/* pagination  */}
      <CustomPagination
        currentPage={currentPage}
        onPageChange={handlePageChange}
        pageCount={5}
        perPage={5}
        totalItems={10}
      />
    </div>
  );
};

export default StoriesSection;
