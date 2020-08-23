import { SET_CURRENT_CELL } from './types';
import { Action } from '../../interfaces';

const initialState: { currentCellIndex: number } = {
  currentCellIndex: 0,
};

export default function cellReducer(state = initialState, action: Action) {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_CELL: {
      const { cell } = payload;
      return {
        ...state,
        currentCellIndex: cell.index,
      };
    }
    default:
      return state;
  }
}
