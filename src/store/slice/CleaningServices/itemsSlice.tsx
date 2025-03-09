import { createSlice } from "@reduxjs/toolkit";
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
  },
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRestockList.pending, (state) => {
        state.items.isLoading = true;
        state.items.isSuccess = false;
        state.items.errorMessage = "";
      })
      .addCase(getRestockList.fulfilled, (state, { payload }) => {
        state.items.isLoading = false;
        state.items.isSuccess = true;
        state.items.data = payload;
      })
      .addCase(getRestockList.rejected, (state, { payload }) => {
        state.items.isLoading = false;
        state.items.isSuccess = false;
        state.items.errorMessage = payload as string;
      });
  },
});

export default itemsSlice.reducer;
