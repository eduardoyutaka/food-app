import * as React from 'react';
import { Card, TextContainer, Title, Text, ImageContainer, Content } from './styles';

const DiscountCard = ({ card }) => {
  return (
    <Card>
      <Content>
        <TextContainer>
          <Title>{card.title}</Title>
          <Text>{card.expirationText}</Text>
        </TextContainer>
        <ImageContainer>
          <img src={card.image} alt="food" />
        </ImageContainer>
      </Content>
    </Card>
  );
};

export default DiscountCard;
