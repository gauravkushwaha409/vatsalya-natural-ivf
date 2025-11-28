"use client";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import { cn } from "@/utils/cn";
import PATHS from "@/utils/path";
import { ChevronDown, Search } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  return (
    <div className="bg-primary-50 u-padding-x">
      <BreadCrumb />
      <SearchBox />
      <div className="relative mt-20 h-30">
        <DatePicker className="absolute right-0" />
        <div className="absolute bottom-12 w-full h-[1px] bg-[#CECECE]" />
      </div>
    </div>
  );
};

const BreadCrumb = () => {
  return (
    <div className="pt-5 flex flex-col items-center justify-center">
      <CustomBreadcrumb
        items={[
          { name: "Home", isHome: true, link: PATHS.home },
          { name: "Event" },
        ]}
      />
      <p className="mt-2.5 text-secondary-500 text-center font-urbanist text-[2.5rem] font-extrabold leading-[150%] tracking-[-0.78px]">
        Event
      </p>
      <p className="w-2xl mx-auto text-[#828282] text-center font-urbanist font-medium leading-[150%] tracking-[-0.28px]">
        Browse and manage photos from company events, conferences, and team
        activities. View albums, download media, and share moments .
      </p>
    </div>
  );
};

const SearchBox = () => {
  return (
    <div className="mt-6 p-2 w-2xl mx-auto flex items-center justify-between rounded-full bg-[#f7e1e0]">
      <InputSearch />
      <div className="w-1/2">
        <SearchSelect
          onChange={() => {}}
          options={[{ label: "hello", value: "hello" }]}
        />
      </div>
    </div>
  );
};

const InputSearch = () => {
  return (
    <input
      type="text"
      className="p-2.5 text-[#5c5c5c] border-none outline-none font-urbanist text-sm font-normal leading-5.5"
    />
  );
};

// Search Select
interface Option {
  label: string;
  value: string;
}
interface Props {
  options: Option[];
  placeholder?: string;
  onChange: (value: Option) => void;
}
const SearchSelect: React.FC<Props> = ({ options, placeholder, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<Option[]>(options);
  const [highlightIndex, setHighlightIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setFiltered(
      options.filter((opt) =>
        opt.label.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, options]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selectOption = (opt: Option) => {
    setSearch(opt.label);
    setIsOpen(false);
    onChange(opt);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    if (e.key === "ArrowDown") {
      setHighlightIndex((prev) => (prev + 1) % filtered.length);
    }
    if (e.key === "ArrowUp") {
      setHighlightIndex((prev) => (prev <= 0 ? filtered.length - 1 : prev - 1));
    }
    if (e.key === "Enter") {
      selectOption(filtered[highlightIndex]);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      onKeyDown={handleKeyDown}
    >
      {/* Input */}
      <input
        type="text"
        value={search}
        placeholder={placeholder || "Select option"}
        onClick={() => setIsOpen(true)}
        onChange={(e) => {
          setSearch(e.target.value);
          setIsOpen(true);
        }}
        className="w-full border-none rounded-lg px-4 py-2 outline-none"
      />

      {/* Dropdown */}
      {isOpen && (
        <ul className="absolute left-0 right-0 mt-2 border rounded-lg max-h-48 overflow-y-auto shadow-lg z-50">
          {filtered.length === 0 ? (
            <li className="px-4 py-2 text-gray-500">No options found</li>
          ) : (
            filtered.map((opt, index) => (
              <li
                key={opt.value}
                onClick={() => selectOption(opt)}
                className={`px-4 py-2 cursor-pointer hover:bg-blue-100
                  ${index === highlightIndex ? "bg-blue-100" : ""}
                `}
              >
                {opt.label}
              </li>
            ))
          )}
        </ul>
      )}

      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-x-1">
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsOpen((prev) => !prev);
          }}
          className="flex items-center gap-x-1"
        >
          <span className="typo-sub-h3-reg text-text-500">Event</span>
          <ChevronDown className="size-6" />
        </button>
        <span className="flex items-center justify-center p-2.5 bg-primary-500 rounded-full">
          <Search className="size-6 text-white" />
        </span>
      </div>
    </div>
  );
};

// Date Picker
const DatePicker = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        `px-6 py-4 w-fit rounded-full border border-primary-200 flex items-center`,
        className
      )}
    >
      <input
        placeholder="Date"
        type="date"
        className="border-none outline-none no-calendar bg-transparent text-black font-urbanist text-[1.25rem] font-normal leading-6"
      />
      <button>
        <ChevronDown className="size-6 text-text-400" />
      </button>
    </div>
  );
};
export default HeroSection;
