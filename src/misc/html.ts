import React from "react";

export function getInnerText(ref: React.RefObject<HTMLElement>): string | undefined {
  return ref.current?.innerText;
}