import { SET_CURRENT_CELL } from '../types';
import { Cell, NormalThunk, Action } from '../../../interfaces';

export function doSetCurrentCell(index: number): Action {
  return {
    type: SET_CURRENT_CELL,
    payload: {
      index: index,
    },
  };
}
