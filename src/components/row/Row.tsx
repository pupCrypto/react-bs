import React from "react";
import Cell, { CellProps } from "../cell/Cell";
import { RowIdx } from "../../types";
import { getRowLabel } from "../../misc/table";

export interface RowProps {
  children: React.ReactElement<CellProps>[];
  index: RowIdx;
  label?: string;
}

export default function Row(props: RowProps) {
  const label = props.label || getRowLabel(props.index);
  props.children.forEach((child) => {
    if (child.props.row !== props.index) {
      throw new Error("Row children must have matching row index");
    }
  })
  return (
    <tr>
      <td style={{fontWeight: 'bold'}}>{label}</td>
      {props.children}
    </tr>
  );
}