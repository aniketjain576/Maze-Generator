import { doUpdateCell } from '../../../../Cell/ducks/actions';

export function doRecursiveBacktracking() {
  return (dispatch, getState) => {
    let cells = getState().arena.cells;
    console.log(cells);
    let j = 0;
    let cell = cells[0];
    cell.walls = {
      top: false,
      right: false,
      bottom: false,
      left: false,
    };
    dispatch(doUpdateCell(cell, j));
  };
}
