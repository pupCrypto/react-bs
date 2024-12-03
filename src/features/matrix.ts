import { noneNeg, notOver } from "../misc/cast";
import { cellExist, generateMatrix, getSortedSelection } from "../misc/matrix";
import { CellBorders, Selection } from "../types";

import { createSlice } from "@reduxjs/toolkit";

const startPosition = {
  col: -1,
  row: -1
};

export const matrixSlice = createSlice({
  name: "matrix",
  initialState: {
    activeCell: startPosition,
    matrix: generateMatrix({ cols: 10, rows: 10 }),
    pressedCell: startPosition,
    releasedCell: startPosition,
    selection: {
      start: startPosition,
      end: startPosition,
    },
  },
  reducers: {
    addColumn: (state) => {
      state.matrix.forEach(row => row.push({}));
    },
    appendRow: (state) => {
      state.matrix.push(new Array(10).fill(0).map(() => ({})));
    },
    cellHovered: (state, action) => {
      const { col, row } = action.payload;
      if (cellExist(state.pressedCell, state.matrix) && !cellExist(state.releasedCell, state.matrix)) {
        state.selection.end = { col, row };
      }
    },
    cellPressed: (state, action) => {
      const { col, row } = action.payload;
      state.activeCell = { col, row };
      state.selection = {start: { col, row }, end: startPosition};
      state.pressedCell = { col, row };
      state.releasedCell = startPosition;
    },
    cellReleased: (state, action) => {
      const { col, row } = action.payload;
      state.selection.end = { col, row }
      state.releasedCell = { col, row };
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
    setSelection: (state, action) => {
      const selection: Partial<Selection> = action.payload;
      state.selection = { ...state.selection, ...selection };
    },
    setSelectionBorders: (state, action) => {
      const borders: CellBorders = action.payload;
      if (!cellExist(state.selection.start, state.matrix) || !cellExist(state.selection.end, state.matrix)) {
        return;
      }
      const selection = getSortedSelection(state.selection);
      for (let row = selection.start.row; row <= selection.end.row; row++) {
        for (let col = selection.start.col; col <= selection.end.col; col++) {
          state.matrix[row][col].borders = { ...state.matrix[row][col].borders, ...borders };
        }
      }
    },
    removeLastColumn: (state) => {
      state.matrix.forEach(row => row.pop());
    },
  },
});

export default matrixSlice.reducer;
