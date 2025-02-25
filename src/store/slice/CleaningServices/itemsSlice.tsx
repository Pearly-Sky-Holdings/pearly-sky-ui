import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRestockList } from "../../../services/CleaningServices/index";

interface Item {
  id: number;
  name: string;
  category: string;
  created_at: string;
  updated_at: string;
}

interface ItemsState {
  items: {
    data: Item[];
    isLoading: boolean;
    isSuccess: boolean;
    errorMessage: string;
  };
}

const initialState: ItemsState = {
  items: {
    data: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  }
};

// ✅ Add missing fetchItems thunk
export const fetchItems = createAsyncThunk(
  "items/fetchItems",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getRestockList();
      return response;  // Check if response contains `data`
    } catch (error: any) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.items.isLoading = true;
        state.items.isSuccess = false;
        state.items.errorMessage = "";
      })
      .addCase(fetchItems.fulfilled, (state, { payload }) => {
        state.items.isLoading = false;
        state.items.isSuccess = true;
      
        state.items.data = Array.isArray(payload) ? payload : [];
      })
      .addCase(fetchItems.rejected, (state, { payload }) => {
        state.items.isLoading = false;
        state.items.isSuccess = false;
        state.items.errorMessage = payload as string;
      });
  },
});

export default itemsSlice.reducer;
// fetchItems is already exported
