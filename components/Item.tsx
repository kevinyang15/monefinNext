import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 10px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const Text = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.basic2000};
`;

type ItemProps = {
  icon: string;
  text: string;
}

const Item  = ({ icon, text }: ItemProps) => (
  <Wrapper>
      <Icon src={icon} alt={text} />
      <Text>{text}</Text>
  </Wrapper>
);

export default Item;
