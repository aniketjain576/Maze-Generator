import React from 'react';
import styled from '@emotion/styled';
import dimensions from '../constants';
import { Walls } from '../interfaces';
import { RootStateOrAny, connect } from 'react-redux';

const select = (state: RootStateOrAny) => ({
  currentCell: state.currentCell.currentCellIndex,
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
      size={`${dimensions.CELL_SIZE}px`}
      walls={wallsToShow}
      visited={visited}
      isCurrentCell={currentCell === index}
    />
  );
};

export default connect(select)(Cell);

const CellWrapper = styled.div<{
  size: string;
  walls: Walls;
  visited: boolean;
  isCurrentCell: boolean;
}>`
  box-sizing: border-box;
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  border-top: 2px solid ${(props) => (props.walls.top ? '#000' : '#fff')};
  border-right: 2px solid ${(props) => (props.walls.right ? '#000' : '#fff')};
  border-bottom: 2px solid ${(props) => (props.walls.bottom ? '#000' : '#fff')};
  border-left: 2px solid ${(props) => (props.walls.left ? '#000' : '#fff')};
  background: ${(props) => (props.visited ? 'green' : 'transparent')};
  ${(props) => (props.isCurrentCell ? 'background: blue' : null)}
`;