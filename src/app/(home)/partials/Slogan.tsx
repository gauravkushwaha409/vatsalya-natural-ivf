import AnimatingText from "@/components/AnimatingText";
import { IHomeMission } from "../interface/home.interface";
import Image from "next/image";

type SloganProps = {
  data: IHomeMission;
};

const stripHtml = (htmlString: string): string => {
  if (typeof window !== "undefined") {
    const div = document.createElement("div");
    div.innerHTML = htmlString;
    return div.textContent || div.innerText || "";
  }

  return htmlString.replace(/<[^>]*>/g, "").trim();
};

const Slogan: React.FC<SloganProps> = ({ data }) => {
  const cleanText = stripHtml(data?.ourMission || "");

  return (
    <div className=" relative flex justify-center items-center min-h-64 font-semibold text-center leading-[150%]">
      <Image
        src="/svg/vatsalya-butterfly.svg"
        alt="Vatsalya Logo"
        width={200}
        height={200}
        className="absolute top-1/12 left-24 -rotate-[110deg] -z-10 "
      />
      <AnimatingText className="justify-center mx-auto my-4 mb-56 max-w-[62.375rem] font-semibold text-text-300 typography-h4">
        {cleanText}
      </AnimatingText>
    </div>
  );
};

export default Slogan;
