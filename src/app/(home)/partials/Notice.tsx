"use client";

import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import Image from "next/image";
import { useEffect, useState } from "react";
import { INoticeRoot } from "../interface/notice.interface";

const SESSION_KEY = "notices_shown";

const Notice = () => {
  const { data: noticeData } = useGetDataQuery<{ data: Partial<INoticeRoot> }>({
    url: endpoints.notice,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);

  const records = noticeData?.data?.records || [];
  const totalRecords = records.length;

  useEffect(() => {
    const hasShown = sessionStorage.getItem(SESSION_KEY);
    if (!hasShown && totalRecords > 0) {
      setIsOpen(true);
      setShouldShow(true);
    }
  }, [totalRecords]);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);

    if (!open) {
      if (currentIndex < totalRecords - 1) {
        setTimeout(() => {
          setCurrentIndex((prev) => prev + 1);
          setIsOpen(true);
        }, 300);
      } else {
        // After all notices shown, set session flag
        sessionStorage.setItem(SESSION_KEY, "true");
        setCurrentIndex(0);
        setShouldShow(false);
      }
    }
  };

  if (!shouldShow || totalRecords === 0) {
    return null;
  }

  const currentRecord = records[currentIndex];

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogOverlay className="bg-black/55">
        <DialogContent className="mx-auto px-0 border-8 border-secondary-300 max-w-2xl h-11/12">
          <div className="relative w-full h-full">
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
