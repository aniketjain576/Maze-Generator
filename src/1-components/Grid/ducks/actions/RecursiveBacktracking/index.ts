import { doUpdateCell } from '../../../../Cell/ducks/actions';
import { NormalThunk, Cell } from '../../../../interfaces';
import { doSetCurrentCell } from '../actions';

export function doRecursiveBacktracking(): NormalThunk {
  return (dispatch, getState) => {
    let cells = getState().grid.cells;
    let cell: Cell = getCellByIndex(cells, 0);

    let walls = cell.walls;
    let index = 5;
    let visited = false;
    walls = {
      top: false,
      right: false,
      bottom: false,
      left: false,
    };
    cell.index = 5;
    cell.walls = walls;
    cell.visited = true;
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
    dispatch(doUpdateCell(cell, 5));
    dispatch(doSetCurrentCell(5));
    dispatch(doSetCurrentCell(6));
    let count = 0;
    const hello = setInterval(() => {
      if (count < 100) {
        dispatch(doSetCurrentCell(count++));
      } else {
        clearInterval(hello);
      }
    }, 200);

    function getCellByIndex(cells: Cell[], index: number) {
      return JSON.parse(JSON.stringify(cells[index]));
    }
  };
}
