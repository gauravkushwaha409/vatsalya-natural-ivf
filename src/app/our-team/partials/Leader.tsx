import Image from "next/image";
import React from "react";
import { ILeaderData } from "../interface/leader.interface";
import buterflysvg from "@/assests/icons/butterflyExpertise.svg";
interface Props {
  data: ILeaderData;
}
const Leader: React.FC<Props> = ({ data }) => {
  return (
    <section className="pt-20 padding">
      <div className="flex md:flex-row flex-col gap-10 col-span-2 sm:col-span-3 lg:col-span-4">
        <div className="relative rounded-tl-[50px] rounded-br-[50px] w-[18.125rem] aspect-[290/336] overflow-hidden shrink-0">
          <div
            className="relative rounded-tl-[50px] rounded-br-[50px] aspect-[290/336] overflow-hidden"
            style={{
              background: "linear-gradient(to right, #EBC0DB 0%, #FFD2CE 100%)",
            }}
          >
            <Image
              src={data?.leaderImage}
              alt="heropic"
              width={1920}
              height={1080}
              className="z-10 absolute w-full h-full object-cover"
            />
            <div className="top-10 -right-3 z-0 absolute h-36">
              <Image
                src={buterflysvg}
                alt="heropic"
                width={1920}
                height={1080}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* <div className="top-10 -right-3 z-0 absolute h-36">
                <Image
                  src={buterflysvg}
                  alt="heropic"
                  width={1920}
                  height={1080}
                  className="w-full h-full"
                />
              </div> */}
        </div>
        <div className="space-y-[0.88rem]">
          <h2 className="font-bold leading-[150%] typography-h2">
            {data?.leaderName}
          </h2>
          <p className="font-semibold text-text-500 typography-h4">
            {data?.leaderPosition}
          </p>
          <p
            className="text-text-400 leading-[150%] typography-paragraph-small porse"
            dangerouslySetInnerHTML={{
              __html: data?.leaderMessage || "",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Leader;
