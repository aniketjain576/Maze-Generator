import {
  UPDATED_CELL,
  PUSHED_CELL_TO_STACK,
  POPPED_CELL_FROM_STACK,
  CLEARED_GRID,
  SET_INTERVAL,
  SET_CURRENT_CELL,
} from './types';
import { Cell, Action } from '../../interfaces';
import { generateDefaultCells } from './helpers';

const initialState: {
  cells: Cell[];
  currentCellIndex: number;
  stack: Cell[];
  algorithmInterval: NodeJS.Timeout | null;
} = {
  cells: generateDefaultCells(),
  currentCellIndex: 0,
  stack: [],
  algorithmInterval: null,
};

export default function gridReducer(state = initialState, action: Action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATED_CELL: {
      const newCells = JSON.parse(JSON.stringify(state.cells));
      const { cell } = payload;
      newCells[cell.index] = cell;

      return {
        ...state,
        cells: newCells,
      };
    }

    case SET_CURRENT_CELL: {
      const { cell } = payload;
      return {
        ...state,
        currentCellIndex: cell.index,
      };
    }

    case PUSHED_CELL_TO_STACK: {
      const { cell } = payload;
      const newStack = state.stack;
      newStack.push(cell);
      return {
        ...state,
        stack: newStack,
      };
    }

    case SET_INTERVAL: {
      return {
        ...state,
        algorithmInterval: payload.interval,
      };
    }

    case CLEARED_GRID: {
      return {
        ...state,
        cells: generateDefaultCells(),
        stack: [],
        algorithmInterval: null,
      };
    }

    default:
      return state;
  }
}
