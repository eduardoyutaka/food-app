import * as React from 'react';
import { Card, Content, ImageContainer, Title, Text, Score } from './styles';

const PopularCard = ({ card }) => {
  return (
    <Card className="card">
      <Content>
        <Title>{card.title}</Title>
        <Text>{card.text}</Text>
        <Score>✦ {card.score}</Score>
        <ImageContainer>
          <img src={card.image} alt="food" />
        </ImageContainer>
      </Content>
    </Card>
  );
};

export default PopularCard;
