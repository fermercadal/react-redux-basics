import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    increment(state) {
      // Seems wrong (and it is) but redux toolkit will internally replace this 
      // with code that doesn't mutate the state directly
      state.counter++;
    },
    decrement(state) {
      state.counter--
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  // Global reducer
  reducer: counterSlice.reducer
  // If there are more than one reducer
  // reducer: { counter: counterSlice.reducer }
});

// Action creators
export const counterActions = counterSlice.actions;

export default store;
