import Image from "next/image";
import React from "react";
import fertility from "@/assests/icons/services/fertilityCare.svg";
import {
  IFertilityCareData,
  IFertilityCareWhenToSeeListItemService,
} from "../interfaces/fertilitycare.interface";

interface IFertilityCare {
  data: IFertilityCareData;
}
const FertilityCare: React.FC<IFertilityCare> = ({ data }) => {
  return (
    <section>
      <div className=" bg-gradient-to-r from-[#EBC0DB] to-[#FFD2CE] px-5 lg:px-10 py-20">
        <div className="flex flex-col items-center justify-center pb-8 text-center">
          <div className="flex items-center justify-center gap-3 pb-4 ">
            <div className=" bg-primary-400 h-px w-[148px]"></div>

            <span className="text-primary-500 typography-paragraph-regular font-bold uppercase tracking-widest">
              When to Seek Fertility Care{" "}
            </span>
            <div className=" bg-primary-400 h-px w-[148px]"></div>
          </div>
          <h2 className="typography-h2 font-semibold text-text-500 text-center text-wrap w-full lg:w-1/2">
            Recognizing the Signs That Its Time to See a Fertility Specialist
          </h2>
        </div>

        <div className="p-2 lg:p-10 flex flex-col lg:flex-row gap-10  ">
          <div className="flex flex-col gap-5 w-full lg:w-1/2">
            {data?.whenToSeeListItemService?.map(
              (item: IFertilityCareWhenToSeeListItemService, index: number) => (
                <div className="flex items-center gap-5" key={index}>
                  <div className="h-16 w-16 bg-[#FFD2EE] rounded-full p-4 lg:p-3">
                    <Image
                      src={item?.icon}
                      alt={`troubleConceiving`}
                      className="w-full h-full"
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="flex flex-col w-10/12">
                    <span className="typography-h4 text-primary-500 font-medium ">
                      {item?.title}
                    </span>
                    <span className="typography-paragraph-regular font-medium text-text-400 pt-1.5">
                      {item?.whenToSeeService}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="flex justify-end   w-full lg:w-1/2 ">
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
