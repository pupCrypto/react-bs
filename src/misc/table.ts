import { ColIdx, RowIdx } from "../types";

export function getColumnLabel(col: ColIdx): string {
  if (col < 0) {
      throw new Error("Input must be a non-negative integer.");
  }
  var result = '';
  col += 1;
  while (col > 0) {
    const remainder = (col - 1) % 26;
    result = String.fromCharCode(65 + remainder) + result;
    col = Math.floor((col - 1) / 26);
  }
  return result;
}

export function getRowLabel(row: RowIdx): string {
  return `${row + 1}`;
}