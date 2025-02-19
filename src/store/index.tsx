import { configureStore } from "@reduxjs/toolkit";
import packagesSlice from "./slice/CleaningServices/packagesSlice";


export default configureStore({
  reducer: {
   packagesSlice,
  },
});
