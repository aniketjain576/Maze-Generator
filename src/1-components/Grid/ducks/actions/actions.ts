import { SET_CURRENT_CELL } from '../types';
import { Cell, NormalThunk, Action } from '../../../interfaces';

// export function doSetCurrentCellTest(index: number): NormalThunk {
//   return (dispatch, getState) => {
//     const currentCell = getState().grid.cells.find(
//       (cell: Cell) => cell.index === index
//     );
//     currentCell.visited = true;
//     console.log(currentCell);
//     console.log(getState());
//   };

//   // return {
//   //   type: SET_CURRENT_CELL,
//   //   payload: {
//   //     index: index,
//   //   },
//   // };
// }

export function doSetCurrentCell(index: number): Action {
  return {
    type: SET_CURRENT_CELL,
    payload: {
      index: index,
    },
  };
}
