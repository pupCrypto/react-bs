export type ColIdx = number;
export type RowIdx = number;

// Cell related types
export type CellValue = boolean | number | undefined | string;

export interface Cell {
  value: CellValue;
};
export type Matrix = Array<Array<Cell>>;