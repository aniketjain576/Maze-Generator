import { NormalThunk, Cell, WALL_TYPES } from '../../../../interfaces';
import {
  findNeighbors,
  removeWallsBetweenCells,
  markNextCellVisited,
} from './helpers';
import { CELLS_PER_ROW } from '../../../../constants';
import { doSetInterval } from '..';
import generateTimer, { CustomTimer } from './timer';
import { MOVED_TO_NEXT_CELL, MOVED_TO_PREVIOUS_CELL } from '../../types';

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
        const newCells = JSON.parse(JSON.stringify(cells));
        const currentCell = newCells[currentCellIndex];
        const nextCell = newCells[nextCellIndex];
        const newStack = [...stack, currentCell];

        removeWallsBetweenCells(currentCell, nextCell);

        markNextCellVisited(nextCell);

        dispatch({
          type: MOVED_TO_NEXT_CELL,
          payload: {
            cells: newCells,
            stack: newStack,
            currentCellIndex: nextCellIndex,
          },
        });
      } else if (stack.length > 0) {
        const previousCell: Cell = stack.slice(-1)[0];
        dispatch({
          type: MOVED_TO_PREVIOUS_CELL,
          payload: {
            stack: stack.slice(0, stack.length - 1),
            currentCellIndex: previousCell.index,
          },
        });
      } else {
        clearInterval(backtracking);
      }
      timer.stop();
    }, 0);
    dispatch(doSetInterval(backtracking));
  };
}
