import React from 'react';
import styled from 'styled-components';
import Select from '@mui/material/Select';
import { InputBase, MenuItem, SelectChangeEvent } from '@mui/material';

const Wrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 5px 0;

  @media (orientation: portrait) and (max-width: 767px) {
    padding: 1px 0;
    padding-top: 0px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

`;

const Icon = styled.img`
  width: 20px;
  height: auto;
  margin: 0 10px 0 2px;
`;

const StyledSelect = styled(Select)`
  width: 100%;

  :hover {
    border: none;
  }
`;

const Container = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Placeholder = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.basic400};
  outline: none;
  border: none;
  font-family: 'Poppins', 'sans-serif';

  @media (orientation: portrait) and (max-width: 767px) {
    font-size: 14px;
      }
`;

const Text = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.basic1000};
  outline: none;
  border: none;
  font-family: 'Poppins', 'sans-serif';

  @media (orientation: portrait) and (max-width: 767px) {
    font-size: 15px;
    font-weight: 400;
    color: #232323;
      }
`;

const BootstrapInput = styled(InputBase)`
  border-radius: 10px;
  font-size: 14px;
  padding: 16px 16px;
  border: 1px solid #bea9ed;
  font-family: 'Poppins', 'sans-serif';

  &:focus-within {
    border: 2px solid #EC4034;
  }

  :hover {
    border: 1px solid #bea9ed;
  }

  @media (orientation: portrait) and (max-width: 767px) {
    padding: 16px 16px;
  }
`;

export type Option = {
  value: string;
  label: string;
}

type InputSelectProps = {
  options: Option[];
  value: string | undefined;
  handleChange: (event: SelectChangeEvent<any>) => void;
  placeholder: string;
  icon?: string;
  disableClearable?: boolean;
  isSearchable?: boolean;
}

const InputSelect = ({ options, value, handleChange, placeholder, icon }: InputSelectProps) => {
  const Value = (value: any): React.ReactNode => (
    <Container>
      {!!icon && <Icon src={icon} alt="Icon" />}
      {value === '' ? (
        <Placeholder>{placeholder}</Placeholder>
      ) : <Text>{options.find((opt) => opt.value === value)?.label}</Text>}
    </Container>
  );

  return (
    <Wrapper>
      <StyledSelect
        value={value}
        onChange={handleChange}
        style={{ }}
        renderValue={Value}
        displayEmpty
        input={<BootstrapInput />}
      >
        {options.map((opt) => (
          <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
        ))}
      </StyledSelect>
    </Wrapper>
  );
};

export default InputSelect;
