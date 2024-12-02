import React from "react"
import Row, { RowProps } from "../row/Row";
import { useMatrixRowsLength } from "../../hooks/matrix";

export interface BodyProps {
  children: React.ReactElement<RowProps>[];
}

export default function Body(props: BodyProps) {
  const rowsLen = useMatrixRowsLength();
  const rows: RowProps[] = new Array(rowsLen).fill(0).map((val, index) => ({index, children: []}));
  for (var child of props.children) {
    rows[child.props.index] = child.props;
  }
  return (
    <tbody className="table__body">
      {rows.map((props, index) => <Row key={index} {...props} />)}
    </tbody>
  );
}