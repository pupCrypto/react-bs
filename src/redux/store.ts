import { configureStore } from '@reduxjs/toolkit';
import matrixReducer from '../features/matrix';

const store = configureStore({
  reducer: {
    matrix: matrixReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;