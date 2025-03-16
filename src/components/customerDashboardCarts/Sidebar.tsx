import React from "react";
import { Link } from "react-router-dom"; // Import useNavigate for redirection
import { NavItem } from "../../type";
import { companyLogo } from "../../config/images";

interface SidebarProps {
  items: NavItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  // Hook for navigation

  return (
    <div className="bg-blue-900 text-white h-screen w-64 flex flex-col">
      <div className="p-4 border-b border-blue-800">
        <div className="flex items-center justify-center py-4">
          <img src={companyLogo} alt="Pearly Sky Logo" className="h-12" />
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 p-2">
        <ul className="space-y-1">
          {items.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`flex items-center px-6 py-3 text-sm transition-colors ${
                  item.active ? "bg-blue-800" : "hover:bg-blue-800"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
