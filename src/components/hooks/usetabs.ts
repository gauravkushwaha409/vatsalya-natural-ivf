import { useEffect, useRef, useState } from "react";

type Tab = {
  label: string;
  content: React.ReactNode;
};

type CustomTabProps = {
  tabs: Tab[];
};
const useTabs = ({ tabs }: CustomTabProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(false);
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  // Check if scrolling buttons should be visible
  const checkScrollButtons = () => {
    if (tabsContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsContainerRef.current;
      setShowLeftScroll(scrollLeft > 0);
      setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

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
  return {
    activeTab,
    setActiveTab,
    scrollLeft,
    scrollRight,
    showLeftScroll,
    showRightScroll,
    tabsContainerRef,
  };
};

export default useTabs;
