import { IOurExpertsData } from "@/app/our-team/interface/ourExperts.interface";
import Image from "next/image";
import TeamSlider from "./TeamSlider";

interface MeetExpertsProps {
  data: IOurExpertsData;
}
const MeetExperts: React.FC<MeetExpertsProps> = ({ data }) => {
  return (
    <div className="relative">
      <div className="pb-6 sm:pb-10 padding">
        <div className="flex justify-center items-center gap-5 py-10">
          <span className="bg-primary-500 w-[8.5rem] h-px" />
          <h2 className="font-bold text-primary-500 uppercase tracking-[0.18rem]">
            MEET OUR EXPERTS
          </h2>
          <span className="bg-primary-500 w-[8.5rem] h-px" />
        </div>
        <h3 className="pb-[3.75rem] font-bold text-center typography-h2">
          World-Class Doctors, Dedicated to Your Care
        </h3>
        <TeamSlider data={data?.records} />
      </div>
      {/* butterfly gif */}
      <div className="top-14 right-0 absolute opacity-40 w-[10rem] sm:w-[15rem] h-[10rem] sm:h-[15rem]">
        <Image
          src={"/butterfly-gif.gif"}
          alt="butterfly"
          width={100}
          height={100}
          className="w-full h-full object-contain animate-pulse"
          unoptimized
        />
      </div>
    </div>
  );
};
export default MeetExperts;
