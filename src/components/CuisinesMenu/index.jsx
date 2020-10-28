import * as React from 'react';
import cards from './data';
import { Container } from './styles';
import { CuisineCard } from '../Cards';

const CuisinesMenu = () => {
  console.log(cards);
  return (
    <Container>
      <h2>Cuisine</h2>
      {cards.map(card =>
        <CuisineCard card={card} />
      )}
    </Container>
  );
};

export default CuisinesMenu;
