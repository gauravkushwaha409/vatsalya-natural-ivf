"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import useTabs from "../hooks/usetabs";

type Tab = {
  label: string;
  content: React.ReactNode;
};

type CustomTabProps = {
  tabs: Tab[];
};

const BasicTab: React.FC<CustomTabProps> = ({ tabs }) => {
  const {
    activeTab,
    setActiveTab,
    showLeftScroll,
    showRightScroll,
    scrollLeft,
    scrollRight,
    tabsContainerRef,
  } = useTabs({ tabs });
  return (
    <div className="relative">
      {/* Left scroll button */}
      {showLeftScroll && (
        <button
          onClick={scrollLeft}
          className="top-2 left-0 z-10 absolute bg-white hover:bg-gray-50 shadow-md -ml-4 p-1 rounded-full -translate-y-1/2"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} className="text-primary-500" />
        </button>
      )}

      {/* Tabs container */}
      <div className="overflow-hidden">
        <div
          ref={tabsContainerRef}
          className="flex gap-10 pb-2 overflow-x-scroll transition-all duration-300 no-scrollbar"
        >
          {tabs?.map((tab, index) => (
            <div
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setActiveTab(index);
                }
              }}
              key={index}
              className={`tab-item flex-shrink-0 text-base text-nowrap font-semibold hover:cursor-pointer ${
                activeTab === index ? "text-primary-500" : "text-text-600"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
              {activeTab === index ? (
                <div className="pt-2 transition-all duration-500 ease-in">
                  <hr className="border-0.5 border-primary-500 rounded-full" />
                </div>
              ) : (
                <div className="pt-2 transition-all duration-500 ease-in">
                  <hr className="border-0.5 border-secondary-50 rounded-full" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right scroll button */}
      {showRightScroll && (
        <button
          onClick={scrollRight}
          className="top-2 -right-0.5 z-10 absolute bg-white hover:bg-gray-50 shadow-md -mr-4 p-1 rounded-full -translate-y-1/2"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} className="text-primary-500" />
        </button>
      )}

      {/* Tab content */}
      <div className="pt-5">{tabs[activeTab]?.content}</div>
    </div>
  );
};

export default BasicTab;
