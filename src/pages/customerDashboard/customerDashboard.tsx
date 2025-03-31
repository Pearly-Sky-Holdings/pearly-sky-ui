import React, { useState, useEffect } from "react";
import Header from "../../components/customerDashboardCarts/Header";
import DateRangePicker from "../../components/customerDashboardCarts/DateRangePicker";
import DataTable from "../../components/customerDashboardCarts/DataTable";
import Modal from "../../components/customerDashboardCarts/Modal";
import CustomerDetails from "../../components/customerDashboardCarts/CustomerDetails";
import { useLanguage } from "../../context/LanguageContext";

const CustomerDashboard: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const { translate, currentLanguage } = useLanguage();

  useEffect(() => {
    // Set current date with language support
    const now = new Date();
    const locale = currentLanguage === 'en' ? 'en-US' : currentLanguage === 'fr' ? 'fr-FR' : 'en-US';
    
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    };
    setCurrentDate(now.toLocaleString(locale, options));
  }, [currentLanguage]);

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
          title={translate('customerDetails')}
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