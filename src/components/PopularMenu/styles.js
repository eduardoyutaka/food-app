import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const CardsContainer = styled.div`
  margin-top: 20px;
  width: 335px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  .popular-card:first-child {
    grid-column: 1;
    grid-row: 1 / 3;
  }

  .popular-card:nth-child(2) {
    div {
      background-color: #000;
      border-radius: 20px;
      color: white;
    }
  }
`;
