"use client";
import React from "react";

import { IArticleData } from "../interface/article.interface";
import Image from "next/image";

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

      {/* share + like section */}
    </div>
  );
};

export default ArticleDescription;
