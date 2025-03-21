import React from "react";
import { Bell, Mail, User } from "lucide-react";

interface HeaderProps {
  date: string;
}

const Header: React.FC<HeaderProps> = ({ date }) => {
  return (
    <div className="bg-white shadow-sm px-4 py-3 md:px-6 md:py-4 flex flex-col md:flex-row items-center justify-between">
      {/* Search Bar */}
      <div className="relative w-full md:w-64 mb-4 md:mb-0">
        <input
          type="text"
          placeholder="Search"
          className="pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
        />
        <div className="absolute right-3 top-2 text-white bg-blue-900 rounded-md p-1">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Date */}
      <div className="text-gray-700 text-sm md:text-base mb-4 md:mb-0">{date}</div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <div className="relative text-black hover:text-gray-900">
          <Bell size={20} />
          <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
            1
          </span>
        </div>
        <div className="relative text-black hover:text-gray-900">
          <Mail size={20} />
          <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
            3
          </span>
        </div>
        <div className="text-black hover:text-gray-900">
          <User size={20} />
        </div>
      </div>
    </div>
  );
};

export default Header;