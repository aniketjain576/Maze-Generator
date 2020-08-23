import { NormalThunk, Cell, WALL_TYPES } from '../../../../interfaces';
import { doSetCurrentCell } from '../../../../Cell/ducks/actions';
import { findNeighbors, removeWallsBetweenCells } from './helpers';
import { CELLS_PER_ROW } from '../../../../constants';
import { doMarkVisited } from '..';

export function doRecursiveBacktracking(): NormalThunk {
  return (dispatch, getState) => {
    setInterval(() => {
      const currentCellIndex = getState().cell.currentCellIndex;
      const cells: Cell[] = getState().grid.cells;

      const nextCellIndex = findNeighbors(currentCellIndex, cells);
      if (nextCellIndex) {
        const currentCell = cells[currentCellIndex];
        const nextCell = cells[nextCellIndex];

        dispatch(doMarkVisited(nextCell));
        //remove wall between cuurentCellIndex and nextCellIndex
        dispatch(removeWallsBetweenCells(currentCell, nextCell));
        dispatch(doSetCurrentCell(nextCell));
      } else {
        //backtracking will go here
        clearInterval();
      }
    }, 80);
  };

  // const currentCellIndex = getState().currentCell.currentCellIndex;
  // const cells: Cell[] = getState().grid.cells;

  // findNeighbors(currentCellIndex, cells);
}
