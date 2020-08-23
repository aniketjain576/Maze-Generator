import { UPDATED_CELL } from './types';
import { Cell, NormalThunk, Walls } from '../../interfaces';

export function doMarkVisited(cell: Cell): NormalThunk {
  return (dispatch, getState) => {
    cell.visited = true;
    dispatch(doUpdateCell(cell));
  };
}

export function doUpdateWalls(cell: Cell, walls: Walls): NormalThunk {
  return (dispatch, getState) => {
    cell.walls = walls;
    dispatch(doUpdateCell(cell));
  };
}

function doUpdateCell(cell: Cell) {
  return {
    type: UPDATED_CELL,
    payload: {
      cell: cell,
    },
  };
}
