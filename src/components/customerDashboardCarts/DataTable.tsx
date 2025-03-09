import React from 'react';
import { Eye } from 'lucide-react';
import { ServiceData } from '../../type';

interface DataTableProps {
  data: ServiceData[];
  onViewDetails: (item: ServiceData) => void;
}

const DataTable: React.FC<DataTableProps> = ({ data, onViewDetails }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-100 text-gray-600 text-left text-sm font-semibold uppercase tracking-wider">
            <th className="px-6 py-3 text-black">Contact No</th>
            <th className="px-6 py-3 text-black">Service Type</th>
            <th className="px-6 py-3 text-black">Date</th>
            <th className="px-6 py-3 text-black">Time</th>
            <th className="px-6 py-3 text-black">Total</th>
            <th className="px-6 py-3 text-black">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr 
              key={index} 
              className={index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}
            >
              <td className="px-6 py-4 text-blue-900">{item.contactNo}</td>
              <td className="px-6 py-4 text-blue-900">{item.serviceType}</td>
              <td className="px-6 py-4 text-blue-900">{item.date}</td>
              <td className="px-6 py-4 text-blue-900">{item.time}</td>
              <td className="px-6 py-4 text-blue-900">${item.total.toFixed(2)}</td>
              <td className="px-6 py-4 ">
                <div
                  onClick={() => onViewDetails(item)}
                  className="text-blue-900 hover:text-blue-900"
                >
                  <Eye size={20} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;