import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestockList } from "../../services/CleaningServices/index";
import type { RootState } from "../../store";
import store from "../../store";

// Item interface
interface Item {
  id: number;
  name: string;
  category: string;
  created_at: string;
  updated_at: string;
}

// Grouped items
interface GroupedItems {
  [key: string]: Item[];
}

const RestockingChecklist = () => {
  const dispatch = useDispatch<typeof store.dispatch>();

  // Fetch items, loading, and error states from Redux store
  const { data, isLoading, errorMessage } = useSelector(
    (state: RootState) => state.itemsSlice.items
  );
  
  useEffect(() => {
    dispatch(getRestockList());

  }, [dispatch]);
  
  if (isLoading) {
    return <p>Loading...</p>;
  }
  
  if (errorMessage) {
    return <p>Error: {errorMessage}</p>;
  }
  
  if (!data || data.length === 0) {
    return <p>No items found.</p>;
  }
  
  // Group the items by category
  const groupedItems: GroupedItems = data.reduce(
    (acc: GroupedItems, item: Item) => {
      const category = item.category || "Uncategorized";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item);
      return acc;
    },
    {} as GroupedItems
  );
  
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