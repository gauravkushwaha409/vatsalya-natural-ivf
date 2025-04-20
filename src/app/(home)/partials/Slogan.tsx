import AnimatingText from "@/components/AnimatingText";
import Image from "next/image";
import { IHomeMission } from "../interface/home.interface";

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
    <div className="relative flex justify-center items-center font-semibold text-center leading-[150%]">
      <Image
        src="/svg/vatsalya-butterfly.svg"
        alt="Vatsalya Logo"
        width={200}
        height={200}
        className="-top-20 left-10 md:left-20 lg:left-44 -z-10 absolute size-20 md:size-auto -rotate-[110deg]"
      />
      <AnimatingText className="justify-center mx-auto lg:mb-20 px-4 lg:px-1 max-w-[62.375rem] font-semibold text-text-300 leading-snug md:leading-8 typography-h4">
        {` " ${cleanText} " `}
      </AnimatingText>
    </div>
  );
};

export default Slogan;
