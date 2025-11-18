"use client";

import { IBlogData } from "@/app/blog/interface/blog.interface";
import BlogCard from "@/components/cards/BlogCard";
import { useSlider } from "@/components/hooks/useSlider";
import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type BlogCardProps = {
  data: IBlogData;
};
const Blogsection: React.FC<BlogCardProps> = ({ data }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const { swiperRef, handleSlideChange, goPrev, goNext } = useSlider();
  return (
    <>
      <style>{`
        .custom-swiper .swiper-pagination {
          position: relative !important;
          bottom: auto !important;
          margin-top: 2.5rem;
          display: flex;
          justify-content: center;
          gap: 0.5rem;
        }

        .custom-pagination-bullet {
          width: 8px !important;
          height: 8px !important;
          border-radius: 50% !important;
          background: #DEDEDE80 !important;
          opacity: 1 !important;
          cursor: pointer !important;
          transition: all 0.3s ease !important;
          margin: 0 !important;
        }

        .custom-pagination-bullet-active {
          background: #ff6f61 !important;
          width: 24px !important;
          border-radius: 50px !important;
        }
      `}</style>
      <div className="relative pb-6 sm:pb-24 padding">
        <div className="flex items-start justify-between ">
          <div>
            <div className="flex items-center gap-3 pb-2">
              <span className="font-bold tracking-widest uppercase text-primary-500 typography-paragraph-regular">
                Blogs
              </span>
              <div className="border border-t border-primary-400 w-21"></div>
            </div>

            <h2 className="pb-4 font-semibold typography-h2">
              Latest News & Articles
            </h2>
          </div>
          <Link
            href={"/blog"}
            className="text-primary-500 hover:text-primary-600 text-[13px] leading-[120%] tracking-[-2%]  flex items-center gap-1"
          >
            View All <ChevronRight className="size-4" />
          </Link>
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Pagination]}
          slidesPerView={1}
          onSlideChange={(swiper) => {
            handleSlideChange();
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSwiper={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          loop={false}
          spaceBetween={10}
          pagination={{
            clickable: true,
            bulletClass: "custom-pagination-bullet",
            bulletActiveClass: "custom-pagination-bullet-active",
            modifierClass: "custom-pagination-",
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 24 },
            1024: { slidesPerView: 4, spaceBetween: 24 },
          }}
          className="w-full !pt-4  custom-swiper"
        >
          {data?.records?.map((item) => (
            <SwiperSlide key={item?.id}>
              <BlogCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="absolute z-10 flex items-center justify-end gap-3 -mt-6 w-fit right-4 md:right-20">
          <button
            type="button"
            onClick={goPrev}
            disabled={isBeginning}
            aria-label="Previous slide"
            className={`border w-[35px] h-[35px] rounded-full flex items-center justify-center p-2 transition-all duration-200 z-10 ${
              isBeginning
                ? "border-[#DEDEDE] text-[#DEDEDE] cursor-not-allowed opacity-50"
                : "border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white cursor-pointer"
            }`}
          >
            <ArrowLeft size={16} />
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={isEnd}
            aria-label="Next slide"
            className={`border w-[35px] h-[35px] rounded-full flex items-center justify-center p-2 transition-all duration-200 z-10 ${
              isEnd
                ? "border-[#DEDEDE] text-[#DEDEDE] cursor-not-allowed opacity-50"
                : "border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white cursor-pointer"
            }`}
          >
            <ArrowRight size={16} />
          </button>
        </div>

        <RequestAppoimentModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
        />
      </div>
    </>
  );
};
export default Blogsection;
