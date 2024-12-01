import { Matrix } from "../types";

export function generateMatrix(size: { cols: number, rows: number }): Matrix {
  return new Array(size.rows).fill(0).map(() => new Array(size.cols).fill(0).map(() => ({})));
}