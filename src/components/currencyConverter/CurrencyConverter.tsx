import React, { useState, useEffect } from 'react';

interface CurrencyConverterProps {
  basePrice: number;
  onCurrencyChange: (currency: string, symbol: string, rate: number, rateBaseEur: number) => void;
  initialCurrency?: string;
}

const CurrencyConverter: React.FC<CurrencyConverterProps> = ({
  basePrice,
  onCurrencyChange,
  initialCurrency = 'EUR'
}) => {
  const [selectedCurrency, setSelectedCurrency] = useState(initialCurrency);
  const [conversionRates, setConversionRates] = useState<Record<string, number>>({});
  const [conversionRatesBaseEur, setConversionRatesBaseEur] = useState<Record<string, number>>({});
  
  const getCurrencySymbol = (currency: string): string => {
    const symbols: Record<string, string> = {
      EUR: '€',
      USD: '$',
      GBP: '£',
      AED: 'AED',
      NZD: 'NZ$'
    };
    return symbols[currency] || '€';
  };

  const fetchExchangeRates = async () => {
    try {
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/EUR` 
      );
      const data = await response.json();
      setConversionRates(data.rates);
    } catch (error) {
      console.error("Error fetching exchange rates:", error);
    }
  };
  const fetchExchangeRatesBaseEur = async () => {
    try {
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/EUR` 
      );
      const data = await response.json();
      setConversionRatesBaseEur(data.rates);
    } catch (error) {
      console.error("Error fetching exchange rates:", error);
    }
  };



  useEffect(() => {
    fetchExchangeRates();
    fetchExchangeRatesBaseEur();
    onCurrencyChange(selectedCurrency, getCurrencySymbol(selectedCurrency), conversionRates[selectedCurrency], conversionRatesBaseEur[selectedCurrency]);
  }, []);

  useEffect(() => {
    if (conversionRates[selectedCurrency]) {
      onCurrencyChange(selectedCurrency, getCurrencySymbol(selectedCurrency), conversionRates[selectedCurrency], conversionRatesBaseEur[selectedCurrency]);
    }
  }, [selectedCurrency, conversionRates, onCurrencyChange]);

  return (
    <div className="flex items-center gap-3">
      <p className="text-xl sm:text-2xl font-semibold text-black">
        {getCurrencySymbol(selectedCurrency)}
        {(basePrice * (conversionRates[selectedCurrency] || 1)).toFixed(2)}
      </p>
      <select 
        className="border rounded p-0.5 text-blue-900 h-7" 
        value={selectedCurrency}
        onChange={(e) => setSelectedCurrency(e.target.value)}
      >
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="AED">AED</option>
        <option value="NZD">NZD</option>
      </select>
    </div>
  );
};

export default CurrencyConverter;
