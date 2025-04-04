import {
  add,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  startOfDay,
} from "date-fns";

interface CalendarProps {
  selectService?: string;
  currentDate: Date;
  selectedDate: Date | null;
  dummyAvailableDates?: string[];
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>;
  setShwowTime: React.Dispatch<React.SetStateAction<boolean>>;
}
const RenderCells: React.FC<CalendarProps> = ({
  currentDate,
  selectedDate,
  dummyAvailableDates,
  setSelectedDate,
  setShwowTime,
}) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let tempDay = startDate;

  while (tempDay <= endDate) {
    for (let i = 0; i < 7; i++) {
      const currentDay = tempDay;
      const isInCurrentMonth = isSameMonth(currentDay, monthStart);
      const isSelected = selectedDate && isSameDay(currentDay, selectedDate);
      const isAviable = dummyAvailableDates?.some((date) => {
        return isSameDay(startOfDay(date), startOfDay(currentDay));
      });
      const getDayClasses = () => {
        switch (true) {
          case isSelected:
            return "bg-secondary-500 rounded-full shadow-box text-white w-10";
          case isAviable:
            return "bg-secondary-50 w-10  rounded-full shadow-lg text-secondary-500 border border-secondary-100";
          case isInCurrentMonth:
            return "!pointer-events-none";
          default:
            return "text-gray-400 !pointer-events-none ";
        }
      };

      days.push(
        <div
          aria-label="day"
          title={!isAviable ? "This date is not selectable" : ""}
          key={currentDay.toString()}
          className={`p-2 md:p-2 m-1 text-center cursor-pointer   rounded-full ${getDayClasses()} }`}
          onClick={() => {
            setSelectedDate(isSelected ? null : currentDay); // Toggle selection
            setShwowTime(true);
            if (isInCurrentMonth) return;
          }}
        >
          {format(currentDay, "d")}
        </div>
      );

      tempDay = add(tempDay, { days: 1 }); // Move to the next day
    }
    rows.push(
      <div key={tempDay.toString()} className="grid grid-cols-7 gap-2">
        {days}
      </div>
    );
    days = [];
  }

  return <div>{rows}</div>;
};
export default RenderCells;
