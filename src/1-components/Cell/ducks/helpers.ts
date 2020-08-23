import { Walls, Cell } from '../../interfaces';
import { TOTAL_NUM_CELLS } from '../../constants';

const defaultCell = {
  walls: generateDefaultWalls(),
  visited: false,
};

export function generateDefaultCells(): Cell[] {
  let cells = [];

  for (var index = 0; index < TOTAL_NUM_CELLS; index++) {
    cells.push(generateCellWithIndex(index));
  }

  return cells;
}

function generateCellWithIndex(index: number): Cell {
  let cell = JSON.parse(JSON.stringify(defaultCell));
  if (index === 0) {
    cell = {
      ...cell,
      visited: true,
      index: index,
    };
    return cell;
  }
  cell = {
    ...cell,
    index: index,
  };
  return cell;
}

function generateDefaultWalls(): Walls {
  const walls: Walls = {
    TOP: true,
    RIGHT: true,
    BOTTOM: true,
    LEFT: true,
  };
  return walls;
}
