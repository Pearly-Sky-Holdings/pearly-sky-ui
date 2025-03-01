import { configureStore } from "@reduxjs/toolkit";
import packagesSlice from "./slice/CleaningServices/packagesSlice";
import serviceDetailsSlice from "./slice/CleaningServices/serviceDetailsSlice";
import servicesSlice  from "./slice/CleaningServices/serviceSlice";
import itemsSlice  from "./slice/CleaningServices/itemsSlice";


export default configureStore({
  reducer: {
   packagesSlice,
   serviceDetailsSlice,
   servicesSlice,
   itemsSlice,
  },
});
