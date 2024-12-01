import React from "react";
import { HeadProps } from "../head/Head";
import { BodyProps } from "../body/Body";

export interface TableProps {
  children: React.ReactElement<HeadProps | BodyProps>[];
}

export default function Table(props: TableProps) {
  return (
    <table className="spreadsheet__table">
      {props.children}
    </table>
  );
}