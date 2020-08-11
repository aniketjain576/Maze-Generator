import { doUpdateCell } from '../../../../Cell/ducks/actions';
import { NormalThunk, Cell } from '../../../../interfaces';
import { doSetCurrentCell } from '../actions';

export function doRecursiveBacktracking(): NormalThunk {
  return (dispatch, getState) => {
    let cells = getState().grid.cells;
    let cell: Cell = cells[0];
    let walls = cell.walls;
    let index = 5;
    let visited = false;
    walls = {
      top: false,
      right: false,
      bottom: false,
      left: false,
    };
    // cell.walls = {
    //   top: false,
    //   right: false,
    //   bottom: false,
    //   left: false,
    // };
    // cell.index = 5;

    const c: Cell = {
      walls: walls,
      visited: visited,
      index: index,
    };
    // for (let i = 0; i < 5; i++) {
    //   dispatch(doUpdateCell(c, i));
    // }
    dispatch(doUpdateCell(c, 5));
    dispatch(doSetCurrentCell(3));
  };
}
