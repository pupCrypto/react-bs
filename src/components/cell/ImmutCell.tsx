import React from "react";
import { CellValue, ColIdx, RowIdx } from "../../types";

interface ImmutableCellProps {
  col: ColIdx;
  row: RowIdx;
  value: CellValue;
}

export function ImmutableCell(props: ImmutableCellProps) {
  const shellStyle = {};
  return (
    <td className="table__cell" style={shellStyle}>
      <input value={props.value} style={inputStyle} />
    </td>
  );
}