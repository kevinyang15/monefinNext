import React, { ReactNode } from 'react';
import styled from 'styled-components';

import CheckImg from './../public/assets/check.svg';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 6px 0;
  
`;

type BoxProps = {
  checked: boolean;
}

const Box = styled.div<BoxProps>`
  margin-right: 10px;
  width: 15px;
  height: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, checked }) => (checked ? theme.colors.primary : theme.colors.basic100)};
  border: 1px solid ${({ theme, checked }) => (checked ? 'transparent' : theme.colors.basic300)};
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 0px 5px #2323233d;
`;

const Check = styled.img`
  width: 8px;
  height: 8px;
`;

const CheckText = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.basic1000};
`;

type CheckboxProps = {
  checked: boolean;
  handleChange: () => void;
  text: ReactNode | string;
}

const Checkbox = ({
  checked, handleChange, text,
}: CheckboxProps) => (
  <Wrapper onClick={handleChange}>
    <Box checked={checked}>
      {checked && <Check src={CheckImg.src} alt="Aceptado" />}
    </Box>
    <CheckText>
      {text}
    </CheckText>
  </Wrapper>
);

export default Checkbox;