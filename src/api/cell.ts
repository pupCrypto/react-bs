import { CellBorders, CellValue, ColIdx, RowIdx } from "../types";
import cell from "../hooks/cell";

interface CellApi {
  useBorders: () => CellBorders;
  setBorders: (borders: Partial<CellBorders>) => void;
  useValue: () => CellValue;
  setValue: (value: CellValue) => void;
}

export default function useCellApi(col: ColIdx, row: RowIdx): CellApi {
  return {
    useBorders: () => cell.useBorders(col, row),
    setBorders: (borders: Partial<CellBorders>) => cell.setBorders(col, row, borders),
    useValue: () => cell.useValue(col, row),
    setValue: (value: CellValue) => cell.setValue(col, row, value),
  };
}
