import {
  MOVED_TO_NEXT_CELL,
  MOVED_TO_PREVIOUS_CELL,
  RESET_GRID,
} from './types';
import { Cell, Action } from '../../interfaces';
import { generateDefaultCells } from './helpers';

const initialState: {
  cells: Cell[];
  currentCellIndex: number;
  stack: Cell[];
} = {
  cells: generateDefaultCells(),
  currentCellIndex: 0,
  stack: [],
};

export default function gridReducer(state = initialState, action: Action) {
  const { type, payload } = action;
  switch (type) {
    case MOVED_TO_NEXT_CELL: {
      return {
        ...state,
        cells: payload.cells,
        stack: payload.stack,
        currentCellIndex: payload.currentCellIndex,
      };
    }

    case MOVED_TO_PREVIOUS_CELL: {
      return {
        ...state,
        stack: payload.stack,
        currentCellIndex: payload.currentCellIndex,
      };
    }

    case RESET_GRID: {
      return {
        ...state,
        cells: generateDefaultCells(),
        stack: [],
        algorithmInterval: null,
        currentCellIndex: 0,
      };
    }

    default:
      return state;
  }
}
