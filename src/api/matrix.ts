import { useDispatch } from "../redux/hooks";
import { matrixSlice } from "../features/matrix";
import { ArrowsType } from "../misc/const";
import { CellBorders, ColIdx, Selection, RowIdx } from "../types";

export default function useMatrixApi() {
  const dispatch = useDispatch();
  return {
    appendRow: () => dispatch(matrixSlice.actions.appendRow()),
    moveActiveCell: (direction: ArrowsType) => dispatch(matrixSlice.actions.moveActiveCell(direction)),
    setSelectionBorders: (borders: Partial<CellBorders>) => dispatch(matrixSlice.actions.setSelectionBorders(borders)),
    setActiveCell: (col: ColIdx, row: RowIdx) => dispatch(matrixSlice.actions.setActiveCell({ col, row })),
    setSelection: (selection: Partial<Selection>) => dispatch(matrixSlice.actions.setSelection(selection)),
  };
}