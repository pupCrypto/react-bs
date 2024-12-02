import React from 'react';

import Column, { ColumnProps } from '../column/Column';
import { useMatrixMaxColumnsLength } from '../../hooks/matrix';

export interface HeadProps {
  children: React.ReactElement<ColumnProps>[];
}

export default function Head(props: HeadProps) {
  const colLen = useMatrixMaxColumnsLength();
  const columns = new Array(colLen).fill(0).map((val, index) => ({index}));
  for (var child of props.children) {
    columns[child.props.index] = child.props;
  }
  return (
    <thead className="table__head">
      <th id="corner"></th>
      {columns.map((props, index) => <Column key={index} {...props} />)}
    </thead>
  );
}