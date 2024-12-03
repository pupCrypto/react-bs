import React from "react";
import Tool, { ToolProps } from "../tool/Tool";
import useMatrixApi from "../../api/matrix";

export interface ToolbarProps {
  children?: React.ReactElement<ToolProps>[]
}

export default function Toolbar(props: ToolbarProps) {
  const matrixApi = useMatrixApi();
  const onBordersClick = () => {
    matrixApi.setSelectionBorders({top: {color: "red", width: 2}});
  }
  const borders = props.children ? props.children.find(child => child.props.key === "borders") : <Tool key="borders" label="Borders" cb={onBordersClick} />;
  return (
    <div className="spreadsheet__toolbar">
      {borders}
    </div>
  );
}