import React, { useState } from 'react';

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
}

const EquipmentSection: React.FC<EquipmentSectionProps> = ({
  title = "Select your cleaning solvents and equipment",
  solvents = [],
  equipmentOptions = [],
  equipments = [],
}) => {
  // State for selected cleaning solvent and equipment
  const [cleaningSolvent, setCleaningSolvent] = useState("");
  const [cleaningEquipment, setCleaningEquipment] = useState("");

  return (
    <div>
      {/* Cleaning Solvents and Equipment Selection */}
      <div className="mb-4 bg-white rounded-lg p-4 sm:p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* Cleaning Solvents Dropdown */}
          <div>
            <label className="block mb-2 text-blue-900">Cleaning Solvents</label>
            <select
              className="w-full border rounded p-2 text-blue-900"
              value={cleaningSolvent}
              onChange={(e) => setCleaningSolvent(e.target.value)}
            >
              <option value="">Select cleaning solvent</option>
              {solvents.map((solvent) => (
                <option key={solvent.value} value={solvent.value}>
                  {solvent.label}
                </option>
              ))}
            </select>
          </div>

          {/* Cleaning Equipment Dropdown */}
          <div>
            <label className="block mb-2 text-blue-900">Cleaning Equipment</label>
            <select
              className="w-full border rounded p-2 text-blue-900"
              value={cleaningEquipment}
              onChange={(e) => setCleaningEquipment(e.target.value)}
            >
              <option value="">Select cleaning equipment</option>
              {equipmentOptions.map((equipment) => (
                <option key={equipment.value} value={equipment.value}>
                  {equipment.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Equipment List */}
      <div className="mb-4 bg-white rounded-lg p-4 sm:p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-8 text-blue-900">Equipments</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {equipments.map((equipment) => (
            <div key={equipment.id} className="text-center">
              <img
                src={equipment.image}
                alt={equipment.name}
                className="w-24 h-24 mx-auto mb-2"
              />
              <label className="flex items-center justify-center space-x-2 text-black">
                <input type="checkbox" className="form-checkbox" />
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