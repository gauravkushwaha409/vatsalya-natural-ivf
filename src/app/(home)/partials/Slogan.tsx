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
    <div className=" relative flex justify-center items-center  font-semibold text-center leading-[150%]">
      <Image
        src="/svg/vatsalya-butterfly.svg"
        alt="Vatsalya Logo"
        width={200}
        height={200}
        className="absolute -top-24 left-44 -rotate-[110deg] -z-10 "
      />
      <AnimatingText className="justify-center mx-auto mb-20 max-w-[62.375rem] font-semibold text-text-300 typography-h4 leading-8">
        {` " ${cleanText} " `}
      </AnimatingText>
    </div>
  );
};

export default Slogan;
