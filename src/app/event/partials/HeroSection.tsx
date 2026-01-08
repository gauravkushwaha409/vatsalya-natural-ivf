"use client";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import { cn } from "@/utils/cn";
import PATHS from "@/utils/path";
import { ChevronDown, Search } from "lucide-react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { IEventHeaderType } from "../interface/event.interface";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "@/hooks/useDebounce";

const HeroSection = ({ data }: { data: IEventHeaderType }) => {
  return (
    <div className="bg-primary-50 u-padding-x">
      <BreadCrumb data={data} />
      <SearchBox />
      <div className="relative h-30">
        <div className="bottom-16 absolute bg-[#CECECE] w-full h-[1px]" />
      </div>
    </div>
  );
};

const BreadCrumb = ({ data }: { data: IEventHeaderType }) => {
  return (
    <div className="flex flex-col justify-center items-center pt-5">
      <CustomBreadcrumb
        items={[
          { name: "Home", isHome: true, link: PATHS.home },
          { name: "Event" },
        ]}
      />
      <p className="mt-2.5 font-urbanist font-extrabold text-[2.5rem] text-secondary-500 text-center leading-[150%] tracking-[-0.78px]">
        {data?.title}
      </p>
      <p className="mx-auto font-urbanist font-medium text-[#828282] text-center leading-[150%] tracking-[-0.28px]">
        {data?.subtitle}
      </p>
    </div>
  );
};

const SearchBox = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // 1. Local state for input
  const [input, setInput] = useState(searchParams.get("search") ?? "");

  // 2. Debounce value
  const debouncedSearch = useDebounce(input, 500);

  // 3. Update URL when debounced value changes
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (debouncedSearch.length >= 2) {
      params.set("search", debouncedSearch);
    } else if (debouncedSearch.length === 0) {
      params.delete("search");
    }

    router.replace(`${pathname}?${params.toString()}`);
  }, [debouncedSearch]);

  // 4. Handle input
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value);
    },
    []
  );

  return (
    <div className="flex justify-between items-center bg-[#f7e1e0] mx-auto mt-6 p-2 rounded-full max-w-2xl">
      <input
        placeholder="What are you looking for?"
        type="text"
        className="p-2.5 border-none outline-none w-full font-urbanist font-normal text-[#5c5c5c] text-sm leading-5.5"
        onChange={handleInputChange}
        value={input}
      />
    </div>
  );
};

export default HeroSection;
