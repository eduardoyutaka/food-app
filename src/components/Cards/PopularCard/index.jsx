import * as React from 'react';
import { Card, Content, ImageContainer } from './styles';
import { Title } from '../styles';

const PopularCard = ({ card }) => {
  return (
    <Card>
      <Content>
        <ImageContainer>
          <img src={card.image} alt="food" />
        </ImageContainer>
        <Title>{card.title}</Title>
      </Content>
    </Card>
  );
};

export default PopularCard;
