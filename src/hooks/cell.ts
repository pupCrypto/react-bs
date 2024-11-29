import { useAtomValue, useSetAtom } from "jotai";
import matrixAtom from "../features/matrix";
import { CellValue, ColIdx, RowIdx } from "../types";

namespace cell {
  export function useValue(col: ColIdx, row: RowIdx): CellValue {
    const matrix = useAtomValue(matrixAtom);
    return matrix.matrix?.[row]?.[col]?.value;
  }
  export function setValue(col: ColIdx, row: RowIdx, value: CellValue) {
    const matrix = useAtomValue(matrixAtom);
    matrix.matrix[row][col].value = value;
    useSetAtom(matrixAtom);
  }
}

export default cell;