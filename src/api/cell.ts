import { CellBorders, CellValue, ColIdx, RowIdx } from "../types";
import { useDispatch, useSelector } from "../redux/hooks";
import { matrixSlice } from "../features/matrix";
import { cellExist, cellIsInSelection } from "../misc/matrix";

interface CellApi {
  cellHovered: () => void;
  cellPressed: () => void;
  cellReleased: () => void;
  useBorders: () => CellBorders | undefined;
  useIsActive: () => boolean;
  useIsInSelection: () => boolean;
  useValue: () => CellValue;
  setActive: () => void;
  setBorders: (borders: Partial<CellBorders>) => void;
  setValue: (value: CellValue) => void;
}

export default function useCellApi(col: ColIdx, row: RowIdx): CellApi {
  const dispatch = useDispatch();
  return {
    cellHovered: () => dispatch(matrixSlice.actions.cellHovered({ col, row })),
    cellPressed: () => dispatch(matrixSlice.actions.cellPressed({ col, row })),
    cellReleased: () => dispatch(matrixSlice.actions.cellReleased({ col, row })),
    useBorders: () => useSelector(state => state.matrix.matrix[row]?.[col])?.borders,
    useIsActive: () => useSelector(state => state.matrix.activeCell.col === col && state.matrix.activeCell.row === row),
    useIsInSelection: () => useSelector(state => {
      if (
        !cellExist(state.matrix.selection.start, state.matrix.matrix) ||
        !cellExist(state.matrix.selection.end, state.matrix.matrix)
      ) {
        return false;
      }
      return cellIsInSelection({ col, row }, state.matrix.selection)
    }),
    useValue: () => useSelector(state => state.matrix.matrix[row]?.[col]?.value),
    setActive: () => dispatch(matrixSlice.actions.setActiveCell({ col, row })),
    setBorders: (borders: Partial<CellBorders>) => dispatch(matrixSlice.actions.setBorders({ col, row, borders })),
    setValue: (value: CellValue) => dispatch(matrixSlice.actions.setValue({ col, row, value })),
  };
}
