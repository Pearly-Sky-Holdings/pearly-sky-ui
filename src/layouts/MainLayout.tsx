import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/customerDashboardCarts/Sidebar';
import { Home, Settings, HelpCircle } from 'lucide-react';
import { NavItem } from '../type';

const MainLayout: React.FC = () => {
  const location = useLocation();
  
  const navItems: NavItem[] = [
    {
      name: 'Dashboard',
      path: '/customer-dashboard',
      icon: <Home size={20} />,
      active: location.pathname === '/customer-dashboard' || location.pathname === '/'
    },
    {
      name: 'Settings',
      path: '/settings',
      icon: <Settings size={20} />,
      active: location.pathname === '/settings'
    },
    {
      name: 'Help',
      path: '/help',
      icon: <HelpCircle size={20} />,
      active: location.pathname === '/help'
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