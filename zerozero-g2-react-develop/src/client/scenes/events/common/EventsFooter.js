import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import theme from '../../../styles/theme';
import {box} from '../../../styles/mixins';

const Footer = styled.div `
  background: #444;
  border-top: 5px solid ${theme.colors.green};
  padding:40px 20px;
  text-align:center;
  ${box};

  > a{
    text-decoration:none;
    font-size:16px;
    line-height:1.5;
    display:inline-block;
    margin:8px;
    color:${theme.colors.green};
    border-bottom:1px dashed #ccc;
  }

  .tel{
    font-size:12px;
    line-height:1.5;
    color:${theme.colors.blue};

    a{
      color:${theme.colors.blue};
      text-decoration:none;
    }
  }

  .copyright{
    font-size:12px;
    line-height:1.5;
    color:#ccc;
  }

`


class EventsFooter extends Component {
    render() {
        return (
          <Footer>
            <Link to="/">平台首頁</Link>
            <a href="https://www.facebook.com/TWzerozero/">粉絲專頁</a>
            <a href="https://blog.zerozero.com.tw/">妳好你好生活誌</a>
            <br /><br />
            <div className="tel">免費電話：<a href="tel:0800009717">0800-009-717</a></div>
            <div className="copyright">Copyrights 2018 zero zero All rights reserved</div>
          </Footer>
      )
    }
}

export default EventsFooter;
