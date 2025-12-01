import Stats from "@/components/Stats";
import { IStatsData } from "@/interface/stats.interface";
import Image from "next/image";

type ShowCaseItemProps = {
  data: IStatsData;
};

const Showcase: React.FC<ShowCaseItemProps> = ({ data }) => {
  return (
    <div className="max-w-app py-7 flex bg-background-100 lg:flex-row flex-col justify-between items-center gap-8 lg:gap-20 padding">
      <Image
        src={data?.statsImage}
        alt="Showcase"
        width={1200}
        height={800}
        className="w-40 h-auto lg:h-44 object-contain "
      />

      <Stats data={data} />
    </div>
  );
};

export default Showcase;
