import React from 'react';
import styled from '@emotion/styled';
import renderCell from '../Cell/renderCell';
import dimensions from '../constants';

export default function Arena() {
  let cells = getCells();
  return (
    <Container size={dimensions.arena_size}>
      {cells.map((cell) => {
        return <>{renderCell(cell)}</>;
      })}
    </Container>
  );

  function getCells() {
    let w = { top: true, right: true, bottom: true, left: true };
    const cells = [];
    for (var i = 0; i < 100; i++) {
      cells.push(w);
    }
    return cells;
  }
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 2px solid #000;
  max-width: ${(props) => props.size};
  max-height: ${(props) => props.size};
  margin: 0 auto;
  margin-top: 25vh;
`;
