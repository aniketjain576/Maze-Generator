import React from 'react';
import Cell from './index';
import { Walls, Cell as CellType } from '../interfaces';

export default function renderCell(cell: CellType, currentCellIndex: number) {
  return (
    <Cell
      wallsToShow={cell.walls}
      visited={cell.visited}
      index={cell.index}
      currentCellIndex={currentCellIndex}
    />
  );
}
