import React, { useState, useEffect } from "react";
import Header from "../../components/customerDashboardCarts/Header";
import DateRangePicker from "../../components/customerDashboardCarts/DateRangePicker";
import DataTable from "../../components/customerDashboardCarts/DataTable";
import Modal from "../../components/customerDashboardCarts/Modal";
import CustomerDetails from "../../components/customerDashboardCarts/CustomerDetails";
import { serviceData } from "../../data/mockData";
import { ServiceData } from "../../type";

const customerDashboard: React.FC = () => {
  const [data] = useState<ServiceData[]>(serviceData);
  const [filteredData, setFilteredData] = useState<ServiceData[]>(serviceData);
  const [selectedCustomer, setSelectedCustomer] = useState<ServiceData | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState("");

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

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredData(data);
      return;
    }

    const lowercaseQuery = query.toLowerCase();
    const filtered = data.filter(
      (item) =>
        item.contactNo.toLowerCase().includes(lowercaseQuery) ||
        item.serviceType.toLowerCase().includes(lowercaseQuery) ||
        item.date.toLowerCase().includes(lowercaseQuery) ||
        item.time.toLowerCase().includes(lowercaseQuery)
    );

    setFilteredData(filtered);
  };

  const handleDateRangeChange = (fromDate: string, toDate: string) => {
    if (!fromDate || !toDate) {
      setFilteredData(data);
      return;
    }

    // Convert date strings to Date objects for comparison
    const from = new Date(fromDate);
    const to = new Date(toDate);
    to.setHours(23, 59, 59); // Set to end of day

    // Filter data based on date range
    const filtered = data.filter((item) => {
      // Convert DD-MM-YYYY to YYYY-MM-DD for proper Date parsing
      const parts = item.date.split("-");
      const itemDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
      return itemDate >= from && itemDate <= to;
    });

    setFilteredData(filtered);
  };

  const handleViewDetails = (customer: ServiceData) => {
    setSelectedCustomer(customer);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header date={currentDate} onSearch={handleSearch} />

      <div className="flex-1 p-6 overflow-auto ">
        <div className="mb-6 flex justify-between items-center bg-white rounded-lg shadow p-5">
          <DateRangePicker onDateRangeChange={handleDateRangeChange} />
        </div>

        <div className="bg-white rounded-lg shadow p-5">
          <DataTable data={filteredData} onViewDetails={handleViewDetails} />
        </div>
      </div>
      <div className="fixed bottom-4 right-4 mt-5">
        {selectedCustomer && (
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Customer Details"
          >
            <CustomerDetails customer={selectedCustomer} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default customerDashboard;
