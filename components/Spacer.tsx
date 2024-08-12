import React from 'react';
import styled from 'styled-components';

type SpacerProps = {
  size: number;
  direction?: 'vertical' | 'horizontal';
};

const Wrapper = styled.div<SpacerProps>`
  height: ${({ size, direction }) => direction === 'vertical' ? size : 0}px;
  width: ${({ size, direction }) => direction === 'horizontal' ? size : 0}px;
`;

const Spacer = ({ size, direction = 'vertical' }: SpacerProps) => <Wrapper size={size} direction={direction} />;

export default Spacer;
