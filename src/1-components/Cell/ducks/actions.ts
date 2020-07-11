import { UPDATED_CELL } from './types';
import { Cell } from '../../interfaces';

export function doUpdateCell(cell: Cell, index: number) {
  return {
    type: UPDATED_CELL,
    payload: {
      cell: cell,
      index: index,
    },
  };
}
