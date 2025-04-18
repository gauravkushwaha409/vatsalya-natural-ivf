"use client";
import React, { useState } from "react";
import CustomPagination from "../../../components/CustomPagination";
import TestimonialCard from "@/components/TestimonialCard";
import VideoModal from "@/components/modals/VideoModal";
import usePaginationChange from "@/hooks/usePaginationChange";
import { ISucessStoriesMetaData } from "../interface/sucessStoriesMeta.interface";
import {
  IsuccessStoriesData,
  IsuccessStoriesRecord,
} from "../interface/successStories.interface";

type Props = {
  data: IsuccessStoriesData;
  metaData: ISucessStoriesMetaData;
};
const StoriesSection: React.FC<Props> = ({ data, metaData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string>("");
  console.log(metaData, "daaaa");
  const { currentPage, handlePageChange } = usePaginationChange();
  return (
    <div className="padding">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="flex items-center w-full justify-center gap-4 max-w-3xl">
          {/* line  */}
          <div className="h-px bg-primary-400 flex-1 max-w-[148px]"></div>

          <h2 className="text-primary-500 text-sm md:text-base font-bold tracking-widest uppercase leading-[24px]">
            {metaData?.successStoryExamplesTitle}
          </h2>
          {/* line  */}
          <div className="h-px bg-primary-400 flex-1 max-w-[148px]"></div>
        </div>

        <h1 className="typography-h2 font-semibold tracking-tight max-w-3xl ">
          {metaData?.successStoryExamplesSubtitle}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 rounded-lg ">
        {data?.records?.map(
          (testimonial: IsuccessStoriesRecord, index: number) => (
            <TestimonialCard
              key={index}
              data={testimonial}
              setIsOpenModal={setIsOpen}
              setVideoUrl={setVideoUrl}
            />
          )
        )}
      </div>
      <VideoModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        videoUrl={videoUrl}
      />

      {/* pagination  */}
      <CustomPagination
        currentPage={currentPage}
        onPageChange={handlePageChange}
        pageCount={data?.totalPages}
        perPage={5}
        totalItems={data?.totalRecords}
      />
    </div>
  );
};

export default StoriesSection;
