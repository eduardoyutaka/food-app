import * as React from 'react';
import { Card, TextContainer, Title, Text, ImageContainer, Image, Content } from './styles';

export const DiscountCard = ({ card }) => {
  return (
    <Card>
      <Content>
        <TextContainer>
          <Title>{card.title}</Title>
          <Text>{card.expirationText}</Text>
        </TextContainer>
        <ImageContainer>
          <Image src={card.image}></Image>
        </ImageContainer>
      </Content>
    </Card>
  );
};
