const arena_size = 400;
const cell_size = 40;
const num_cells = Math.pow(arena_size / cell_size, 2);
const cells_per_row = arena_size / cell_size;

const dimensions = {
  arena_size,
  cell_size,
  num_cells,
  cells_per_row,
};

export default dimensions;
