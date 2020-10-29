import * as React from 'react';
import cards from './data';
import { Container, CardsContainer, Column } from './styles';
import { PopularCard } from '../Cards';

const CuisinesMenu = () => {
  return (
    <Container>
      <h2>Popular</h2>

      <CardsContainer>
        {cards.map((card, index) =>
          <div className="popular-card">
            <PopularCard className="popular-card" card={card} key={index} />
          </div>
        )}
      </CardsContainer>
    </Container>
  );
};

export default CuisinesMenu;
