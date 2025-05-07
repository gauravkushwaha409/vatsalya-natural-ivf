"use client";
import React, { useState } from "react";
import { add, format } from "date-fns";
import OvulationRenderCell from "./OvulationRenderCell";
import RequestCallForm from "./RequestCallForm";
import Cycle from "./Cycle";
import { IOvulationData } from "../interface/ovulation.interface";

interface CalendarProps {
  data: IOvulationData;
}
const Calendar: React.FC<CalendarProps> = ({ data }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const renderHeader = () => {
    const monthYear = format(currentDate, "MMMM yyyy");
    return (
      <div className="flex justify-between items-center p-4 header">
        <button
          className="text-[#9B51E0] text-sm"
          onClick={() => setCurrentDate(add(currentDate, { months: -1 }))}
        >
          ❮
        </button>
        <h2 className="font-medium text-primary text-base">{monthYear}</h2>
        <button
          className="text-[#9B51E0] text-sm"
          onClick={() => setCurrentDate(add(currentDate, { months: 1 }))}
        >
          ❯
        </button>
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
    setSelectedDate(date);
  };

  return (
    <div className="my-10 padding ">
      <div className="flex flex-col items-center ">
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
      <div className="flex lg:flex-row flex-col  gap-10  py-10 w-full ">
        <div className="  w-full lg:w-3/4">
          <div className="flex flex-col lg:flex-row  gap-10">
            <div
              className=" aspect-square  h-fit items-center shadow-sm px-5 rounded-xl pt-5
        "
            >
              <h1 className="pb-2.5 border-secondary-100 border-b-2 font-medium text-center typography-paragraph-large">
                Select the first day of your last period
              </h1>

              <div>{renderHeader()}</div>
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
            <Cycle />
          </div>
          <p
            className="prose py-10 overflow-hidden min-w-full"
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
