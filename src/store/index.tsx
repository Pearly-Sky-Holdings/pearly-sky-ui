import { configureStore } from "@reduxjs/toolkit";
import packagesSlice from "./slice/CleaningServices/packagesSlice";
import serviceDetailsSlice from "./slice/CleaningServices/serviceDetailsSlice";
import servicesSlice from "./slice/CleaningServices/serviceSlice";
import itemsSlice from "./slice/CleaningServices/itemsSlice";

// Create the store
const store = configureStore({
  reducer: {
    packagesSlice,
    serviceDetailsSlice,
    servicesSlice,
    itemsSlice,
  },
});

// Export the RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;