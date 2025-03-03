import React from 'react';
import { Bell, Mail, User } from 'lucide-react';

interface HeaderProps {
  date: string;
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ date, onSearch }) => {
  return (
    <div className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
          onChange={(e) => onSearch(e.target.value)}
        />
        <button className="absolute right-3 top-2.5 text-gray-500">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div className="text-gray-700">{date}</div>

      <div className="flex items-center space-x-4">
        <button className="relative text-gray-600 hover:text-gray-900">
          <Bell size={20} />
          <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
            1
          </span>
        </button>
        <button className="relative text-gray-600 hover:text-gray-900">
          <Mail size={20} />
          <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
            3
          </span>
        </button>
        <button className="text-gray-600 hover:text-gray-900">
          <User size={20} />
        </button>
      </div>
    </div>
  );
};

export default Header;