import { CellBorders, CellValue, ColIdx, RowIdx } from "../types";
import { useDispatch, useSelector } from "../redux/hooks";
import { matrixSlice } from "../features/matrix";
// import cell from "../hooks/cell";

interface CellApi {
  useBorders: () => CellBorders | undefined;
  useIsActive: () => boolean;
  useValue: () => CellValue;
  setActive: () => void;
  setBorders: (borders: Partial<CellBorders>) => void;
  setValue: (value: CellValue) => void;
}

export default function useCellApi(col: ColIdx, row: RowIdx): CellApi {
  const dispatch = useDispatch();
  return {
    useBorders: () => useSelector(state => state.matrix.matrix[row]?.[col])?.borders,
    useIsActive: () => useSelector(state => state.matrix.activeCell.col === col && state.matrix.activeCell.row === row),
    useValue: () => useSelector(state => state.matrix.matrix[row]?.[col]?.value),
    setActive: () => dispatch(matrixSlice.actions.setActiveCell({ col, row })),
    setBorders: (borders: Partial<CellBorders>) => dispatch(matrixSlice.actions.setBorders({ col, row, borders })),
    setValue: (value: CellValue) => dispatch(matrixSlice.actions.setValue({ col, row, value })),
  };
}
