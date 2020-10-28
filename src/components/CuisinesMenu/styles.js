import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const CardsContainer = styled.div`
  display: flex;
  overflow: auto;
  padding: 20px 0;

  div:first-child {
    margin-left: 0;
  }
`;
