import Stats from "@/components/Stats";
import { IStatsData } from "@/interface/stats.interface";
import Image from "next/image";

type ShowCaseItemProps = {
  data: IStatsData;
};

const Showcase: React.FC<ShowCaseItemProps> = ({ data }) => {
  return (
    <div
      style={{
        background: "url(/noise.png) #fff1ef",
      }}
      className="flex lg:flex-row flex-col justify-between px-4 sm:px-8 md:px-12 lg:px-20 py-4 items-center gap-20"
    >
      <div className="mx-auto lg:mx-0">
        <Image
          src={data?.statsImage}
          alt="Showcase"
          width={1200}
          height={800}
          className="w-full lg:w-min h-auto lg:h-[22.625rem] object-contain aspect-auto"
        />
      </div>
      <div>
        <Stats data={data} />
      </div>
    </div>
  );
};

export default Showcase;
