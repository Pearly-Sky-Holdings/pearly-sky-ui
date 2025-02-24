import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from './store/slice/CleaningServices/itemsSlice'; // Import fetchItems action
import { RootState } from '../../store/index'; // Import RootState to access typed state

const AirbnbCleaning = () => {
  const dispatch = useDispatch();

  const { items, loading, error } = useSelector(
    (state: RootState) => state.items // Select the items from the store
  );

  useEffect(() => {
    dispatch(fetchItems()); // Dispatch the action to fetch data when component mounts
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  // Group the items by category (you can do this directly in the render)
  const groupedItems = items.reduce((acc: any, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div>
      {Object.keys(groupedItems).map((category) => (
        <div key={category} className="mb-6">
          <h2 className="text-lg font-bold text-blue-900 mb-2">{category}</h2>
          {groupedItems[category].map((item) => (
            <div key={item.id} className="text-blue-900 mb-2">
              <p>{item.name}</p>
              <small>{item.created_at}</small>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AirbnbCleaning;
