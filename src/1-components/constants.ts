const GRID_SIZE = 400;
const CELL_SIZE = 40;
const TOTAL_NUM_CELLS = Math.pow(GRID_SIZE / CELL_SIZE, 2);
const CELLS_PER_ROW = GRID_SIZE / CELL_SIZE;

const dimensions = {
  GRID_SIZE: GRID_SIZE,
  CELL_SIZE: CELL_SIZE,
  TOTAL_NUM_CELLS: TOTAL_NUM_CELLS,
  CELLS_PER_ROW: CELLS_PER_ROW,
};

export default dimensions;
