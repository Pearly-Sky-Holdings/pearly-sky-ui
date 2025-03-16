import React, { useState, useEffect } from "react";
import Header from "../../components/customerDashboardCarts/Header";
import DateRangePicker from "../../components/customerDashboardCarts/DateRangePicker";
import DataTable from "../../components/customerDashboardCarts/DataTable";
import Modal from "../../components/customerDashboardCarts/Modal";
import CustomerDetails from "../../components/customerDashboardCarts/CustomerDetails";
import { useParams } from "react-router-dom";

const CustomerDashboard: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const { customerId } = useParams<{ customerId: string }>();

  useEffect(() => {
    // Set current date in the format: 08:30 AM, Thu 25 Feb 2025
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    };
    setCurrentDate(now.toLocaleString("en-US", options));
  }, []);

  const handleViewDetails = (customer: any) => {
    setSelectedCustomer(customer);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header date={currentDate} />

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 overflow-auto">
        {/* Date Range Picker */}
        <div className="mb-6 flex flex-col md:flex-row justify-between items-center bg-white rounded-lg shadow p-4 md:p-5">
          <DateRangePicker />
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-lg shadow p-4 md:p-5 overflow-x-auto">
          <DataTable onViewDetails={handleViewDetails} />
        </div>
      </div>

      {/* Modal for Customer Details */}
      {selectedCustomer && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Customer Details"
        >
          <CustomerDetails
            customer={selectedCustomer}
          />
        </Modal>
      )}
    </div>
  );
};

export default CustomerDashboard;