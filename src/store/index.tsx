import { configureStore } from "@reduxjs/toolkit";
import packagesSlice from "./slice/CleaningServices/packagesSlice";
import serviceDetailsSlice from "./slice/CleaningServices/serviceDetailsSlice";
import servicesSlice from "./slice/CleaningServices/serviceSlice";
import itemsSlice from "./slice/CleaningServices/itemsSlice";
import feedbaackSlice from "./slice/Customer/customerFeedbackSlice";

const store = configureStore({
  reducer: {
    packagesSlice,
    serviceDetailsSlice,
    servicesSlice,
    itemsSlice,
    feedbaackSlice,
  },
});

// Export types for use in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
