import { useDispatch, useSelector } from "../redux/hooks";
import { matrixSlice } from "../features/matrix";
import { ARROWS, ArrowsType } from "../misc/const";
import { ColIdx, RowIdx } from "../types";

export default function useMatrixApi() {
  const dispatch = useDispatch();
  return {
    // addColumn: () => dispatch(matrixSlice.actions.addColumn()),
    appendRow: () => dispatch(matrixSlice.actions.appendRow()),
    moveActiveCell: (direction: ArrowsType) => dispatch(matrixSlice.actions.moveActiveCell(direction)),
    setActiveCell: (col: ColIdx, row: RowIdx) => dispatch(matrixSlice.actions.setActiveCell({ col, row })),
    // removeLastColumn: () => dispatch(matrixSlice.actions.removeLastColumn()),
  };
}