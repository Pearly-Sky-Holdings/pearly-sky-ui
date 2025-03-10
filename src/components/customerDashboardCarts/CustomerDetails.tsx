import React from "react";

interface DataTableProps {
  customer: {
    name: string;
    contact: string;
    email: string;
    country: string;
    city: string;
    street_address: string;
    province: string;
    postal_code: string;
    package: string;
    package_checklist: any;
    date: string;
    time: string;
    price: string;
    property_size: string;
    service_name: string;
    status: string;
    solvent: string;
    equipment: string;
  };

}

const CustomerDetails: React.FC<DataTableProps> = ({ customer }) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-black">Contact Number</p>
          <p className="font-medium text-black">{customer.contact}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Service Type</p>
          <p className="font-medium text-black">{customer.service_name}</p>
        </div>
        <div>
        <p className="text-sm text-gray-500">Date</p>
          <p className="text-sm text-black">{customer.date}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Time</p>
          <p className="font-medium text-black">{customer.time}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Total Amount</p>
          <p className="font-medium text-black">{customer.price}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Status</p>
          <p className="font-medium">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              {customer.status}
            </span>
          </p>
        </div>
      </div>

      <div className="pt-4 border-t">
        <h4 className="font-medium mb-2 text-black">Customer Information</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="font-medium text-black">{customer.name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium text-black">{customer.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Address</p>
            <p className="font-medium text-black">{customer.street_address}</p>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t">
        <h4 className="font-medium mb-2 text-black">Service Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Cleaning Solvent</p>
            <p className="font-medium text-black">{customer.solvent}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Cleaning Equipment</p>
            <p className="font-medium text-black">{customer.equipment}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Property Size</p>
            <p className="font-medium text-black">{customer.property_size}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;