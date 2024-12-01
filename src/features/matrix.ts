// import { atom } from "jotai";
import { generateMatrix } from "../misc/matrix";
// import { ColIdx, Matrix, RowIdx } from "../types";

// export default atom<{ activeCell: { col: ColIdx, row: RowIdx }, matrix: Matrix }>({
//   activeCell: {
//     col: -1,
//     row: -1,
//   },
//   matrix: generateMatrix({ cols: 10, rows: 10 }),
// });


import { createSlice } from "@reduxjs/toolkit";

export const matrixSlice = createSlice({
  name: "matrix",
  initialState: {
    activeCell: {
      col: -1,
      row: -1,
    },
    matrix: generateMatrix({ cols: 10, rows: 10 }),
  },
  reducers: {
    setActiveCell: (state, action) => {
      state.activeCell = action.payload;
    },
    setMatrix: (state, action) => {
      state.matrix = action.payload;
    },
  },
});

export default matrixSlice.reducer;
