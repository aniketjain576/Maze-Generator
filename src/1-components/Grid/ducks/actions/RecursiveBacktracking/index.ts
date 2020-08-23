import { doMarkVisited } from '../../../../Cell/ducks/actions';
import { NormalThunk, Cell } from '../../../../interfaces';
import { doSetCurrentCell } from '../actions';
import { findNeighbors } from './helpers';
import { CELLS_PER_ROW } from '../../../../constants';

export function doRecursiveBacktracking(): NormalThunk {
  return (dispatch, getState) => {
    setInterval(() => {
      const currentCellIndex = getState().currentCell.currentCellIndex;
      const cells: Cell[] = getState().grid.cells;

      const nextCellIndex = findNeighbors(currentCellIndex, cells);
      if (nextCellIndex) {
        dispatch(doMarkVisited(nextCellIndex));
        //remove wall between cuurentCellIndex and nextCellIndex
        //removeWalls(currentCellIndex, nextCellIndex);
        dispatch(doSetCurrentCell(nextCellIndex));
      } else {
        //backtracking will go here
        clearInterval();
      }
    }, 80);

    function removeWalls(currentCell: number, nextCell: number) {
      if (currentCell - nextCell === -1) {
        //remove right wall of current
        //remove left wall of next
      }
      if (currentCell - nextCell === 1) {
        //remove left wall of current
        //remove rigth wall of next
      }
      if (currentCell - nextCell === CELLS_PER_ROW) {
        //remove top wall of current
        //remove bottom wall of next
      }
      if (currentCell - nextCell === -1 * CELLS_PER_ROW) {
        //remove bottom wall of current
        //remove top wall of next
      }
    }

    // const currentCellIndex = getState().currentCell.currentCellIndex;
    // const cells: Cell[] = getState().grid.cells;

    // findNeighbors(currentCellIndex, cells);
  };
}
