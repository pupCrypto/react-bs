import { CellValue, ColIdx, RowIdx } from "../types";
import cell from "../hooks/cell";

interface CellApi {
  useValue: () => CellValue;
  setValue: (value: CellValue) => void;
}

export default function useCellApi(col: ColIdx, row: RowIdx): CellApi {
  return {
    useValue: () => cell.useValue(col, row),
    setValue: (value: CellValue) => cell.setValue(col, row, value),
  };
}
