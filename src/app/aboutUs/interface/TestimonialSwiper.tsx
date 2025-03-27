// "use client";

// import React, { useRef } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // import required modules
// import { Pagination } from "swiper/modules";
// import { testimonialData } from "@/data/testimonialData";
// import TestimonialCard from "@/app/success-story/partials/TestimonialCard";
// import { GrNext, GrPrevious } from "react-icons/gr";

// const TestimonialSwiper = () => {
//   const swiperRef = useRef<Swiper | null>(null);
//   return (
//     <>
//       <Swiper
//         slidesPerView={2}
//         loop={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//         onBeforeInit={(swiper) => {
//           swiperRef.current = swiper;
//         }}
//       >
//         {testimonialData.map((testimonial, index) => (
//           <SwiperSlide key={index}>
//             <TestimonialCard key={index} data={testimonial} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <div>
//         <button onClick={() => swiperRef.current?.slidePrev()}>
//           <GrPrevious />
//         </button>
//         <button onClick={() => swiperRef.current?.slideNext()}>
//           <GrNext />
//         </button>
//       </div>
//     </>
//   );
// };

// export default TestimonialSwiper;
