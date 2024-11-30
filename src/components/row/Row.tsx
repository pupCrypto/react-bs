import React from "react";
import Cell from "../cell/Cell";
import { RowIdx } from "../../types";

export interface RowProps {
  index: RowIdx;
  children: React.ReactNode;
}

export default function Row(props: RowProps) {
  return (
    <tr>
      {/* <Cell col={0} row={props.row} /> */}
      {props.children}
    </tr>
  );
}