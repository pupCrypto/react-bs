import React from "react";
import { ColIdx, RowIdx } from "../../types";
import useCellApi from "../../api/cell";


export interface CellProps {
  col: ColIdx;
  row: RowIdx;
};

export default function Cell(props: CellProps) {
  const inputRef = React.useRef<HTMLSpanElement>(null);
  const cellApi = useCellApi(props.col, props.row);
  const isActive = cellApi.useIsActive();
  console.log(isActive);
  const borders = cellApi.useBorders();
  const value = cellApi.useValue();
  const shellStyle = {
    borderTop: `${borders?.top?.width}px solid ${borders?.top?.color}`,
    borderRight: `${borders?.right?.width}px solid ${borders?.right?.color}`,
    borderBottom: `${borders?.bottom?.width}px solid ${borders?.bottom?.color}`,
    borderLeft: `${borders?.left?.width}px solid ${borders?.left?.color}`,
  };
  const onClick = () => {
    cellApi.setActive();
  }
  const onKeyDown = () => {
    console.log('pressed');
  }
  React.useEffect(() => {
    if (isActive) {
      inputRef.current?.focus();
    }
  }, [isActive]);
  return (
    <td
      className="table__cell"
      onClick={onClick}
      onKeyDown={onKeyDown}
      style={shellStyle}
    >
      <span ref={inputRef} contentEditable>{value}</span>
    </td>
  );
}