import styled from 'styled-components';
import { Card } from '../styles';

export const ShadowedCard = styled(Card)`
  background-color: #fff;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.2);
  width: 115px;
  margin: 0 10px;
`;

export const Content = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 60px;
`;
