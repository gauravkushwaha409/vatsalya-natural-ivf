import {
  add,
  endOfMonth,
  endOfWeek,
  format,
  isAfter,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
} from "date-fns";

interface CalendarProps {
  currentDate: Date;
  selectedDate: Date | null;
  setSelectedDate?: React.Dispatch<React.SetStateAction<Date | null>>;
  setShwowTime?: React.Dispatch<React.SetStateAction<boolean>>;
  onDateSelect: (date: Date) => void;
}

const OvulationRenderCell: React.FC<CalendarProps> = ({
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

      const dayClasses = `p-2 m-1 text-center rounded-full w-10 
        ${isSelected ? "bg-secondary-500 text-white" : ""}
        ${
          !isSelected && isInCurrentMonth
            ? "text-black hover:bg-secondary-100 disabled:hover:bg-transparent disabled:opacity-50 cursor-pointer"
            : ""
        }
        ${!isInCurrentMonth ? "text-gray-400" : ""}
      `;

      days.push(
        <button
          aria-label="day"
          key={currentDay.toDateString()}
          className={dayClasses}
          disabled={isAfter(currentDay, new Date())}
          onClick={() => onDateSelect(currentDay)}
        >
          {format(currentDay, "d")}
        </button>
      );

      tempDay = add(tempDay, { days: 1 });
    }

    rows.push(
      <div key={tempDay.toString()} className="gap-2 grid grid-cols-7">
        {days}
      </div>
    );

    days = [];
  }

  return <div>{rows}</div>;
};

export default OvulationRenderCell;
