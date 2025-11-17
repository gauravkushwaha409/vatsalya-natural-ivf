import Stats from "@/components/Stats";
import { IStatsData } from "@/interface/stats.interface";
import Image from "next/image";

type ShowCaseItemProps = {
  data: IStatsData;
};

const Showcase: React.FC<ShowCaseItemProps> = ({ data }) => {
  return (
    <div className="flex bg-[linear-gradient(180deg,_#FFE8E7_0%,_rgba(253,252,251,0)_100%)] lg:flex-row flex-col justify-between items-center gap-20 px-4 sm:px-8 md:px-12 lg:px-20 py-4 mb-20">
      <div className="mx-auto lg:mx-0">
        <Image
          src={data?.statsImage}
          alt="Showcase"
          width={1200}
          height={800}
          className="w-full lg:w-[160.99px] h-auto lg:h-[171px] object-contain "
        />
      </div>
      <div>
        <Stats data={data} />
      </div>
    </div>
  );
};

export default Showcase;
