import * as React from 'react';
import cards from './data';
import { Container, CardsContainer } from './styles';
import { CuisineCard } from '../Cards';

const CuisinesMenu = () => {
  return (
    <Container>
      <h2>Cuisine</h2>

      <CardsContainer>
        {cards.map((card, index) =>
          <CuisineCard card={card} key={index} />
        )}
      </CardsContainer>
    </Container>
  );
};

export default CuisinesMenu;
