import React from "react";
import Image from "next/image";
import {
  IServiceDetailsDiagonosisList,
  IServiceDetailsService,
} from "../../interfaces/serviceDetails.interface";

interface InfertilityTreatmentProps {
  data: IServiceDetailsService;
}

const InfertilityTreatment: React.FC<InfertilityTreatmentProps> = ({
  data,
}) => {
  return (
    <section>
      {data?.diagonosisList.length > 0 && (
        <div
          className="  w-full bg-secondary-50/30 p-5 rounded-lg  "
          style={{ boxShadow: "0px 4px 22.6px 7px rgba(0, 0, 0, 0.06)" }}
        >
          <div className="border-b-2 border-secondary-100 py-2.5">
            <p className="typography-paragraph-large font-medium text-center ">
              Infertility Treatment
            </p>
          </div>
          <div className="flex flex-col gap-5 my-5">
            {data?.diagonosisList?.map(
              (items: IServiceDetailsDiagonosisList, index: number) => (
                <div
                  key={index}
                  className="bg-secondary-100/50 w-full py-2  rounded-full flex items-center px-5 gap-2 "
                >
                  <div className="w-10 h-10">
                    {" "}
                    <Image
                      src={items?.icon}
                      alt={items?.name}
                      width={900}
                      height={900}
                      className="w-full h-full"
                    />
                  </div>
                  <span className="typography-paragraph-regular font-medium text-secondary-500">
                    {items?.name}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default InfertilityTreatment;
