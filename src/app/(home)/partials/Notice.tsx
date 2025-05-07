"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { INoticeRoot } from "../interface/notice.interface";

const Notice = () => {
  const { data: noticeData } = useGetDataQuery<{ data: Partial<INoticeRoot> }>({
    url: endpoints.notice,
  });

  const [currentIndex, setCurrentIndex] = useState(0); // Track the index of the current image
  const [isOpen, setIsOpen] = useState(true); // State to manage the dialog open/close

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            <div className="h-[25rem]">
              {noticeData?.data?.records &&
                noticeData.data.records.length > 0 && (
                  <Image
                    alt={
                      noticeData.data.records[currentIndex]?.title ||
                      "Default Title"
                    }
                    key={currentIndex}
                    src={noticeData.data.records[currentIndex]?.image || ""}
                    width={400}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                )}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Notice;
