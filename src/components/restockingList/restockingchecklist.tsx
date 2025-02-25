import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../../store/slice/CleaningServices/itemsSlice';
import { RootState, AppDispatch } from '../../store';

// Define Item interface based on your actual data structure
interface Item {
  id: number;
  name: string;
  category: string;
  created_at: string;
  updated_at: string;
}

// Define structure for grouped items
interface GroupedItems {
  [key: string]: Item[];
}

const RestockingChecklist = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Access the nested data structure properly
  const { 
    data = [], 
    isLoading = false, 
    errorMessage = null 
  } = useSelector((state: RootState) => state.itemsSlice.items);

  useEffect(() => {
    // Now fetchItems is a proper thunk action creator
    dispatch(fetchItems());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (errorMessage) {
    return <p>Error: {errorMessage}</p>;
  }

  // Check if data is available before reducing
  if (!data || data.length === 0) {
    return <p>No items found.</p>;
  }

  // Group the items by category
  const groupedItems: GroupedItems = data.reduce((acc: GroupedItems, item: Item) => {
    const category = item.category || 'Uncategorized';
    
    if (!acc[category]) {
      acc[category] = [];
    }
    
    acc[category].push(item);
    return acc;
  }, {} as GroupedItems);

  return (
    <div>
      {Object.keys(groupedItems).map((category) => (
        <div key={category} className="mb-6">
          <h2 className="text-lg font-bold text-blue-900 mb-2">{category}</h2>
          {groupedItems[category].map((item) => (
            <div key={item.id.toString()} className="text-blue-900 mb-2">
              <p>{item.name}</p>
              <small>{item.created_at}</small>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RestockingChecklist;