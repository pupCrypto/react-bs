import { Matrix } from "../types";

export function generateMatrix(size: { cols: number, rows: number }): Matrix {
  return new Array(size.rows).fill(Array(size.cols).fill(0).map(() => ({})));
}