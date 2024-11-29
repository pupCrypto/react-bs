import { atom } from "jotai";
import { generateMatrix } from "../misc/matrix";
import { Matrix } from "../types";

export default atom<{ matrix: Matrix }>({
  matrix: generateMatrix({ cols: 10, rows: 10 }),
});
