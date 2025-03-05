import React, {Component} from 'react';
import shortid from 'shortid';
import styled, {css} from 'styled-components';
import {awsUrl} from '../../../../../utils/awsFile';

import theme from '../../../../../styles/theme';
import {boxShadow, transition, borderRadius, box, clearfix,opacity} from '../../../../../styles/mixins';
import Slider from 'react-slick';
import CoverImage from '../../../../common/components/CoverImage';


const Container = styled.div `
    width:100%;
    background:#fff;
    margin:0 auto 20px;
    position:relative;
    overflow:hidden;
    padding:20px 40px 40px;
    ${box};

    .slider{
        width:100%;
        height: 172px;
        .slick-slide{
            text-align:center;
            >a{
                display:block;
                text-align:center;
                text-decoration:none;
                .thumb{
                    width:95px;
                    height:95px;
                    background:#f8f8f8;
                    overflow:hidden;
                    ${borderRadius('100%')};
                    margin:0 auto 20px;
                }

                p{
                    font-size:16px;
                    text-align:center;
                    line-height:1.2;
                    color:#999;
                }
            }
        }
        

        .slick-arrow{
            width:30px;
            height:30px;

            &::before{
                font-size:30px;
                color:#ccc;
                font-family:"fontawesome";
            }
            &.slick-prev{
                left:-30px;
                z-index:10;
                &::before{
                    content:"\f053";
                }
            }
            &.slick-next{
                right:-30px;
                z-index:10;
                &::before{
                    content:"\f054";

                }
            }
        }
        
        .slick-list{
            height: 172px;
        }
    }


    @media (max-width: ${theme.medias.phablet}) {
        padding:20px 20px 30px;
        .slider{

            .slick-slide{
                >a{
                    
                    .thumb{
                        width:60px;
                        height:60px;
                        margin-bottom:10px;
                    }

                    p{
                        font-size:13px;
                    }
                }
            }
            .slick-arrow{

                &::before{
                    font-size:20px;
                }
                &.slick-prev{
                    left:-20px;
                }
                &.slick-next{
                    right:-20px;
                }
            }
        }
    }
`


class BrandSlider extends Component {

    render() {
        const { items } = this.props ;

        const settings = {
            className: 'slider',
            arrows: true,
            lazyLoad: false,
            infinite: false,
            adaptiveHeight: false,
              speed: 500,
              slidesToShow: 6,
              slidesToScroll: 6,
              initialSlide: 0,
              responsive: [
                {
                  breakpoint: 1000,
                  settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                  }
                },
                {
                  breakpoint: 700,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                  }
                },
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                  }
                },
                {
                  breakpoint: 340,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  }
                },
                
              ]
        };
        return(
            <Container>
                <Slider {...settings} >
                    {
                        items && items.map((item) => {
                            return (
                                <div key={shortid.generate()}>
                                    <a href={`/exchange/quickSearch/${item.id}`}>
                                        <div className="thumb"><CoverImage src={item.imageUrl}/></div>
                                        <p>{item.name}</p>
                                    </a>
                                </div>
                            )
                        })
                    }
                </Slider>
            </Container>
        )
    }

}


export default BrandSlider;