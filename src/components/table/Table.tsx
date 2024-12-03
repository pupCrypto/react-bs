import React from "react";
import Head, { HeadProps } from "../head/Head";
import Body, { BodyProps } from "../body/Body";

export interface TableProps {
  children?: React.ReactElement<HeadProps | BodyProps>[];
}

export default function Table(props: TableProps) {
  const head = props.children ? props.children.find(child => child.type === Head) : <Head />;
  const body = props.children ? props.children.find(child => child.type === Body) : <Body />;
  return (
    <table className="spreadsheet__table">
      {head}
      {body}
    </table>
  );
}