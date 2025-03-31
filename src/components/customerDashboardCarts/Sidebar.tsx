import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavItem } from "../../type";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

interface SidebarProps {
  items: NavItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    } else {
      setIsCollapsed(!isCollapsed);
    }
  };

  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className=" md:hidden fixed left-2 bg-blue-900 text-white p-2 rounded-md top-100 "
        onClick={toggleSidebar}
      >
        {isMobileMenuOpen ? (
          <FiX size={24} 
          />
        ) : (
          <FiChevronRight size={24} />
        )}
      </button>

      <div
        className={`bg-blue-900 text-white  flex flex-col fixed md:relative z-10000 transition-all duration-300 ${
          isCollapsed ? "w-20" : "w-45"
        } ${
          isMobile
            ? `fixed top-0 left-0 h-full transform ${
                isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`
            : ""
        }`}
        style={isMobile ? { top: 0, height: "100vh" } : {}}
      >
        <div className="p-4 border-b border-blue-800 flex items-center justify-between">
          {!isCollapsed && !isMobile && (
            <button
              onClick={toggleSidebar}
              className="text-white hover:bg-blue-800 p-1 rounded-full"
            >
              {isCollapsed ? <FiChevronRight size={20} /> : <FiChevronLeft size={20} />}
            </button>
          )}
        </div>

        <nav className="flex-1 overflow-y-auto py-4 p-2">
          <ul className="space-y-1">
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center px-6 py-3 text-sm transition-colors rounded ${
                    item.active ? "bg-blue-800" : "hover:bg-blue-800"
                  } ${
                    isCollapsed ? "justify-center" : ""
                  }`}
                >
                  <span className={`${isCollapsed ? "mr-0" : "mr-3"}`}>
                    {item.icon}
                  </span>
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Collapse/Expand button for desktop */}
        {!isMobile && (
          <div className=" p-4 border-t border-blue-800 flex justify-center">
            <button
              onClick={toggleSidebar}
              className="text-white hover:bg-blue-800 p-2 rounded-full"
              title={isCollapsed ? "Expand" : "Collapse"}
            >
              {isCollapsed ? <FiChevronRight size={20} /> : <FiChevronLeft size={20} />}
            </button>
          </div>
        )}
      </div>

      {/* Overlay for mobile menu */}
      {isMobile && isMobileMenuOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-10000 md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
};

export default Sidebar;