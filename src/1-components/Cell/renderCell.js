import React from 'react';
import Cell from './index';

export default function renderCell(cell) {
  return <Cell wallsToShow={cell.walls} visited={cell.visited} />;
}
