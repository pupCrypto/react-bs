import { useSelector } from "../redux/hooks";
import { matrixSlice } from "../store/matrix";

export default function useMatrixApi() {
  const dispatch = useDispatch();
  return {
    useMatrix: () => useSelector(state => state.matrix),
  };
}