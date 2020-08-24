import React, { useState } from 'react';
import styled from '@emotion/styled';
import renderCell from '../Cell/renderCell';
import { GRID_SIZE } from '../constants';
import { connect, RootStateOrAny } from 'react-redux';
import { doRecursiveBacktracking } from './ducks/actions/RecursiveBacktracking/index';
import { Cell } from '../interfaces';
import { doResetGrid } from './ducks/actions';

const select = (state: RootStateOrAny) => ({
  grid: state.grid,
});

const actions = {
  recursiveBacktracking: doRecursiveBacktracking,
  resetGrid: doResetGrid,
};

function Grid({
  grid,
  recursiveBacktracking,
  resetGrid,
}: {
  grid: any;
  recursiveBacktracking: Function;
  resetGrid: Function;
}) {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <>
      <Container size={`${GRID_SIZE}px`}>
        {grid.cells.map((cell: Cell) => {
          return (
            <React.Fragment key={cell.index}>{renderCell(cell)}</React.Fragment>
          );
        })}
      </Container>
      <ButtonWrapper>
        {isRunning ? (
          <DisabledButton>Start</DisabledButton>
        ) : (
          <Button
            color="#f90"
            onClick={() => {
              setIsRunning(true);
              recursiveBacktracking();
            }}
          >
            Start
          </Button>
        )}
        <Button
          color="purple"
          onClick={() => {
            setIsRunning(false);
            clearInterval(grid.algorithmInterval);
            resetGrid(grid.cells[0]);
          }}
        >
          Reset
        </Button>
      </ButtonWrapper>
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
  margin-top: 10vh;
`;

const ButtonWrapper = styled.div`
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 30vw;
  justify-content: space-between;
`;

const DisabledButton = styled.button`
  box-sizing: border-box;
  border: 2px solid black;
  height: 50px;
  width: 120px;
  font-size: 1.5em;
  background: #777;
  color: #a8a8a8;
  font-weight: bold;
  border-radius: 40px;
  letter-spacing: 3px;
  outline: none;
`;

const Button = styled(DisabledButton)<{ color: string }>`
  border: 2px solid black;
  background: white;
  color: ${(props) => props.color};

  transition-duration: 250ms;
  cursor: pointer;

  :active {
    transition: ease-out;
    background-color: ${(props) => props.color};
    color: white;
  }
`;
