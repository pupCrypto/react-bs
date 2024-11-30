import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import useCellApi from '../../api/cell';

import Cell from '../cell/Cell';
import Row, { RowProps } from './Row';
import '../index.css';


const meta: Meta<typeof Row> = {
    component: Row,
    render: (props: RowProps) => {
      const cellApi = useCellApi(0, props.index);
      const cellApi1 = useCellApi(1, props.index);
      const cellApi2 = useCellApi(2, props.index);
      cellApi.setValue("hello");
      cellApi1.setValue("hello 1");
      cellApi1.setBorders({top: {color: "red", width: 1}});
      cellApi2.setValue("hello 2");
      return (
        <>
        <Row index={props.index} >
          <Cell col={0} row={props.index} />
          <Cell col={1} row={props.index} />
          <Cell col={2} row={props.index} />
        </Row>
        <Row index={props.index + 1} >
          <Cell col={0} row={props.index + 1} />
          <Cell col={1} row={props.index + 1} />
          <Cell col={2} row={props.index + 1} />
        </Row>
        </>
      );
    }
};


export default meta;
type Story = StoryObj<typeof Row>;

export const Default: Story = {
  args: {
    index: 0,
  },
};

