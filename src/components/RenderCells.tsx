import {
  add,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
} from "date-fns";

interface CalendarProps {
  currentDate: Date;
  selectedDate: Date | null;
  setSelectedDate?: React.Dispatch<React.SetStateAction<Date | null>>;
  setShwowTime?: React.Dispatch<React.SetStateAction<boolean>>;
  onDateSelect: (date: Date) => void;
}

const RenderCells: React.FC<CalendarProps> = ({
  currentDate,
  selectedDate,
  onDateSelect,
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

      const dayClasses = `p-2 m-1 text-center cursor-pointer rounded-full ${
        isSelected
          ? "bg-secondary-500 text-white w-10"
          : isInCurrentMonth
          ? "text-black w-10"
          : "text-gray-400 w-10"
      }`;

      days.push(
        <div
          aria-label="day"
          key={currentDay.toDateString()}
          className={dayClasses}
          onClick={() => onDateSelect(currentDay)}
        >
          {format(currentDay, "d")}
        </div>
      );

      tempDay = add(tempDay, { days: 1 });
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
