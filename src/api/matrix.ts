import { useDispatch, useSelector } from "../redux/hooks";
import { matrixSlice } from "../features/matrix";
import { ARROWS, ArrowsType } from "../misc/const";

export default function useMatrixApi() {
  const dispatch = useDispatch();
  return {
    appendRow: () => dispatch(matrixSlice.actions.appendRow()),
    moveActiveCell: (direction: ArrowsType) => dispatch(matrixSlice.actions.moveActiveCell(direction)),
    setActiveCell: (col: number, row: number) => dispatch(matrixSlice.actions.setActiveCell({ col, row })),
  };
}