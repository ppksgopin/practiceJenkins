import React, { Component } from 'react';

import styled from 'styled-components';
import theme from '../../../styles/theme';
import Button from './Button';

const GreenButton = styled(Button)`
  background: ${theme.colors.green};
  color: #fff;
  font-weight:500;

  &:hover {
      background: ${theme.colors.green2};
  }
`

export default GreenButton;
