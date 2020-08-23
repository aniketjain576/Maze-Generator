import { doMarkVisited, doUpdateWalls } from '../../../../Cell/ducks/actions';
import { NormalThunk, Cell, WALL_TYPES } from '../../../../interfaces';
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
        dispatch(doMarkVisited(cells[nextCellIndex]));
        //remove wall between cuurentCellIndex and nextCellIndex
        dispatch(
          removeWallsBetweenCells(cells[currentCellIndex], cells[nextCellIndex])
        );
        dispatch(doSetCurrentCell(cells[nextCellIndex]));
      } else {
        //backtracking will go here
        clearInterval();
      }
    }, 80);

    function removeWallsBetweenCells(
      currentCell: Cell,
      nextCell: Cell
    ): NormalThunk {
      return (dispatch, getState) => {
        const currentCellIndex = currentCell.index;
        const nextCellIndex = nextCell.index;

        if (currentCellIndex - nextCellIndex === -1) {
          //remove right wall of current
          dispatch(removeWall(currentCell, WALL_TYPES.RIGHT));
          //remove left wall of next
          dispatch(removeWall(nextCell, WALL_TYPES.LEFT));
        }
        if (currentCellIndex - nextCellIndex === 1) {
          //remove left wall of current
          dispatch(removeWall(currentCell, WALL_TYPES.LEFT));
          //remove rigth wall of next
          dispatch(removeWall(nextCell, WALL_TYPES.RIGHT));
        }
        if (currentCellIndex - nextCellIndex === CELLS_PER_ROW) {
          //remove top wall of current
          dispatch(removeWall(currentCell, WALL_TYPES.TOP));
          //remove bottom wall of next
          dispatch(removeWall(nextCell, WALL_TYPES.BOTTOM));
        }
        if (currentCellIndex - nextCellIndex === -1 * CELLS_PER_ROW) {
          //remove bottom wall of current
          dispatch(removeWall(currentCell, WALL_TYPES.BOTTOM));
          //remove top wall of next
          dispatch(removeWall(nextCell, WALL_TYPES.TOP));
        }
      };
    }

    function removeWall(cell: Cell, wallToRemove: WALL_TYPES): NormalThunk {
      return (dispatch, getState) => {
        const walls = { ...cell.walls };
        walls[wallToRemove] = false;
        dispatch(doUpdateWalls(cell, walls));
      };
    }

    // const currentCellIndex = getState().currentCell.currentCellIndex;
    // const cells: Cell[] = getState().grid.cells;

    // findNeighbors(currentCellIndex, cells);
  };
}
