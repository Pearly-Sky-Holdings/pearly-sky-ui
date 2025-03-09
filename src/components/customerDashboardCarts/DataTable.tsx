import { Eye } from "lucide-react";
import { ServiceData } from "../../type";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomerDetails } from "../../services/CleaningServices/index";
import store from "../../store";

interface DataTableProps {
  onViewDetails: (item: ServiceData) => void;
}

const DataTable: React.FC<DataTableProps> = ({ onViewDetails }) => {
  const dispatch = useDispatch<typeof store.dispatch>();
  const details = useSelector((state: any) => state.customerDetailsSlice.details);

  useEffect(() => {
    dispatch(getCustomerDetails("5"));
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-100 text-gray-600 text-left text-sm font-semibold uppercase tracking-wider">
            <th className="px-4 py-3 text-black">Contact No</th>
            <th className="px-4 py-3 text-black">Service Type</th>
            <th className="px-4 py-3 text-black">Date</th>
            <th className="px-4 py-3 text-black">Time</th>
            <th className="px-4 py-3 text-black">Total</th>
            <th className="px-4 py-3 text-black">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {details.data &&
            details.data.map((details: any, index: number) => (
              <tr key={index} className={index % 2 === 0 ? "bg-blue-50" : "bg-white"}>
                <td className="px-4 py-4 text-blue-900">{details.contact}</td>
                <td className="px-4 py-4 text-blue-900">{"service"}</td>
                <td className="px-4 py-4 text-blue-900">{details.created_at}</td>
                <td className="px-4 py-4 text-blue-900">{"time"}</td>
                <td className="px-4 py-4 text-blue-900">${"60"}</td>
                <td className="px-4 py-4">
                  <div
                    onClick={() => onViewDetails(details)}
                    className="text-blue-900 hover:text-blue-900 cursor-pointer"
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