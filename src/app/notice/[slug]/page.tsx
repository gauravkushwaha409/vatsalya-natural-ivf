import { getData } from "@/api/axios";
import React from "react";
import ErrorMessage from "@/components/ErrorMessage";
import Image from "next/image";

export interface NoticeData {
  object: string;
  id: string;
  slug: string;
  title: string;
  image: string;
  status: boolean;
  heroImage: string;
  description: string;
  hasDetails: boolean;
  created_date: string;
  updated_date: string;
}

export interface INoticeRoot {
  status: string;
  statusCode: number;
  message: string;
  data: NoticeData;
}

interface NoticePageProps {
  params: Promise<{ slug: string }>;
}

const NoticePage: React.FC<NoticePageProps> = async ({ params }) => {
  try {
    const { slug } = await params;
    const response = await getData<INoticeRoot>(`/notice/slug/${slug}`);
    const notice = response?.data;
    console.log(notice);

    if (!notice) {
      return <div className="p-6">Notice not found</div>;
    }

    return (
      <div className="px-6 md:px-16 mt-10">
        {notice.heroImage && (
          <Image
            src={notice?.heroImage}
            alt={notice?.title}
            width={800}
            height={400}
            className="mb-6 w-full rounded-lg"
          />
        )}
        <div
          className="mb-4"
          dangerouslySetInnerHTML={{ __html: notice?.description }}
        />
      </div>
    );
  } catch (error) {
    console.error("Error fetching notice details:", error);
    return (
      <div className="flex justify-center items-center h-screen">
        <ErrorMessage />
      </div>
    );
  }
};

export default NoticePage;
