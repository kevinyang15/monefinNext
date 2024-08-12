import React from 'react';
import styled from 'styled-components';
import { Autocomplete, TextField } from '@mui/material';

const Wrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 5px;

  @media (orientation: portrait) and (max-width: 767px) {
    padding: 1px 0;
    padding-top: 0px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

`;

// const Icon = styled.img`
//   width: 20px;
//   height: auto;
//   margin: 0 10px 0 2px;
// `;

const StyledTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#bea9ed',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#bea9ed',
  },
  '& .MuiInputBase-input': {
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: 15,
    color: '#3d3d3d',
    height: '30px',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: 10,
      borderColor: '#bea9ed',
    },
    '&:hover fieldset': {
      borderColor: '#bea9ed',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#EC4034',
      outline: 'none',
      borderWidth: 2,
    },
  },

  '@media (orientation: portrait) and (max-width: 767px)': {
    '& .MuiInputBase-input': {
      fontSize: 14,
    },
  },


});

export type Option = {
  value: string;
  label: string;
}

type InputSelectProps = {
  options: Option[];
  value: Option | undefined;
  handleChange: (event: React.SyntheticEvent<Element, Event>, value: Option | null) => void;
  placeholder: string;
  icon?: string;
  disableClearable?: boolean;
}

const InputSelect = ({ options, handleChange, placeholder, icon, disableClearable = false }: InputSelectProps) => (
  <Wrapper>
    <Autocomplete
      disablePortal
      options={options}
      sx={{ width: '100%' }}
      disableClearable={disableClearable}
      onChange={handleChange}
      renderInput={(params) => (
        <StyledTextField {...params} placeholder={placeholder} />
      )}
    />
  </Wrapper>
);

export default InputSelect;
