import React from "react";
import Cell, { CellProps } from "../cell/Cell";
import { Row, RowIdx } from "../../types";
import { getRowLabel } from "../../misc/table";
import { useMatrixRow } from "../../hooks/matrix";

export interface RowProps {
  children: React.ReactElement<CellProps>[];
  index: RowIdx;
  label?: string;
}

const Row = React.memo((props: RowProps) => {
  const [cells, setCells] = React.useState<React.ReactElement<CellProps>[]>([]);
  const label = props.label || getRowLabel(props.index);
  props.children.forEach((child) => {
    if (child.props.row !== props.index) {
      throw new Error("Row children must have matching row index");
    }
  });
  const row = useMatrixRow(props.index);
  const cellProps: CellProps[] = new Array(row.length).fill(0).map((val, index) => ({col: index, row: props.index}));
  for (var child of props.children) {
    cellProps[child.props.col] = child.props;
  }
  const getCellProps = (row: Row) => {
    const cellProps: CellProps[] = new Array(row.length).fill(0).map((val, index) => ({col: index, row: props.index}));
    for (var child of props.children) {
      cellProps[child.props.col] = child.props;
    }
  }
  React.useEffect(() => {
    if (cells.length > row.length) {
      setCells(cells.slice(0, row.length));
    } else if (cells.length < row.length) {
      const newCells = new Array(row.length - cells.length).fill(0).map((val, index) => cellProps[index]).map((props, index) => <Cell key={index} {...props} />);
      setCells([...cells, ...newCells]);
    }
  }, [row.length]);
  return (
    <tr>
      <td style={{fontWeight: 'bold', textAlign: "center", userSelect: "none"}}>{label}</td>
      {cellProps.map((props, index) => <Cell key={index} {...props} />)}
      {/* {...cells} */}
    </tr>
  );
}, (prev, next) => prev.index === next.index);

export default Row;