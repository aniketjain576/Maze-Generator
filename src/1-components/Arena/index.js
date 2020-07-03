import React from 'react';
import styled from '@emotion/styled';
import renderCell from '../Cell/renderCell';
import dimensions from '../constants';
import { connect } from 'react-redux';

const select = (state) => ({
  cells: state.arena.cells,
});

function Arena({ cells }) {
  return (
    <Container size={`${dimensions.arena_size}px`}>
      {cells.map((cell) => {
        return <>{renderCell(cell)}</>;
      })}
    </Container>
  );
}

export default connect(select)(Arena);

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 2px solid #000;
  max-width: ${(props) => props.size};
  max-height: ${(props) => props.size};
  margin: 0 auto;
  margin-top: 25vh;
`;
