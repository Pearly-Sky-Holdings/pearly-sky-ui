import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/customerDashboardCarts/Sidebar';
import { Home, Settings, HelpCircle } from 'lucide-react';
import { NavItem } from '../type';

const MainLayout: React.FC = () => {
  const navItems: NavItem[] = [
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: <Home size={20} />,
      active: true
    },
    {
      name: 'Settings',
      path: '/settings',
      icon: <Settings size={20} />
    },
    {
      name: 'Help',
      path: '/help',
      icon: <HelpCircle size={20} />
    }
  ];

  return (
    <div className="flex h-screen">
      <Sidebar items={navItems} />
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;