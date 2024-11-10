import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the state type
export interface CounterState {
    counter: number;
}
  

// Define the initial state
const initialState: CounterState = {
    counter: 0,
};


// Create a slice for the counter
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment(state) {
        state.counter += 1;
      },
      decrement(state) {
        state.counter -= 1;
      },
      // Example of adding a payload action
      incrementByAmount(state, action: PayloadAction<number>) {
        state.counter += action.payload;
      },
    },
});

// Export actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
