import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
  border-radius: 20px;
`;

export const Title = styled.h3`
  width: 100%;
  margin-bottom: 5px;
`;

export const Text = styled.p`
  width: 100%;
  margin-bottom: 5px;
`;

export const Score = styled.p`
  font-weight: bold;
  width: 100%;
`;

export const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 80px;
  position: relative;
  left: 50px;
`;
