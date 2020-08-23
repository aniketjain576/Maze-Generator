import { UPDATED_CELL } from './types';
import { Cell, NormalThunk, Walls } from '../../interfaces';

export function doMarkVisited(index: number): NormalThunk {
  return (dispatch, getState) => {
    const cells: Cell[] = getState().grid.cells;
    const visitedCell: Cell = JSON.parse(JSON.stringify(cells[index]));
    visitedCell.visited = true;
    dispatch(doUpdateCell(index, visitedCell));
  };
}

export function doUpdateWalls(index: number, walls: Walls): NormalThunk {
  return (dispatch, getState) => {
    const cells: Cell[] = getState().grid.cells;
    const targetCell: Cell = JSON.parse(JSON.stringify(cells[index]));
    targetCell.walls = walls;
    dispatch(doUpdateCell(index, targetCell));
  };
}

function doUpdateCell(index: number, cell: Cell) {
  return {
    type: UPDATED_CELL,
    payload: {
      index: index,
      cell: cell,
    },
  };
}
