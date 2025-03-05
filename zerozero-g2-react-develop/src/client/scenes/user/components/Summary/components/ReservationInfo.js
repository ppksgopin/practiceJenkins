import React, { Component } from 'react';

import styled from 'styled-components';
import theme from '../../../../../styles/theme';
import { borderRadius,box } from '../../../../../styles/mixins';

const Container = styled.div`
    background:#fff;

  

  >div{
    width: 100%;
    padding:30px 20px;
    max-width:800px;
    margin:0 auto;
    position:relative;
    border-bottom:5px solid ${theme.colors.red};
    ${box};

    .id{
      font-size:16px;
      line-height:1.5;
      color:${theme.colors.gray};

      span{
        display:block;
        font-size:36px;
        color:${theme.colors.red};
      }
    }

    .status{
      position:absolute;
        top:25px;
        right:10px;
        font-size:14px;
        color:#fff;
        background:${theme.colors.red};
        line-height:30px;
        padding:0 15px;
        ${borderRadius("8px")};
    }
    .date{
      margin-top:10px;
      font-size:14px;
      line-height:1.5;
      color:${theme.colors.green};

      &::before{
        content:"\f274";
        font-family:Fontawesome;
        margin-right:5px;
      }
    }
  }

  &.done{
    >div{
      border-bottom:5px solid ${theme.colors.green};
      .id{
        span{
          color:${theme.colors.green};
        }
        }
      }
      .status{
        background:${theme.colors.green};
      }
    }
  }

  &.enterprise{
    >div{
      border-bottom:5px solid ${theme.colors.green};
      .id{
        span{
          color:#333;
        }
        }
      }
      .status{
        background:${theme.colors.green};
      }
    }
  }
`

export default class ReservationInfo extends Component  {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        
    }

    componentWillMount() {
        
    }

    render() {
        const { reservationID, status,classname,date } = this.props;
        return (
            <Container className={classname}>
                <div>
                    <div className="id">{classname=="enterprise"?"訂單編號":"預約單號"} <span>{reservationID}</span></div>
                    <div className="status">{status}</div>
                    {date? <div className="date">{date}</div>:"" }
                </div>
            </Container>
        )
    }
}