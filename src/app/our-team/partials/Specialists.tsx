"use client";
import { motion } from "motion/react";
import Image from "next/image";
import React, { JSX, useState } from "react";
import { IOurExpertsData } from "../interface/ourExperts.interface";
import TeamCard from "./TeamCard";

interface SpecialistsProps {
  data: IOurExpertsData;
  managementTeam: IOurExpertsData;
}
type TabsID = "bod" | "specialist" | "management";

const Specialists: React.FC<SpecialistsProps> = ({ data, managementTeam }) => {
  const tabs: {
    id: TabsID;
    name: string;
    content?: JSX.Element;
  }[] = [
    // {
    //   id: "bod",
    //   name: "Board of Directors",
    // },
    {
      id: "specialist",
      name: "IVF Specialists",
      content: <TeamCard data={data} />,
    },
    {
      id: "management",
      name: "Management Team",
      content: <TeamCard data={managementTeam} showView={false} />,
    },
  ];
  const [activeTab, setActiveTab] = useState<TabsID>(tabs[0].id);

  return (
    <section className="pb-20 padding">
      <div className="flex flex-col items-center pb-4 my-5">
        <div className="flex p-2 border border-secondary-50 rounded-full max-w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${
                tab.id == activeTab ? "text-primary-500" : ""
              } relative px-2 py-1 md:px-5 md:py-2 max-md:text-xs typography-paragraph-large cursor-pointer font-semibold ease-in-out rounded-full hover:border-primary-500 transition-colors delay-75 duration-300`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
              {tab.id == activeTab && (
                <motion.div
                  layoutId="our-team-tab"
                  className="-z-10 absolute inset-0 bg-primary-50 rounded-full"
                ></motion.div>
              )}
            </button>
          ))}
        </div>
        <div className="w-full pt-0 lg:pt-10">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </section>
  );
};

export default Specialists;
