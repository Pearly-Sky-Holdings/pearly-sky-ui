import React from "react";
import { format, addMinutes, startOfDay } from "date-fns";

interface TimeSlotsProps {
  selectedDate: Date;
  selectedTime: string;
  onTimeSelect: (time: string) => void;
}

const TimeSlots: React.FC<TimeSlotsProps> = ({
  selectedDate,
  selectedTime,
  onTimeSelect,
}) => {
  const generateTimeSlots = () => {
    const slots = [];
    let currentTime = startOfDay(selectedDate);
    const endTime = addMinutes(startOfDay(selectedDate), 24 * 60); // 24 hours

    while (currentTime < endTime) {
      slots.push(format(currentTime, "HH:mm"));
      currentTime = addMinutes(currentTime, 30); // 30-minute intervals
    }

    return slots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <div className="grid grid-cols-2 gap-2 max-h-[400px] overflow-y-auto bg-white custom-scrollbar">
      {timeSlots.map((time) => (
        <div
          key={time}
          className={`p-1 rounded-lg text-center transition-colors border border-black ${
            selectedTime === time
              ? "bg-gray-400 text-white" // Selected state (gray background)
              : "bg-white text-black hover:bg-gray-200" // Default state
          }`}
          onClick={() => onTimeSelect(time)}
        >
          {time}
        </div>
      ))}
    </div>
  );
};

export default TimeSlots;

