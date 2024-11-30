import React from "react";
import { CellBorders } from "../types";


export function getInputBoxShadow(borders: CellBorders): string {
  var left = getBoxShadowSide('left', borders?.left?.color, borders?.left?.width);
  var right = getBoxShadowSide('right', borders?.right?.color, borders?.right?.width);
  var top = getBoxShadowSide('top', borders?.top?.color, borders?.top?.width);
  var bottom = getBoxShadowSide('bottom', borders?.bottom?.color, borders?.bottom?.width);
  return `${left}, ${right}, ${top}, ${bottom}`;
}

function getBoxShadowSide(
  side: 'left' | 'right' | 'top' | 'bottom',
  color: string | undefined,
  width: number | undefined
) {
    if (!color) {
      color = 'black';
    }
    if (!width) {
      width = 1;
    }
    --width;
    if (['right', 'bottom'].includes(side)) {
      width *= -1;
    }
    if (['left', 'right'].includes(side)) {
      return `inset ${width}px 0 0 0 ${color}`;
    } else {
      return `inset 0 ${width}px 0 0 ${color}`;
    }
}