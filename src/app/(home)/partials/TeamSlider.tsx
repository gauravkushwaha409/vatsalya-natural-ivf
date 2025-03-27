"use client"

import Image from "next/image";

interface TeamSliderProps { data: { name: string; title: string; image: string; description: string; }[]; }
const TeamSlider: React.FC<TeamSliderProps> = ({ data }) => {
  const activeIndex = 0;
  const getStylesForIndex = (index: number) => {
    switch (index) {
      case 1:
        return { minWidth: "30rem", minHeight: "38.3331rem", };
      default:
        return {minWidth:"11.25rem", minHeight:"14.375rem"};
    }
  }
  return(
    <div className="relative flex items-end gap-[1.25rem] mx-20 min-h-[38.3331rem]">
      
    {data.map((member, index) => (
      <div key={index} style={getStylesForIndex(index)} className="flex w-full h-full">
        <Image src={member.image} alt={member.name} height={2000} width={1000} className="w-full object-cover grow" />
      </div>
    ))}
      <div className="top-0 left-1/2 absolute space-y-3">
        <h1 className="font-semibold typography-h4">{data[activeIndex].name}</h1>
        <h2 className="font-semibold text-text-500 typography-paragraph-large">{data[activeIndex].title}</h2>
        <p className="font-medium text-text-300 typography-paragraph-regular">{data[activeIndex].description}</p>
      </div>
    </div>
  );
};
export default TeamSlider