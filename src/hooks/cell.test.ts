import { renderHook, act } from "@testing-library/react-hooks";
import cell from "./cell";

describe("cell", () => {
  it("should return undefined value", () => {
    const { result } = renderHook(() => cell.useValue(0, 0));
    console.log(result);
  });
});