import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  listCounters: [],
  currentCounterIndex: null,
  lastId: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.listCounters[action.payload].value += 1;
    },
    decrement: (state, action) => {
      state.listCounters[action.payload].value -= 1;
    },
    resetCounter: (state, action) => {
      state.listCounters[action.payload].value = 0;
    },
    setCurrentIndex: (state, action) => {
      state.currentCounterIndex = action.payload;
    },
    addCounter: (state, action) => {
      state.listCounters.push({
        id: state.lastId + 1,
        value: 0,
      });
      if (state.lastId === 0) state.currentCounterIndex = 0;
      state.lastId += 1;
    },
    addCounter: (state, action) => {
      state.listCounters.push({
        id: state.lastId + 1,
        value: 0,
      });
      if (state.lastId === 0) state.currentCounterIndex = 0;
      state.lastId += 1;
    },
    removeCounter: (state, action) => {
      if (state.currentCounterIndex === 0 && state.listCounters.length > 1) {
        state.currentCounterIndex += 1;
      }
      if (state.currentCounterIndex === 0 && state.listCounters.length === 1) {
        state.currentCounterIndex = null;
        state.lastId = 0;
      }
      if (state.currentCounterIndex >= 1) {
        state.currentCounterIndex -= 1;
      }
      state.listCounters = state.listCounters.filter(
        (item, index) => index != action.payload,
      );
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  resetCounter,
  addCounter,
  setCurrentIndex,
  removeCounter,
} = counterSlice.actions;

export default counterSlice.reducer;
