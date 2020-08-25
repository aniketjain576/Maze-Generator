import React from 'react';
import styled from '@emotion/styled';
import { CELL_SIZE } from '../constants';
import { Walls } from '../interfaces';

const Cell = ({
  wallsToShow,
  visited,
  index,
  currentCellIndex,
}: {
  wallsToShow: Walls;
  visited: boolean;
  index: number;
  currentCellIndex: number;
}) => {
  return (
    <CellWrapper
      size={`${CELL_SIZE}px`}
      walls={wallsToShow}
      visited={visited}
      isCurrentCell={currentCellIndex === index}
    />
  );
};

export default Cell;

const CellWrapper = styled.div<{
  size: string;
  walls: Walls;
  visited: boolean;
  isCurrentCell: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  border-top: 2px solid ${({ walls }) => (walls.TOP ? '#000' : '#f90')};
  border-right: 2px solid ${({ walls }) => (walls.RIGHT ? '#000' : '#f90')};
  border-bottom: 2px solid ${({ walls }) => (walls.BOTTOM ? '#000' : '#f90')};
  border-left: 2px solid ${({ walls }) => (walls.LEFT ? '#000' : '#f90')};
  background: ${(props) => (props.visited ? '#f90' : 'transparent')};
  ${(props) => (props.isCurrentCell ? 'background: rgb(161, 38, 255)' : null)}
`;
