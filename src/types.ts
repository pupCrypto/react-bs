export type ColIdx = number;
export type RowIdx = number;
export type RowLength = number;

// Cell related types
export interface CellPosition {
  col: ColIdx;
  row: RowIdx;
}
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
export type Row = Array<Cell>;

export interface Selection {
  start: CellPosition;
  end: CellPosition;
}