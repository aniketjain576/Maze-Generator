import { UPDATED_CELL } from './types';
import { Cell, NormalThunk } from '../../interfaces';

export function doMarkVisited(index: number): NormalThunk {
  return (dispatch, getState) => {
    const cells: Cell[] = getState().grid.cells;
    const visitedCell: Cell = JSON.parse(JSON.stringify(cells[index]));
    visitedCell.visited = true;
    dispatch(doUpdateCell(visitedCell, index));
  };
}

function doUpdateCell(cell: Cell, index: number) {
  return {
    type: UPDATED_CELL,
    payload: {
      cell: cell,
      index: index,
    },
  };
}
