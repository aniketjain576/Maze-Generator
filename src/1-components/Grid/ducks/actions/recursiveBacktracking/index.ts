import { NormalThunk, Cell, WALL_TYPES } from '../../../../interfaces';
import {
  findNeighbors,
  removeWallsBetweenCells,
  markNextCellVisited,
} from './helpers';
import { CELLS_PER_ROW } from '../../../../constants';
import generateTimer, { CustomTimer } from './timer';
import { MOVED_TO_NEXT_CELL, MOVED_TO_PREVIOUS_CELL } from '../../types';
import { startAlgorithm } from '../algorithmInterval';

export function doRecursiveBacktracking(): NormalThunk {
  return (dispatch, getState) => {
    const backtracking = setInterval(() => {
      const state = getState();
      const currentCellIndex = state.grid.currentCellIndex;
      const cells: Cell[] = state.grid.cells;
      const stack: Cell[] = state.grid.stack;

      const nextCellIndex = findNeighbors(currentCellIndex, cells);
      if (nextCellIndex) {
        dispatch(moveToNextCell(nextCellIndex));
      } else if (stack.length > 0) {
        dispatch(moveToPreviousCell());
      } else {
        clearInterval(backtracking);
      }
    }, 30);

    startAlgorithm(backtracking);
  };
}

function moveToNextCell(nextCellIndex: number): NormalThunk {
  return (dispatch, getState) => {
    const state = getState();
    const currentCellIndex = state.grid.currentCellIndex;
    const cells: Cell[] = state.grid.cells;
    const stack: Cell[] = state.grid.stack;
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
  };
}

function moveToPreviousCell(): NormalThunk {
  return (dispatch, getState) => {
    const stack = getState().grid.stack;
    const previousCell: Cell = stack.slice(-1)[0];
    dispatch({
      type: MOVED_TO_PREVIOUS_CELL,
      payload: {
        stack: stack.slice(0, stack.length - 1),
        currentCellIndex: previousCell.index,
      },
    });
  };
}
