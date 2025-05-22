"use client";
import CustomPagination from "@/components/CustomPagination";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import React, { JSX, useRef, useState } from "react";
import TeamCard from "../../../components/cards/TeamCard";
import { IOurExpertsData } from "../interface/ourExperts.interface";

interface SpecialistsProps {
  data: IOurExpertsData;
  managementTeam: IOurExpertsData;
}
type TabsID = "bod" | "specialist" | "management";

const Specialists: React.FC<SpecialistsProps> = ({ data, managementTeam }) => {
  const router = useRouter();
  const tabs: {
    id: TabsID;
    name: string;
    content?: JSX.Element;
  }[] = [
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

  const containerRef = useRef<HTMLDivElement>(null);
  // pagination logic
  const noOfPages =
    activeTab === "specialist" ? data.totalPages : managementTeam.totalPages;
  const currentPage =
    activeTab === "specialist" ? data.currentPage : managementTeam.currentPage;
  const handlePageChange = (page: number) => {
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set(
      activeTab === "specialist" ? "expertPage" : "managementPage",
      page.toString()
    );
    router.push(newUrl.toString(), { scroll: false });
    containerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="pb-20 padding">
      <div
        ref={containerRef}
        className="flex flex-col items-center my-5 pb-4 scroll-mt-28"
      >
        <div className="flex p-2 border border-secondary-50 rounded-full max-w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${
                tab.id == activeTab ? "text-primary-500" : ""
              } relative px-2 py-1 md:px-5 md:py-2 max-md:text-xs typography-paragraph-large cursor-pointer font-semibold ease-in-out rounded-full hover:border-primary-500 transition-colors delay-75 duration-300`}
              onClick={() => {
                router.replace(window.location.pathname, { scroll: false });
                setActiveTab(tab.id);
              }}
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
        <div className="pt-0 lg:pt-10 w-full">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
        <div>
          <CustomPagination
            currentPage={currentPage}
            pageCount={noOfPages}
            onPageChange={handlePageChange}
            perPage={10}
            totalItems={10}
          />
        </div>
      </div>
    </section>
  );
};

export default Specialists;
