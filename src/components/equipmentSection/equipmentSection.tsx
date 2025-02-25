import React, { useState, useEffect } from "react";
import {
  regularServiceEquipment1,
  regularServiceEquipment2,
  regularServiceEquipment3,
  regularServiceEquipment4,
} from "../../config/images";

interface Solvent {
  value: string;
  label: string;
}

interface EquipmentOption {
  value: string;
  label: string;
}

interface Equipment {
  id: string;
  image: string;
  name: string;
  price: number;
}

interface EquipmentSectionProps {
  title?: string;
  solvents: Solvent[];
  equipmentOptions: EquipmentOption[];
  equipments: Equipment[];
  onSolventChange: (solvent: string) => void;
  onEquipmentOptionChange: (option: string) => void;
  onEquipmentSelect: (equipment: Equipment, selected: boolean) => void;
}

const EquipmentSection: React.FC<EquipmentSectionProps> = ({
  title = "Select your cleaning solvents and equipment",
  onSolventChange,
  onEquipmentOptionChange,
  onEquipmentSelect,
}) => {
  const [cleaningSolvent, setCleaningSolvent] = useState("");
  const [cleaningEquipment, setCleaningEquipment] = useState("");
  const [selectedEquipments, setSelectedEquipments] = useState<string[]>([]);

  const solventsOptions = [
    { value: "customer", label: "Provided by the Customer" },
    { value: "company", label: "Request the Company" },
  ];

  const equipmentOptionsDetails = [
    { value: "customer", label: "Provided by the Customer" },
    { value: "company", label: "Request the Company" },
  ];

  const equipmentsDetails = [
    {
      id: "cleaning-solvent",
      name: "Cleaning Solvent (Eco Friendly Chemicals)",
      price: 15.99,
      image: regularServiceEquipment1,
    },
    {
      id: "mop",
      name: "MOP",
      price: 11.99,
      image: regularServiceEquipment4,
    },
    {
      id: "materials",
      name: "Other Cleaning Materials",
      price: 19.99,
      image: regularServiceEquipment2,
    },
    {
      id: "vacuum",
      name: "Vacuum Cleaner",
      price: 29.99,
      image: regularServiceEquipment3,
    },
  ];

  // Automatically select/deselect equipment based on solvent and equipment choices
  useEffect(() => {
    if (cleaningSolvent === "company") {
      // Automatically select cleaning solvent equipment if provided by the company
      if (!selectedEquipments.includes("cleaning-solvent")) {
        setSelectedEquipments([...selectedEquipments, "cleaning-solvent"]);
        onEquipmentSelect(
          { id: "cleaning-solvent", name: "Cleaning Solvent", price: 15.99, image: "" },
          true
        );
      }
    } else if (cleaningSolvent === "customer") {
      // Deselect cleaning solvent equipment if provided by the customer
      setSelectedEquipments(selectedEquipments.filter((id) => id !== "cleaning-solvent"));
      onEquipmentSelect(
        { id: "cleaning-solvent", name: "Cleaning Solvent", price: 15.99, image: "" },
        false
      );
    }
  }, [cleaningSolvent, selectedEquipments]);

  useEffect(() => {
    if (cleaningEquipment === "company") {
      // Automatically select all equipment if provided by the company
      const companyEquipments = ["mop", "materials", "vacuum"];
      const newSelected = [...new Set([...selectedEquipments, ...companyEquipments])];
      setSelectedEquipments(newSelected);

      // Notify parent component about the selected equipment
      companyEquipments.forEach((id) => {
        const equipment = equipmentsDetails.find((e) => e.id === id);
        if (equipment) {
          onEquipmentSelect(equipment, true);
        }
      });
    } else if (cleaningEquipment === "customer") {
      // Deselect all equipment if provided by the customer
      setSelectedEquipments([]);

      // Notify parent component about the deselected equipment
      equipmentsDetails.forEach((equipment) => {
        onEquipmentSelect(equipment, false);
      });
    }
  }, [cleaningEquipment]);

  const handleSolventChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setCleaningSolvent(value);
    onSolventChange(value);
  };

  const handleEquipmentOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setCleaningEquipment(value);
    onEquipmentOptionChange(value);
  };

  const handleEquipmentSelect = (equipment: Equipment) => {
    const isSelected = selectedEquipments.includes(equipment.id);
    const newSelected = isSelected
      ? selectedEquipments.filter((id) => id !== equipment.id)
      : [...selectedEquipments, equipment.id];

    setSelectedEquipments(newSelected);
    onEquipmentSelect(equipment, !isSelected);
  };

  // Check if an equipment item should be disabled
  const isEquipmentDisabled = (equipmentId: string) => {
    if (cleaningSolvent === "customer" && equipmentId === "cleaning-solvent") {
      return true; // Disable cleaning solvent if provided by the customer
    }
    return false;
  };

  return (
    <div>
      <div className="mb-4 bg-white rounded-lg p-4 sm:p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block mb-2 text-blue-900">Cleaning Solvents</label>
            <select
              className="w-full border rounded p-2 text-blue-900"
              value={cleaningSolvent}
              onChange={handleSolventChange}
              required
            >
              <option value="">Select cleaning solvent</option>
              {solventsOptions.map((solvent) => (
                <option key={solvent.value} value={solvent.value}>
                  {solvent.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 text-blue-900">Cleaning Equipment</label>
            <select
              className="w-full border rounded p-2 text-blue-900"
              value={cleaningEquipment}
              onChange={handleEquipmentOptionChange}
              required
            >
              <option value="">Select cleaning equipment</option>
              {equipmentOptionsDetails.map((equipment) => (
                <option key={equipment.value} value={equipment.value}>
                  {equipment.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="mb-4 bg-white rounded-lg p-4 sm:p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-8 text-blue-900">Equipments</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {equipmentsDetails.map((equipment) => (
            <div
              key={equipment.id}
              className={`text-center ${
                isEquipmentDisabled(equipment.id) ? "opacity-50 pointer-events-none" : ""
              }`}
            >
              <img
                src={equipment.image}
                alt={equipment.name}
                className="w-24 h-24 mx-auto mb-2"
              />
              <label className="flex items-center justify-center space-x-2 text-black">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={selectedEquipments.includes(equipment.id)}
                  onChange={() => handleEquipmentSelect(equipment)}
                  disabled={isEquipmentDisabled(equipment.id)}
                />
                <span>{equipment.name}</span>
              </label>
              <p className="text-sm text-gray-600">Price: C$ {equipment.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EquipmentSection;