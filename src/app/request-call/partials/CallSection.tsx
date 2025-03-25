import React from "react";
import RequestCallForm from "./RequestCallForm";
import Image from "next/image";
import callVector from "@/assests/icons/requestCall.png";

const CallSection = () => {
  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-6 lg:gap-10 items-center">
        {/* Image Section */}
        <div className="w-full max-w-[459px] h-auto">
          <Image
            src={callVector}
            alt="call vector"
            width={400}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
        {/* Form Section */}
        <div className="w-full lg:w-auto">
          <RequestCallForm />
        </div>
      </div>
    </div>
  );
};

export default CallSection;
