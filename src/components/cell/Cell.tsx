import React from "react";
import { ColIdx, RowIdx } from "../../types";
import { getInputBoxShadow } from "../../misc/styles";
import useCellApi from "../../api/cell";


export interface CellProps {
  col: ColIdx;
  row: RowIdx;
};

export default function Cell(props: CellProps) {
  const cellApi = useCellApi(props.col, props.row);
  const borders = cellApi.useBorders();
  const value = cellApi.useValue();
  const shellStyle = {
    borderTop: `${borders?.top?.width}px solid ${borders?.top?.color}`,
    borderRight: `${borders?.right?.width}px solid ${borders?.right?.color}`,
    borderBottom: `${borders?.bottom?.width}px solid ${borders?.bottom?.color}`,
    borderLeft: `${borders?.left?.width}px solid ${borders?.left?.color}`,
  };
  return (
    <td className="table__cell" style={shellStyle}>
      <input defaultValue={value} />
    </td>
  );
}