"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Tab = {
  label: string;
  content: React.ReactNode;
};

type CustomTabProps = {
  tabs: Tab[];
};

const BasicTab: React.FC<CustomTabProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(false);
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  // Check if scrolling buttons should be visible
  const checkScrollButtons = () => {
    if (tabsContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsContainerRef.current;
      setShowLeftScroll(scrollLeft > 0);
      setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 1); // -1 for rounding errors
    }
  };

  // Set up scroll checking on mount and when tabs change
  useEffect(() => {
    checkScrollButtons();
    // Add event listener for scroll
    const currentRef = tabsContainerRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", checkScrollButtons);
    }

    // Clean up
    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", checkScrollButtons);
      }
    };
  }, [tabs]);

  // Scroll to active tab when it changes
  useEffect(() => {
    if (tabsContainerRef.current && tabs.length > 0) {
      const tabElements =
        tabsContainerRef.current.querySelectorAll(".tab-item");
      if (tabElements[activeTab]) {
        const tabElement = tabElements[activeTab] as HTMLElement;
        const container = tabsContainerRef.current;

        // Calculate the scroll position to center the active tab
        const tabLeft = tabElement.offsetLeft;
        const tabWidth = tabElement.offsetWidth;
        const containerWidth = container.offsetWidth;

        const scrollTo = tabLeft - containerWidth / 2 + tabWidth / 2;

        container.scrollTo({
          left: scrollTo,
          behavior: "smooth",
        });
      }
    }
  }, [activeTab, tabs.length]);

  // Scroll functions
  const scrollLeft = () => {
    if (tabsContainerRef.current) {
      const scrollAmount = tabsContainerRef.current.clientWidth / 2;
      tabsContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (tabsContainerRef.current) {
      const scrollAmount = tabsContainerRef.current.clientWidth / 2;
      tabsContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      {/* Left scroll button */}
      {showLeftScroll && (
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-2   -translate-y-1/2 bg-white rounded-full shadow-md p-1 z-10 hover:bg-gray-50 -ml-4"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} className="text-primary-500" />
        </button>
      )}

      {/* Tabs container */}
      <div className="overflow-hidden">
        <div
          ref={tabsContainerRef}
          className="flex gap-10 overflow-x-scroll no-scrollbar pb-2 transition-all duration-300"
        >
          {tabs?.map((tab, index) => (
            <div
              key={index}
              className={`tab-item flex-shrink-0 text-base text-nowrap font-semibold hover:cursor-pointer ${
                activeTab === index ? "text-primary-500" : "text-text-600"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
              {activeTab === index ? (
                <div className="pt-2 transition-all duration-500 ease-in">
                  <hr className="border-0.5 rounded-full border-primary-500" />
                </div>
              ) : (
                <div className="pt-2 transition-all duration-500 ease-in">
                  <hr className="border-0.5 rounded-full border-secondary-50" />
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
          className="absolute -right-0.5 top-2 -translate-y-1/2 bg-white rounded-full shadow-md p-1 z-10 hover:bg-gray-50 -mr-4"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} className="text-primary-500" />
        </button>
      )}

      {/* Tab content */}
      <div className="tab-content pt-5">{tabs[activeTab]?.content}</div>
    </div>
  );
};

export default BasicTab;
