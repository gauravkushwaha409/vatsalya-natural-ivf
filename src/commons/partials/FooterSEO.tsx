"use client";
import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { IArticleRoot } from "@/interface/article.interface";
import { ICenterRoot } from "@/interface/center";
import PATHS from "@/utils/path";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { BsArrowsExpand } from "react-icons/bs";
import { ImShrink2 } from "react-icons/im";

const FooterSeo = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { data: article } = useGetDataQuery<{ data: IArticleRoot }>({
    url: endpoints.article,
  });
  const { data: branches } = useGetDataQuery<{ data: ICenterRoot }>({
    url: endpoints.center,
  });
  return (
    <div className="bg-primary-100 padding">
      <div className="flex justify-between items-center">
        <h3 className="mt-5 font-bold text-secondary-500 text-sm uppercase leading-[150%] tracking-[0.18rem] typography-paragraph-larger">
          Important Links
        </h3>
        <button
          onClick={() => setIsHidden((prev) => !prev)}
          className="size-4 text-secondary-500 text-xs cursor-pointer"
        >
          {isHidden ? (
            <BsArrowsExpand
              size={14}
              className="starting:opacity-0 starting:scale-0 transition-all duration-200"
            />
          ) : (
            <ImShrink2
              size={14}
              className="starting:opacity-0 -rotate-45 starting:scale-0 transition-all duration-200"
            />
          )}
        </button>
      </div>

      <motion.div
        animate={{ height: isHidden ? "0" : "auto" }}
        className="mt-2.5 overflow-hidden text-text-400"
      >
        <div className="flex flex-col gap-y-2">
          <div>
            <h3 className="font-medium text-secondary-500 typography-paragraph-larger">
              Clinics
            </h3>

            <div className="flex flex-wrap gap-y-2 mt-1 -ml-3 pb-4 divide-x">
              {branches?.data?.records?.map((item, index) => (
                <Link
                  className="px-3 border-background-800 font-manrope text-text-400 decoration-transparent hover:decoration-text-500 underline underline-offset-2 transition-all duration-200 typography-paragraph-regular"
                  key={index}
                  href={`${PATHS.clinic}/${item.slug}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <div>
            <h3 className="font-medium text-secondary-500 typography-paragraph-larger">
              Fertility
            </h3>

            <div className="flex flex-wrap gap-y-2 mt-1 -ml-3 pb-4 divide-x">
              {article?.data?.records?.map((item, index) => (
                <Link
                  className="px-3 border-background-800 font-manrope text-text-400 decoration-transparent hover:decoration-text-500 underline underline-offset-2 transition-all duration-200 typography-paragraph-regular"
                  key={index}
                  href={`${PATHS.article}/${item.slug}`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <hr className="bg-[#FFF1EF] w-full" />
    </div>
  );
};

export default FooterSeo;
