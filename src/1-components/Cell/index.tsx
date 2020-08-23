import React from 'react';
import styled from '@emotion/styled';
import { CELL_SIZE } from '../constants';
import { Walls } from '../interfaces';
import { RootStateOrAny, connect } from 'react-redux';

const select = (state: RootStateOrAny) => ({
  currentCell: state.cell.currentCellIndex,
});

const Cell = ({
  wallsToShow,
  visited,
  index,
  currentCell,
}: {
  wallsToShow: Walls;
  visited: boolean;
  index: number;
  currentCell: number;
}) => {
  return (
    <CellWrapper
      size={`${CELL_SIZE}px`}
      walls={wallsToShow}
      visited={visited}
      isCurrentCell={currentCell === index}
    >
      {index}
    </CellWrapper>
  );
};

export default connect(select)(Cell);

const CellWrapper = styled.div<{
  size: string;
  walls: Walls;
  visited: boolean;
  isCurrentCell: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  color: #f90;
  font-size: 1.3em;

  box-sizing: border-box;
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  border-top: 2px solid ${({ walls }) => (walls.TOP ? '#000' : '#f90')};
  border-right: 2px solid ${({ walls }) => (walls.RIGHT ? '#000' : '#f90')};
  border-bottom: 2px solid ${({ walls }) => (walls.BOTTOM ? '#000' : '#f90')};
  border-left: 2px solid ${({ walls }) => (walls.LEFT ? '#000' : '#f90')};
  background: ${(props) => (props.visited ? '#f90' : 'transparent')};
  ${(props) => (props.isCurrentCell ? 'background: blue' : null)}
`;
