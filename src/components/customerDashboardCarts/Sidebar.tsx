import React from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from '../../type';
import { companyLogo } from "../../config/images";

interface SidebarProps {
  items: NavItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <div className=" text-white h-screen w-64 flex flex-col">
      <div className='bg-blue-900'>
      <div className="p-4 border-b border-blue-800">
        <div className="flex items-center justify-center py-4">
          <img 
            src={companyLogo} 
            alt="Pearly Sky Logo" 
            className="h-12"
          />
        </div>
      </div>
      </div>
      
      <div className='flex items-center justify-center py-4'>
      <nav className="flex-1 overflow-y-auto py-4 p-2 rounded-lg">
        <ul className="space-y-1">
          {items.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`flex items-center px-6 py-3 text-sm  transition-colors ${
                  item.active ? 'bg-blue-900' : 'bg-transparent'
                } `}
              >
                <span className={`mr-3 text-blue-900 ${item.active ? 'text-white' : ''}`}>{item.icon}</span>
                <span className={`mr-3 text-blue-900 ${item.active ? 'text-white' : ''}`}>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
    </div> 
  );
};

export default Sidebar;