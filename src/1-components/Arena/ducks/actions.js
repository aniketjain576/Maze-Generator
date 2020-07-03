import { UPDATED_CELL } from './types';

export function doUpdateCell(cells) {
  return {
    type: UPDATED_CELL,
    payload: {
      cells: cells,
    },
  };
}
