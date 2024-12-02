import React from "react";
import Cell, { CellProps } from "../cell/Cell";
import { RowIdx } from "../../types";
import { getRowLabel } from "../../misc/table";
import { useMatrixRow } from "../../hooks/matrix";

export interface RowProps {
  children: React.ReactElement<CellProps>[];
  index: RowIdx;
  label?: string;
}

const Row = React.memo((props: RowProps) => {
  const label = props.label || getRowLabel(props.index);
  props.children.forEach((child) => {
    if (child.props.row !== props.index) {
      throw new Error("Row children must have matching row index");
    }
  });
  const row = useMatrixRow(props.index);
  const cells: CellProps[] = new Array(row.length).fill(0).map((val, index) => ({col: index, row: props.index}));
  for (var child of props.children) {
    cells[child.props.col] = child.props;
  }
  return (
    <tr>
      <td style={{fontWeight: 'bold'}}>{label}</td>
      {cells.map((props, index) => <Cell key={index} {...props} />)}
    </tr>
  );
}, (prev, next) => prev.index === next.index);

export default Row;