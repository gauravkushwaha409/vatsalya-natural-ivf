import React from "react";
import surgical from "@/assests/icons/services/surgical.svg";
import Image from "next/image";
const InfertilityTreatment = () => {
  return (
    <section>
      <div
        className="  w-full bg-secondary-50 p-5 rounded-lg  "
        style={{ boxShadow: "0px 4px 22.6px 7px rgba(0, 0, 0, 0.06)" }}
      >
        <div className="border-b-2 border-primary-100 py-2.5">
          <p className="typography-paragraph-large font-medium text-center ">
            Infertility Treatment
          </p>
        </div>
        <div className="flex flex-col gap-5 my-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="bg-secondary-100/50 w-full py-2  rounded-full flex items-center px-5 gap-2 "
            >
              <div className="w-10 h-10">
                {" "}
                <Image
                  src={surgical}
                  alt="surgical"
                  className="w-full h-full"
                />
              </div>
              <span className="typography-paragraph-regular font-medium text-secondary-500">
                Surgical Sperm Retrieval
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfertilityTreatment;
