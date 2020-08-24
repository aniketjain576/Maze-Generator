import { NormalThunk, Cell, WALL_TYPES } from '../../../../interfaces';
import { doSetCurrentCell } from '..';
import { findNeighbors, removeWallsBetweenCells } from './helpers';
import { CELLS_PER_ROW } from '../../../../constants';
import { doMarkVisited, doAddCellToStack, doSetInterval } from '..';

export function doRecursiveBacktracking(): NormalThunk {
  return (dispatch, getState) => {
    const backtracking = setInterval(() => {
      const currentCellIndex = getState().grid.currentCellIndex;
      const cells: Cell[] = getState().grid.cells;
      const stack: Cell[] = getState().grid.stack;

      const nextCellIndex = findNeighbors(currentCellIndex, cells);
      if (nextCellIndex) {
        const currentCell = cells[currentCellIndex];
        const nextCell = cells[nextCellIndex];
        dispatch(doAddCellToStack(currentCell));
        dispatch(removeWallsBetweenCells(currentCell, nextCell));
        dispatch(doSetCurrentCell(nextCell));
        dispatch(doMarkVisited(nextCell));
      } else if (stack.length > 0) {
        const currentCell = stack.pop();
        currentCell && dispatch(doSetCurrentCell(currentCell));
      } else {
        clearInterval(backtracking);
      }
    }, 0);
    dispatch(doSetInterval(backtracking));
  };
}
