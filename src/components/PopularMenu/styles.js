import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const CardsContainer = styled.div`
  margin: 20px 0;
  width: 335px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  .popular-card:first-child {
    grid-column: 1;
    grid-row: 1 / 3;

    div {
      img {
        width: 150px;
        position: relative;
        top: 50px;
        right: 60px;
      }
    }
  }

  .popular-card:nth-child(2) {
    .card {
      background-color: #000;
      border-radius: 20px;
      color: white;
    }
  }
`;
