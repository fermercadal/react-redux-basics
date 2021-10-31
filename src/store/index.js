import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";

const store = configureStore({
  // Global reducer
  // reducer: counterSlice.reducer
  // If there are more than one reducer
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
