import React, { useState, useEffect } from "react";
import {
  regularServiceEquipment1,
  regularServiceEquipment2,
  regularServiceEquipment3,
  regularServiceEquipment4,
} from "../../config/images";
import { useLanguage } from "../../context/LanguageContext";

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
  selectedCurrency: string;
  currencySymbol: string;
  conversionRate: number;
}

const EquipmentSection: React.FC<EquipmentSectionProps> = ({
  title,
  onSolventChange,
  onEquipmentOptionChange,
  onEquipmentSelect,
  currencySymbol = "€",
  conversionRate = 1,
}) => {
  const { translate } = useLanguage();
  const [cleaningSolvent, setCleaningSolvent] = useState("");
  const [cleaningEquipment, setCleaningEquipment] = useState("");
  const [selectedEquipments, setSelectedEquipments] = useState<string[]>([]);

  const solventsOptions = [
    { value: "customer", label: translate('providedByCustomer') },
    { value: "company", label: translate('requestFromCompany') },
  ];

  const equipmentOptionsDetails = [
    { value: "customer", label: translate('providedByCustomer') },
    { value: "company", label: translate('requestFromCompany') },
  ];

  const equipmentsDetails = [
    {
      id: "cleaning-solvent",
      name: translate('cleaningSolvent'),
      price: 11.00,
      image: regularServiceEquipment1,
    },
    {
      id: "mop",
      name: translate('mop'),
      price: 6.00,
      image: regularServiceEquipment4,
    },
    {
      id: "materials",
      name: translate('otherCleaningMaterials'),
      price: 6.00,
      image: regularServiceEquipment2,
    },
    {
      id: "vacuum",
      name: translate('vacuumCleaner'),
      price: 8.00,
      image: regularServiceEquipment3,
    },
  ];

  useEffect(() => {
    if (cleaningSolvent === "company") {
      if (!selectedEquipments.includes("cleaning-solvent")) {
        setSelectedEquipments((prev) => [...prev, "cleaning-solvent"]);
        onEquipmentSelect(
          equipmentsDetails.find((e) => e.id === "cleaning-solvent") || {
            id: "cleaning-solvent",
            name: translate('cleaningSolvent'),
            price: 11.00,
            image: "",
          },
          true
        );
      }
    } else if (cleaningSolvent === "customer") {
      setSelectedEquipments((prev) => prev.filter((id) => id !== "cleaning-solvent"));
      onEquipmentSelect(
        equipmentsDetails.find((e) => e.id === "cleaning-solvent") || {
          id: "cleaning-solvent",
          name: translate('cleaningSolvent'),
          price: 11.00,
          image: "",
        },
        false
      );
    }
  }, [cleaningSolvent]);

  useEffect(() => {
    if (cleaningEquipment === "company") {
      const companyEquipments = ["mop", "materials", "vacuum"];
      const newSelected = [...new Set([...selectedEquipments])];
      companyEquipments.forEach(id => {
        if (!newSelected.includes(id)) {
          newSelected.push(id);
        }
      });
      setSelectedEquipments(newSelected);

      companyEquipments.forEach((id) => {
        const equipment = equipmentsDetails.find((e) => e.id === id);
        if (equipment) {
          onEquipmentSelect(equipment, true);
        }
      });
    } else if (cleaningEquipment === "customer") {
      setSelectedEquipments([]);

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

    if (value === "company") {
      const companyEquipments = ["mop", "materials", "vacuum"];
      const newSelected = [...new Set([...selectedEquipments])];
      setSelectedEquipments(newSelected);

      companyEquipments.forEach((id) => {
        const equipment = equipmentsDetails.find((e) => e.id === id);
        if (equipment) {
          onEquipmentSelect(equipment, true);
        }
      });
    } else if (value === "customer") {
      setSelectedEquipments([]);

      equipmentsDetails.forEach((equipment) => {
        onEquipmentSelect(equipment, false);
      });
    }
  };

  const handleEquipmentSelect = (equipment: Equipment) => {
    if (isEquipmentDisabled(equipment.id)) {
      return;
    }

    const isSelected = selectedEquipments.includes(equipment.id);
    const newSelected = isSelected
      ? selectedEquipments.filter((id) => id !== equipment.id)
      : [...selectedEquipments, equipment.id];

    setSelectedEquipments(newSelected);
    onEquipmentSelect(equipment, !isSelected);
  };

  const isEquipmentDisabled = (equipmentId: string) => {
    if (cleaningSolvent === "customer" && equipmentId === "cleaning-solvent") {
      return true;
    }
    if (cleaningEquipment === "customer" && equipmentId !== "cleaning-solvent") {
      return true;
    }
    return false;
  };

  return (
    <div>
      <div className="mb-4 bg-white rounded-lg p-4 sm:p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">
          {title || translate('selectCleaningEquipmentTitle')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block mb-2 text-blue-900">{translate('cleaningSolvents')}</label>
            <select
              className="w-full border rounded p-2 text-blue-900"
              value={cleaningSolvent}
              onChange={handleSolventChange}
              required
            >
              <option value="">{translate('selectCleaningSolvent')}</option>
              {solventsOptions.map((solvent) => (
                <option key={solvent.value} value={solvent.value}>
                  {solvent.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 text-blue-900">{translate('cleaningEquipment')}</label>
            <select
              className="w-full border rounded p-2 text-blue-900"
              value={cleaningEquipment}
              onChange={handleEquipmentOptionChange}
              required
            >
              <option value="">{translate('selectCleaningEquipment')}</option>
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
        <h2 className="text-xl font-semibold mb-8 text-blue-900">{translate('equipments')}</h2>
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
              <p className="text-sm text-gray-600">
                {translate('price')}: {currencySymbol} {(equipment.price * conversionRate).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EquipmentSection;