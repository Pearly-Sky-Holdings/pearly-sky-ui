import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define async thunk for fetching items
export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const response = await axios.get("/api/items"); 
  return response.data;
});

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: {
      data: [],
      isLoading: false,
      errorMessage: null as string | null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.items.isLoading = true;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.items.isLoading = false;
        state.items.data = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.items.isLoading = false;
        state.items.errorMessage = action.error.message || "Failed to fetch";
      });
  },
});

export default itemsSlice.reducer;
