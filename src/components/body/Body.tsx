import React from "react"
import { RowProps } from "../row/Row";

export interface BodyProps {
  children: React.ReactElement<RowProps>[];
}

export default function Body(props: BodyProps) {
  return (
    <tbody className="table__body">
      {props.children}
    </tbody>
  );
}