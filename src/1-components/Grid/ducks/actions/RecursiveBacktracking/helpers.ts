import { TOTAL_NUM_CELLS, CELLS_PER_ROW } from '../../../../constants';

export function isValidIndex(
  currentIndex: number,
  neighborIndex: number
): boolean {
  if (neighborIndex < 0) {
    return false;
  }

  if (neighborIndex > TOTAL_NUM_CELLS - 1) {
    return false;
  }

  const column = currentIndex % CELLS_PER_ROW;
  if (column === CELLS_PER_ROW - 1) {
    if (neighborIndex === currentIndex + 1) {
      return false;
    }
    return true;
  }
  if (column === 0) {
    if (neighborIndex === currentIndex - 1) {
      return false;
    }
    return true;
  }
  return true;
}
