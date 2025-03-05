import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

import {awsUrl} from '../../../../utils/awsFile';
import theme from '../../../../styles/theme';
import {bound} from '../../../../styles/commons';
import {transition, borderRadius, box} from '../../../../styles/mixins';

import {CarAppointmentOrderRoute, CarChoiceRoute, UserSummaryRoute} from '../../../../commons/routePaths';

const Container = styled.div `
	width:100%;
	margin:0px auto;
	text-align:center;
	padding-bottom:223px;
    background: url(${awsUrl("car_bg.png")}) repeat-x center bottom -2px;
    background-size: 1440px auto;
    @media (max-width: ${theme.medias.phablet}) {
      background:none;
      padding-bottom:100px;
      padding-top:80px;
    }

	.logo{
		width:163px;
		height:150px;
		background:url(${awsUrl("logo.png")}) no-repeat center center;
		background-size:contain;
		display:inline-block;
		@media (max-width: ${theme.medias.phablet}) {
	      width:107px;
		height:100px;
	    }
	}

	.main{
		font-size:40px;
		line-height:1.5;
		color:${theme.colors.gray};
		letter-spacing:0.125em;
		margin-bottom:20px;
		@media (max-width: ${theme.medias.phablet}) {
	      font-size:24px;
	    }
	}

	.secondary{
		font-size:18px;
		line-height:1.5;
		color:${theme.colors.gray};
		letter-spacing:0.125em;
		margin-bottom:20px;
		@media (max-width: ${theme.medias.phablet}) {
	      font-size:16px;
	    }

		&::after{
			content:"";
			width:20px;
			height:2px;
			background:${theme.colors.gray};
			display:block;
			margin:30px auto 20px;
		}
	}
	ul{
		white-space:nowrap;
		li{
			display:inline-block;
			a{
				display:inline-block;
				font-size:16px;
				padding:0 20px;
				line-height:40px;
				height:40px;
				color:#fff;
				background:${theme.colors.gray};
				${borderRadius("8px")};
				${transition("all", ".3s")};
				text-decoration:none;

				margin:5px;
				&:hover{
					background:${theme.colors.blue};
				}

				@media (max-width: ${theme.medias.phablet}) {
			      font-size:14px;
			      line-height:30px;
					height:30px;
					padding:0 10px;
			    }
			}
		}
	}
`
const Service = styled.div `
	width:100%;
	margin:0px auto;
	text-align:center;
	background:#c0cfd4;
	padding:50px 0 100px;

	.main{
		font-size:40px;
		line-height:1.5;
		color:#fff;
		letter-spacing:0.125em;
		margin-bottom:40px;
		@media (max-width: ${theme.medias.phablet}) {
	      font-size:24px;
	    }
	}

	ul{
		${bound};
		white-space:nowrap;
		overflow:auto;
		li{
			display:inline-block;
			background:${theme.colors.gray};
			${borderRadius("8px")};
			width:260px;
			margin:5px;

			padding:40px 20px;
			${box};

			&::before{
				content:"";
				width:50px;
				height:50px;
				display:block;
				margin:0 auto 20px;
				background:url(${awsUrl("car_reservation.png")}) no-repeat center center;
				background-size:contain;
			}
			&:nth-child(2){
				&::before{
					background:url(${awsUrl("car_quotation.png")}) no-repeat center center;
					background-size:contain;
				}
			}
			&:nth-child(3){
				&::before{
					background:url(${awsUrl("car_inquiry.png")}) no-repeat center center;
					background-size:contain;
				}
			}
			
			h3{
				font-size:18px;
				color:#fff;
				line-height:1.5;
				margin-bottom:5px;
				font-weight:400;
			}
			p{
				font-size:14px;
				color:#fff;
				line-height:1.5;
				&::after{
					content:"";
					width:20px;
					height:2px;
					background:#c0cfd4;
					display:block;
					margin:30px auto 20px;
				}
			}

		}
	}

`
const Process = styled.div `
    width:100%;
    margin:0px auto;
    text-align:center;
    padding:50px 0 100px;
    background:#fff;

    .main{
        font-size:40px;
        line-height:1.5;
        color:${theme.colors.gray};
        letter-spacing:0.125em;
        margin-bottom:20px;
        @media (max-width: ${theme.medias.phablet}) {
          font-size:24px;
        }
    }

    .process{
        width:1000px;
        margin:0 auto;
        height:350px;
        background:url(${awsUrl("car_process.png")}) no-repeat center center;
        background-size:contain;

        @media (max-width: ${theme.medias.phablet}) {
            background:url(${awsUrl("car_process2.png")}) no-repeat center center;
            background-size:contain;
            width:220px;
            height:1300px;
        }
    }
    

`

const Application = styled.div `
  width: 100%;
  position: relative;
  overflow:hidden;
  padding:50px 0;

  background: #f8f8f8;

  >div{
    padding-top:50px;
    ${bound}
    height:450px;
    position:relative;
    z-index:2;
  }
  
  h3{
    width:50%;
    margin-left:50%;
    font-size:40px;
    line-height:1.5;
    color:${theme.colors.green};
    margin-bottom:30px;
    letter-spacing:0.125em;
  }

  p{
    font-size:18px;
    line-height:1.5;
    margin-bottom:10px;
    font-weight:100;
    width:50%;
    margin-left:50%;
    color:${theme.colors.gray};
    padding-left:25px;
    ${box};

    &::before{
        content:"\f00c";
        font-family: FontAwesome;
        margin-right:5px;
        color:${theme.colors.green};
        margin-left:-25px;
    }
  }

  &::after{
    content:"";
    position:absolute;
    top:0;
    left:0;
    width:50%;
    height:100%;
    background: url(${awsUrl("application_car.png")}) no-repeat bottom left 70%;
    background-size: 360px auto;
    z-index:1;
  }
  

  @media (max-width: ${theme.medias.phablet}) {
    padding-bottom:400px;
    >div{
    	
      padding:0;

      height:auto;
      width:80%;
      margin:0 auto;


      h3{
        width:100%;
        margin-left:0;
        font-size:24px;
        text-align:center;
        color:${theme.colors.gray};
        span{
          display:block;
        }
      }

      p{
        width:100%;
        margin-left:0;
      }
    }
    &::after{
      width:100%;
      top:auto;
      bottom:0;
      height:350px;
      background-position: bottom center;
      background-size: auto 100%;
    }
  }
  
`
const Price = styled.div `
    width:100%;
    margin:0px auto 0;
    text-align:center;
    background:#fff;
    padding:50px 0 100px;

    .main{
        font-size:40px;
        line-height:1.5;
        color:${theme.colors.gray};
        letter-spacing:0.125em;
        margin-bottom:40px;
        @media (max-width: ${theme.medias.phablet}) {
          font-size:24px;
        }
    }

    ul{
        ${bound};
        margin-top:60px;

        table{
        	font-size:14px;
        	line-height:1.5;
        	
        	th{
        		background:${theme.colors.green};
        		padding:8px;
        		text-align:left;
        		${box};
        		border:1px solid #ddd;
        		color:#fff;
        		text-align:center;
        		vertical-align:middle;
        	}
        	tr{

        	}
        	td{
        		color:#333;
        		padding:8px;
        		text-align:left;
        		${box};
        		border:1px solid #ddd;

        		&.mode2{
        			background:#f8f8f8;
        			color:#333;
        		}
        	}
        }
        li{
            display:inline-block;
            background:#fff;
            ${borderRadius("8px")};
            width:400px;
            margin:40px;
            padding-bottom:50px;
            position:relative;

            @media (max-width: ${theme.medias.phablet}) {
                width:100%;
                margin:0%;
                padding-bottom:30px;
                margin-bottom:50px;
            }
            
            h3{
                font-size:35px;
                color:#fff;
                line-height:1.8;
                padding:60px 0 40px;
                background:#c0cfd4;
                ${borderRadius("8px 8px 0 0")};
                span{
                    display:block;
                    font-size:18px;
                    line-height:40px;
                    &::before{
                        content:"";
                        width:20px;
                        height:2px;
                        background:#fff;
                        display:block;
                        margin:0px auto 20px;
                    }
                }

                @media (max-width: ${theme.medias.phablet}) {
                    padding:30px 0 20px;
                    span{
                        font-size:14px;
                        line-height:30px;
                    }
                }
            }

            .icon{
                width:100px;
                height:100px;
                ${borderRadius("100%")};
                position:absolute;
                top:-50px;
                left:50%;
                margin-left:-50px;
                color:#fff;
                background:${theme.colors.gray};
                z-index:5;
                &::before{
                	content:"\f1b9";
        			font-family: FontAwesome;
        			line-height:100px;
        			text-align:center;
        			font-size:50px;
                }
            }

            &:last-child{
                .icon{
                   &::before{
                	content:"\f21c";
                	}
                }
            }

            @media (max-width: ${theme.medias.phablet}) {
                .icon{
                    width:60px;
                    height:60px;
                    top:-30px;
                    margin-left:-30px;
                    &::before{
	        			line-height:60px;
	        			font-size:30px;
	                }
                }
                &:last-child{
                    .icon{
                       
                    }
                }
            }
        }
    }

`

const Documents = styled.div `
    width:100%;
    margin:0px auto 0;
    text-align:center;
    background:${theme.colors.gray};
    padding:50px 0 100px;

    .main{
        font-size:40px;
        line-height:1.5;
        color:#fff;
        letter-spacing:0.125em;
        margin-bottom:40px;
        @media (max-width: ${theme.medias.phablet}) {
          font-size:24px;
        }
    }

    p{
    	${bound};
    	font-size:16px;
    	color:#333;
    	text-align:center;
    	line-height:1.5;
    }

  

    table{
    	
    	${bound};
    	font-size:14px;
    	line-height:1.5;
    	background:#fff;
    	
    	th{
    		background:${theme.colors.green};
    		padding:8px;
    		text-align:left;
    		${box};
    		border:1px solid #ddd;
    		color:#fff;
    		text-align:center;
    		vertical-align:middle;
    	}
    	tr{
			&.mode2{
				td{
					background:#f8f8f8;
				}
			}
    	}
    	td{
    		color:#333;
    		padding:8px;
    		text-align:left;
    		${box};
    		border:1px solid #ddd;

    		&.noborder{
    			border:none;
    		}

    		&.check{
    			color:${theme.colors.blue};
    			text-align:center;
    			&::after{
    				content:"\f00c";
        			font-family: FontAwesome;
    			}
    		}
    	}
    }
    

`

class CarLanding extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Container>
                    <div className="logo"/>
                    <div className="main">廢車王。老車的專家</div>
                    <div className="secondary">線上預約 X 線下拖吊 X 完整服務</div>
                    <ul>
                        <li><Link to={{pathname: CarAppointmentOrderRoute()}}>廢車詢價</Link></li>
                        <li><Link to={{pathname: CarChoiceRoute()}}>預約回收</Link></li>
                        <li><Link to={{pathname: UserSummaryRoute('CAR')}}>進度查詢</Link></li>
                    </ul>
                </Container>
                <Service>
                    <div className="main">報廢回收服務說明</div>
                    <ul>
                        <li>
                            <h3>立即預約</h3>
                            <p>
                                全自動的線上系統<br/>
                                立即預約，馬上處理<br/>
                                將您的需求快速列入服務排程
                            </p>
                        </li>
                        <li>
                            <h3>即時報價</h3>
                            <p>
                                汽車報廢、機車報廢<br/>
                                即時線上客服<br/>
                                立即估價
                            </p>
                        </li>
                        <li>
                            <h3>專人諮詢</h3>
                            <p>
                                您的老車行動秘書<br/>
                                擁有十年以上的業界經驗<br/>
                                提供最專業、最即時的服務
                            </p>
                        </li>
                    </ul>
                </Service>
                <Process>
                    <div className="main">報廢車輛步驟說明</div>
                    <div className="process"></div>
                </Process>
                <Application>
                    <div>
                        <h3>獨家特色</h3>
                        <p>全台免費拖吊，合法回收處理</p>
                        <p>免付費專線，隨時有專員值勤</p>
                        <p>線上諮詢，最專業最即時服務</p>
                        <p>
                        	加值服務<br />
                        	● 司機現場拆解車牌<br />
                        	● 代辦部分地區車籍報廢
                        </p>
                    </div>
                </Application>
                <Price>
                	<div className="main">報廢價格行情表</div>
                    <ul>
                        <li>
                        	<div className="icon"/>
                            <h3>汽車</h3>
                            <table>
							  <tr>
							    <th></th>
							    <th>車體回收金</th> 
							    <th>政府獎勵金</th>
							    <th>貨物稅舊換新補助</th>
							  </tr>
							  <tr>
							    <td className="mode2">金額</td>
							    <td>4,500~20,000</td> 
							    <td>1,000</td>
							    <td>50,000</td>
							  </tr>
							  <tr>
							    <td className="mode2">條件</td>
							    <td>
							    	．零件完整含電瓶<br />
							    	．含鋁圈、觸媒轉換器金額
							    </td> 
							    <td>
							    	環保署官網E化申請
							    </td>
							    <td>
							    	．車輛出廠滿6年<br />
							    	．登記名下滿1年<br />
							    	．購買全新的汽車

							    </td>
							  </tr>
							  <tr>
							    <td className="mode2">備註</td>
							    <td>
							    	特殊車款，報價另計<br />
							    	（營業用、大型貨車、高階車款）
							    </td> 
							    <td>
							    	申請成功後收件日起算約3周工作天匯入車主戶頭
							    </td>
							    <td>
							    	聯單開立日前後半年內皆可申請。新舊車主須符合二等親內
							    </td>
							  </tr>
							</table>
                            
                        </li>
                        <li>
                        	<div className="icon"/>
                            <h3>機車</h3>
                            <table>
							  <tr>
							    <th></th>
							    <th>政府獎勵金</th> 
							    <th>二行程機車</th>
							    <th>貨物稅舊換新補助</th>
							  </tr>
							  <tr>
							    <td className="mode2">金額</td>
							    <td>300</td> 
							    <td>500~3,500</td>
							    <td>4,000</td>
							  </tr>
							  <tr>
							    <td className="mode2">條件</td>
							    <td>
							    	環保署官網E化申請
							    </td> 
							    <td>
							    	補助金額依照各地方環保局公布
							    </td>
							    <td>
							    	．車輛出廠滿4年<br />
							    	．登記名下滿1年<br />
							    	．購買全新的機車
							    </td>
							  </tr>
							  <tr>
							    <td className="mode2">備註</td>
							    <td>
							    	申請成功後收件日起算約3周工作天匯入車主戶頭
							    </td> 
							    <td>
		
							    </td>
							    <td>
							    	聯單開立日期前後半年內皆可申請。二等親內皆可辦理
							    </td>
							  </tr>
							</table>
                        </li>
                    </ul>
                </Price>
                <Documents>
                	<div className="main">準備文件</div>
                    <table>
					  <tr>
					    <th>辦理身分</th>
					    <th>準備文件</th>
					    <th>收車現場</th>
					    <th>車牌報廢</th>
					  </tr>
					  <tr>
					    <td className="noborder">車主本人辦理</td>
					    <td>身分證影本</td>
					    <td className="check"></td>
					    <td>&nbsp;</td>
					  </tr>
					  <tr>
					  	<td className="noborder"></td>
					    <td>行照影本或報廢單影本</td>
					    <td className="check"></td>
					    <td>&nbsp;</td>
					  </tr>
					  <tr>
					  	<td className="noborder"></td>
					    <td>身分證、行照、車牌</td>
					    <td>&nbsp;</td>
					    <td className="check"></td>
					  </tr>
					  <tr className="mode2">
					    <td className="noborder">代理人辦理</td>
					    <td>車主身分證影本</td>
					    <td className="check"></td>
					    <td>&nbsp;</td>
					  </tr>
					  <tr className="mode2">
					  	<td className="noborder"></td>
					    <td>行照影本或報廢單影本</td>
					    <td className="check"></td>
					    <td>&nbsp;</td>
					  </tr>
					  <tr className="mode2">
					  	<td className="noborder" ></td>
					    <td>身分證、行照、車牌</td>
					    <td>&nbsp;</td>
					    <td className="check"></td>
					  </tr>
					  <tr>
					    <td className="noborder">公司法人辦理</td>
					    <td>代辦人身分證</td>
					    <td className="check"></td>
					    <td className="check"></td>
					  </tr>
					  <tr>
					  	<td className="noborder"></td>
					    <td>行照影本或報廢單影本</td>
					    <td className="check"></td>
					    <td>&nbsp;</td>
					  </tr>
					  <tr>
					  	<td className="noborder"></td>
					    <td>營登影本或核准設立函</td>
					    <td className="check"></td>
					    <td className="check"></td>
					  </tr>
					  <tr>
					  	<td className="noborder"></td>
					    <td>變更登記表、最新會計401表</td>
					    <td className="check"></td>
					    <td className="check"></td>
					  </tr>
					  <tr>
					  	<td className="noborder"></td>
					    <td>行照、車牌、公司大小章</td>
					    <td>&nbsp;</td>
					    <td className="check"></td>
					  </tr>
					  <tr className="mode2">
					    <td className="noborder">車主往生親人辦理</td>
					    <td>行照影本或報廢單影本</td>
					    <td className="check"></td>
					    <td>&nbsp;</td>
					  </tr>
					  <tr className="mode2">
					  	<td className="noborder"></td>
					    <td>車主死亡證明影本或除戶證明影本</td>
					    <td className="check"></td>
					    <td className="check"></td>
					  </tr>
					  <tr className="mode2">
					  	<td className="noborder"></td>
					    <td>行照、車牌、繼承人身分證及印章</td>
					    <td>&nbsp;</td>
					    <td className="check"></td>
					  </tr>
					</table>
					<br />
            		<p>※ 「報廢單」為在監理站報廢車牌並繳回行照後，所取得「車輛異動單」稱之。</p>
                </Documents>
            </div>);
    }
}

export default CarLanding;
