import React from 'react';
import styled from '@emotion/styled';
import renderCell from '../Cell/renderCell';

export default function Arena() {
  let cells = getCells();
  return (
    <Container>
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
  max-width: 400px;
  max-height: 400px;
  margin: 0 auto;
  margin-top: 25vh;
`;
