import React, { Component } from 'react';

import styled from 'styled-components';
import theme from '../../../styles/theme';
import Button from './Button';
import { textShadow } from '../../../styles/mixins';


const WhiteButton = styled(Button)`
	background: #fff;
	color: ${theme.colors.gray};
	border: 1px solid #ddd;
	//font-weight:normal;
	${textShadow("0 0 0 rgba(0,0,0,0)")};
`

export default WhiteButton;