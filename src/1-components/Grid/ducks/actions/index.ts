import { Cell, NormalThunk, Walls, Action } from '../../../interfaces';
import { RESET_GRID } from '../types';

export function doResetGrid() {
  return {
    type: RESET_GRID,
    payload: {},
  };
}
