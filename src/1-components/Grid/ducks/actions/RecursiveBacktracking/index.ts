import { NormalThunk, Cell, WALL_TYPES } from '../../../../interfaces';
import { doSetCurrentCell } from '../../../../Cell/ducks/actions';
import { findNeighbors, removeWallsBetweenCells } from './helpers';
import { CELLS_PER_ROW } from '../../../../constants';
import { doMarkVisited, doAddCellToStack } from '..';

export function doRecursiveBacktracking(): NormalThunk {
  return (dispatch, getState) => {
    setInterval(() => {
      const currentCellIndex = getState().cell.currentCellIndex;
      const cells: Cell[] = getState().grid.cells;
      const stack: Cell[] = getState().grid.stack;

      const nextCellIndex = findNeighbors(currentCellIndex, cells);
      if (nextCellIndex) {
        const currentCell = cells[currentCellIndex];
        const nextCell = cells[nextCellIndex];
        dispatch(doAddCellToStack(currentCell));
        dispatch(doMarkVisited(nextCell));
        dispatch(removeWallsBetweenCells(currentCell, nextCell));
        dispatch(doSetCurrentCell(nextCell));
      } else if (stack.length > 0) {
        const currentCell = stack.pop();
        currentCell && dispatch(doSetCurrentCell(currentCell));
      } else {
        clearInterval();
      }
    });
  };

  // const currentCellIndex = getState().currentCell.currentCellIndex;
  // const cells: Cell[] = getState().grid.cells;

  // findNeighbors(currentCellIndex, cells);
}
