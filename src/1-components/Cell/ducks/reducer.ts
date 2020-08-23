import { UPDATED_CELL } from './types';
import { TOTAL_NUM_CELLS } from '../../constants';
import { Cell, Action, Walls, WALL_TYPES } from '../../interfaces';
import { Key } from 'react';
import { generateDefaultCells } from './helpers';

const initialState: { cells: Cell[] } = {
  cells: generateDefaultCells(),
};

export default function cellReducer(state = initialState, action: Action) {
  //payload should have new cell
  const { type, payload } = action;
  switch (type) {
    case UPDATED_CELL: {
      const new_cells = JSON.parse(JSON.stringify(state.cells));
      const { cell } = payload;
      new_cells[cell.index] = cell;

      return {
        ...state,
        cells: new_cells,
      };
    }
    default:
      return state;
  }
}
