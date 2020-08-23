import { TOTAL_NUM_CELLS, CELLS_PER_ROW } from '../../../../constants';
import { Cell } from '../../../../interfaces';

export function findNeighbors(currentCellIndex: number, cells: Cell[]): number {
  const neighbors: number[] = [];
  const potentialNeighbors: number[] = [];

  //top cell index
  potentialNeighbors.push(currentCellIndex - CELLS_PER_ROW);
  //right cell index
  potentialNeighbors.push(currentCellIndex + 1);
  //bottom cell index
  potentialNeighbors.push(currentCellIndex - 1);
  //left cell index
  potentialNeighbors.push(currentCellIndex + CELLS_PER_ROW);

  potentialNeighbors.map((neighborIndex) => {
    if (isValidNeighborIndex(currentCellIndex, neighborIndex)) {
      if (!cells[neighborIndex].visited) {
        neighbors.push(neighborIndex);
      }
    }
  });

  return neighbors[Math.floor(Math.random() * neighbors.length)];
}

function isValidNeighborIndex(
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
