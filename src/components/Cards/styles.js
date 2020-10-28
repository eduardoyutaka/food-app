import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  height: 115px;
  border-radius: 20px;
  background-color: #f4f4f4;
`;

export const Content = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

export const TextContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  margin-bottom: 5px;
`;

export const Text = styled.p`
  font-size: 0.8em;
  font-size: bold;
  color: #aaa;
`;

export const ImageContainer = styled.div`
  margin-top: -30px;
  margin-right: -20px;
  min-width: 115px;
  height: 115px;
`;

export const Image = styled.img`
`;
