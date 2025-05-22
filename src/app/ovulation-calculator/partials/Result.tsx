import { Button } from "@/components/ui/button";
import React, { useEffect, useRef } from "react";

const calculateOvulationData = (lmp: Date, cycleLength: number) => {
  const ovulationDate = new Date(lmp);
  ovulationDate.setDate(lmp.getDate() + (cycleLength - 14));

  const fertileWindowStart = new Date(ovulationDate);
  fertileWindowStart.setDate(ovulationDate.getDate() - 4);

  const fertileWindowEnd = new Date(ovulationDate);
  fertileWindowEnd.setDate(ovulationDate.getDate() + 1);

  const nextPeriodDate = new Date(lmp);
  nextPeriodDate.setDate(lmp.getDate() + cycleLength);

  const pregnancyTestDate = new Date(ovulationDate);
  pregnancyTestDate.setDate(ovulationDate.getDate() + 14); // 14 days after ovulation

  return {
    ovulationDate,
    fertileWindowStart,
    fertileWindowEnd,
    nextPeriodDate,
    pregnancyTestDate,
  };
};

const formatDate = (date: Date) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const Result: React.FC<{
  selectedDate: Date;
  cycleLength: number;
  onRestartClick: () => void;
}> = ({ cycleLength, selectedDate, onRestartClick }) => {
  const {
    ovulationDate,
    fertileWindowStart,
    fertileWindowEnd,
    nextPeriodDate,
    pregnancyTestDate,
  } = calculateOvulationData(selectedDate, cycleLength);

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);
  return (
    <div
      ref={ref}
      className="starting:opacity-0 mx-auto mt-10 px-4 py-8 max-w-3xl transition-opacity"
    >
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="relative mb-6 font-light text-gray-600 text-xl tracking-wide">
          <span className="inline-block z-10 relative bg-white px-4">
            RESULTS
          </span>
          <div className="z-0 absolute inset-0 flex items-center">
            <div className="border-gray-300 border-t w-full"></div>
          </div>
        </h1>

        <div className="text-center">
          <p className="text-gray-600">Your Cycle is</p>
          <p className="font-medium text-[#b33b62] text-4xl">
            {cycleLength} Days
          </p>
        </div>
      </div>

      {/* Results Grid */}
      <div className="gap-6 grid grid-cols-1 md:grid-cols-4 mb-12">
        {/* Fertile Window */}
        <div className="flex flex-col items-center">
          <FertileWindowIcon className="mb-4 w-16 h-16 text-[#b33b62]" />
          <h3 className="mb-2 font-medium text-gray-700 text-xs uppercase tracking-wider">
            FERTILE WINDOW
          </h3>
          <p className="text-sm text-center">
            {formatDate(fertileWindowStart)} to {formatDate(fertileWindowEnd)}
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:flex justify-center items-center">
          <div className="border-primary-500 border-l border-dashed h-full"></div>
        </div>

        {/* Approximate Ovulation */}
        <div className="flex flex-col items-center">
          <OvulationIcon className="mb-4 w-16 h-16 text-[#b33b62]" />
          <h3 className="mb-2 font-medium text-gray-700 text-xs uppercase tracking-wider">
            APPROXIMATE OVULATION
          </h3>
          <p className="text-sm text-center">{formatDate(ovulationDate)}</p>
        </div>

        {/* Divider */}
        <div className="hidden md:flex justify-center items-center">
          <div className="border-primary-500 border-l border-dashed h-full"></div>
        </div>

        {/* Next Period */}
        <div className="flex flex-col items-center">
          <PeriodIcon className="mb-4 w-16 h-16 text-[#b33b62]" />
          <h3 className="mb-2 font-medium text-gray-700 text-xs uppercase tracking-wider">
            NEXT PERIOD
          </h3>
          <p className="text-sm text-center">{formatDate(nextPeriodDate)}</p>
        </div>

        {/* Divider */}
        <div className="hidden md:flex justify-center items-center">
          <div className="border-primary-500 border-l border-dashed h-full"></div>
        </div>

        {/* Pregnancy Test Day */}
        <div className="flex flex-col items-center">
          <PregnancyTestIcon className="mb-4 w-16 h-16 text-[#b33b62]" />
          <h3 className="mb-2 font-medium text-gray-700 text-xs uppercase tracking-wider">
            PREGNANCY TEST DAY
          </h3>
          <p className="text-sm text-center">{formatDate(pregnancyTestDate)}</p>
        </div>
      </div>

      {/* Start Over Button */}
      <div className="flex justify-center">
        <Button
          onClick={onRestartClick}
          className="bg-[#b33b62] hover:bg-[#9a3355] px-8 py-2 text-white"
        >
          Start over
        </Button>
      </div>
    </div>
  );
};
export default Result;

function FertileWindowIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 12 a3,3 0 1,0 0,-0.1 z" />
      <circle cx="9" cy="10" r="1" />
      <circle cx="15" cy="14" r="1" />
      <circle cx="10" cy="15" r="1" />
    </svg>
  );
}

function OvulationIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

function PeriodIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      <path d="M8 14 a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0" />
    </svg>
  );
}

function PregnancyTestIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="4" width="20" height="5" rx="1" />
      <path d="M4 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9" />
      <path d="M10 14h4" />
    </svg>
  );
}
