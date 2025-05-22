import React from "react";
import Image from "next/image";
import callVector from "@/assests/icons/requestCall.png";
import BookingForm from "./BookingForm";

const BookingSection = () => {
  return (
    <div className="padding py-10">
      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-20 items-center ">
        {/* Image Section */}
        <div className="w-full max-w-[459px]">
          <Image
            src={callVector}
            alt="call vector"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Form Section */}
        <div className="w-full">
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
