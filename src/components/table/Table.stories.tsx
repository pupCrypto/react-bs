import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Table from './Table';

import Body from '../body/Body';
import Cell from '../cell/Cell';
import Column from '../column/Column';
import Head from '../head/Head';
import Row from '../row/Row';
import WrapperProvider from '../Provider';

import useCellApi from '../../api/cell';

import '../index.css';

const meta: Meta<typeof Table> = {
    component: Table,
    decorators: [(Story) => (<WrapperProvider><Story /></WrapperProvider>)],
    render: (args) => {
        const cellApi = useCellApi(0, 0);
        const cellApi1 = useCellApi(1, 0);

        cellApi.setValue(1);
        cellApi1.setValue(3);
        cellApi1.setBorders({bottom: {color: "red", width: 2}, top: {color: "red", width: 3}, right: {color: "red", width: 2}});
        return (
            <Table>
                <Head>
                    <Column index={0} label="A" />
                    <Column index={1} label="B" />
                    <Column index={2} label="C" />
                </Head>
                <Body>
                    <Row index={0}>
                        <Cell col={0} row={0} />
                        <Cell col={1} row={0} />
                        <Cell col={2} row={0} />
                    </Row>
                    <Row index={1}>
                        <Cell col={0} row={1} />
                        <Cell col={1} row={1} />
                        <Cell col={2} row={1} />
                    </Row>
                    <Row index={2}>
                        <Cell col={0} row={2} />
                        <Cell col={1} row={2} />
                        <Cell col={2} row={2} />
                    </Row>
                </Body>
            </Table>
        );
    },
};


export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
    args: {},
};

