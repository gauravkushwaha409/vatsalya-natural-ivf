"use client";

import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import Image from "next/image";
import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { INoticeRoot } from "../interface/notice.interface";

const Notice = () => {
  const { data: noticeData } = useGetDataQuery<{ data: Partial<INoticeRoot> }>({
    url: endpoints.notice,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const records = noticeData?.data?.records || [];
  const totalRecords = records.length;

  useEffect(() => {
    if (totalRecords > 0) {
      setIsOpen(true);
    }
  }, [totalRecords]);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);

    if (!open) {
      if (currentIndex < totalRecords - 1) {
        setTimeout(() => {
          setCurrentIndex(currentIndex + 1);
          setIsOpen(true);
        }, 300);
      } else {
        setCurrentIndex(0);
      }
    }
  };

  if (totalRecords === 0) {
    return null;
  }

  const currentRecord = records[currentIndex];

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogOverlay className="bg-black/55">
        <DialogContent className="max-w-2xl mx-auto px-0 border-8 border-secondary-300  h-11/12 ">
          <div className="h-full w-full relative ">
            {currentRecord?.image && (
              <Image
                alt={currentRecord?.title || "Notice"}
                src={currentRecord.image}
                fill
                className="object-contain"
                priority
              />
            )}
          </div>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export default Notice;
