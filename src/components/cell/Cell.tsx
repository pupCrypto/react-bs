import React from "react";
import { ColIdx, RowIdx } from "../../types";
import useCellApi from "../../api/cell";


export interface CellProps {
  col: ColIdx;
  row: RowIdx;
};

export default function Cell(props: CellProps) {
  const cellApi = useCellApi(props.col, props.row);
  const value = cellApi.useValue();
  return (
    <td className="table__cell">{value}</td>
  );
}