import React from 'react';
import styled from 'styled-components';

type WrapperProps = {
  backgroundColor: string;
  textColor: string;
  width?: string;
}

const ButtonWrapper = styled.button<WrapperProps>`
  width: ${({ width }) => width || '60%'};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  // color: ${({ textColor }) => textColor};
  color: #232323;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  border: ${({ theme, backgroundColor }) => (backgroundColor === 'transparent' ? `1px solid ${theme.colors.basic400}` : 'none')};
  outline: none;
  border-radius: 15px;
  padding: 20px 0;
  transition: opacity 0.3 ease-out;
  opacity: 1;
  margin: 5px 0;
  box-shadow: 0px 5px 10px #2323233d;

  :hover {
    opacity: 0.9;
    box-shadow: 0px 5px 7px #23232373;
  }

  :focus {
    opacity: 0.9;
    box-shadow: 0px 5px 7px #23232373;
  }

  :disabled {
    opacity: 0.6;
    box-shadow: 0px 5px 10px #2323233d;
  }

  @media (orientation: portrait) and (max-width: 767px) {
    width: 100%;

  }

`;

type ButtonProps = {
  text: string;
  backgroundColor?: string;
  textColor: string;
  onClick?: () => void;
  disabled?: boolean;
  width?: string;
}

const Button = ({
  text, backgroundColor, textColor, onClick, disabled = false, width,
}: ButtonProps) => (
  <ButtonWrapper
    disabled={disabled}
    backgroundColor={backgroundColor || 'transparent'}
    textColor={textColor}
    onClick={onClick}
    width={width}
  >
    {text}
  </ButtonWrapper>
);

export default Button;