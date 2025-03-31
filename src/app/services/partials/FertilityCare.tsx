import Image from "next/image";
import React from "react";
import fertility from "@/assests/icons/services/fertilityCare.svg";
import troubleConceiving from "@/assests/icons/services/Trouble Conceiving.svg";
const FertilityCare = () => {
  return (
    <section>
      <div className=" bg-gradient-to-r from-[#EBC0DB] to-[#FFD2CE] px-10 py-20">
        <div className="flex flex-col items-center justify-center pb-8 ">
          <div className="flex items-center justify-center gap-3  pb-5 ">
            <div className="border border-primary-500/80 border-t-1 w-20"></div>

            <span className="text-primary-500 typography-paragraph-regular font-bold uppercase tracking-widest">
              When to Seek Fertility Care{" "}
            </span>
            <div className="border border-primary-500/80 border-t-1 w-20"></div>
          </div>
          <p className="typography-h4 font-semibold text-text-500 text-center text-wrap w-1/2">
            Recognizing the Signs That Its Time to See a Fertility Specialist
          </p>
        </div>

        <div className="p-10 flex flex-col lg:flex-row gap-10  ">
          <div className="flex flex-col gap-5 w-1/2">
            {Array.from({ length: 5 }, (_, index) => (
              <div className="flex items-center gap-5" key={index}>
                <div className="h-16 w-16 bg-[#FFD2EE] rounded-full p-3">
                  <Image
                    src={troubleConceiving}
                    alt={`troubleConceiving`}
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="typography-h5 text-primary-500 font-medium ">
                    Trouble Conceiving
                  </span>
                  <span className="typography-paragraph-regular font-medium text-text-400 pt-1.5">
                    If youve been trying for over a year (or 6 months if over
                    35) without success.
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end   w-1/2 ">
            <div className=" h-auto w-auto">
              <Image
                src={fertility}
                alt={`fertility`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FertilityCare;
