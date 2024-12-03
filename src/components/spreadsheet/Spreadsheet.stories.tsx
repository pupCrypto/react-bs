import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Spreadsheet from './Spreadsheet';

const meta: Meta<typeof Spreadsheet> = {
    component: Spreadsheet,
};


export default meta;
type Story = StoryObj<typeof Spreadsheet>;

export const Default: Story = {
    args: {},
    render: () => {
        return (
            <Spreadsheet>

            </Spreadsheet>
        )
    }
};
