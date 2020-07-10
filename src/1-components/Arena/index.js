import React from 'react';
import styled from '@emotion/styled';
import renderCell from '../Cell/renderCell';
import dimensions from '../constants';
import { connect } from 'react-redux';
import { doRecursiveBacktracking } from './ducks/actions/RecursiveBacktracking/index';

const select = (state) => ({
  cells: state.arena.cells,
});

const actions = {
  recursiveBacktracking: doRecursiveBacktracking,
};

function Arena({ cells, recursiveBacktracking }) {
  return (
    <>
      <Container size={`${dimensions.arena_size}px`}>
        {cells.map((cell) => {
          return <>{renderCell(cell)}</>;
        })}
      </Container>
      <Button onClick={recursiveBacktracking}>Start</Button>
    </>
  );
}

export default connect(select, actions)(Arena);

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 2px solid #000;
  max-width: ${(props) => props.size};
  max-height: ${(props) => props.size};
  margin: 0 auto;
  margin-top: 25vh;
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
