import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import React from "react";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import ApplyFormModal from "../../../../components/modals/ApplyFormModal";

const HeroCareerDetail = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-primary-50 to-background-100  pt-10 pb-4">
        <div className="flex flex-col justify-center items-center text-center ">
          {/* breadcrumb  */}
          <CustomBreadcrumb
            items={[
              { name: "Home", link: "/" },
              { name: "Career", link: "/career" },
              { name: "Fertility Specialist" },
            ]}
          />

          <h1 className="text-secondary-500 font-bold leading-[150%] typography-h3 pt-3 ">
            Fertility Specialist
          </h1>

          <div className="flex gap-2.5 py-5 text-text-500 typography-paragraph-large font-medium">
            <p className="flex gap-1 items-center ">
              <SlLocationPin /> Naxal, Kathmandu
            </p>

            <p className="flex gap-1 items-center ">
              <IoTimeOutline /> Full-time
            </p>
          </div>
          <div className="flex gap-2.5  text-text-500 typography-paragraph-large font-medium">
            <p className="flex gap-1 items-center ">
              <HiOutlineBuildingOffice2 /> Gynecology Department
            </p>

            <p className="flex gap-1 items-center ">
              <MdOutlineWorkOutline />
              Mid-Level
            </p>
          </div>

          <ApplyFormModal title="Join Us" />
        </div>
      </div>
    </div>
  );
};

export default HeroCareerDetail;
