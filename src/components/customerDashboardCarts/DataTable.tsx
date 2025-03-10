import { Eye } from "lucide-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomerDetails } from "../../services/CleaningServices/index";
import store from "../../store";

interface DataTableProps {
  onViewDetails: (item: any) => void;
}

const DataTable: React.FC<DataTableProps> = ({ onViewDetails }) => {
  const dispatch = useDispatch<typeof store.dispatch>();
  const details = useSelector((state: any) => state.customerDetailsSlice.details);

  useEffect(() => {
    dispatch(getCustomerDetails("3"));
  }, []);

  useEffect(() => {
    console.log(details.data[0]?.serviceDetails);
  },[details.data])
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
            details.data[0]?.serviceDetails.map((item: any, index: number) => (
              <tr key={index} className={index % 2 === 0 ? "bg-blue-50" : "bg-white"}>
                <td className="px-4 py-4 text-blue-900">{details.data[0]?.customer.contact}</td>
                <td className="px-4 py-4 text-blue-900">
                  {item.service?.name}
                </td>
                <td className="px-4 py-4 text-blue-900">{item.date }</td>
                <td className="px-4 py-4 text-blue-900">{item.time}</td>
                <td className="px-4 py-4 text-blue-900">{item.price}</td>
                <td className="px-4 py-4">
                  <div
                    onClick={() => onViewDetails({
                      name: details.data[0]?.customer.first_name + " " + details.data[0]?.customer.last_name,
                      contact: details.data[0]?.customer.contact,
                      email: details.data[0]?.customer.email,
                      country : details.data[0]?.customer.country,
                      city : details.data[0]?.customer.city,
                      street_address : details.data[0]?.customer.street_address,
                      province : details.data[0]?.customer.province,
                      postal_code : details.data[0]?.customer.postal_code,
                      package : item.service?.name,
                      package_checklist : item.package_details,
                      date : item.date,
                      time : item.time,
                      price : item.price,
                      property_size : item.property_size,
                      service_name : item.service?.name,
                      status : item.status,
                      solvent : item.cleaning_solvents,
                      equipment : item.Equipment,
                    })}
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