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
            <th className="px-6 py-3">Contact No</th>
            <th className="px-6 py-3">Service Type</th>
            <th className="px-6 py-3">Date</th>
            <th className="px-6 py-3">Time</th>
            <th className="px-6 py-3">Total</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr 
              key={index} 
              className={index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}
            >
              <td className="px-6 py-4">{item.contactNo}</td>
              <td className="px-6 py-4">{item.serviceType}</td>
              <td className="px-6 py-4">{item.date}</td>
              <td className="px-6 py-4">{item.time}</td>
              <td className="px-6 py-4">${item.total.toFixed(2)}</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => onViewDetails(item)}
                  className="text-blue-600 hover:text-blue-900"
                >
                  <Eye size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;