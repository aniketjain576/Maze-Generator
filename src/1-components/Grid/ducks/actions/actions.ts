import { SET_CURRENT_CELL } from '../types';
import { Cell, NormalThunk } from '../../../interfaces';

export function doSetCurrentCell(index: number): NormalThunk {
  return (dispatch, getState) => {
    const currentCell = getState().grid.cells.find(
      (cell: Cell) => cell.index === index
    );
    currentCell.visited = true;
    console.log(currentCell);
    console.log(getState());
  };

  // return {
  //   type: SET_CURRENT_CELL,
  //   payload: {
  //     index: index,
  //   },
  // };
}
