import React, { Component } from 'react';

import styled from 'styled-components';
import theme from '../../../styles/theme';
import { borderRadius,transition ,rotate,box} from '../../../styles/mixins';

const Container = styled.div`
    border:1px solid #ddd;
    padding:0;
    margin-bottom:20px;
    ${box};

    &.active{
        .question{
            &::after{
                ${rotate('135deg')};
            }
        }
        .ans{
            max-height:500px;
            padding:10px 15px;
            border-top:1px solid #eee;
            ${transition('all, .5s')};
        }
    }

    &.simple{
        border:none;
    }

    .question{
        font-size:14px;
        color:#333;
        line-height:20px;
        padding:10px 15px;
        cursor:pointer;

        &::before{
            content:"\f05a";
            font-family: FontAwesome;
            margin-right:5px;
        }

        &::after{
            content:"\f067";
            font-family: FontAwesome;
            margin-right:5px;
            float:right;
            color:#ddd;
            ${transition('all, .5s')};
        }
    }

    .ans{
        border-top:0px solid #eee;
        font-size:14px;
        color:#333;
        line-height:20px;
        padding:0px 15px;
        overflow:hidden;
        max-height:0;

        a{
            color:${theme.colors.blue};
            text-decoration:none;
        }
    }
`

export default class QNA extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this._openMe = this._openMe.bind(this);
    }


    componentDidMount() {
        
    }

    componentWillMount() {
        
    }

    _openMe(e) {
        this.setState({
            "open":!this.state.open,
        })
    }
    render() {
        const { q,ans,classname } = this.props;
        return (
            <Container className={this.state.open? "active "+classname:classname}>
                <div className="question" onClick={(e) => this._openMe(e)}>
                    {q || ""}
                </div>
                <div className="ans">
                    Z幣可兌換多項好禮，加入會員後，就可以使用會員帳號累積Z幣免費兌換多樣超值商品。 <br />
                    <a href="/exchange">Z幣可兌換什麼？</a>
                </div>
            </Container>
        )
    }
}