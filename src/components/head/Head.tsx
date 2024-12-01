import React from 'react';

import { ColumnProps } from '../column/Column';

export interface HeadProps {
  children: React.ReactElement<ColumnProps>[];
}

export default function Head(props: HeadProps) {
  return (
    <thead className="table__head">
      <th></th>
      {props.children}
    </thead>
  );
}