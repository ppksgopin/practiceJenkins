import React, { Component } from 'react';

import styled from 'styled-components';
import theme from '../../../styles/theme';
import Button from './Button';
import { textShadow } from '../../../styles/mixins';

const SocialConnectButton = styled(Button)`
  background: #fff;
  color: ${theme.colors.gray};
  font-weight:500;
  width: 100%;
  border:1px solid ${theme.colors.gray};
  max-width:350px;
  ${textShadow("0px 0px 0px rgba(0,0,0,0)")};

  &.active {
    color: #fff;
    background: ${theme.colors.green};
    border-color:${theme.colors.green};
    ${textShadow("1px 1px 2px rgba(0,0,0,.3)")};
  }
`

export default SocialConnectButton;
