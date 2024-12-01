export type ColIdx = number;
export type RowIdx = number;

// Cell related types
export interface CellBorder {
  width: number;
  color: string;
}; 
export interface CellBorders {
  top: CellBorder | undefined;
  right: CellBorder | undefined;
  bottom: CellBorder | undefined;
  left: CellBorder | undefined;
}
export type CellValue = number | undefined | string;

export interface Cell {
  borders?: CellBorders;
  value?: CellValue;
};
export type Matrix = Array<Array<Cell>>;