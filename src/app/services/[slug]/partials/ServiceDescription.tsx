"use client";
import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";
import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import {
  IServiceDetailsService,
  IServiceDetailsServiceDetailsListSection,
} from "../../interfaces/serviceDetails.interface";

interface IServiceDescription {
  data: IServiceDetailsService;
}
const ServiceDescription: React.FC<IServiceDescription> = ({ data }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  console.log(data);

  return (
    <article className="flex flex-col gap-5 py-10 text-text-400 text-justify">
      <p dangerouslySetInnerHTML={{ __html: data?.description }} />
      {data?.serviceDetailsListSection?.map(
        (section: IServiceDetailsServiceDetailsListSection, index: number) => (
          <div key={index} className="flex flex-col gap-2">
            <div>
              <h4 className="font-medium typography-h4">{section?.title}</h4>
              <p dangerouslySetInnerHTML={{ __html: section?.description }} />
              {section?.listItems?.map((item, index) => (
                <div key={index}>
                  <p>{item?.listItemTitle}</p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item?.listItemDescription,
                    }}
                  />
                </div>
              ))}
            </div>
            {section?.listItems && (
              <div className="flex flex-col gap-2">
                {section.listItems.map((item) => (
                  <div className="flex gap-2" key={item._id}>
                    <span className="inline-flex justify-center items-center bg-secondary-500 p-1 rounded-full size-7">
                      <IoMdCheckmark className="size-full text-white" />
                    </span>
                    <div>
                      <p className="font-medium text-secondary-500 typography-h4">
                        {item?.listItemTitle}
                      </p>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item?.listItemDescription,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )
      )}
      <button
        onClick={() => setOpenModal(true)}
        className="bg-secondary-500 shadow-[0px px-11 py-4 border-[0.4px] border-secondary-100 rounded-full w-fit font-semibold text-white text-lg transition-colors duration-300 cursor-pointer typography-h4 8px 18px 0px rgba(101,53,83,0.62)]"
      >
        Book an Appointment
      </button>
      <RequestAppoimentModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </article>
  );
};

export default ServiceDescription;
