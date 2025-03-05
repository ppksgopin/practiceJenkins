import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import theme from '../../../../styles/theme';
import { translate, transition, borderRadius, box, clearfix,opacity} from '../../../../styles/mixins';
import CoverImage from '../../../common/components/CoverImage';





const Container = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index:999;
  background:rgba(0,0,0,.5);
  display: -webkit-flex;
  display:         flex;
  -webkit-align-items: center;
          align-items: center;
  -webkit-justify-content: center;
          justify-content: center;

  >div{
    width:90%;
    max-height:90%;
    overflow:auto;
    max-width:450px;
    background:#fff;
    border:1px solid #ddd;
    ${borderRadius("8px")};

    h3{
        height:60px;
        line-height:60px;
        text-align:center;
        background:#f8f8f8;
        font-size:18px;
        color:${theme.colors.gray};
        border-bottom:1px solid #ddd;
        position:relative;

        span{
            position:absolute;
            top:0;
            right:0;
            width:60px;
            height:60px;
            line-height:60px;
            cursor:pointer;
            font-size:24px;
            &::before{
                font-family: FontAwesome;
                content:"\f00d"; 
            }

        }

        &::before{
            font-family: FontAwesome;
            content:"\f044"; 
            margin-right:10px;
        }
    }

    .user{
        text-align:center;
        margin-bottom:30px;
        .thumb{
            display:inline-block;
            width:45px;
            height:45px;
            background:#eee;
            ${borderRadius("100%")};
            margin:0 20px 0 10px;
            overflow:hidden;
        }

        .name{
            display:inline-block;
            font-size:18px;
            color:#000;
            line-height:45px;
        }
    }

    >div{
        padding:40px 20px;
        ${box};
    }
  }

  .submit{
    font-size:16px;
    color:#fff;
    width:150px;
    text-align:center;
    margin:30px auto 0;
    line-height:50px;
    height:50px;
    background:${theme.colors.blue};
    cursor:pointer;
    ${borderRadius("8px")};

    &:hover{
        background:${theme.colors.blue2};
    }
  }
  
`

const Textarea = styled.textarea`
    font-size:14px;
    text-align:left;
    line-height:1.5;
    width:100%;
    color:#000;
    margin:0 auto;
    height:100px;
    ${borderRadius('5px')};
`

const Stars = styled.div`
    text-align:center;
    direction: rtl;
    margin:0 auto 30px;

    &:hover{
        > div{
            &.active,&.active ~ div{
                &::after{
                    content:"\f006";
                    color:${theme.colors.gray};
                }
            }
        }
    }

    >div{
        display:inline-block;
        width:40px;
        height:40px;
        font-size:40px;
        line-height:40px;
        text-align:center;
        padding:5px;
        cursor:pointer;

        &::after{
            content:"\f006";
            font-family: FontAwesome;
            
            color:${theme.colors.gray};
        }

        &.active,&.active ~ div{
            &::after{
                content:"\f005";
                color:${theme.colors.blue};
            }
        }
        &:hover,&:hover ~ div{
            &::after{
                content:"\f005" !important;
                color:${theme.colors.blue} !important;
            }
        }
    }
`


export default class Review extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            content:''
        };
        this._onClick = this._onClick.bind(this);
    }


    componentDidMount() {
        
    }

    componentWillMount() {
        
    }

    _onClick(score) {
        this.setState({
            "score": score,
        });
    }

    _onChange(e) {
        console.log('value ', e.currentTarget.value) ;
        this.setState({
            "content" : e.currentTarget.value
        })
    }

    onSubmit() {
        const { submitRecycleUnitComment, recycleUnit} = this.props;
        if(this.state.score ===0 && this.state.content ==='') {
            alert('請點星星並留下評論');
        }else{
            submitRecycleUnitComment(recycleUnit.id, this.state.score, this.state.content) ;
        }
    }

    render() {
        const {closeReviewModal, reviewModal , submitRecycleUnitComment, recycleUnit} = this.props;
        return (
            <Container>
                <div>
                    <h3>點星星並留下評論<span onClick={closeReviewModal}></span></h3>
                    <div>
                        <div className="user">
                            <div className="thumb"><CoverImage src="https://unsplash.it/400/400/?random&v=1"/></div>
                            <div className="name">{recycleUnit.name}</div>
                        </div>
                        <Stars>
                            <div onClick={(e) => this._onClick(5)} className={this.state.score==5?"active":""}></div>
                            <div onClick={(e) => this._onClick(4)} className={this.state.score==4?"active":""}></div>
                            <div onClick={(e) => this._onClick(3)} className={this.state.score==3?"active":""}></div>
                            <div onClick={(e) => this._onClick(2)} className={this.state.score==2?"active":""}></div>
                            <div onClick={(e) => this._onClick(1)} className={this.state.score==1?"active":""}></div>
                        </Stars>
                        <Textarea onChange={(e) => this._onChange(e)}></Textarea>
                        <div className="submit" onClick={() => this.onSubmit()}>送出</div>
                    </div>
                </div>
            </Container>
            
        )
    }
}