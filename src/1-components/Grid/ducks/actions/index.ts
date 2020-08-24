import { Cell, NormalThunk, Walls, Action } from '../../../interfaces';
import {
  UPDATED_CELL,
  PUSHED_CELL_TO_STACK,
  CLEARED_GRID,
  SET_INTERVAL,
  SET_CURRENT_CELL,
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

export function doAddCellToStack(cell: Cell): Action {
  return {
    type: PUSHED_CELL_TO_STACK,
    payload: {
      cell: cell,
    },
  };
}

export function doResetGrid(firstCell: Cell): NormalThunk {
  return (dispatch, getState) => {
    dispatch(doClearGrid());
    dispatch(doSetCurrentCell(firstCell));
  };
}

export function doClearGrid() {
  return {
    type: CLEARED_GRID,
    payload: {},
  };
}

export function doSetInterval(interval: NodeJS.Timeout) {
  return {
    type: SET_INTERVAL,
    payload: {
      interval: interval,
    },
  };
}

function doUpdateCell(cell: Cell): Action {
  return {
    type: UPDATED_CELL,
    payload: {
      cell: cell,
    },
  };
}

export function doSetCurrentCell(cell: Cell): Action {
  return {
    type: SET_CURRENT_CELL,
    payload: {
      cell: cell,
    },
  };
}
