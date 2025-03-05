import React, { Component } from 'react';

import styled from 'styled-components';
import theme from '../../../styles/theme';
import Button from './Button';

const RedButton = styled(Button)`
  background: ${theme.colors.red};
  color: #fff;
  font-weight:500;

  &:hover {
      background: ${theme.colors.red2};
  }
`

export default RedButton;
