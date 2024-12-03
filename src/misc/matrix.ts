import { CellPosition, Matrix, Selection } from "../types";

export function generateMatrix(size: { cols: number, rows: number }): Matrix {
  return new Array(size.rows).fill(0).map(() => new Array(size.cols).fill(0).map(() => ({})));
}

export function cellExist(cell: CellPosition, matrix: Matrix): boolean {
  if (cell.col < 0 || cell.row < 0) {
    return false;
  }
  return matrix[cell.row]?.[cell.col] !== undefined;
}

export function cellIsInSelection(cell: CellPosition, selection: Selection): boolean {
  selection = getSortedSelection(selection);
  if (cellsEqual(selection.start, selection.end)) {
    return false;
  }
  if (isBetween(selection.start.col, cell.col, selection.end.col) && isBetween(selection.start.row, cell.row, selection.end.row)) {
    return true;
  }
  return false;
}

export function getSortedSelection(selection: Selection): Selection {
  return {
    start: {
      col: Math.min(selection.start.col, selection.end.col),
      row: Math.min(selection.start.row, selection.end.row),
    },
    end: {
      col: Math.max(selection.start.col, selection.end.col),
      row: Math.max(selection.start.row, selection.end.row),
    },
  };
}

export function cellsEqual(a: CellPosition, b: CellPosition): boolean {
  return a.col === b.col && a.row === b.row;
}

export function isBetween(a: number, b: number, c: number): boolean {
  return a <= b && b <= c;
}