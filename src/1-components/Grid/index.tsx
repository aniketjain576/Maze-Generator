import React from 'react';
import styled from '@emotion/styled';
import renderCell from '../Cell/renderCell';
import { GRID_SIZE } from '../constants';
import { connect, RootStateOrAny } from 'react-redux';
import { doRecursiveBacktracking } from './ducks/actions/RecursiveBacktracking/index';
import { Cell } from '../interfaces';

const select = (state: RootStateOrAny) => ({
  grid: state.grid,
});

const actions = {
  recursiveBacktracking: doRecursiveBacktracking,
};

function Grid({
  grid,
  recursiveBacktracking,
}: {
  grid: any;
  recursiveBacktracking: () => void;
}) {
  return (
    <>
      <Container size={`${GRID_SIZE}px`}>
        {grid.cells.map((cell: Cell) => {
          return <>{renderCell(cell)}</>;
        })}
      </Container>
      <Button onClick={recursiveBacktracking}>Start</Button>
    </>
  );
}

export default connect(select, actions)(Grid);

const Container = styled.div<{ size: string }>`
  display: flex;
  flex-wrap: wrap;
  border: 2px solid #000;
  max-width: ${(props) => props.size};
  max-height: ${(props) => props.size};
  margin: 0 auto;
  margin-top: 20vh;
`;

const Button = styled.button`
  box-sizing: border-box;
  border: 2px solid purple;
  display: block;
  margin: 0 auto;
  height: 50px;
  width: 120px;
  font-size: 1.5em;
  margin-top: 50px;
  background: white;
  color: purple;
  font-weight: bold;
  border-radius: 40px;
  letter-spacing: 3px;
  outline: none;
  transition-duration: 300ms;
  cursor: pointer;

  :active {
    transition: ease-out;
    background-color: purple;
    color: white;
  }
`;
