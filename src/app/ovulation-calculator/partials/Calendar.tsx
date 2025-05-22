"use client";
import { add, format, isAfter, isBefore, isSameMonth } from "date-fns";
import React, { useState } from "react";
import { IOvulationData } from "../interface/ovulation.interface";
import Cycle from "./Cycle";
import OvulationRenderCell from "./OvulationRenderCell";
import RequestCallForm from "./RequestCallForm";
import Result from "./Result";

interface CalendarProps {
  data: IOvulationData;
}
const Calendar: React.FC<CalendarProps> = ({ data }) => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [cycleLength, setCycleLength] = useState(28);

  const [isResultshown, setIsResultsShown] = useState(false);

  const renderHeader = () => {
    const monthYear = format(currentDate, "MMMM yyyy");
    return (
      <div className="flex justify-between items-center p-4 header">
        {isAfter(currentDate, add(today, { months: -4 })) && (
          <button
            className="text-[#9B51E0] text-sm"
            onClick={() => setCurrentDate(add(currentDate, { months: -1 }))}
          >
            ❮
          </button>
        )}
        <h2 className="mx-auto font-medium text-primary text-base">
          {monthYear}
        </h2>
        {isBefore(currentDate, add(today, { months: -1 })) && (
          <button
            className="text-[#9B51E0] text-sm"
            onClick={() => setCurrentDate(add(currentDate, { months: 1 }))}
          >
            ❯
          </button>
        )}
      </div>
    );
  };

  const renderDays = () => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return (
      <div className="grid grid-cols-7 text-[12px] text-gray-500 text-center uppercase">
        {daysOfWeek.map((day) => (
          <div key={day} className="p-2 font-bold">
            {day}
          </div>
        ))}
      </div>
    );
  };
  const handleDateSelect = (date: Date) => {
    // handle previous month
    if (isSameMonth(date, add(currentDate, { months: -1 }))) {
      setCurrentDate(add(currentDate, { months: -1 }));
      setSelectedDate(date);
    }
    // handle next month
    else if (isSameMonth(date, add(currentDate, { months: 1 }))) {
      setCurrentDate(add(currentDate, { months: 1 }));
      setSelectedDate(date);
    } else setSelectedDate(date);
  };

  return (
    <div className="my-10 padding">
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center gap-4 w-full">
          {/* line  */}
          <div className="flex-1 bg-primary-400 max-w-[148px] h-px"></div>

          <h2 className="font-bold text-primary-500 text-sm md:text-base uppercase leading-[24px] tracking-widest">
            Ovulation Calculator And Calendar
          </h2>
          {/* line  */}
          <div className="flex-1 bg-primary-400 max-w-[148px] h-px"></div>
        </div>
        <p className="mx-auto pt-4 max-w-[95.5%] text-text-400 text-center leading-[150%] typography-paragraph-regular">
          Menstrual cycles vary among women and month to month. Use this
          calculator to find your most fertile days.
        </p>
      </div>
      <div className="flex lg:flex-row flex-col gap-10 py-10 w-full">
        <div className="w-full lg:w-3/4">
          {!isResultshown ? (
            <div className="flex lg:flex-row flex-col gap-10 starting:opacity-0 transition-opacity">
              <div className="items-center shadow-sm px-5 pt-5 rounded-xl h-fit aspect-square">
                <p className="pb-2.5 border-secondary-100 border-b-2 font-medium text-center typography-paragraph-large">
                  Select the first day of your last period
                </p>

                <div key={currentDate.toDateString()}>{renderHeader()}</div>
                <div>{renderDays()}</div>
                <div>
                  <OvulationRenderCell
                    currentDate={currentDate}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    onDateSelect={handleDateSelect}
                  />
                </div>
              </div>
              <Cycle
                defaultValue={cycleLength}
                onChange={(val) => setCycleLength(val)}
                disabled={!selectedDate || !cycleLength}
                oncalculate={() => setIsResultsShown(true)}
              />
            </div>
          ) : (
            selectedDate &&
            cycleLength && (
              <Result
                onRestartClick={() => setIsResultsShown(false)}
                cycleLength={cycleLength}
                selectedDate={selectedDate}
              />
            )
          )}
          <p
            className="py-10 min-w-full overflow-hidden prose"
            dangerouslySetInnerHTML={{ __html: data?.records[0]?.description }}
          />
        </div>
        <div className="w-full lg:w-2/6">
          <RequestCallForm />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
