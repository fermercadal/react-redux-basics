import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "Counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      // Seems wrong (and it is) but redux toolkit will internally replace this
      // with code that doesn't mutate the state directly
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "Authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  // Global reducer
  // reducer: counterSlice.reducer
  // If there are more than one reducer
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

// Action creators
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
