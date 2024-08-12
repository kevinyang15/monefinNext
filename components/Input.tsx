import React from 'react';
import styled from 'styled-components';

const OuterWrapper = styled.div`
  margin: 2px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

type WrapperProps = {
  hasError: boolean;
};

const Wrapper = styled.div<WrapperProps>`
  position: relative; /* Para posicionar el texto */
  width: 60%;
  padding: 16px 0;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid ${({ theme, hasError }) => (hasError ? '#EC4034' : theme.colors.background)};

  @media (orientation: portrait) and (max-width: 767px) {
    padding: 12px 0;
    padding-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  &:focus-within {
    border-color: ${({ theme, hasError }) => (hasError ? '#FF814E' : '#FF814E')};
    border-width: 2px;
  }
`;

const Icon = styled.img`
  width: 20px;
  height: auto;
  margin: 0 8px 0 16px;
`;

type TextInputProps = {
  hasIcon?: boolean;
}

const TextInput = styled.input<TextInputProps>`
  font-size: 17px;
  line-height: 32px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.basic1000};
  outline: none;
  border: none;
  flex: 1;
  font-family: 'Poppins', 'sans-serif';
  margin: 0 16px 0 ${({ hasIcon }) => hasIcon ? '0' : '25px'};
  position: relative; /* Para posicionar el texto */
  padding-top: 0px; /* Ajusta según el tamaño del texto */

  ::placeholder {
    color: ${({ theme }) => theme.colors.basic400};
  }

  @media (orientation: portrait) and (max-width: 767px) {
    width: 100%;
  }

  @media (orientation: portrait) and (max-width: 400px) {
    font-size: 14px;
    font-weight: 500;
      }
`;

const FloatingText = styled.span`
  position: absolute;
  top: 5px; /* Ajusta según el tamaño del texto */
  left: 16px; /* Ajusta según el tamaño del texto */
  font-size: 10px; /* Tamaño del texto */
  font-family: 'poppins', 'sans-serif';
  font-weight: 500;
  color: ${({ theme }) => theme.colors.basic400}; /* Color del texto */
  // color: #232323;
`;

const Error = styled.span`
  font-size: 14px;
  line-height: 18px;
  font-weight: 300;
  color: #EC4034;
  font-family: 'Poppins', 'sans-serif';
  margin-top: 5px;
  width: 100%;
  text-align: right;
`;

type InputProps = {
  label: string;
  label2: string;
  value: string;
  handleChange: (value: string) => void;
  icon?: string;
  pattern?: string;
  type?: string;
  error?: string;
}

const Input = ({ label, label2, value, handleChange, icon, pattern, type = 'text', error }: InputProps) => {
  const onChange = (e: any) => {
    e.preventDefault();
    handleChange(e.target.value);
  };

  return (
    <OuterWrapper>
      <Wrapper hasError={!!error}>
        {!!icon && <Icon src={icon} alt="Icono" />}
        <TextInput
          hasIcon={!!icon}
          type={type}
          pattern={pattern}
          placeholder={label}
          value={value}
          onChange={onChange}
        />
        <FloatingText>{label2}</FloatingText> {/* Texto flotante */}
      </Wrapper>
      {!!error && <Error>{error}</Error>}
    </OuterWrapper>
  )
};

export default Input;