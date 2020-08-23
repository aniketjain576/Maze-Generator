import { Cell, NormalThunk, Walls } from '../../../interfaces';
import {
  UPDATED_CELL,
  PUSHED_CELL_TO_STACK,
  POPPED_CELL_FROM_STACK,
} from '../types';

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

export function doAddCellToStack(cell: Cell) {
  return {
    type: PUSHED_CELL_TO_STACK,
    payload: {
      cell: cell,
    },
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
