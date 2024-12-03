import React from "react";
import Table, { TableProps } from "../table/Table";
import Toolbar, { ToolbarProps} from "../toolbar/Toolbar";
import ProviderWrapper from "../Provider";

export interface SpreadsheetProps {
  children?: React.ReactElement<TableProps | ToolbarProps>[],
}

export default function Spreadsheet(props: SpreadsheetProps) {
  if (props.children && props.children.length > 2) {
    throw new Error("Spreadsheet can only have one Table and one Toolbar");
  }
  const table = props.children ? props.children.find(child => child.type === Table) : <Table />;
  const toolbar = props.children ? props.children.find(child => child.type === Toolbar) : <Toolbar />;
  return (
    <ProviderWrapper>
      <div className="spreadsheet">
        {toolbar}
        {table}
      </div>
    </ProviderWrapper>
  );
}