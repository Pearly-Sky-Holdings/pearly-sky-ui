import { ReactNode } from 'react';

export interface NavItem {
  name: string;
  path: string;
  icon: ReactNode;
  active?: boolean;
}

export interface ServiceData {
  contactNo: string;
  serviceType: string;
  date: string;
  time: string;
  total: number;
  // Add more fields as needed for customer details
}