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
  const { currentPage, handlePageChange } = usePaginationChange();
  return (
    <div className="padding">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="flex justify-center items-center gap-4 w-full max-w-3xl">
          {/* line  */}
          <div className="flex-1 bg-primary-400 max-w-[148px] h-px"></div>

          <h2 className="font-bold text-primary-500 text-sm md:text-base uppercase leading-[24px] tracking-widest">
            {metaData?.successStoryExamplesTitle}
          </h2>
          {/* line  */}
          <div className="flex-1 bg-primary-400 max-w-[148px] h-px"></div>
        </div>

        <h3 className="max-w-3xl font-semibold tracking-tight typography-h2">
          {metaData?.successStoryExamplesSubtitle}
        </h3>
      </div>

      <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 rounded-lg">
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
