import { doMarkVisited } from '../../../../Cell/ducks/actions';
import { NormalThunk, Cell } from '../../../../interfaces';
import { doSetCurrentCell } from '../actions';
import { TOTAL_NUM_CELLS, CELLS_PER_ROW } from '../../../../constants';
import { isValidIndex } from './helpers';

export function doRecursiveBacktracking(): NormalThunk {
  return (dispatch, getState) => {
    const state = getState();
    const cells = state.grid.cells;
    let cell: Cell = getCellByIndex(0);

    let walls = cell.walls;
    let index = 5;
    let visited = false;
    walls = {
      top: false,
      right: false,
      bottom: false,
      left: false,
    };
    cell.index = 5;
    cell.walls = walls;
    cell.visited = true;

    const currentCellIndex = state.currentCell.currentCellIndex;
    console.log(findNeighbors(currentCellIndex));
    // cell.walls = {
    //   top: false,
    //   right: false,
    //   bottom: false,
    //   left: false,
    // };
    // cell.index = 5;

    const c: Cell = {
      walls: walls,
      visited: visited,
      index: index,
    };
    // for (let i = 0; i < 5; i++) {
    //   dispatch(doUpdateCell(c, i));
    // }
    dispatch(doMarkVisited(5));
    //dispatch(doSetCurrentCell(5));
    //dispatch(doSetCurrentCell(6));

    function getCellByIndex(index: number) {
      return JSON.parse(JSON.stringify(cells[index]));
    }
  };
}

function findNeighbors(currentCellIndex: number): number {
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
      neighbors.push(neighborIndex);
    }
  });
  return neighbors[Math.floor(Math.random() * neighbors.length)];
}
