import * as React from 'react';
import { Container } from './styles';
import { DiscountCard } from '../Cards';
import card from './data';

const DiscountBanner = () => {
  return (
    <Container>
      <DiscountCard card={card} />
    </Container>
  );
};

export default DiscountBanner;
