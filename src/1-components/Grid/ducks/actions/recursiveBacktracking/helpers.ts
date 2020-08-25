import { TOTAL_NUM_CELLS, CELLS_PER_ROW } from '../../../../constants';
import { Cell, NormalThunk, WALL_TYPES } from '../../../../interfaces';

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

export function markNextCellVisited(cell: Cell) {
  cell.visited = true;
}

export function removeWallsBetweenCells(currentCell: Cell, nextCell: Cell) {
  const currentCellIndex = currentCell.index;
  const nextCellIndex = nextCell.index;

  if (currentCellIndex - nextCellIndex === -1) {
    removeWall(currentCell, WALL_TYPES.RIGHT);
    removeWall(nextCell, WALL_TYPES.LEFT);
  }
  if (currentCellIndex - nextCellIndex === 1) {
    removeWall(currentCell, WALL_TYPES.LEFT);
    removeWall(nextCell, WALL_TYPES.RIGHT);
  }
  if (currentCellIndex - nextCellIndex === CELLS_PER_ROW) {
    removeWall(currentCell, WALL_TYPES.TOP);
    removeWall(nextCell, WALL_TYPES.BOTTOM);
  }
  if (currentCellIndex - nextCellIndex === -1 * CELLS_PER_ROW) {
    removeWall(currentCell, WALL_TYPES.BOTTOM);
    removeWall(nextCell, WALL_TYPES.TOP);
  }
}

function removeWall(cell: Cell, wallToRemove: WALL_TYPES) {
  const walls = { ...cell.walls };
  walls[wallToRemove] = false;
  cell.walls = walls;
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
