import { doMarkVisited } from '../../../../Cell/ducks/actions';
import { NormalThunk, Cell } from '../../../../interfaces';
import { doSetCurrentCell } from '../actions';
import { CELLS_PER_ROW } from '../../../../constants';
import { findNeighbors } from './helpers';

export function doRecursiveBacktracking(): NormalThunk {
  return (dispatch, getState) => {
    setInterval(() => {
      const currentCellIndex = getState().currentCell.currentCellIndex;
      const cells: Cell[] = getState().grid.cells;

      const next = findNeighbors(currentCellIndex, cells);
      if (next) {
        dispatch(doMarkVisited(next));
        dispatch(doSetCurrentCell(next));
      } else {
        //backtracking will go here
        clearInterval();
      }
    }, 80);

    // const currentCellIndex = getState().currentCell.currentCellIndex;
    // const cells: Cell[] = getState().grid.cells;

    // findNeighbors(currentCellIndex, cells);
  };
}
