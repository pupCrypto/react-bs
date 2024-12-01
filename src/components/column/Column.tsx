import React from "react";
import { ColIdx } from "../../types";
import { getColumnLabel } from "../../misc/table";

export interface ColumnProps {
  index: ColIdx;
  label?: string;
}

export default function Column(props: ColumnProps) {
  const label = props.label || getColumnLabel(props.index);
  return (
    <th>{label}</th>
  );
}