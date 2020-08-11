import { SET_CURRENT_CELL } from './types';
import { Action } from '../../interfaces';

const initialState: { currentCellIndex: number } = {
  currentCellIndex: 0,
};

export default function currentCellReducer(
  state = initialState,
  action: Action
) {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_CELL: {
      return {
        ...state,
        currentCellIndex: payload.index,
      };
    }
    default:
      return state;
  }
}
