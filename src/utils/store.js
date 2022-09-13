import employeeSlice from "../Slice/employeeSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    employee: employeeSlice,
  },
});
export default store;
