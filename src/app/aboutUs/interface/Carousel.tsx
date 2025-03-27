import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonialData } from "@/data/testimonialData";
import TestimonialCard from "@/app/success-story/partials/TestimonialCard";

const CustomCarousel = () => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      {" "}
      {/* Adjust container width */}
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonialData.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="sm:basis-1/2 md:basis-1/2 lg:basis-1/2"
            >
              <TestimonialCard data={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
