import React from 'react';
import { NavItem } from '../../type';

interface SidebarProps {
  items: NavItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <div className="bg-blue-900 text-white h-screen w-64 flex flex-col">
      <div className="p-4 border-b border-blue-800">
        <div className="flex items-center justify-center py-4">
          <img 
            src="/logo.svg" 
            alt="Pearly Sky Logo" 
            className="h-12"
          />
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.path}
                className={`flex items-center px-6 py-3 text-sm hover:bg-blue-800 transition-colors ${
                  item.active ? 'bg-blue-800' : ''
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;