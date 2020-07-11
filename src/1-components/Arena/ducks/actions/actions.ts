import { SET_CURRENT_CELL } from '../types';

export function doSetCurrentCell(index: number) {
  return {
    type: SET_CURRENT_CELL,
    payload: {
      index: index,
    },
  };
}
