import React from "react";
import { CellPosition, ColIdx, RowIdx } from "../../types";
import useCellApi from "../../api/cell";
import { getInnerText } from "../../misc/html";
import useMatrixApi from "../../api/matrix";
import { ARROWS } from "../../misc/const";

export interface CellProps {
  col: ColIdx;
  row: RowIdx;
};

export default function Cell(props: CellProps) {
  const cellPosition: CellPosition = {col: props.col, row: props.row};
  const inputRef = React.useRef<HTMLSpanElement>(null);
  const matrixApi = useMatrixApi();
  const cellApi = useCellApi(props.col, props.row);
  const isActive = cellApi.useIsActive();
  const borders = cellApi.useBorders();
  const value = cellApi.useValue();
  const isInSelection = cellApi.useIsInSelection();
  const [typing, setTyping] = React.useState(false);
  console.log('render', props.col, props.row);

  const shellStyle = {
    borderTop: `${borders?.top?.width}px solid ${borders?.top?.color}`,
    borderRight: `${borders?.right?.width}px solid ${borders?.right?.color}`,
    borderBottom: `${borders?.bottom?.width}px solid ${borders?.bottom?.color}`,
    borderLeft: `${borders?.left?.width}px solid ${borders?.left?.color}`,
  };

  const onClick = () => {
    // cellApi.setActive();
  }

  const onMouseEnter = () => {
    cellApi.cellHovered();
  }

  const onMouseLeave = () => {
  }

  const onMouseDown = () => {
    cellApi.setActive();
    cellApi.cellPressed();
  }

  const onMouseUp = () => {
    matrixApi.setSelection({end: cellPosition});
    cellApi.cellReleased();
  }
  const onKeyDown = (e) => {
    if (ARROWS.includes(e.key)) {
      e.preventDefault();
      return matrixApi.moveActiveCell(e.key);
    }
    if (!typing) {
      setTyping(true);
    }
  }
  const onKeyUp = () => {
    var value = getInnerText(inputRef);
    if (value === 'append') {
      matrixApi.appendRow();
    }
  }
  React.useEffect(() => {
    if (isActive) {
      inputRef.current?.focus();
    }
  }, [isActive]);
  return (
    <td
      is-active={isActive ? "true" : undefined}
      is-in-selection={isInSelection ? "true" : undefined}
      is-typing={typing ? "true" : undefined}
      className="table__cell"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      style={shellStyle}
    >
      <div
        contentEditable
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        spellCheck={false}
        ref={inputRef}
      >{value}</div>
    </td>
  );
}