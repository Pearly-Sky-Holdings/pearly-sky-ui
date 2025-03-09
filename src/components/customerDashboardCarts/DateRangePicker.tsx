import React, { useState } from "react";

const DateRangePicker: React.FC = () => {
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");

  return (
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
      <div className="flex items-center">
        <span className="mr-2 text-gray-600">From</span>
        <div className="relative text-gray-500">
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="flex items-center">
        <span className="mr-2 text-gray-600">To</span>
        <div className="relative text-gray-500">
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default DateRangePicker;