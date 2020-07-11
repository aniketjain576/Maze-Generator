import React from 'react';
import Cell from './index';
import { Walls, Cell as CellType } from '../interfaces';

export default function renderCell(cell: CellType, current: boolean) {
  return (
    <Cell
      wallsToShow={cell.walls}
      visited={cell.visited}
      currentCell={current}
    />
  );
}
