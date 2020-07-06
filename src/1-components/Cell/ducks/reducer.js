import { UPDATED_CELL } from './types';
import dimensions from '../../constants';

const initialState = {
  cells: getInitState(),
};

export default function arenaReducer(state = initialState, action) {
  //payload should have new array of cells
  const { type, payload } = action;
  switch (type) {
    case UPDATED_CELL: {
      const new_cells = state.cells;
      new_cells[payload.index] = payload.cell;
      return {
        ...state,
        cells: new_cells,
      };
    }
    default:
      return state;
  }
}

function getInitState() {
  //each cell is stored as an object describing which walls are visible
  //and whether it's been visited
  //initially all cells are visible
  const cell = {
    walls: {
      top: true,
      right: true,
      bottom: true,
      left: true,
    },
    visited: false,
  };

  const { num_cells } = dimensions;

  const cells = [];

  for (var i = 0; i < num_cells; i++) {
    cells.push(cell);
  }
  return cells;
}
