import { doMarkVisited } from '../../../../Cell/ducks/actions';
import { NormalThunk, Cell } from '../../../../interfaces';
import { doSetCurrentCell } from '../actions';
import { CELLS_PER_ROW } from '../../../../constants';
import { isValidIndex } from './helpers';

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

    function findNeighbors(currentCellIndex: number, cells: Cell[]): number {
      const neighbors: number[] = [];

      const potentialNeighbors: number[] = [];
      //top cell index
      potentialNeighbors.push(currentCellIndex - CELLS_PER_ROW);
      //right cell index
      potentialNeighbors.push(currentCellIndex + 1);
      //bottom cell index
      potentialNeighbors.push(currentCellIndex - 1);
      //left cell index
      potentialNeighbors.push(currentCellIndex + CELLS_PER_ROW);

      potentialNeighbors.map((neighborIndex) => {
        if (isValidIndex(currentCellIndex, neighborIndex)) {
          if (!cells[neighborIndex].visited) {
            neighbors.push(neighborIndex);
          }
        }
      });

      return neighbors[Math.floor(Math.random() * neighbors.length)];
    }
  };
}
