import { teamMembers } from "@/data/team-data";
import TeamSlider from "./TeamSlider";

const MeetExperts = () => {
  return (
    <div className="my-[12.5rem]">
      <div className="flex justify-center items-center gap-5 py-10">
        <span className="bg-primary-500 w-[8.5rem] h-px" />
        <h2 className="font-bold text-primary-500 uppercase tracking-[0.18rem]">
          MEET OUR EXPERTS
        </h2>
        <span className="bg-primary-500 w-[8.5rem] h-px" />
      </div>
      <h1 className="pb-[3.75rem] font-bold text-center typography-h2">
        World-Class Doctors, Dedicated to Your Care
      </h1>

      <TeamSlider data={[...teamMembers, ...teamMembers]} />
    </div>
  );
};
export default MeetExperts;
