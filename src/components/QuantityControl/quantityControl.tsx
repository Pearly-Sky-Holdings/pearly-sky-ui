import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface QuantityControlProps {
  quantity: string;
  onChange: (newQuantity: string) => void;
  min?: number;
  max?: number;
}

const QuantityControl: React.FC<QuantityControlProps> = ({ 
  quantity, 
  onChange, 
  min = 1, 
  max = 5 
}) => {
  const currentQuantity = parseInt(quantity, 10);
  
  const increment = () => {
    if (currentQuantity < max) {
      onChange((currentQuantity + 1).toString());
    }
  };
  
  const decrement = () => {
    if (currentQuantity > min) {
      onChange((currentQuantity - 1).toString());
    }
  };
  
  return (
    <div className="flex items-center overflow-hidden">
      <button 
        className="px-2 py-0.2   disabled:opacity-20 text-white bg-gray-700"
        onClick={decrement}
        style={{backgroundColor:"#1c398e"}}
        disabled={currentQuantity <= min}
        type="button"
      >
        <Minus size={14} />
      </button>
      <span className="px-2 py-0.2 text-center min-w-[40px] text-xs text-black">{quantity}</span>
      <button 
        className="px-1 py-0.5 transition-colors-hover disabled:opacity-20 text-white bg-gray-700"
        onClick={increment}
        style={{backgroundColor:"#1c398e"}}
        disabled={currentQuantity >= max}
        type="button"
      >
        <Plus size={12} />
      </button>
    </div>
  );
};

export default QuantityControl;