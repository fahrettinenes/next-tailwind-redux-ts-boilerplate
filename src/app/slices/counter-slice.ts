import { createSlice } from '@reduxjs/toolkit';

interface CounterSlice {
  count: number;
}

const initialState: CounterSlice = {
  count: 0
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase(state) {
      state.count++;
    },

    decrease(state) {
      state.count--;
    }
  }
});

export const { increase, decrease } = counterSlice.actions;
export default counterSlice.reducer;