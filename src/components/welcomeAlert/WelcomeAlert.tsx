import React, { useState, useEffect } from 'react';

const WelcomeAlert = () => {
  const [showAlert, setShowAlert] = useState(false);
  
  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    
    if (!hasVisited) {
      // Show the alert for first-time visitors
      setShowAlert(true);
      // Set the flag in localStorage so we don't show the alert again
      localStorage.setItem('hasVisitedBefore', 'true');
    }
  }, []);

  const closeAlert = () => {
    setShowAlert(false);
  };

  if (!showAlert) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
        <h2 className="text-xl font-bold mb-4">ආයුබෝවන්!</h2>
        <p className="mb-4">අපගේ වෙබ් අඩවියට සාදරයෙන් පිළිගනිමු. මෙය ඔබගේ පළමු පිවිසුමයි.</p>
        <button 
          onClick={closeAlert}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          තේරුණා
        </button>
      </div>
    </div>
  );
};

export default WelcomeAlert;