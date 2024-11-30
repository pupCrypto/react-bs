import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import useCellApi from '../../api/cell';

import Cell, { CellProps } from './Cell';
import '../index.css';


const meta: Meta<typeof Cell> = {
    component: Cell,
    render: (props: CellProps) => {
      const cellApi = useCellApi(props.col, props.row);
      cellApi.setValue("hello");
      cellApi.setBorders({top: {color: "red", width: 1}});
      return (
        <Cell {...props} />
      );
    }
};


export default meta;
type Story = StoryObj<typeof Cell>;

export const Default: Story = {
  args: {
    col: 0,
    row: 0,
  },
};

