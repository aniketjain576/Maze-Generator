import React from 'react';
import styled from '@emotion/styled';
import dimensions from '../constants';

const Cell = ({ wallsToShow, visited }) => {
  return <CellWrapper size={`${dimensions.cell_size}px`} walls={wallsToShow} />;
};

export default Cell;

const CellWrapper = styled.div`
  box-sizing: border-box;
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  border-top: 2px solid ${(props) => (props.walls.top ? '#000' : '#fff')};
  border-right: 2px solid ${(props) => (props.walls.right ? '#000' : '#fff')};
  border-bottom: 2px solid ${(props) => (props.walls.bottom ? '#000' : '#fff')};
  border-left: 2px solid ${(props) => (props.walls.left ? '#000' : '#fff')};
`;
