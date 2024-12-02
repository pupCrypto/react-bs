import { Row, RowIdx } from "../types";
import { useSelector } from "../redux/hooks";

export function useMatrixMaxColumnsLength(): number {
  return useSelector(state => Math.max(...state.matrix.matrix.map(row => row.length)));
}

export function useMatrixRowsLength(): number {
  return useSelector(state => state.matrix.matrix.length);
}

export function useMatrixRow(row: RowIdx): Row {
  return useSelector(state => state.matrix.matrix[row]);
}