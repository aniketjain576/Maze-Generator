import { NormalThunk, Cell, WALL_TYPES } from '../../../../interfaces';
import { doSetCurrentCell } from '..';
import { findNeighbors, removeWallsBetweenCells } from './helpers';
import { CELLS_PER_ROW } from '../../../../constants';
import { doMarkVisited, doAddCellToStack, doSetInterval } from '..';
import generateTimer, { CustomTimer } from './timer';

export function doRecursiveBacktracking(): NormalThunk {
  return (dispatch, getState) => {
    const timer: CustomTimer = generateTimer;

    const backtracking = setInterval(() => {
      timer.start();

      const state = getState();

      const currentCellIndex = state.grid.currentCellIndex;
      const cells: Cell[] = state.grid.cells;
      const stack: Cell[] = state.grid.stack;

      const nextCellIndex = findNeighbors(currentCellIndex, cells);
      if (nextCellIndex) {
        const currentCell = cells[currentCellIndex];
        const nextCell = cells[nextCellIndex];

        dispatch(doAddCellToStack(currentCell));

        dispatch(removeWallsBetweenCells(currentCell, nextCell));

        dispatch(doSetCurrentCell(nextCell));

        dispatch(doMarkVisited(nextCell));
      } else if (stack.length > 0) {
        //
        const currentCell = stack.pop();
        currentCell && dispatch(doSetCurrentCell(currentCell));
      } else {
        clearInterval(backtracking);
      }
      timer.stop();
    }, 1);
    dispatch(doSetInterval(backtracking));
  };
}
