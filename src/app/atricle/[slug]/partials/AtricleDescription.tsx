"use client";
import React from "react";

import { IArticleData } from "../interface/article.interface";
import Image from "next/image";
import Faq from "@/components/Faqs";

interface AtricleDescriptionProps {
  data: IArticleData;
}

const ArticleDescription: React.FC<AtricleDescriptionProps> = ({ data }) => {
  return (
    <div>
      <div className="pt-5 lg:py-10 aspect-[1071/428]">
        <Image
          src={data?.image}
          alt="hero blog detail"
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mb-10">
        <p
          className="typography-paragraph-large text-text-500 text-justify leading-[150%]"
          dangerouslySetInnerHTML={{ __html: data?.description }}
        />
      </div>
      {data?.faqs?.length > 0 ? (
        <div className="mb-10">
          <div className="flex items-center gap-3 py-5">
            <span className="font-bold text-primary-500 uppercase tracking-widest typography-paragraph-regular">
              FAQs
            </span>
            <div className="border border-primary-400 border-t w-21"></div>
          </div>
          <h2 className="pb-4 font-semibold typography-h2">
            Answers to Your Fertility Questions
          </h2>
          <Faq faq={data?.faqs} />
        </div>
      ) : null}
    </div>
  );
};

export default ArticleDescription;
