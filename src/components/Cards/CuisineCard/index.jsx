import * as React from 'react';
import { Content, ShadowedCard, ImageContainer } from './styles';
import { Title } from '../styles';

const CuisineCard = ({ card }) => {
  return (
    <ShadowedCard>
      <Content>
        <ImageContainer>
          <img src={card.image} />
        </ImageContainer>
        <Title>{card.title}</Title>
      </Content>
    </ShadowedCard>
  );
};

export default CuisineCard;
