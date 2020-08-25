import React, { useState } from 'react';
import styled from '@emotion/styled';
import renderCell from '../Cell/renderCell';
import { GRID_SIZE, CELL_SIZE } from '../constants';
import { connect, RootStateOrAny } from 'react-redux';
import { doRecursiveBacktracking } from './ducks/actions/recursiveBacktracking/index';
import { Cell } from '../interfaces';
import { doResetGrid } from './ducks/actions';
import { stopAlgorithm } from './ducks/actions/algorithmInterval';
import { ArrowLongRight } from '@styled-icons/entypo/ArrowLongRight';

const select = (state: RootStateOrAny) => ({
  cells: state.grid.cells,
  currentCellIndex: state.grid.currentCellIndex,
});

const actions = {
  recursiveBacktracking: doRecursiveBacktracking,
  resetGrid: doResetGrid,
};

function Grid({
  cells,
  currentCellIndex,
  recursiveBacktracking,
  resetGrid,
}: {
  cells: Cell[];
  currentCellIndex: number;
  recursiveBacktracking: Function;
  resetGrid: Function;
}) {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <>
      <Container size={`${GRID_SIZE}px`}>
        {cells.map((cell: Cell) => {
          return (
            <React.Fragment key={cell.index}>
              {renderCell(cell, currentCellIndex)}
            </React.Fragment>
          );
        })}
      </Container>
      <ButtonWrapper>
        {isRunning ? (
          <DisabledButton>Start</DisabledButton>
        ) : (
          <>
            <ArrowWrapper>
              <TextWrapper>
                <Text>
                  Click to watch an algorithm create a random and unqiue maze!
                </Text>
              </TextWrapper>
              <ArrowLongRight height={50} width={70} size={100} />
            </ArrowWrapper>
            <Button
              color="#f90"
              onClick={() => {
                setIsRunning(true);
                recursiveBacktracking();
              }}
            >
              Start
            </Button>
          </>
        )}
        <Button
          color="purple"
          onClick={() => {
            setIsRunning(false);
            stopAlgorithm();
            resetGrid();
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
  justify-content: center;
`;

const Text = styled.div`
  font-size: 1em;
  font-weight: bold;
  color: white;
`;

const TextWrapper = styled.div`
  display: flex;
  max-width: 150px;
`;

const ArrowWrapper = styled.div`
  display: flex;
  position: absolute;
  left: 18vw;
  align-items: center;
  opacity: 0;

  animation: fadeIn ease 2s;
  animation-delay: 600ms;
  animation-fill-mode: forwards;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const DisabledButton = styled.button`
  margin: 0 70px;
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
  background: #f1f1f1;
  color: ${(props) => props.color};

  transition-duration: 250ms;
  cursor: pointer;

  :active {
    transition: ease-out;
    background-color: ${(props) => props.color};
    color: white;
  }
`;
