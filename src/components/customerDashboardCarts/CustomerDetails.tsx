import React from 'react';
import { ServiceData } from '../../type';

interface CustomerDetailsProps {
  customer: ServiceData;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-black">Contact Number</p>
          <p className="font-medium text-black">{customer.contactNo}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Service Type</p>
          <p className="font-medium text-black">{customer.serviceType}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Date</p>
          <p className="font-medium text-black">{customer.date}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Time</p>
          <p className="font-medium text-black">{customer.time}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Total Amount</p>
          <p className="font-medium text-black">${customer.total.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Status</p>
          <p className="font-medium">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Confirmed
            </span>
          </p>
        </div>
      </div>
      
      <div className="pt-4 border-t">
        <h4 className="font-medium mb-2 text-black">Customer Information</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="font-medium text-black">John Doe</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium text-black">john.doe@example.com</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Address</p>
            <p className="font-medium text-black">123 Main St, City</p>
          </div>
        </div>
      </div>
      
      <div className="pt-4 border-t">
        <h4 className="font-medium mb-2 text-black">Service Details</h4>
        <p className="text-sm text-black">
          {customer.serviceType === 'Regular Basic Cleaning' && 'Standard cleaning service including dusting, vacuuming, and bathroom cleaning.'}
          {customer.serviceType === 'Deep Cleaning' && 'Comprehensive cleaning service including hard-to-reach areas, appliances, and detailed sanitization.'}
          {customer.serviceType === 'One Time Cleaning' && 'Single session cleaning service for specific areas or occasions.'}
          {customer.serviceType === 'Last-Minute Cleaning' && 'Urgent cleaning service scheduled with short notice.'}
        </p>
      </div>
    </div>
  );
};

export default CustomerDetails;