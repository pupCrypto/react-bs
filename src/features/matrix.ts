// import { atom } from "jotai";
import { noneNeg, notOver } from "../misc/cast";
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
    addColumn: (state) => {
      state.matrix.forEach(row => row.push({}));
    },
    appendRow: (state) => {
      state.matrix.push(new Array(10).fill(0).map(() => ({})));
    },
    moveActiveCell: (state, action) => {
      const direction = action.payload;
      const { col, row } = state.activeCell;
      switch (direction) {
        case "ArrowRight":
          state.activeCell = { col: notOver(col + 1, state.matrix[row].length - 1), row };
          break;
        case "ArrowLeft":
          state.activeCell = { col: noneNeg(col - 1), row };
          break;
        case "ArrowDown":
          state.activeCell = { col, row: notOver(row + 1, state.matrix.length - 1) };
          break;
        case "ArrowUp":
          state.activeCell = { col, row: noneNeg(row - 1) };
          break;
        default:
          break;
      }
    },
    setActiveCell: (state, action) => {
      state.activeCell = action.payload;
    },
    setBorders: (state, action) => {
      const { col, row, borders } = action.payload;
      state.matrix[row][col].borders = { ...state.matrix[row][col].borders, ...borders };
    },
    setMatrix: (state, action) => {
      state.matrix = action.payload;
    },
    setValue: (state, action) => {
      const { col, row, value } = action.payload;
      state.matrix[row][col].value = value;
    },
    removeLastColumn: (state) => {
      state.matrix.forEach(row => row.pop());
    },
  },
});

export default matrixSlice.reducer;
