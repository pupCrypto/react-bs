import { useAtomValue, useSetAtom } from "jotai";
import matrixAtom from "../features/matrix";
import { CellBorders, CellValue, ColIdx, RowIdx } from "../types";

namespace cell {
  export function useBorders(col: ColIdx, row: RowIdx): CellBorders {
    const matrix = useAtomValue(matrixAtom);
    return matrix.matrix?.[row]?.[col]?.borders;
  }
  export function setBorders(col: ColIdx, row: RowIdx, borders: Partial<CellBorders>) {
    const matrix = useAtomValue(matrixAtom);
    matrix.matrix[row][col].borders = { ...matrix.matrix[row][col].borders, ...borders };
    useSetAtom(matrixAtom);
  }
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