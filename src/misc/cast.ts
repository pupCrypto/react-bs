export function noneNeg(value: number): number {
  if (value < 0) {
    return 0;
  }
  return value;
}

export function notOver(value: number, max: number): number {
  if (value > max) {
    return max;
  }
  return value;
}