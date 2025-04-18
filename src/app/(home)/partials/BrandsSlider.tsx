"use client";
import Image from "next/image";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const BrandsSlider = () => {
  return (
    <div className="pb-10">
      <Swiper
        className="h-[4.375rem] pointer-events-none"
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={120}
        loop={true}
        autoplay={{
          delay: 0,
        }}
        speed={3000}
        freeMode={true}
        modules={[Autoplay, FreeMode]}
        wrapperClass="!ease-linear"
      >
        {[1, 2, 1, 2, 1, 2, 1, 2].map((item, index) => (
          <SwiperSlide className=" " key={index}>
            <div className="flex justify-center items-center w-full h-full">
              <Image
                className="w-auto h-full"
                src={`/brands/brand-${item}.png`}
                width={300}
                height={100}
                alt="brand"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default BrandsSlider;
