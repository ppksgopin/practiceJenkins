import React, { Component } from 'react';

import styled from 'styled-components';
import theme from '../../../styles/theme';
import Button from './Button';

const BlueButton = styled(Button)`
  background: ${theme.colors.blue};
  color: #fff;
  font-weight:500;

  &:hover {
      background: ${theme.colors.blue2};
  }
  
  &:disabled {
      background: ${theme.colors.gray};
      cursor: default;
  {
`

export default BlueButton;
