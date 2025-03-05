import React, { Component } from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';

import {awsUrl} from '../../../../utils/awsFile';
import styled from 'styled-components';
import theme from '../../../../styles/theme';
import {bound,appointmentForm,buttons} from '../../../../styles/commons';
import {boxShadow, transition, borderRadius, box, clearfix} from '../../../../styles/mixins';
import DivButton from '../../../common/components/DivButton';

import * as actions from '../action';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

import queryString from 'query-string';


const GreenButton = styled(DivButton)`
  background: ${theme.colors.green};
  color: #fff;

  &:hover {
      background: ${theme.colors.green2};
  }

  -webkit-flex: none;
  flex: none;
  width: auto !important;
  padding:0 20px;
  margin-left: 9px;
  line-height:40px;
  height:40px;
`
const Buttons = styled.div`
	margin-top:20px;
	text-align:right;
	a{
		display:inline-block;
		font-size:15px;
		color:#fff;
		font-size:16px;
		font-weight:500;
		background:${theme.colors.blue};
		${borderRadius("8px")};
		padding:0px 25px;
		line-height:40px;
		height:40px;
		text-decoration:none;
		margin:5px;
		cursor:pointer;

		&.red{
			background:${theme.colors.red};
		}
		&.white{
			background:#fff;
			color:${theme.colors.gray};
		}
		&.green{
			background:${theme.colors.green};
		}
	}

	@media (max-width: ${theme.medias.phablet}) {
		text-align:center;
	}
`
const Container = styled.div`
	background:${theme.colors.gray};
	padding:15px 0;
	
	.complete{
		text-align:center;

		.receipt{
			font-size:18px;
			color:${theme.colors.black};
			font-weight:500;
			line-height:1.5;
			margin-bottom:20px;
		}
		p{
			font-size:16px;
			color:#333;
			line-height:1.5;
		}

		.check{
	        width:80px;
	        height:80px;
	        border:2px solid ${theme.colors.black};
	        line-height:80px;
	        text-align:center;
	        color:${theme.colors.black};
	        font-size:40px;
	        ${box};
	        ${borderRadius("100%")};
	        margin:20px auto;
	        letter-spacing:0;
	        position:relative;
	        animation-name: jump;
	        animation-duration: 2s;
	        animation-iteration-count: infinite;
	        &::before{
	            content:"\f00c";
	            position:relative;
	            font-family: FontAwesome;
	        }
	              
	        @keyframes jump {
	            0% {
	                top: 0px;
	            }

	            70% {
	                top: 0px;
	            }

	            85%{
	                top:-10px;
	            }

	            97% {
	                top: 2px;
	            }

	            100% {
	                top: 0px;
	            }
	        }

	    }
	}

	form{
		${bound};
		background:#fff;
		${borderRadius("8px")};
		overflow:hidden;

		input{
			height:40px !important;
			line-height:40px !important;
		}

		select{
			height:40px !important;
			line-height:40px !important;
		}
		label{
			line-height:38px;
		}
	}

	.step{
		display: -webkit-flex;
  		display: flex;
  		align-items:stretch;

  		@media (max-width: ${theme.medias.phablet}) {
			display: block;
			padding:0;
		}

		&.step1{
			>div.pageImage{
				background:url(${awsUrl("epFormStep1_sludge.jpg")}) no-repeat center center;
				background-size:cover;
			}
		}
		&.step2{
			>div.pageImage{
				background:url(${awsUrl("epFormStep2.jpg")}) no-repeat center center;
				background-size:cover;
			}
		}
		&.step3{
			>div.pageImage{
				background:url(${awsUrl("epFormStep3.jpg")}) no-repeat center center;
				background-size:cover;
			}
		}
		&.step4{
			>div.pageImage{
				background:url(${awsUrl("epFormStep4.jpg")}) no-repeat center center;
				background-size:cover;
			}
		}
		&.step5{
			>div.pageImage{
				background:url(${awsUrl("epFormStep5.jpg")}) no-repeat center center;
				background-size:cover;
			}
		}

		>div{
			${appointmentForm};
			margin:0 !important;
			width:55%;
			padding:50px;
			${box};
			@media (max-width: ${theme.medias.phablet}) {
				width:100%;
				padding:30px;
				margin-right:0 !important;
			}

			&.pageImage{
				padding:0px 0;
				width:45%;
				position:relative;
				background:#ddd;
				margin-right:0 !important;

				
				@media (max-width: ${theme.medias.phablet}) {
					width:100%;
					height:250px;
				}
			}

			h3{
				position:absolute;
				font-size:36px;
				line-height:1.3;
				color:#fff;
				width:100%;
				left:0;
				bottom:0px;
				font-weight:500;
				background: rgba(0,0,0,.6);
		        background: -webkit-linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.8)); 
		        background: -o-linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.8)); 
		        background: -moz-linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.8)); 
		        background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.8));
		        ${box};
		        padding:20px;
		        padding-top:50px;
		        @media (max-width: ${theme.medias.phablet}) {
					font-size:24px;
				}
			}
		}

		&::after{
			${clearfix};
		}

	}

	
`;

class ReservationForm extends Component {
    constructor(props) {
        super(props);
        this.toPage = this.toPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.signUpNextTime = this.signUpNextTime.bind(this);
        this.joinLineButton = this.joinLineButton.bind(this);
        this.toSignUp = this.toSignUp.bind(this);
        this.toFormTop = this.toFormTop.bind(this);
        this.state = {
            page: 1
        };
    }

    toFormTop(){
    	const tesNode = ReactDOM.findDOMNode(this.refs.theform);
    	window.scrollTo(0, tesNode.offsetTop-50);
    }

    toPage(page) {
    	this.setState({page});
    	this.toFormTop();
	}

    nextPage() {
        this.setState({ page: this.state.page + 1 });
        this.toFormTop();
    }

    previousPage() {
        this.setState({ page: this.state.page - 1 });
        this.toFormTop();
    }

	signUpNextTime() {
        this.setState({ page: 4 });
        this.toFormTop();
	}

	joinLineButton() {
        gtag('event','conversion',{'send_to':'AW-851066983/d2MsCJmL1YcBEOeA6ZUD'});
    }

    toSignUp() {
        gtag('event','conversion',{'send_to':'AW-851066983/DtDxCOjlvYcBEOeA6ZUD'});
    }

    componentDidMount() {
        this.props.loadCounties();
        this.props.loadItems();
        this.props.loadPackTypes();
    }

    submit(values) {
        const value= queryString.parse(this.props.location.search);
        values = values.set('gtag', (value && value.gtag) || "");
        values = values.set('sourceId' , (value && value.sourceId) || "");

        new Promise((resolve, reject) => {
    		resolve(this.props.submitForm(values));
		})
			.then((response) => {
                this.nextPage();
            })
			.catch((e) => console.log(e));
	}

    render() {
        const { page } = this.state;
        return (
			<Container ref="theform">
				{page === 1 && <Step1 onSubmit={this.nextPage}/>}
                {page === 2 && <Step2 onSubmit={this.submit.bind(this)} previousPage={this.previousPage} />}
                {page === 3 && <Step3 signUpNextTime={this.signUpNextTime} toSignUp={this.toSignUp}/>}
				{page === 4 && <Step4 joinLineButton={this.joinLineButton}/>}
			</Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        counties: state.enterprise.woodClearance.get("COUNTIES"),
        townships: state.enterprise.woodClearance.get("TOWNSHIPS"),
    }
}

export default connect(mapStateToProps, actions)(ReservationForm);