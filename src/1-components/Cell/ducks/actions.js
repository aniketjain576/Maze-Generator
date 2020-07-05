import { UPDATED_CELL } from './types';

export function doUpdateCell(cell, index) {
  return {
    type: UPDATED_CELL,
    payload: {
      cell: cell,
      index: index,
    },
  };
}
