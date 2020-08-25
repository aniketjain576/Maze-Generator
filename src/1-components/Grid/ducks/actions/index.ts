import { Cell, NormalThunk, Walls, Action } from '../../../interfaces';
import { SET_INTERVAL, RESET_GRID } from '../types';

export function doResetGrid(firstCell: Cell) {
  return {
    type: RESET_GRID,
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
