import { UPDATED_CELL } from './types';
import dimensions from '../../constants';
import { Cell, Action } from '../../interfaces';

const initialState: { cells: Cell[] } = {
  cells: getInitState(),
};

export default function cellReducer(state = initialState, action: Action) {
  //payload should have new cell
  const { type, payload } = action;
  switch (type) {
    case UPDATED_CELL: {
      const new_cells = state.cells;
      let { index, cell } = payload;
      new_cells[index] = cell ? cell : new_cells[index];
      console.log(new_cells);

      return {
        ...state,
        cells: new_cells,
      };
    }
    default:
      return state;
  }
}

function getInitState(): Cell[] {
  //each cell is stored as an object describing which walls are visible
  //and whether the cell has been visited
  //initially all cells are visible and unvisited
  const cell = {
    walls: {
      top: true,
      right: true,
      bottom: true,
      left: true,
    },
    visited: false,
  };

  const { TOTAL_NUM_CELLS } = dimensions;

  let cells = [];

  for (var i = 0; i < TOTAL_NUM_CELLS; i++) {
    cells.push(cell);
  }
  let index = -1;
  cells = cells.map((cell) => {
    index++;
    return {
      ...cell,
      index: index,
    };
  });

  return cells;
}
