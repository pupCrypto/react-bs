import React from "react";
export interface ToolProps {
  key: string;
  icon?: React.ReactElement;
  label?: string;
  cb?: () => void;
}

export default function Tool(props: ToolProps) {
  return (
    <div className="toolbar__tool" onClick={props.cb}>
      {
      props.icon &&
      <div className="toolbar__tool-icon">
        {props.icon}
      </div>
      }
      {
      props.label &&
      <div className="toolbar__tool-label">
        {props.label}
      </div>
      }
    </div>
  );
}